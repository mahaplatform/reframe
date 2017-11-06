import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import _ from 'lodash'

class Modal extends React.Component {

  static childContextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    panels: PropTypes.array,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onPop: PropTypes.func,
    onPush: PropTypes.func
  }

  state = {
    panels: []
  }

  render() {
    const { panels } = this.props
    const { children } = this.props
    return ([
      children,
      <CSSTransition key="reframe-modal-overlay" in={ panels.length > 0 } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} />
      </CSSTransition>,
      <CSSTransition key="reframe-modal-window" in={ panels.length > 0 } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-modal-window">
          <TransitionGroup>
            { panels.map((panel, index) => (
              <CSSTransition classNames={ index > 0 ? 'stack' : ''} timeout={ 500 } key={ `panel_${index}` }>
                <div>
                  { _.isFunction(panel) ? React.createElement(panel) : panel }
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </CSSTransition>
    ])
  }

  componentDidUpdate(prevProps, prevState) {
    const { panels } = this.props
    // if(panels.length > prevProps.panels.length) {
    //   this.setState({ panels })
    // } else if(panels.length < prevProps.panels.length) {
    //   setTimeout(() => this.setState({ panels }), 500)
    // }
  }

  getChildContext() {
    return {
      modal: {
        close: this._handleClose.bind(this),
        open: this._handleOpen.bind(this),
        pop: this._handlePop.bind(this),
        push: this._handlePush.bind(this)
      }
    }
  }

  _handleClose() {
    this.props.onClose()
  }

  _handleOpen(component) {
    this.props.onOpen(component)
  }

  _handlePop(num = 1) {
    this.props.onPop(num)
  }

  _handlePush(component) {
    this.props.onPush(component)
  }

}

export default Modal
