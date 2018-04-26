import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task'

class Message extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.object,
    button: PropTypes.shape({
      handler: PropTypes.func,
      label: PropTypes.string,
      modal: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
      ]),
      request: PropTypes.object
    })
  }

  render() {
    const { button, component, icon, text, title } = this.props
    return (
      <div className="reframe-message">
        <div className="reframe-message-panel">
          { icon &&
            <div className="reframe-message-panel-icon">
              <h2>
                <i className={`fa fa-${icon}`} />
              </h2>
            </div>
          }
          { title && <h3>{ title }</h3> }
          { text && <p>{ text }</p> }
          { component }
          { button && <Task { ...this._getTask() } /> }
        </div>
      </div>
    )
  }

  _getTask() {
    const { button } = this.props
    return {
      className: 'ui basic red button',
      label: button.label,
      modal: button.modal,
      handler: button.handler,
      request: button.request
    }
  }

}

export default Message
