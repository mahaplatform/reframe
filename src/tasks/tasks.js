import React from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'

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
      <div className="chrome-tasks">
        { children }
        <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionAppear={true} transitionAppearTimeout={250}>
          { items && <div className="chrome-tasks-overlay" onClick={ this._handleClose.bind(this) } /> }
          { items &&
            <div className="chrome-tasks-list">
              {items.map((item, index) => {
                return (
                  <div key={`task_${index}`} className="chrome-tasks-item" onClick={ this._handleChoose.bind(this, index) }>
                    { item.label }
                  </div>
                )
              })}
              <div className="chrome-tasks-cancel" onClick={ this._handleClose.bind(this) }>
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
    this._handleClose()
    if(items[index].route) {
      this.context.history.push(items[index].route)
    } else if(items[index].modal){
      this.context.modal.push(items[index].modal)
    } else if(items[index].drawer){
      const location = items[index].location || 'right'
      this.context.drawer.open(items[index].drawer, location)
    } else if(items[index].handler){
      items[index].handler()
    }
  }

  _handleClose() {
    this.props.onClose()
  }

}

export default Tasks
