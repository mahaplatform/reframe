import React from 'react'
import ReactDOM from 'react-dom'
import Logger from 'utils/logger'
import App from 'app'

export default class AppExample extends React.Component {
  render() {
    return (
      <div className="ui very padded segment">
        <App endpoint="/examples/session.json">
          <ExampleApplication/>
        </App>
      </div>
    )
  }
}

class ExampleApplication extends React.Component {
  static contextTypes = {
    config: React.PropTypes.object,
    user: React.PropTypes.object,
    session: React.PropTypes.object
  }

  render() {
    return (
      <div>
        <div className="user">
          <h1>{this.context.user.name}</h1>
          <img src={this.context.user.photo} alt="User Photo"/>
          <p><i className="ui mail icon"></i>{this.context.user.email}</p>
        </div>
        <div className="config">
          <p>Theme: {this.context.config.theme}</p>
        </div>
        <div className="session">
          <p>Token: {this.context.session.token}</p>
        </div>
        <div className="messages">
          <div className="ui button" onClick={this.showMessage.bind(this)}>Show Message</div>
        </div>
      </div>
    )
  }

  showMessage() {
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        this.context.session.showMessage("Well this is embarrassing.", 'error')
        break
      case 2:
        this.context.session.showMessage("I thought you oughtta know.", 'info')
        break
      case 3:
        this.context.session.showMessage("Congratulations.", 'success')
        break
    }
  }
}