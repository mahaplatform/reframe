import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash'

class Drawer extends React.Component {

  static childContextTypes = {
    drawer: PropTypes.object
  }

  static propTypes = {
    component: PropTypes.func,
    location: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }

  render() {
    const { children, component, location } = this.props
    return (
      <div className="reframe-drawer">
        { children }
        <CSSTransitionGroup component={ ({ children }) => <div className="reframe-drawer-outlet">{ children }</div> } transitionName="expanded" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          { component && <div className="reframe-drawer-overlay" onClick={this._handleClose.bind(this)} /> }
          { component &&
            <div className={`reframe-drawer-panel reframe-drawer-panel-${location}`}>
              { _.isFunction(component) ? React.createElement(component) : React.cloneElement(component) }
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
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
