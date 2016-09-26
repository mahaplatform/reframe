import React from 'react'
import {Link} from 'react-router'

class Breadcrumb extends React.Component {

  static propTypes = {
    item: React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      route: React.PropTypes.string
    })
  }

  render() {
    if(this.props.item.route) {
      return (
        <span>
          <Link to={this.props.item.route} className="section">{this.props.item.label}</Link>
          <div className="divider"> / </div>
        </span>
      )
    } else {
      return (
        <span>
          <div className="active section">{this.props.item.label}</div>
        </span>
      )
    }
  }

}

export default Breadcrumb