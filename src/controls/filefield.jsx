import React from 'react'
import ReactDOM from 'react-dom'
import Resumable from 'resumablejs'
import when from 'when'
import Config from 'src/utils/config'

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
    target: React.PropTypes.string
  }

  static defaultProps = {
    code: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    query: {},
    mode: 'single',
    target: '/admin/chunks'
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
      preview: props.defaultValue
    }

    this.r = new Resumable({
      target: Config.get('api') + props.target,
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
    if (this.props.mode === 'single') {
      if(this.r.files.length > 0) {
        return(
          <div>
            <div ref="browseButton" className="ui green labeled icon button" onClick={this.clearFiles()}>
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
  }

  beginUpload() {
    const single = this.props.mode === 'single'
    this.rPromise = when.promise((resolve, reject) => {
      let fileResults = []
      this.r.on('complete', () => resolve(fileResults))
      this.r.on('error', reject)
      this.r.on('fileSuccess', (_file, r) => {
        console.log(_file, r)
        let resp = JSON.parse(r)
        let assetId = _.get(resp, 'asset_id', null) || _.get(resp, 'id', null)
        fileResults.push(assetId)
      })
      this.r.upload()
    })
    .then(assetIds => {
      if(single) {
        return assetIds[0]
      }
      else {
        return assetIds
      }
    })
    .tap(console.log.bind(console))
    .catch(failure => {
      console.error(failure)
    })
  }

  getOverallProgress() {
    return this.r.progress()
  }

  onFileAdded(_file) {
    this.forceUpdate()
  }

  onFileSuccess(file, serverResponse) {
    console.log(file, serverResponse)
  }

  onFileError(file, serverResponse) {
    console.log(file, serverResponse)
    this.setState({
      filesFailed: this.state.filesFailed.concat([file.uniqueIdentifier])
    })
  }

  onFileProgress(file) {
    console.log(file.fileName, file.progress())
    $(this.refs.fileTable).find(`#${file.uniqueIdentifier}`).progress({percent: Math.floor(file.progress() * 100)})
    //this.forceUpdate()
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
    this.beginUpload()
    return this.rPromise
  }

  setValue(value) {
    this.setState({preview: value})
  }

  getReference() {
    return {[this.props.code]: this}
  }
}
