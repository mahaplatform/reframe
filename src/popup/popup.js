import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

class Popup extends React.Component {

  static childContextTypes = {
    popup: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.func,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  render() {
    const { children, component } = this.props
    return (
      <div className="reframe-popup">
        { children }
        <CSSTransition in={ component !== null } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-popup-panel">
            <div className="reframe-popup-panel-item">
              { component && React.createElement(component) }
            </div>
          </div>
        </CSSTransition>
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
