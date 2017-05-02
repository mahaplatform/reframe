import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash'

class Tray extends React.Component {

  static childContextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    component: PropTypes.element,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }

  render() {
    const { children, component } = this.props
    return (
      <div className="reframe-tray">
        { children }
        <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true} transitionAppearTimeout={500}>
          { component && <div className="reframe-tray-overlay" onClick={this._handleCloseTray.bind(this)} /> }
          { component &&
            <div className="reframe-tray-panel">
              { _.isFunction(component) ? React.createElement(component) : component }
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
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
