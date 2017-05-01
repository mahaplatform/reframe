import React from 'react'
import PropTypes from 'prop-types'

class History extends React.Component {

  static childContextTypes = {
    history: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    stack: PropTypes.array,
    onBack: PropTypes.func,
    onPush: PropTypes.func,
    onReset: PropTypes.func
  }

  render() {
    return this.props.children
  }

  componentDidUpdate(prevProps) {
    const { history } = this.context.router
    const { stack } = this.props
    if(stack.length === 0) {
      history.push('/')
    } else {
      const route = stack[stack.length - 1]
      const pathname = route.pathname || route
      if(stack.length < prevProps.stack.length) {
        history.push(pathname)
      } else if(stack.length > prevProps.stack.length) {
        history.push(pathname)
      }
    }
  }

  getChildContext() {
    return {
      history: {
        back: this._handleBack.bind(this),
        push: this._handlePush.bind(this),
        reset: this._handleReset.bind(this)
      }
    }
  }

  _handleBack() {
    this.props.onBack()
  }

  _handlePush(url) {
    this.props.onPush(url)
  }

  _handleReset(url) {
    this.props.onReset(url)
  }

}

export default History
