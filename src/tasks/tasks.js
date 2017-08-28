import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

class Tasks extends React.Component {

  static childContextTypes = {
    tasks: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    router: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    items: PropTypes.array,
    open: PropTypes.bool,
    onClear: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  render() {
    const { children, items, open } = this.props
    return (
      <div className="reframe-tasks">
        { children }
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tasks-overlay" onClick={ this._handleClose.bind(this) } />
        </CSSTransition>
        <CSSTransition in={ open } classNames="expanded" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-tasks-list">
            { items && items.map((item, index) => (
              <div key={`task_${index}`} className="reframe-tasks-item" onClick={ this._handleChoose.bind(this, index) }>
                { item.label }
              </div>
            )) }
            <div className="reframe-tasks-cancel" onClick={ this._handleClose.bind(this) }>
              Cancel
            </div>
          </div>
        </CSSTransition>
      </div>
    )
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
      tasks: {
        open: onOpen,
        close: onClose
      }
    }
  }

  _handleChoose(index) {
    const { items } = this.props
    const { drawer, modal, router } = this.context
    if(items[index].route) {
      router.history.push(items[index].route)
      this._handleClose()
    } else if(items[index].modal){
      modal.open(items[index].modal)
      this._handleClose()
    } else if(items[index].drawer){
      const location = items[index].location || 'right'
      drawer.open(items[index].drawer, location)
      this._handleClose()
    } else if(items[index].handler){
      const done = this._handleClose.bind(this)
      items[index].handler(done)
    }
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Tasks
