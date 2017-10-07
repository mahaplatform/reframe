// @flow

import type { Node } from '../../types'
import type { Props, ChildContext } from './types'

import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Task from '../task'
import React from 'react'

class Tasks extends React.Component<Props, void> {

  static childContextTypes = {
    tasks: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  render(): Node {
    const { children, items, open } = this.props
    return ([
      children,
      <CSSTransition key="reframe-tasks-overlay" in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-tasks-overlay" onClick={ this._handleClose.bind(this) } />
      </CSSTransition>,
      <CSSTransition key="reframe-tasks-list" in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
        <div className="reframe-tasks-list">
          { items && items.map((item, index) => {
            if(item.show !== false) return (
              <Task key={`task_${index}`} { ...item } onDone={ this._handleClose.bind(this) } />
            )
          }) }
          <div className="reframe-tasks-cancel" onClick={ this._handleClose.bind(this) }>
            Cancel
          </div>
        </div>
      </CSSTransition>
    ])
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
      tasks: {
        open: onOpen,
        close: onClose
      }
    }
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Tasks
