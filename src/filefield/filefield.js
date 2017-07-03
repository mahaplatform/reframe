import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Resumable from 'resumablejs'
import bytes from 'bytes'

class FileField extends React.Component {

  static propTypes = {
    endpoint: PropTypes.string,
    files: PropTypes.array,
    multiple: PropTypes.bool,
    prompt: PropTypes.string,
    status: PropTypes.string,
    token: PropTypes.string,
    onAddFile: PropTypes.func,
    onUploadBegin: PropTypes.func,
    onUploadProgress: PropTypes.func,
    onUploadProcess: PropTypes.func,
    onUploadSuccess: PropTypes.func,
    onUploadFailure: PropTypes.func,
    onRemoveFile: PropTypes.func,
    onChangeFile: PropTypes.func
  }

  static defaultProps = {
    prompt: 'Choose File(s)',
    multiple: false
  }

  render() {
    const { files, multiple, prompt, status } = this.props
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
                    <div className="ui green progress" ref={`filefield_${file.uniqueIdentifier}_progress`}>
                      <div className="bar" />
                    </div>
                    <p>
                      { file.fileName } ({ bytes(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase() })
                    </p>
                  </div>
                }
                { file.status === 'success' &&
                  <div className="reframe-filefield-preview">
                    <img src={`/imagecache/fit=cover&w=300&h=300${file.asset.path}`} title={ file.asset.original_file_name } />
                    <div className="reframe-filefield-preview-caption">
                      <p>
                        { file.fileName } ({ bytes(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase() })
                      </p>
                    </div>
                  </div>
                }
              </div>
              <div className="reframe-filefield-remove">
                <i className="remove circle icon" onClick={ this._handleRemoveFile.bind(this, file.uniqueIdentifier) }/>
              </div>
            </div>
          )
        }) }
        { (files.length === 0 || multiple === true) &&
          <div ref="browseButton" className="ui browse button">
            { prompt }
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onLoadFiles } = this.props
    if(defaultValue) {
      const ids = !_.isArray(defaultValue) ? [defaultValue] : defaultValue
      onLoadFiles('/api/admin/team/assets', ids)
    }
    this._initializeResumable()
  }

  componentDidUpdate(prevProps) {
    const { files } = this.props
    if(files.length > prevProps.files.length) {
      this._handleUploadBegin()
    } else if(files.length < prevProps.files.length) {
      this._initializeResumable()
    }
    files.map((file, index) => {
      if(!prevProps.files[index] || prevProps.files[index].progress < file.progress) {
        $(this.refs[`filefield_${file.uniqueIdentifier}_progress`]).progress({
          percent: file.progress
        })
      }
    })
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
    this.resumable.assignBrowse(this.refs.browseButton)
  }

  _handleFileAdded(file) {
    this.props.onAddFile(file.uniqueIdentifier, file.file.name, file.file.size, file.file.type, file.chunks.length)
  }

  _handleUploadBegin() {
    this.resumable.upload()
    this.props.onUploadBegin()
  }

  _handleUploadProgress(file) {
    this.props.onUploadProgress(file.file.uniqueIdentifier, file.progress())
  }

  _handleUploadFailure(file, message) {
    this.props.onUploadFailure(message)
  }

  _handleUploadSuccess(file, message) {
    const asset = JSON.parse(message)
    this.props.onUploadSuccess(file.file.uniqueIdentifier, asset)
    this.props.onChange(asset.data.id)
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
