import React from 'react'
import {Link} from 'react-router'

class Breadcrumb extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    route: React.PropTypes.string
  }

  render() {
    if(this.props.route) {
      return (
        <span>
          <Link to={this.props.route} className="section">{this.props.label}</Link>
          <div className="divider"> / </div>
        </span>
      )
    } else {
      return (
        <span>
          <div className="active section">{this.props.label}</div>
        </span>
      )
    }
  }

}

export default Breadcrumb
