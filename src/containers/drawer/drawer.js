import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Drawer extends React.Component {

  static childContextTypes = {
    drawer: PropTypes.object
  }

  render() {
    const { children, component, location, open } = this.props
    return ([
      children,
      <CSSTransition key="reframe-drawer-overlay" in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-drawer-overlay" onClick={this._handleClose.bind(this)} />
      </CSSTransition>,
      <CSSTransition key="reframe-drawer-panel" in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className={`reframe-drawer-panel reframe-drawer-panel-${location}`}>
          { _.isFunction(component) ? React.createElement(component) : component }
        </div>
      </CSSTransition>
    ])
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
