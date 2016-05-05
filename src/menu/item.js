import React from 'react'
import ReactDOM from 'react-dom'
import {IndexLink} from 'react-router'

export default class MenuItem extends React.Component {

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
    accordion: false
  }

  render() {
    var iconElement = this.props.item.icon ? <i className={`${this.props.item.icon} icon`} /> : null

    if(this.props.item.items) {
      if(this.props.accordion)
        return <AccordionListItem {...this.props.item} />
      else
        return <DropdownListItem {...this.props.item} />
    }

    else if(this.props.item.handler) {
      return <a onClick={this.props.item.handler} className="item">{iconElement} {this.props.item.label}</a>
    }

    else if(this.props.item.route) {
      if(this.props.item.label) {
        return <IndexLink to={this.props.item.route} className="item">{iconElement} {this.props.item.label}</IndexLink>
      } else  if(this.props.item.image) {
        return <IndexLink to={this.props.item.route} className="item"><img src={this.props.item.image} className="ui image" /></IndexLink>
      }
    }

    else if(this.props.item.url) {
      if(this.props.item.label) {
        return <a href={this.props.item.url} className="item">{iconElement} {this.props.item.label}</a>
      } else  if(this.props.item.image) {
        return <a href={this.props.item.url} className="item"><img src={this.props.item.image} className="ui image" /></a>
      }
    }
  }

}

class DropdownListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui dropdown item">
        {(() => {
          if(this.props.image) {
            return <img src={this.props.image} className="ui image" />
          }
        })()}
        {(() => {
          if(this.props.icon) {
            return <i className={`${this.props.icon} icon`} />
          }
        })()}
        {this.props.label} <i className="dropdown icon" />
        <div className="menu">
          { this.props.items.map((item, index) => {
            return <MenuItem key={`item_${index}`} item={item} />
          })}
        </div>
      </div>
    );
  }
}

class AccordionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui inverted accordion item">
        <div className="title">
          {(() => {
            if(this.props.image) {
              return <img src={this.props.image} className="ui image" />
            }
          })()}
          {(() => {
            if(this.props.icon) {
              return <i className={`${this.props.icon} icon`} />
            }
          })()}
          {this.props.label} <i className="dropdown icon" />
        </div>
        <div className="content">
          { this.props.items.map((item, index) => {
            return <MenuItem key={`item_${index}`} item={item} />
          })}
        </div>
      </div>
    );
  }
}
