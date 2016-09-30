import React from 'react'
import { connect } from 'react-redux'
import Resumable from 'resumablejs'
import bytes from 'bytes'
import * as actions from './actions'
import config from '../../utils/config'

class FileField extends React.Component {

  static propTypes = {
    state: React.PropTypes.shape({
    }),
    onAddFile: React.PropTypes.func,
    onUploadBegin: React.PropTypes.func,
    onUploadProgress: React.PropTypes.func,
    onUploadProcess: React.PropTypes.func,
    onUploadSuccess: React.PropTypes.func,
    onUploadFailure: React.PropTypes.func,
    onRemoveFile: React.PropTypes.func,
    onChangeFile: React.PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.r = new Resumable({
      target: config.get('api.host') + '/admin/uploads/chunks',
      withCredentials: true,
      maxFiles: 1
    })
  }

  render() {
    const { status } = this.props.state
    let classes = ['filefield', status]
    return (
      <div className={classes.join(" ")}>
        <div ref="browse" className="ui browse button">
          Choose File...
        </div>
        {(() => {
          if(status == 'added' || status == 'uploading') {
            return (
              <div className="ui segments">
                <div className="ui segment">
                  <div className="ui progress" ref="progress">
                    <div className="bar"></div>
                    <div className="label">Uploading...</div>
                  </div>
                </div>
              </div>
            )
          } else if(status == 'processing') {
            return (
              <div className="ui segments">
                <div className="ui segment">
                  <div className="ui active inverted dimmer">
                     <div className="ui text loader">Processing...</div>
                   </div>
                 </div>
               </div>
            )
          } else if(status == 'success') {
            const { content_type, file_name, file_size, url } = this.props.state.file
            return (
              <div className="ui segments">
                <div className="ui icon top right pointing dropdown mini button" onClick={this._handleRemoveFile.bind(this)}>
                  <i className="x icon" />
                </div>
                {(() => {
                  if(content_type.search('image') >= 0) {
                    return (
                      <div className="ui segment image">
                        <img src={url} />
                      </div>
                    )
                  }
                })()}
                <div className="ui secondary segment">
                  <h4>{file_name}</h4>
                  <p>{bytes(file_size, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase()}</p>
                </div>
              </div>
            )
          } else if(status == 'failure') {
            return (
              <div className="ui card">
                <div className="content">
                  <p>Fail!</p>
                </div>
                <div className="extra content">
                  <div className="ui fluid red button" onClick={this._handleRemoveFile.bind(this)}>
                    <i className="x icon" />
                    Remove
                  </div>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }

  componentDidMount() {
    this._handleSetup()
  }

  componentDidUpdate(prevProps) {
    const { uploadedChunks, totalChunks } = this.props.state
    if(prevProps.state.status != this.props.state.status) {
      if(this.props.state.status == 'added') {
        this._handleUploadBegin()
      }
    }
    if(prevProps.state.uploadedChunks != this.props.state.uploadedChunks) {
      const percent = Math.min(100, Math.ceil((uploadedChunks / totalChunks) * 100))
      $(this.refs.progress).progress({
        percent: percent
      })
    }
  }

  _handleSetup(file) {
    this.r.assignBrowse(this.refs.browse)
    this.r.on('fileAdded', this._handleFileAdded.bind(this))
    this.r.on('fileProgress', this._handleUploadProgress.bind(this))
    this.r.on('fileSuccess', this._handleUploadSuccess.bind(this))
    this.r.on('error', this._handleUploadFailure.bind(this))
  }

  _handleFileAdded(file) {
    this.props.onAddFile(file.chunks.length)
  }

  _handleUploadBegin() {
    this.r.upload()
    this.props.onUploadBegin()
  }

  _handleUploadProgress(file) {
    this.props.onUploadProgress()
  }

  _handleUploadFailure(file, message) {
    this.props.onUploadFailure(message)
  }

  _handleUploadSuccess(file, response) {
    const { onUploadSuccess, onUploadProcess } = this.props
    const upload = JSON.parse(response)
    if(upload.status == 'completed') {
      onUploadSuccess(upload)
    } else {
      onUploadProcess(upload.id)
    }
  }

  _handleChangeFile(file) {
    this.props.onChangeFile()
  }

  _handleRemoveFile(file) {
    this.props.onRemoveFile()
  }

}

const mapStateToProps = (state, props) => ({ state })

const mapDispatchToProps = {
  onAddFile: actions.addFile,
  onUploadBegin: actions.uploadBegin,
  onUploadProgress: actions.uploadProgress,
  onUploadProcess: actions.uploadProcess,
  onUploadFailure: actions.uploadFailure,
  onUploadSuccess: actions.uploadSuccess,
  onRemoveFile: actions.removeFile,
  onChangeFile: actions.changeFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileField)
