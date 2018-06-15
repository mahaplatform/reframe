import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {

  static contextTypes = {
    confirm: PropTypes.object,
    drawer: PropTypes.object,
    flash: PropTypes.object,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  static propTypes = {
    basic: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.any,
    confirm: PropTypes.any,
    disabled: PropTypes.bool,
    drawer: PropTypes.any,
    error: PropTypes.string,
    location: PropTypes.string,
    handler: PropTypes.func,
    icon: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string,
    mobile: PropTypes.bool,
    modal: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    request: PropTypes.shape({
      method: PropTypes.string,
      endpoint: PropTypes.string,
      onFailure: PropTypes.func,
      onSuccess: PropTypes.func
    }),
    route: PropTypes.string,
    status: PropTypes.string,
    text: PropTypes.string,
    onDone: PropTypes.func,
    onRequest: PropTypes.func
  }

  static defaultProps = {
    basic: false,
    mobile: true,
    disabled: false,
    onDone: () => {}
  }

  render() {
    const { component, icon, label, text } = this.props
    return (
      <a { ...this._getButton() }>
        { icon && <i className={`fa fa-fw fa-${icon}`} /> }
        { label || text }
        { component }
      </a>
    )

  }

  _getButton() {
    const { disabled, link } = this.props
    return {
      href: link ? link : null,
      className: this._getClass(),
      disabled,
      target: link ? '_blank' : null,
      onClick: !link ? this._handleClick.bind(this) : null
    }
  }

  _getClass() {
    const { component, basic, className, color, disabled, mobile, status } = this.props
    if(component) return ''
    if(className) return className
    const classes = ['ui', color, 'fluid', 'button','reframe-button']
    if(mobile !== false) classes.push('mobile')
    if(basic) classes.push('basic')
    if(disabled) classes.push('disabled')
    if(status === 'submitting') classes.push('loading')
    return classes.join(' ')
  }

  componentDidUpdate(prevProps) {
    const { flash } = this.context
    const { error, status } = this.props
    if(prevProps.status !== status && status === 'failure') {
      flash.set('error', error)
    }
  }

  _handleClick() {
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
    this.context.router.push(route)
  }

  _handleModal(component) {
    this.context.modal.open(component)
  }

  _handleDrawer(component, location) {
    this.context.drawer.open(component, location)
  }

  _handleFunction(handler) {
    handler(() => {})
  }

  _handleRequest(itemRequest) {
    const { onRequest } = this.props
    onRequest({
      ...itemRequest,
      body: null,
      params: null
    })
  }

}

export default Button
