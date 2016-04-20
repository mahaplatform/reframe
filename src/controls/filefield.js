import React from 'react'
import ReactDOM from 'react-dom'
import Resumable from 'resumablejs'
require('when/monitor/console');
import when from 'when'
import whenSequence from 'when/sequence'
import whenPipeline from 'when/pipeline'
import Config from '../utils/config'
import Logger from '../utils/logger'
import API from '../api'
import {uid} from '../utils/random'
import _ from 'lodash'

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
    target: Config.get('app.paths.asset_chunks', '/admin/assets/chunks'),
    assetPath: Config.get('app.paths.assets', '/admin/assets'),
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
      uploadProcessing: false,
      uploadFailed: false,
      fileExists: !!props.defaultValue
    }

    this.constructResumable(props)

    this.api = new API()

    this.isResumableSupported = this.r.support;

    // Return an asset ID if the field is already filled
    this.rPromise = when(this.props.defaultValue)

  }

  constructResumable(props) {
    this.r = new Resumable({
      target: Config.get('api.pathPrefix') + props.target,
      query: props.query,
      withCredentials: true,
      maxFiles: (props.mode === 'single' ? 1 : props.maxFiles)
    });

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

  destroyResumable() {
    while(this.r.files.length > 1) {
      r.files[0].cancel()
    }
    this.rPromise = when(null)
    delete this.r
  }

  mountResumable() {
    this.r.assignBrowse(this.refs.browseButton)

    if (this.props.mode === 'multi') {
      this.r.assignDrop(this.refs.dropzone)
    }
  }

  render() {
    const allFilesFailed = this.r.files.length > 0 && this.state.filesFailed.length === this.r.files.length

    if (this.props.mode === 'single') {
      if(allFilesFailed || this.state.uploadFailed) {
        // Show failure state
        return (
          <div ref="wrapper">
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
      if(this.state.uploadInProgress || this.state.uploadProcessing) {
        // Show progress state
        return (
          <div ref="wrapper">
            <FileProgress progress={this.getOverallProgress()}/>
          </div>
        )
      }
      if(this.state.uploadComplete) {
        // Show finished state
        return (
          <div className="filefield-preview" ref="wrapper">
            <div className="ui card">
              <div className="image">
                <FilePreview id={this.state.preview} assetPath={this.props.assetPath} />
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div ref="browseButton" className="ui green button"><i className="folder icon"></i>Change</div>
                  <div ref="clearButton" className="ui red button" onClick={this.clearFiles.bind(this)}><i className="x icon"></i> Remove</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      if(this.state.fileExists) {
        // Show preview when a defaultValue is set
        return (
          <div className="filefield-preview" ref="wrapper">
            <div className="ui card">
              <div className="image">
                <FilePreview id={this.state.preview} assetPath={this.props.assetPath} />
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div ref="browseButton" className="ui green button"><i className="folder icon"></i> Change</div>
                  <div ref="clearButton" className="ui red button" onClick={this.clearFiles.bind(this)}><i className="x icon"></i> Remove</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else {
        // Show an empty chooser
        return (
          <div ref="wrapper">
            <div ref="browseButton" className="ui green labeled icon button">
              <i className="folder icon"></i>
              Choose File...
            </div>
          </div>
        )
      }
    }
    else {
      return (
        <div className="ui relaxed stacking grid" ref="wrapper">
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
    this.mountResumable()
  }

  componentDidUpdate() {

  }

  clearFiles(e) {
    e.preventDefault()
    e.stopPropagation()
    this.destroyResumable()
    this.constructResumable(this.props)
    _.defer(() => this.mountResumable())
    this.setState({filesFailed: [], uploadComplete: false, uploadInProgress: false, uploadFailed: false, fileExists: false, preview: null})
    this.forceUpdate()
  }

  retry() {
    _.forEach(this.r.files, f => f.retry())
    this.setState({filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false})
  }

  beginUpload() {
    // Start the upload only if some files have been added
    if(_.isEmpty(this.r.files)) {
      this.rPromise = when(null)
      return
    }
    const single = this.props.mode === 'single'
    this.setState({filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false})
    const uploadPromise = () => {
      return when.promise((resolve, reject) => {
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
        .tap(() => this.setState({uploadInProgress: false, uploadProcessing: true}))
        .tap(Logger.log.bind(Logger))
    }

  const processPromise = ids => {
    Logger.log("Processing...", ids)
    return whenSequence(
      _.map(
        ids,
        i => {
          return () => this.api.patch(`${this.props.assetPath}/${i}/process`)
        }
      ))
      .then(() => ids)
    }

  this.rPromise = whenPipeline([uploadPromise, processPromise])
    .tap(ids => Logger.log("Uploading and Processing complete", ids))
    .tap(ids => this.setState({preview: _.first(ids)}))
    .then(assetIds => {
      if(single) {
        return assetIds[0]
      }
      else {
        return assetIds
      }
    })
    .tap(() => this.setState({uploadProcessing: false, uploadComplete: true}))
    .tap(() => this.mountResumable())
    .tap(Logger.log.bind(Logger))
    .catch(failure => {
      this.setState({uploadProcessing: false, uploadComplete: false, uploadInProgress: false, uploadFailed: true})
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
      $(this.refs.wrapper).find(".file.progress").progress({
        percent: Math.ceil(this.getOverallProgress() * 100)
      })
    }
    this.forceUpdate()
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
    if(!this.state.fileExists && !this.state.uploadInProgress && !this.state.uploadComplete) {
      this.beginUpload()
    }
    return this.rPromise
  }

  setValue(value) {
    if(value !== null) {
      this.setState({preview: value, fileExists: true})
      this.rPromise = when(value)
    }
  }

  getReference() {
    return {[this.props.code]: this}
  }
}

const FileProgress = ({progress}) => {
  if(progress == 1) {
    return (
      <div className="filefield-preview">
        <div className="ui card">
          <div className="image loader">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Processing</div>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui disabled green button"><i className="folder icon"></i> Change</div>
              <div className="ui disabled red button"><i className="x icon"></i> Remove</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else  {
    return (
      <div className="filefield-uploading">
        <div className="ui segment">
          <div className="ui file progress">
            <div className="bar"/>
          </div>
          <div className="label">Uploading</div>
        </div>
      </div>
    )
  }
}

class FilePreview extends React.Component {
  render() {
    const {assetPath, id, size = 'medium'} = this.props
    const url = Config.get('api.pathPrefix') + `${assetPath}/${id}/preview`
    if(id) {
      return <img src={url} alt="Image Preview" />
    }
    else {
      return null
    }
  }
}
