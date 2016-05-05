import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './item.js'
import Search from './search.js'
import _ from 'lodash'

export default class OffcanvasMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`ui sidebar inverted vertical fluid ${this.props.visible ? 'visible' : ''} menu`} ref="menu">
        {_.map(this.props.menu.left, (item, index) => {
          return <MenuItem accordion key={`left_menu_item_${index}`} item={item} onClick={this.handleItemClick}/>
        })}
        {_.map(this.props.menu.right, (item, index) => {
          return <MenuItem accordion key={`right_menu_item_${index}`} item={item} onClick={this.handleItemClick} />
        })}
      </div>
    )
  }
  
  handleItemClick() {
    
  }

  componentDidMount() {
    $(this.refs.menu).find(".accordion").accordion({on: 'click'})
  }

  componentDidUpdate() {
    $(this.refs.menu).find(".accordion").accordion({on: 'click'})
  }

}
