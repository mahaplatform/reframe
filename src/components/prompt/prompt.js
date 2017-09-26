// @flow

import type { Props, ChildContext, PromptChildContext, ConfirmChildContext } from './types'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Task from '../task'
import React from 'react'

class Prompt extends React.Component<Props, void> {

  static childContextTypes = {
    confirm: PropTypes.object,
    prompt: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    history: PropTypes.object
  }

  static defaultProps = {
    cancel: false
  }

  render() {
    const { cancel, children, message, open, options } = this.props
    return (
      <div className="reframe-prompt">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-prompt-overlay" onClick={ this._handleClose.bind(this) } />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-prompt-options">
            { message &&
              <div className="reframe-prompt-header">
                { message }
              </div>
            }
            { options && options.map((option, index) => {
              return <Task key={`option_${index}`} { ...option } onDone={ this._handleClose.bind(this) } />
            }) }
            { cancel &&
              <div className="reframe-prompt-cancel" onClick={ this._handleClose.bind(this) }>
                Cancel
              </div>
            }
          </div>
        </CSSTransition>
      </div>
    )
  }

  componentDidUpdate(prevProps: Props): void {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
  }

  getChildContext(): ChildContext {
    return {
      ...this._getPromptChildContext(),
      ...this._getConfirmChildContext()
    }
  }

  _getPromptChildContext(): PromptChildContext {
    const { onOpen, onClose } = this.props
    return {
      prompt: {
        open: onOpen,
        close: onClose
      }
    }
  }

  _getConfirmChildContext(): ConfirmChildContext {
    const { onOpen, onClose } = this.props
    return {
      confirm: {
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
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Prompt
