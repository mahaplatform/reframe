import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Drawer extends React.Component {

  static childContextTypes = {
    drawer: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.func,
    location: PropTypes.string,
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  render() {
    const { children, component, location, open } = this.props
    return (
      <div className="reframe-drawer">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-drawer-overlay" onClick={this._handleClose.bind(this)} />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className={`reframe-drawer-panel reframe-drawer-panel-${location}`}>
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
      drawer: {
        open: this._handleOpen.bind(this),
        close: this._handleClose.bind(this)
      }
    }
  }

  _handleOpen(component, location) {
    this.props.onOpen(component, location)
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Drawer
