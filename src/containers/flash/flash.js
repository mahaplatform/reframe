// @flow

import type { Props } from './types'
import type { Element } from 'react'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'

class Flash extends React.Component<Props, void> {

  static childContextTypes = {
    flash: PropTypes.object
  }

  render() {
    const { children, message, style } = this.props
    return ([
      children,
      <CSSTransition key="reframe-flash" in={ message !== null } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className={`reframe-flash-popup ${style}`}>
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

  componentDidUpdate(prevProps: Props): void {
    const { message, onClear } = this.props
    if(prevProps.message !== message && message) {
      setTimeout(onClear, 2000)
    }
  }

  _getIcon(style: string): Element<'i'> {
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
