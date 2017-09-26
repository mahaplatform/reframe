// @flow

import type { Component, Node } from '../../types'
import type { Location } from '../drawer/types'
import type { Handler, ItemRequest, Props } from './types'

import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component<Props, void> {

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  render(): Node {
    const { label } = this.props
    return (
      <div className="reframe-task" onClick={ this._handleChoose.bind(this) }>
        { label }
      </div>
    )
  }

  _handleChoose(index: number): void {
    const { drawer, handler, location, modal, request, route } = this.props
    if(route) this._handleRoute(route)
    if(request) this._handleRequest(request)
    if(modal) this._handleModal(modal)
    if(drawer) this._handleDrawer(drawer, location)
    if(handler) this._handleFunction(handler)
  }

  _handleRoute(route: string): void {
    const { router } = this.context
    router.history.push(route)
    this.props.onDone()
  }

  _handleModal(component: Component): void {
    const { modal } = this.context
    modal.open(component)
    this.props.onDone()
  }

  _handleDrawer(component: Component, location: Location): void {
    const { drawer } = this.context
    drawer.open(component, location)
    this.props.onDone()
  }

  _handleFunction(handler: Handler): void {
    const done = this.props.onDone.bind(this)
    handler(done)
  }

  _handleRequest(itemRequest: ItemRequest): void {
    const { onDone, onRequest } = this.props
    const onFailure = (result) => {
      if(itemRequest.onFailure) itemRequest.onFailure(result)
      onDone()
    }
    const onSuccess = (result) => {
      if(itemRequest.onSuccess) itemRequest.onSuccess(result)
      onDone()
    }
    onRequest({
      ...itemRequest,
      onSuccess,
      onFailure
    })
  }

}

export default Task
