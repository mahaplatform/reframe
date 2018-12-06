import ModalPanel from '../../components/modal_panel'
import Message from '../../components/message'
import Loader from '../../components/loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

class Picker extends React.Component{

  static contextTypes = {
    form: PropTypes.object
  }

  static propTypes = {
    src: PropTypes.string,
    status: PropTypes.string,
    onCreateLink: PropTypes.func
  }

  _handleBack = this._handleBack.bind(this)
  _handleDone = this._handleDone.bind(this)

  render() {
    const { status } = this.props
    return (
      <ModalPanel { ...this._getPanel() }>
        <div className="reframe-videofield-picker">
          <div className="reframe-videofield-picker-header">
            <input { ...this._getInput() } />
          </div>
          <div className="reframe-videofield-picker-body">
            { status === 'pending' &&
              <Message { ...this._getPendingMessage() } />
            }
            { status === 'loading' &&
              <Loader />
            }
            { status === 'success' &&
              <div className="reframe-videofield-player">
                <iframe { ...this._getIframe()} />
              </div>
            }
            { status === 'failure' &&
              <Message { ...this._getFailureMessage() } />
            }
          </div>
        </div>
      </ModalPanel>
    )
  }

  _getPendingMessage() {
    return {
      icon: 'play',
      title: 'Paste URL',
      text: 'Paste the url of a video to preiew its contents'
    }
  }

  _getPanel() {
    return {
      title: 'Choose Video',
      leftItems: [
        { icon: 'chevron-left', handler: this._handleBack }
      ],
      rightItems: [
        { label: 'Done', handler: this._handleDone }
      ]
    }
  }

  _getIframe() {
    const { src } = this.props
    return {
      src,
      frameBorder: 0,
      allowFullScreen: true
    }
  }

  _getInput() {
    return {
      type: 'text',
      placeholder: 'Paste a YouTube or Vimeo URL',
      onChange: this._handleChange.bind(this)
    }
  }

  _getFailureMessage() {
    return {
      icon: 'remove',
      title: 'Unable to load',
      text: 'We were unable to load your url and play the video'
    }
  }

  _handleBack() {
    this.context.form.pop()
  }

  _handleChange(e) {
    this.props.onCreateLink(e.target.value)
  }

  _handleDone() {
    this.context.form.pop()
  }

}

const mapStateToProps = (state, props) => ({
  src: state.reframe.videofield[props.cid].src,
  status: state.reframe.videofield[props.cid].status
})

export default connect(mapStateToProps)(Picker)
