import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash'

class Modal extends React.Component {

  static childContextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    components: PropTypes.array,
    onClose: PropTypes.func,
    onPop: PropTypes.func,
    onPush: PropTypes.func
  }

  render() {
    const { children, components } = this.props
    return (
      <div className="reframe-modal">
        { children }
        <CSSTransitionGroup component={ ({ children }) => <div className="reframe-modal-outlet">{ children }</div> } transitionName="expanded" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
          { components && components.length > 0 && <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} /> }
          { components && components.length > 0 &&
            <div className="reframe-modal-window">
              <CSSTransitionGroup transitionName="stack" component="div" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
                { components.map((component, index) => {
                  return _.isFunction(component) ? React.createElement(component, { key: `modal_panel_${index}` }) : React.cloneElement(component, { key: `modal_panel_${index}` })
                }) }
              </CSSTransitionGroup>
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
    const { onClose, onPop, onPush } = this.props
    return {
      modal: {
        close: onClose,
        pop: onPop,
        push: onPush
      }
    }
  }

}

export default Modal
