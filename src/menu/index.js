import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './item.js'
import Search from './search.js'

class Menu extends React.Component {

  static propTypes = {
    menu: React.PropTypes.shape({
      left: React.PropTypes.array,
      right: React.PropTypes.array
    })
  }

  static defaultProps = {
    searchEndpoint: '/admin/search',
    searchQueryParam: 'q'
  }

  render() {
    return (
      <div className={this.props.menu.className}>
        <div className="ui menu fixed inverted" ref="menu">
          {(() => {
            if(this.props.menu.left) {
              return (
                <div className="menu">
                  { this.props.menu.left.map((item, index) => {
                    return <MenuItem key={`left_menu_item_${index}`} item={item} onClick={this.handleItemClick}/>
                  })}
                </div>
              )
            }
          })()}
          {(() => {
            if(this.props.menu.search) {
              return (
                <Search
                  endpoint={this.props.searchEndpoint}
                  query={this.props.searchQueryParam} />
              )
            }
          })()}
          {(() => {
            if(this.props.menu.right) {
              return (
                <div className="right menu">
                   { this.props.menu.right.map((item, index) => {
                      return <MenuItem key={`right_menu_item_${index}`} item={item} onClick={this.handleItemClick} />
                   })}
                </div>
              )
            }
          })()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.menu).find(".dropdown").dropdown({on: 'click'})
  }

  componentDidUpdate() {
    $(this.refs.menu).find(".dropdown").dropdown({on: 'click'})
  }

}

export default Menu
