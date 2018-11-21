import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

class Message extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    animation: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    component: PropTypes.object,
    button: PropTypes.object
  }

  static defaultProps = {
    animation: null,
    color: null
  }

  state = {
    animate: false
  }

  render() {
    const { button, component, icon, image, text, title } = this.props
    return (
      <div className="reframe-message">
        <div className="reframe-message-panel">
          { icon &&
            <div className="reframe-message-panel-icon">
              <h2>
                <i className={ this._getIconClass() } />
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

  componentDidMount() {
    if(!this.props.animation) return
    setTimeout(() => {
      this.setState({ animate: true })
      setTimeout(() => {
        this.setState({ animate: false })
      }, 500)
    }, 500)
  }

  _getIconClass() {
    const { animate } = this.state
    const { animation, color, icon } = this.props
    const classes = ['fa', `fa-${icon}`]
    if(animate && animation) classes.push(`animated ${animation}`)
    if(color) classes.push(color)
    return classes.join(' ')
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
