import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ModalPanel from '../../components/modal_panel'
import Loader from '../../components/loader'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Modal extends React.Component {

  static childContextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
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
    const { panels } = this.state
    const { children } = this.props
    return ([
      children,
      <CSSTransition key="reframe-modal-overlay" in={ this.props.panels.length > 0 } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-modal-overlay" onClick={this._handleClose.bind(this)} />
      </CSSTransition>,
      <CSSTransition key="reframe-modal-window" in={ this.props.panels.length > 0 } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-modal-window">
          { panels.length === 0 &&
            <ModalPanel>
              <Loader />
            </ModalPanel>
          }
          <TransitionGroup component={ null }>
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
    if(panels.length > prevProps.panels.length) {
      const timeout = prevProps.panels.length === 0 ? 500 : 0
      setTimeout(() => this.setState({ panels }), timeout)
    } else if(panels.length < prevProps.panels.length) {
      const timeout = panels.length === 0 ? 500 : 0
      setTimeout(() => this.setState({ panels }), timeout)
    }
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
