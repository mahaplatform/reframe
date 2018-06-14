import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

class Message extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    icon: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    component: PropTypes.object,
    button: PropTypes.object
  }

  render() {
    const { button, component, icon, image, text, title } = this.props
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
          { image &&
            <div className="reframe-message-panel-icon">
              <img src={ image } />
            </div>
          }
          { title && <h3>{ title }</h3> }
          { text && <p>{ text }</p> }
          { component }
          { button && <Button { ...this._getButton() } /> }
        </div>
      </div>
    )
  }

  _getButton() {
    const { button } = this.props
    return {
      basic: true,
      color: 'red',
      label: button.label,
      modal: button.modal,
      handler: button.handler,
      request: button.request
    }
  }

}

export default Message
