import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Modal extends React.Component {

  static childContextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  render() {
    const { children, open, component } = this.props
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

  componentDidUpdate(prevProps) {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
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
