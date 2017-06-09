import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

class Outlet extends React.Component {

  render() {
    return <div className="reframe-tasks-outlet">{ this.props.children }</div>
  }

  shoudlComponentUpdate() {
    return true
  }

}
class Tasks extends React.Component {

  static childContextTypes = {
    tasks: PropTypes.object
  }

  static contextTypes = {
    drawer: PropTypes.object,
    modal: PropTypes.object,
    history: PropTypes.object
  }

  static propsTypes = {
    items: PropTypes.array,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  }

  render() {
    const { children, items } = this.props
    return (
      <div className="reframe-tasks">
        { children }
        <CSSTransitionGroup component={ Outlet } transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionAppear={true} transitionAppearTimeout={250}>
          { items && <div className="reframe-tasks-overlay" onClick={ this._handleClose.bind(this) } /> }
          { items &&
            <div className="reframe-tasks-list">
              {items.map((item, index) => {
                return (
                  <div key={`task_${index}`} className="reframe-tasks-item" onClick={ this._handleChoose.bind(this, index) }>
                    { item.label }
                  </div>
                )
              })}
              <div className="reframe-tasks-cancel" onClick={ this._handleClose.bind(this) }>
                Cancel
              </div>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
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
    if(items[index].route) {
      this.context.history.push(items[index].route)
      this._handleClose()
    } else if(items[index].modal){
      this.context.modal.open(items[index].modal)
      this._handleClose()
    } else if(items[index].drawer){
      const location = items[index].location || 'right'
      this.context.drawer.open(items[index].drawer, location)
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
