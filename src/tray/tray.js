import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Tray extends React.Component {

  static childContextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.element,
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  render() {
    const { children, component, open } = this.props
    return (
      <div className="reframe-tray">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tray-overlay" onClick={ this._handleCloseTray.bind(this) } />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tray-panel">
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

  getChildContext() {
    return {
      tray: {
        open: this._handleOpenTray.bind(this),
        close: this._handleCloseTray.bind(this)
      }
    }
  }

  _handleOpenTray(component, location) {
    this.props.onOpen(component, location)
  }

  _handleCloseTray() {
    this.props.onClose()
  }

}

export default Tray
