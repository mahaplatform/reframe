// @flow

import type { Component, Node } from '../types'
import type { Location } from '../drawer/types'
import type { Handler, ItemRequest, Props, ChildContext } from './types'

import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

class Tasks extends React.Component<Props> {

  static childContextTypes = {
    tasks: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    items: PropTypes.array,
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onRequest: PropTypes.func
  }

  render(): Node {
    const { children, items, open } = this.props
    return (
      <div className="reframe-tasks">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tasks-overlay" onClick={ this._handleClose.bind(this) } />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tasks-list">
            { items && items.map((item, index) => {
              if(item.show !== false) return (
                <div key={`task_${index}`} className="reframe-tasks-item" onClick={ this._handleChoose.bind(this, index) }>
                  { item.label }
                </div>
              )
            }) }
            <div className="reframe-tasks-cancel" onClick={ this._handleClose.bind(this) }>
              Cancel
            </div>
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
    const { onOpen, onClose } = this.props
    return {
      tasks: {
        open: onOpen,
        close: onClose
      }
    }
  }

  _handleChoose(index: number): void {
    const { items } = this.props
    if(items[index].route) this._handleRoute(items[index].route)
    if(items[index].request) this._handleRequest(items[index].request)
    if(items[index].modal) this._handleModal(items[index].modal)
    if(items[index].drawer) this._handleDrawer(items[index].drawer, items[index].location)
    if(items[index].handler) this._handleFunction(items[index].handler)
  }

  _handleRoute(route: string): void {
    const { router } = this.context
    router.history.push(route)
    this._handleClose()
  }

  _handleModal(component: Component): void {
    const { modal } = this.context
    modal.open(component)
    this._handleClose()
  }

  _handleDrawer(component: Component, location: Location): void {
    const { drawer } = this.context
    drawer.open(component, location)
    this._handleClose()
  }

  _handleFunction(handler: Handler): void {
    const done = this._handleClose.bind(this)
    handler(done)
  }

  _handleClose() {
    this.props.onClose()
  }

  _handleRequest(itemRequest: ItemRequest): void {
    const { onClose, onRequest } = this.props
    const onFailure = (result) => {
      if(itemRequest.onFailure) itemRequest.onFailure(result)
      onClose()
    }
    const onSuccess = (result) => {
      if(itemRequest.onSuccess) itemRequest.onSuccess(result)
      onClose()
    }
    onRequest({
      ...itemRequest,
      onSuccess,
      onFailure
    })
  }

}

export default Tasks
