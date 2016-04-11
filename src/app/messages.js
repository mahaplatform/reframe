import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class Messages extends React.Component {
  render() {
    const colorClasses = {
      info: 'blue',
      error: 'red',
      warning: 'orange',
      success: 'green'
    }
    return (
      <div>
        {_(this.props.messages).map(message => {
          const color = colorClasses[message.messageType] || 'blue'
          const bannerClass = `ui inverted attached basic ${color} center aligned segment`
          return (
            <div className={bannerClass} style={{top: -6, border: 'none'}}>
              <b>{message.messageBody}</b>
              <div onClick={() => this.props.onClose(message.id)} style={{float: 'right'}} className="right floated"> <i className="x icon"/> </div>
            </div>
          )
        }).value()}
      </div>
    )
  }
}