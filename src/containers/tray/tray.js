// @flow

import type { Component, Node } from '../../types'
import type { Props, ChildContext } from './types'

import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Tray extends React.Component<Props, void> {

  static childContextTypes = {
    tray: PropTypes.object
  }

  render(): Node {
    const { children, component, open } = this.props
    return ([
      children,
      <CSSTransition key="reframe-overlay" in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-tray-overlay" onClick={ this._handleCloseTray.bind(this) } />
      </CSSTransition>,
      <CSSTransition key="reframe-tray-panel" in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-tray-panel">
          { _.isFunction(component) ? React.createElement(component) : component }
        </div>
      </CSSTransition>
    ])
  }

  componentDidUpdate(prevProps: Props): void {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
  }

  getChildContext(): ChildContext {
    return {
      tray: {
        open: this._handleOpenTray.bind(this),
        close: this._handleCloseTray.bind(this)
      }
    }
  }

  _handleOpenTray(component: Component): void {
    this.props.onOpen(component)
  }

  _handleCloseTray(): void {
    this.props.onClose()
  }

}

export default Tray
