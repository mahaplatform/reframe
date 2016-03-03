import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

class Tab extends React.Component {

  render() {
    return <Link to={this.props.tab.route} className={this.props.active ? 'item active' : 'item'}>{this.props.tab.label}</Link>
  }
  
}

export default Tab