// @flow

import type { Props, State } from './types'
import type { Element } from 'react'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'

class Flash extends React.Component<Props, any> {

  static childContextTypes = {
    flash: PropTypes.object
  }

  state = {
    message: null,
    style: null
  }

  render() {
    const { children } = this.props
    const { message, style } = this.state
    return ([
      children,
      <CSSTransition key="reframe-flash" in={ this.props.message !== null } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className={`reframe-flash-popup ${style || ''}`}>
          <div className="reframe-flash-popup-panel">
            <div className="reframe-flash-popup-icon">
              { this._getIcon(style) }
            </div>
            <div className="reframe-flash-popup-message">
              <p>{ message }</p>
            </div>
          </div>
        </div>
      </CSSTransition>
    ])
  }

  componentDidUpdate(prevProps: Props, prevState: State): void {
    const { message, style, onClear } = this.props
    if(prevProps.message !== message) {
      if(message) {
        this.setState({ message, style })
        setTimeout(onClear, 2000)
      } else {
        setTimeout(() => this.setState({ message, style }), 250)
      }
    }
  }

  _getIcon(style: any): Element<'i'> {
    if(style == 'success') {
      return <i className="fa fa-check-circle" />
    } else if(style == 'warning') {
      return <i className="fa fa-warning" />
    } else if(style == 'error') {
      return <i className="fa fa-times-circle" />
    } else {
      return <i className="fa fa-info-circle" />
    }
  }

  getChildContext(): any {
    const { onSet, onClear } = this.props
    return {
      flash: {
        set: onSet,
        clear: onClear
      }
    }
  }

}

export default Flash
