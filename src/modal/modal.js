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
    components: PropTypes.array,
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onPop: PropTypes.func,
    onPush: PropTypes.func
  }

  render() {
    const { children, components, open } = this.props
    return (
      <div className="reframe-modal">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-window">
            { components.length > 0 && (_.isFunction(components[0]) ? React.createElement(components[0]) : React.cloneElement(components[0])) }
            { components.length > 1 && components.slice(1).map((component, index) => (
              <CSSTransition key={`component_${index}`}  in={ components.length > 0 } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
                { _.isFunction(component) ? React.createElement(component, { key: `modal_panel_${index}` }) : React.cloneElement(component, { key: `modal_panel_${index}` }) }
              </CSSTransition>
            )) }
          </div>
        </CSSTransition>
      </div>
    )
  }

  _handlePop() {
    const { components, onPop, onClear } = this.props
    if(components.length === 1) {
      onClear()
      setTimeout(onPop, 500)
    } else {
      onPop()
    }
  }

  _handleClose() {
    this.props.onClose()
  }

  getChildContext() {
    const { onPush } = this.props
    return {
      modal: {
        open: onPush,
        close: this._handlePop.bind(this),
        pop: this._handlePop.bind(this),
        push: onPush
      }
    }
  }

}

export default Modal
