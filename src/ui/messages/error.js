import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class ErrorMessage extends React.Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    plain: PropTypes.bool.isRequired
  }
  
  static defaultProps = {
    title: "Error",
    message: "This component couldn't be displayed because there was a problem with this part of the page.",
    plain: false
  }

  static contextTypes = {
    config: PropTypes.object
  }
  
  render() {
    const settings = _.get(this.context, 'config.ui.messages.error', { color: '#db2828', backgroundColor: '#ffe8e6', colorClass: 'red'})
    const {title, message, plain} = this.props

    if(plain) {
      return (<div style={{color: settings.color, backgroundColor: settings.backgroundColor, padding: '1em'}}>
        <b>{title}</b>
        <p>{message}</p>
      </div>)
    }
    else {
      return (
        <div className={`ui ${settings.colorClass} message`}>
          <div className="header">{title}</div>
          <p>{message}</p>
        </div>
      )
    }
  }
}
