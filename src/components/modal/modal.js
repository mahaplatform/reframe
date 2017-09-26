// @flow

import type { Component, Node } from '../../types'
import type { Props, ChildContext } from './types'

import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Modal extends React.Component<Props, void> {

  static childContextTypes = {
    modal: PropTypes.object
  }

  render(): Node {
    const { children, component, open } = this.props
    return (
      <div className="reframe-modal">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-window">
            { _.isFunction(component) ? React.createElement(component) : component }
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
      modal: {
        open: this._handleOpen.bind(this),
        close: this._handleClose.bind(this)
      }
    }
  }

  _handleOpen(component: Component): void {
    this.props.onOpen(component)
  }

  _handleClose(): void {
    this.props.onClose()
  }

}

export default Modal
