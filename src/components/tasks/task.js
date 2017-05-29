import React from 'react'
import { Link } from 'react-router'

class Task extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    route: React.PropTypes.string,
    handler: React.PropTypes.func,
    primary: React.PropTypes.bool
  }

  static defaultProps = {
    primary: false
  }

  render() {
    const { label, route, handler, primary } = this.props
    const classes = primary ? "ui button" : ""
    if(route) {
      return <Link className={classes} to={route}>{label}</Link>
    } else if (handler) {
      return <a className={classes} onClick={handler.bind(this)}>{label}</a>
    }
  }

}

export default Task
