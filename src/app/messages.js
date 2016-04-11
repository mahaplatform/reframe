import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Messages extends React.Component {
  render() {
    const colorClasses = {
      info: 'blue',
      error: 'red',
      warning: 'orange',
      success: 'green'
    }
    return (
      <div className="session message container">
        <ReactCSSTransitionGroup transitionName="session-message" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {_(this.props.messages).take(1).map(message => {
            const color = colorClasses[message.messageType] || 'blue'
            const bannerClass = `ui inverted basic ${color} center aligned segment session-message`
            return (
                <div key={`sessionMessage:${message.id}`} className={bannerClass} style={{border: 'none'}}>
                  <b>{message.messageBody}</b>
                  <div onClick={() => this.props.onClose(message.id)} style={{float: 'right'}} className="right floated"> <i className="x icon"/> </div>
                </div>
            )
          }).value()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}