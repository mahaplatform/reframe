import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

class Breadcrumb extends React.Component {

  static propTypes = {
    item: React.PropTypes.shape({
      label: React.PropTypes.string,
      link: React.PropTypes.string,
      route: React.PropTypes.string
    })
  }

  static defaultProps = {
  }

  render() {
    if(this.props.item.route) {
      return (
        <span className=".item-item">
          <Link to={this.props.item.route} className="item">{this.props.item.label}</Link>
          <div className="divider"> / </div>
        </span>
      )
    } else if(this.props.item.link) {
      return (
        <span className=".item-item">
          <Link to={this.props.item.link} className="item">{this.props.item.label}</Link>
          <div className="divider"> / </div>
        </span>
      )
    } else {
      return (
        <span className=".item-item">
          <div className="active section">{this.props.item.label}</div>
        </span>
      )
    }
  }

}

export default Breadcrumb