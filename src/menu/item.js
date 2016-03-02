import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

class MenuItem extends React.Component {

  static propTypes = {
    item: React.PropTypes.shape({
      handler: React.PropTypes.string,
      image: React.PropTypes.string,
      label: React.PropTypes.string,
      route: React.PropTypes.string,
      url: React.PropTypes.string
    })
  }

  static defaultProps = {
  }

  render() {
    if(this.props.item.items) { 
      return (
        <div className="ui dropdown item">
          {(() => {
            if(this.props.item.image) {
              return <img src={this.props.item.image} className="ui image" />
            }
          })()}
          {this.props.item.label} <i className="dropdown icon" />
          <div className="menu">
             { this.props.item.items.map((item, index) => {
                return <MenuItem key={`item_${index}`} item={item} />
             })}
          </div>
        </div>
      )
    } else if(this.props.item.handler) {
      return <a onClick={this.props.item.handler} className="item">{this.props.item.label}</a>
    } else if(this.props.item.route) {
      if(this.props.item.label) {
        return <Link to={this.props.item.route} className="item">{this.props.item.label}</Link>
      } else  if(this.props.item.image) {
        return <Link to={this.props.item.route} className="item"><img src={this.props.item.image} className="ui image" /></Link>
      }
    } else if(this.props.item.url) {
      if(this.props.item.label) {
        return <a href={this.props.item.url} className="item">{this.props.item.label}</a>
      } else  if(this.props.item.image) {
        return <a href={this.props.item.url} className="item"><img src={this.props.item.image} className="ui image" /></a>
      }
    }
  }

}

export default MenuItem