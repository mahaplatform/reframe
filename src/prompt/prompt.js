import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

class Prompt extends React.Component {

  static childContextTypes = {
    confirm: PropTypes.object,
    prompt: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    history: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    message: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        handler: PropTypes.func,
        label: PropTypes.string
      })
    ),
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }

  render() {
    const { children, message, options } = this.props
    return (
      <div className="reframe-prompt">
        { children }
        <CSSTransition in={ message } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-prompt-overlay" onClick={ this._handleClosePrompt.bind(this) } />
        </CSSTransition>
        <CSSTransition in={ message } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-prompt-options">
            { message &&
              <div className="reframe-prompt-header">
                { message }
              </div>
            }
            { options && options.map((option, index) => {
              return (
                <div key={`option_${index}`} className="reframe-prompt-option" onClick={ this._handleChooseOption.bind(this, index) }>
                  { option.label }
                </div>
              )
            }) }
          </div>
        </CSSTransition>
      </div>
    )
  }

  getChildContext() {
    return {
      prompt: this._getPromptChildContext(),
      confirm: this._getConfirmChildContext()
    }
  }

  _getPromptChildContext() {
    const { onOpen, onClose } = this.props
    return {
      open: onOpen,
      close: onClose
    }
  }

  _getConfirmChildContext() {
    const { onOpen, onClose } = this.props
    return {
      open: (message, yes, no) => {
        const options = [
          { label: 'Yes', handler: () => { if(yes) yes() } },
          { label: 'No', handler: () => { if(no) no() } }
        ]
        onOpen(message, options)
      },
      close: onClose
    }
  }

  _handleChooseOption(index) {
    const { options } = this.props
    this._handleClosePrompt()
    if(options[index].handler){
      options[index].handler()
    }
  }

  _handleClosePrompt() {
    this.props.onClose()
  }

}

export default Prompt
