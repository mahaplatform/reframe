import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Resumable from 'resumablejs'
import Preview from './preview'
import Jimp from 'jimp/browser/lib/jimp.min'

class FileField extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array
    ]),
    disabled: PropTypes.bool,
    endpoint: PropTypes.string,
    files: PropTypes.array,
    multiple: PropTypes.bool,
    prompt: PropTypes.string,
    status: PropTypes.string,
    token: PropTypes.string,
    onAddFile: PropTypes.func,
    onChange: PropTypes.func,
    onChangeFile: PropTypes.func,
    onLoadFiles: PropTypes.func,
    onUploadBegin: PropTypes.func,
    onUploadComplete: PropTypes.func,
    onUploadProgress: PropTypes.func,
    onUploadProcess: PropTypes.func,
    onUploadSuccess: PropTypes.func,
    onUploadFailure: PropTypes.func,
    onBusy: PropTypes.func,
    onReady: PropTypes.func,
    onRemoveFile: PropTypes.func,
    onSetReady: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    disabled: false,
    multiple: false,
    prompt: 'Choose File(s)',
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      preview: null
    }
  }

  render() {
    const { files, multiple, prompt, status } = this.props
    const { preview } = this.state
    let classes = ['filefield', status]
    return (
      <div className={classes.join(' ')}>
        { files.map((file, index) => {
          return (
            <div key={`filefield_${index}`} className="reframe-filefield-token">
              <div className="reframe-filefield-details">
                { _.includes(['added'], file.status) &&
                  <div className="ui small progress" />
                }
                { file.status === 'uploading' &&
                  <div className="reframe-filefield-progress">
                    { preview && <Preview file={ file } preview={ preview } /> }
                    <div className="ui green progress">
                      <div className="bar" style={{ width: `${file.progress}%`}}>
                        <div className="progress">{ file.progress }%</div>
                      </div>
                    </div>
                  </div>
                }
                { file.status === 'success' && <Preview file={ file } preview={ preview } /> }
              </div>
              <div className="reframe-filefield-remove">
                <i className="remove circle icon" onClick={ this._handleRemoveFile.bind(this, file.uniqueIdentifier) }/>
              </div>
            </div>
          )
        }) }
        { (files.length === 0 || multiple === true) &&
          <div ref={ (node) => this.button = node } className="ui browse button">
            { prompt }
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onLoadFiles, onSetReady } = this.props
    if(defaultValue) {
      const ids = !_.isArray(defaultValue) ? [defaultValue] : defaultValue
      onLoadFiles('/api/admin/team/assets', ids)
    } else {
      onSetReady()
    }
    this._initializeResumable()
  }

  componentDidUpdate(prevProps) {
    const { files, status, onReady } = this.props
    if(status !== prevProps.status && prevProps.status === 'pending') {
      onReady()
    }
    if(files.length > prevProps.files.length) {
      if(files.filter(file => file.status === 'added').length > 0) {
        this._handleUploadBegin()
      }
    } else if(files.length < prevProps.files.length) {
      this._initializeResumable()
    }
  }

  _handleReady() {
    this.props.onReady()
    this._initializeResumable()
  }

  _initializeResumable() {
    const { endpoint, multiple, token } = this.props
    this.resumable = new Resumable({
      target: endpoint,
      chunkSize: 1024 * 128,
      maxFiles: multiple ? undefined : 1,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    this.resumable.on('fileAdded', this._handleFileAdded.bind(this))
    this.resumable.on('fileProgress', this._handleUploadProgress.bind(this))
    this.resumable.on('fileSuccess', this._handleUploadSuccess.bind(this))
    this.resumable.on('error', this._handleUploadFailure.bind(this))
    this.resumable.on('complete', this._handleUploadComplete.bind(this))
    this.resumable.assignBrowse(this.button)
  }

  _handleFileAdded(file) {
    const fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file.file)
    fileReader.onload = this._handleImagePreview.bind(this)
    this.props.onAddFile(file.uniqueIdentifier, file.file.name, file.file.size, file.file.type, file.chunks.length)
  }

  _handleImagePreview(event) {
    Jimp.read(event.data).then(function (image) {
      image.exifRotate().getBase64(Jimp.AUTO, function (err, preview) {
        if (err) throw err
        this.setState({ preview })
      })
    })
  }

  _handleUploadBegin() {
    this.resumable.upload()
    this.props.onUploadBegin()
    this.props.onBusy()
  }

  _handleUploadProgress(file) {
    this.props.onUploadProgress(file.file.uniqueIdentifier, file.progress())
  }

  _handleUploadFailure(file, message) {
    this.props.onUploadFailure(message)
    this.props.onBusy()
  }

  _handleUploadSuccess(file, message) {
    const asset = JSON.parse(message)
    this.props.onUploadSuccess(file.file.uniqueIdentifier, asset)
    this.props.onChange(asset.data.id)
    this.props.onBusy()
  }

  _handleRemoveFile(uniqueIdentifier) {
    const file = this.resumable.getFromUniqueIdentifier(uniqueIdentifier)
    this.resumable.removeFile(file)
    this.props.onRemoveFile(uniqueIdentifier)
  }

  _handleUploadComplete() {
    this.props.onUploadComplete()
  }

}

export default FileField
