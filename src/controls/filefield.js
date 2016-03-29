import React from 'react'
import ReactDOM from 'react-dom'
import Resumable from 'resumablejs'
import when from 'when'
import Config from '../utils/config'
import Logger from '../utils/logger'

class FilePreview extends React.Component {
  render() {
    const url = Config.get('api') + `/admin/assets/${this.props.id}/preview`
    if(this.props.id) {
      return <img style={{marginBottom: 8}} src={url} alt="Image Preview" className="ui tiny rounded image"/>
    }
    else {
      return null
    }
  }
}

export default class FileField extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    query: React.PropTypes.object,
    mode: React.PropTypes.oneOf('single', 'multi'),
    target: React.PropTypes.string,
    eager: React.PropTypes.bool
  }

  static defaultProps = {
    code: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    query: {},
    mode: 'single',
    target: '/admin/chunks',
    eager: true
  }

  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      validated: false,
      isValid: null,
      filesFailed: [],
      multi: {
        files: [],
        status: 'WAITING',
        filesComplete: []
      },
      preview: props.defaultValue,
      uploadInProgress: false,
      uploadComplete: false,
      uploadFailed: false
    }

    this.r = new Resumable({
      target: Config.get('api.pathPrefix') + props.target,
      query: props.query,
      withCredentials: true,
      maxFiles: (props.mode === 'single' ? 1 : props.maxFiles),
    });

    this.isResumableSupported = this.r.support;

    this.r.on('fileAdded', this.onFileAdded.bind(this))
    this.r.on('fileProgress', this.onFileProgress.bind(this))
    this.r.on('fileError', this.onFileError.bind(this))
    this.r.on('fileSuccess', this.onFileSuccess.bind(this))
    this.r.on('fileRetry', this.onFileRetry.bind(this))

    this.r.on('complete', this.onComplete.bind(this))
    this.r.on('pause', this.onPause.bind(this))
    this.r.on('cancel', this.onCancel.bind(this))
    this.r.on('error', this.onError.bind(this))
  }

  render() {
    const allFilesFailed = this.r.files.length > 0 && this.state.filesFailed.length === this.r.files.length

    if (this.props.mode === 'single') {
      if(allFilesFailed) {
        return (
          <div>
            <div className="ui small header">Uploading failed.</div>
            <div className="ui red labeled icon button" onClick={this.retry.bind(this)}>
              <i className="refresh icon"></i>
              Retry
            </div>
            <div ref="reBrowseButton" className="ui green labeled icon button">
              <i className="folder icon"></i>
              Choose Files...
            </div>
          </div>
        )
      }
      if(this.state.uploadInProgress) {
        return <FileProgress/>
      }
      if(this.state.uploadComplete) {
        return (
          <div>
            <div className="ui green labeled disabled icon button">
              <i className="folder icon"></i>
              Complete
            </div>
            <div className="ui small basic circular icon button" onClick={this.clearFiles()}>
              <i className="x icon"></i>
            </div>
          </div>
        )
      }
      if(this.r.files.length > 0) {
        return(
          <div>
            <div ref="browseButton" className="ui green labeled icon button" onClick={this.clearFiles.bind(this)}>
              <i className="folder icon"></i>
              {this.r.files[0].fileName} ({this.formatSize(this.r.files[0].size)})
            </div>
          </div>
        )
      }
      else {
        return (
          <div>
            <FilePreview id={this.state.preview}/>
            <div ref="browseButton" className="ui blue labeled icon button">
              <i className="folder icon"></i>
              Add File
            </div>
          </div>
        )
      }
    }
    else {
      return (
        <div className="ui relaxed stacking grid">
          <div className="column admin-sidebar">
            <div ref="dropzone" className="ui basic segment">
              <h3 className="ui center aligned icon header">
                <i className="download icon"></i>
                <div className="content">
                  Drop Files Here
                </div>
              </h3>
            </div>
            <div className="ui horizontal divider">OR</div>
            <div ref="browseButton" className="ui large fluid blue labeled icon button">
              <i className="folder icon"></i>
              Add Files
            </div>
          </div>
          <div className="vertical divider"/>
          <div className="eleven wide column">
            <div className="ui segment" ref="fileTable">
              {this.r.files.map(file => {
                let progressClass = 'ui progress'
                if(_.includes(this.state.filesFailed, file.uniqueIdentifier)) {
                  progressClass += ' error'
                }
                return (
                  <div className={progressClass} id={file.uniqueIdentifier} key={file.uniqueIdentifier}>
                    <div className="bar"/>
                    <div className="label">{file.fileName}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }
  }

  componentDidMount() {
    this.r.assignBrowse(this.refs.browseButton)

    if (this.props.mode === 'multi') {
      this.r.assignDrop(this.refs.dropzone)
    }
  }

  componentDidUpdate() {

  }

  clearFiles() {
    while(this.r.files.length > 1) {
      r.files[0].cancel()
    }
    this.setState({filesFailed: [], uploadComplete: false, uploadInProgress: false, uploadFailed: false})
    this.rPromise = null
  }

  clearAndChoose() {
    this.clearFiles()
  }

  retry() {
    _.forEach(this.r.files, f => f.retry())
    this.setState({filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false})
  }

  beginUpload() {
    const single = this.props.mode === 'single'
    this.setState({filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false})
    this.rPromise = when.promise((resolve, reject) => {
      let fileResults = []
      this.r.on('complete', () => resolve(fileResults))
      this.r.on('error', reject)
      this.r.on('fileSuccess', (_file, r) => {
        Logger.log(_file, r)
        let resp = JSON.parse(r)
        let assetId = _.get(resp, 'asset_id', null) || _.get(resp, 'id', null)
        fileResults.push(assetId)
      })
      this.r.upload()
    })
    .tap(() => this.setState({uploadInProgress: false, uploadComplete: true}))
    .then(assetIds => {
      if(single) {
        return assetIds[0]
      }
      else {
        return assetIds
      }
    })
    .tap(Logger.log.bind(Logger))
    .catch(failure => {
      Logger.error(failure)
    })
  }

  getOverallProgress() {
    return this.r.progress()
  }

  onFileAdded(_file) {
    this.forceUpdate()
    if(this.props.mode === 'single' && this.props.eager) {
      this.beginUpload()
    }
  }

  onFileSuccess(file, serverResponse) {
    Logger.log(file, serverResponse)
  }

  onFileError(file, serverResponse) {
    Logger.log(file, serverResponse)
    const newFailures = this.state.filesFailed.concat([file.uniqueIdentifier])
    this.setState({
      filesFailed: newFailures
    })

    if(newFailures.length === this.r.files.length) {
      this.r.assignBrowse(this.refs.reBrowseButton)
    }
  }

  onFileProgress(file) {
    Logger.log(file.fileName, file.progress())
    $(this.refs.fileTable).find(`#${file.uniqueIdentifier}`).progress({percent: Math.floor(file.progress() * 100)})
    if(this.state.uploadInProgress) {
      $(".file.progress").progress({
        percent: Math.ceil(this.getOverallProgress() * 100)
      })
    }
  }

  onFileRetry(_file) {
    //this.forceUpdate()
  }

  onComplete() {
    this.setState({
      multi: {
        status: 'COMPLETE'
      }
    })
  }

  onPause() {
    this.setState({
      multi: {
        status: 'PAUSED'
      }
    })
  }

  onCancel() {
    this.setState({
      multi: {
        status: 'CANCELLED'
      }
    })
  }

  onError(message, file) {
    this.setState({
      multi: {
        status: 'FAILED'
      }
    })
  }

  // Ripped straight outta Resumable
  formatSize(size){
    if(size<1024) {
      return size + ' bytes';
    } else if(size<1024*1024) {
      return (size/1024.0).toFixed(0) + ' KB';
    } else if(size<1024*1024*1024) {
      return (size/1024.0/1024.0).toFixed(1) + ' MB';
    } else {
      return (size/1024.0/1024.0/1024.0).toFixed(1) + ' GB';
    }
  }

  getValue() {
    // Only begin the upload here if there is no upload in progress and an upload has not already completed
    if(!this.state.uploadInProgress && !this.state.uploadComplete) {
      this.beginUpload()
    }
    return this.rPromise
  }

  setValue(value) {
    this.setState({preview: value})
  }

  getReference() {
    return {[this.props.code]: this}
  }
}

const FileProgress = props => {
  return (
    <div className="ui tiny green indicating file progress">
      <div className="bar"/>
      <div className="label">Uploading</div>
    </div>
  )
}
