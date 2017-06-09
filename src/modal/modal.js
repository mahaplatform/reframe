import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash'

class Outlet extends React.Component {

  render() {
    return <div className="reframe-modal-outlet">{ this.props.children }</div>
  }

  shoudlComponentUpdate() {
    return true
  }

}

class Modal extends React.Component {

  static childContextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    component: PropTypes.oneOf(
      PropTypes.element,
      PropTypes.func
    ),
    onClose: PropTypes.func,
    onPop: PropTypes.func,
    onPush: PropTypes.func
  }

  render() {
    const { children, component } = this.props
    return (
      <div className="reframe-modal">
        { children }
        <CSSTransitionGroup component={ Outlet } transitionName="expanded" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
          { component && <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} /> }
          { component &&
            <div className="reframe-modal-window">
              { _.isFunction(component) ? React.createElement(component) : component }
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

  _handleClose() {
    this.props.onClose()
  }

  getChildContext() {
    const { onClose, onOpen } = this.props
    return {
      modal: {
        open: onOpen,
        close: onClose
      }
    }
  }

}

export default Modal
