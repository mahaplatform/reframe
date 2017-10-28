import Resumable from 'resumablejs'
import PropTypes from 'prop-types'
import Preview from './preview'
import bytes from 'bytes'
import React from 'react'
import _ from 'lodash'

class FileField extends React.Component {

  static propTypes = {
    action: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array
    ]),
    disabled: PropTypes.bool,
    endpoint: PropTypes.string,
    files: PropTypes.array,
    multiple: PropTypes.bool,
    multiplePrompt: PropTypes.string,
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
    prompt: 'Choose File',
    multiplePrompt: 'Choose Another File',
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  state = {
    preview: null
  }

  render() {
    const { files, multiple, multiplePrompt, prompt, status } = this.props
    const { preview } = this.state
    let classes = ['filefield', status]
    return (
      <div className={classes.join(' ')}>
        <div className="reframe-filefield-tokens">
          { files.map((file, index) => (
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
                <div className="reframe-filefield-caption">
                  <div className="reframe-filefield-caption-text">
                    { file.fileName } ({ bytes(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase() })
                  </div>
                  <div className="reframe-filefield-remove" onClick={ this._handleRemoveFile.bind(this, file.uniqueIdentifier) }>
                    <i className="remove circle icon" />
                  </div>
                </div>
              </div>
            </div>
          )) }
        </div>
        { status === 'ready' && (files.length === 0 || multiple === true) &&
          <div ref={ (node) => this.button = node } className="ui browse button">
            { files.length === 0 ? prompt :  multiplePrompt }
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { endpoint, defaultValue, onLoadFiles, onSetReady } = this.props
    if(!defaultValue) return onSetReady()
    const ids = !_.isArray(defaultValue) ? [defaultValue] : defaultValue
    if(ids.length === 0) return onSetReady()
    onLoadFiles(endpoint, ids)
  }

  componentDidUpdate(prevProps) {
    const { files, status, onReady } = this.props
    if(status !== prevProps.status) {
      if(prevProps.status === 'pending') onReady()
      if(status === 'ready') this._initializeResumable()
    }
    if(files.length > prevProps.files.length) {
      if(files.filter(file => file.status === 'added').length > 0) {
        this._handleUploadBegin()
      }
    } else if(files.length < prevProps.files.length) {
      this._initializeResumable()
    }
  }

  _initializeResumable() {
    const { action, multiple, status, token } = this.props
    if(status !== 'ready') return
    this.resumable = new Resumable({
      target: action,
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
    fileReader.readAsDataURL(file.file)
    fileReader.onload = this._handleImagePreview.bind(this)
    this.props.onAddFile(file.uniqueIdentifier, file.file.name, file.file.size, file.file.type, file.chunks.length)

  }
  _handleImagePreview(event) {
    const preview = event.target.result
    this.setState({ preview })
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
    this.props.onBusy()
  }

  _handleRemoveFile(uniqueIdentifier) {
    const file = this.resumable.getFromUniqueIdentifier(uniqueIdentifier)
    this.resumable.removeFile(file)
    this.props.onRemoveFile(uniqueIdentifier)
  }

  _handleUploadComplete() {
    const { files, multiple } = this.props
    this.props.onUploadComplete()
    const value = multiple ? files.map(file => file.asset.id) : files[0].asset.id
    this.props.onChange(value)
  }

}

export default FileField
