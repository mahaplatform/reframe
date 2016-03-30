import React from 'react'
import ReactDOM from 'react-dom'
import {IndexLink} from 'react-router'

class Task extends React.Component {

  render() {
    if(this.props.task.handler) {
      return <a onClick={this.props.task.handler} activeClassName="active" className="item">{this.props.task.label}</a>
    } else if(this.props.task.url) {
      return <a href={this.props.task.url} activeClassName="active" className="item">{this.props.task.label}</a>
    } else if(this.props.task.route) {
      return <IndexLink to={this.props.task.route} activeClassName="active" className="item">{this.props.task.label}</IndexLink>
    } else if(this.props.task.link) {
      return <IndexLink to={this.props.task.link} activeClassName="active" className="item">{this.props.task.label}</IndexLink>
    }
  }
  
}

export default Task