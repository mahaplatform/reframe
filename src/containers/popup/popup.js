import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Popup extends React.Component{

  static childContextTypes = {
    popup: PropTypes.object
  }

  render() {
    const { children, component, open } = this.props
    return ([
      children,
      <CSSTransition key="reframe-popup" in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-popup-panel">
          <div className="reframe-popup-panel-item">
            { component && ( _.isFunction(component) ? React.createElement(component) : component ) }
          </div>
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
