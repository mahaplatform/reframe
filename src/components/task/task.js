import React from 'react'
import PropTypes from 'prop-types'

class Task extends React.Component {

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

  render() {
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

  _handleChoose(index) {
    const { confirm, disabled, drawer, handler, location, modal, request, route, onDone } = this.props
    if(disabled) return
    const yesHandler = () => {
      if(route) this._handleRoute(route)
      if(request) this._handleRequest(request)
      if(modal) this._handleModal(modal)
      if(drawer) this._handleDrawer(drawer, location)
      if(handler) this._handleFunction(handler)
    }
    onDone()
    if(confirm) return this.context.confirm.open(confirm, yesHandler)
    yesHandler()
  }

  _handleRoute(route) {
    const { router } = this.context
    router.history.push(route)
  }

  _handleModal(component) {
    const { modal } = this.context
    modal.open(component)
  }

  _handleDrawer(component, location) {
    const { drawer } = this.context
    drawer.open(component, location)
  }

  _handleFunction(handler) {
    handler(() => {})
  }

  _handleRequest(itemRequest) {
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
