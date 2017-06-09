import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

class Outlet extends React.Component {

  render() {
    return <div className="reframe-prompt-outlet">{ this.props.children }</div>
  }

  shoudlComponentUpdate() {
    return true
  }

}

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

  static propsTypes = {
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
        <CSSTransitionGroup component={ Outlet } transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionAppear={true} transitionAppearTimeout={250}>
          { message && <div className="reframe-prompt-overlay" onClick={ this._handleClosePrompt.bind(this) } /> }
          { message &&
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
          }
        </CSSTransitionGroup>
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
