// @flow

import type { Node } from '../../types'
import type { Props, ChildContext } from './types'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Popup extends React.Component<Props, void> {

  static childContextTypes = {
    popup: PropTypes.object
  }

  render(): Node {
    const { children, component, open } = this.props
    return (
      <div className="reframe-popup">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-popup-panel">
            <div className="reframe-popup-panel-item">
              { component && ( _.isFunction(component) ? React.createElement(component) : component ) }
            </div>
          </div>
        </CSSTransition>
      </div>
    )
  }

  componentDidUpdate(prevProps: Props): void {
    const { open, onClear } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClear, 500)
    }
  }

  getChildContext(): ChildContext {
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