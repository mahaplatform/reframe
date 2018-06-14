import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Button from '../button'
import React from 'react'

class Prompt extends React.Component {

  static childContextTypes = {
    alert: PropTypes.object,
    confirm: PropTypes.object,
    prompt: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object
  }

  static propTypes = {
    cancel: PropTypes.bool,
    children: PropTypes.any,
    message: PropTypes.string,
    open: PropTypes.bool,
    options: PropTypes.array,
    title: PropTypes.string,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  static defaultProps = {
    cancel: false
  }

  render() {
    const { cancel, children, message, title, open, options } = this.props
    return ([
      children,
      <CSSTransition key="reframe-prompt-overlay" in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-prompt-overlay" onClick={ this._handleClose.bind(this) } />
      </CSSTransition>,
      <CSSTransition key="reframe-prompt-options" in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-prompt-options">
          { title &&
            <div className="reframe-prompt-title">
              { title }
            </div>
          }
          { message &&
            <div className="reframe-prompt-message">
              { message }
            </div>
          }
          { options && options.map((option, index) => (
            <Button key={ `option_${index}` } { ...this._getButton(options) }  />
          ))}
          { cancel &&
            <div className="reframe-prompt-cancel" onClick={ this._handleClose.bind(this) }>
              Cancel
            </div>
          }
        </div>
      </CSSTransition>
    ])
  }

  componentDidUpdate(prevProps) {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
  }

  getChildContext() {
    return {
      alert: this._getAlertChildContext(),
      confirm: this._getConfirmChildContext(),
      prompt: this._getPromptChildContext()
    }
  }

  _getButton(option) {
    return {
      ...option,
      className: 'reframe-prompt-item',
      onDone: this._handleClose.bind(this)
    }
  }

  _getAlertChildContext() {
    const { onOpen, onClose } = this.props
    return {
      open: (message) => onOpen('ALERT', message),
      close: onClose
    }
  }

  _getConfirmChildContext() {
    const { onOpen, onClose } = this.props
    return {
      open: (message, yes = null, no = null) => onOpen(message, null, [
        {
          label: 'Yes',
          handler: () => yes ? yes() : onClose()
        }, {
          label: 'No',
          handler: () => no ? no() : onClose()
        }
      ]),
      close: onClose
    }
  }

  _getPromptChildContext() {
    const { onOpen, onClose } = this.props
    return {
      open: (title, options) => onOpen(title, null, options),
      close: onClose
    }
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Prompt
