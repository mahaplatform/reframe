// @flow

import type { Component, Node } from '../../types'
import type { Location } from '../../containers/drawer/types'
import type { Handler, ItemRequest, Props } from './types'

import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component<Props, void> {

  static contextTypes = {
    confirm: PropTypes.object,
    drawer: PropTypes.object,
    mobile: PropTypes.bool,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  static defaultProps = {
    disabled: false,
    onDone: () => {}
  }

  render(): Node {
    const { icon, component, label } = this.props
    return (
      <div className={ this._getClass() } onClick={ this._handleChoose.bind(this) }>
        { icon && <i className={`fa fa-fw fa-${icon}`} /> }
        { label }
        { component }
      </div>
    )
  }

  _getClass() {
    const { className, label, mobile } = this.props
    const classes = []
    if(label) classes.push(className)
    if(mobile !== false) classes.push('mobile')
    return classes.join(' ')
  }

  _handleChoose(index: number): void {
    const { confirm, disabled, drawer, handler, location, modal, request, route } = this.props
    if(disabled) return
    const yesHandler = () => {
      if(route) this._handleRoute(route)
      if(request) this._handleRequest(request)
      if(modal) this._handleModal(modal)
      if(drawer) this._handleDrawer(drawer, location)
      if(handler) this._handleFunction(handler)
    }
    this.props.onDone()
    if(confirm) return this.context.confirm.open(confirm, yesHandler)
    yesHandler()
  }

  _handleRoute(route: string): void {
    const { router } = this.context
    router.history.push(route)
  }

  _handleModal(component: Component): void {
    const { modal } = this.context
    modal.open(component)
  }

  _handleDrawer(component: Component, location: Location): void {
    const { drawer } = this.context
    drawer.open(component, location)
  }

  _handleFunction(handler: Handler): void {
    handler(() => {})
  }

  _handleRequest(itemRequest: ItemRequest): void {
    const { onRequest } = this.props
    const onFailure = (result) => {
      if(itemRequest.onFailure) itemRequest.onFailure(result)
    }
    const onSuccess = (result) => {
      if(itemRequest.onSuccess) itemRequest.onSuccess(result)
    }
    onRequest({
      body: null,
      params: null,
      ...itemRequest,
      onSuccess,
      onFailure
    })
  }

}

export default Task
