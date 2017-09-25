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
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onPop: PropTypes.func,
    onPush: PropTypes.func
  }

  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    const { children, components, open } = this.props
    return (
      <div className="reframe-modal">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-modal-window">
            { components.map((component, index) => {
              return (
                <CSSTransition key={`component_${index}`} in={ index + 1 <= count || index === 0 } classNames="cover" timeout={ 500 } appear={ index > 0 } mountOnEnter={ index > 0 } unmountOnExit={ index > 0 }>
                  { _.isFunction(component) ? React.createElement(component, { key: `modal_panel_${index}` }) : React.cloneElement(component, { key: `modal_panel_${index}` }) }
                </CSSTransition>
              )
            }) }
          </div>
        </CSSTransition>
      </div>
    )
  }

  _handleClose() {
    const { count } = this.state
    const { onClose, onPop } = this.props
    onClose()
    setTimeout(() => {
      onPop(count)
      this.setState({ count: 0 })
    }, 500)
  }

  _handlePush(component) {
    const { count } = this.state
    const { onOpen, onPush, open } = this.props
    this.setState({ count: count + 1 })
    onPush(component)
    if(!open) onOpen()
  }

  _handlePop(panels = 1) {
    const { count } = this.state
    const { onClose, onPop } = this.props
    if(count > 1) {
      this.setState({ count: count - panels })
      setTimeout(() => {
        onPop(panels)
      }, 500)
    } else {
      onClose()
      setTimeout(() => {
        this.setState({ count: count - panels })
        onPop(panels)
      }, 500)
    }
  }

  getChildContext() {
    return {
      modal: {
        open: this._handlePush.bind(this),
        close: this._handlePop.bind(this),
        pop: this._handlePop.bind(this),
        push: this._handlePush.bind(this)
      }
    }
  }

}

export default Modal
