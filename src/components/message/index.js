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
    button: PropTypes.shape({
      label: PropTypes.string,
      modal: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func
      ])
    })
  }

  render() {
    const { button, icon, text, title } = this.props
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
      modal: button.modal
    }
  }

}

export default Message
