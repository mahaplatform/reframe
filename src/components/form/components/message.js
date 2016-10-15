import React from 'react'

class Message extends React.Component {

  static propTypes = {
    message: React.PropTypes.object
  }

  static defaultProps = {
    message: null
  }

  render() {
    const { message } = this.props
    return (
      <div className={`ui ${message.type} message visible`}>
        <div className="header">{message.title}</div>
        <p>{message.text}</p>
      </div>
    )
  }

}

export default Message
