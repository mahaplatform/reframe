import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Task extends React.Component {

  static contextTypes = {
    confirm: PropTypes.object,
    drawer: PropTypes.object,
    mobile: PropTypes.bool,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  static propTypes = {
    confirm: PropTypes.any,
    className: PropTypes.string,
    component: PropTypes.any,
    disabled: PropTypes.bool,
    drawer: PropTypes.any,
    handler: PropTypes.func,
    location: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    mobile: PropTypes.bool,
    modal: PropTypes.any,
    request: PropTypes.object,
    route: PropTypes.string,
    onDone: PropTypes.func,
    onRequest: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    mobile: true,
    onDone: () => {}
  }

  _handleChoose = _.debounce(this._handleChoose.bind(this))

  render() {
    const { component, icon, label } = this.props
    return (
      <div className={ this._getClass() } onClick={ this._handleChoose }>
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
