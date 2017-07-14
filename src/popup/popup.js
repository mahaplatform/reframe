
import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

export class Popup extends React.Component {

  static childContextTypes = {
    popup: PropTypes.object
  }

  static propTypes = {
    component: PropTypes.func,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  render() {
    const { children, component } = this.props
    return (
      <div className="reframe-popup">
        { children }
        <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          { component &&
            <div className="reframe-popup-panel">
              <div className="reframe-popup-panel-item">
                { React.createElement(component) }
              </div>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

  getChildContext() {
    const { onOpen, onClose } = this.props
    return {
      popup: {
        open: onOpen,
        close: onClose
      }
    }
  }

}

export default Popup
