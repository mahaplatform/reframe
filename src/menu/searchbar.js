import React from 'react'
import ReactDOM from 'react-dom'
import MenuItem from './item.js'
import Search from './search.js'

export default class Searchbar extends React.Component {
  static defaultProps = {
    onClickMenuButton: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menuButton = {
      icon: 'sidebar',
      handler: () => this.props.onClickMenuButton()
    }
    return (
      <div className="ui mobile menu fixed inverted application-menu" ref="menu">
        <div className="left menu">
          <MenuItem key={`toggle_menu_button`} item={menuButton} onClick={this.props.onClickMenuButton} />
        </div>
        {(() => {
          if(this.props.menu.search) {
            return (
              <Search
                endpoint={this.props.menu.search.endpoint || '/admin/search'}
                query={this.props.menu.search.queryParam || 'q'}
                itemComponent={this.props.menu.search.resultComponent}
                routes={this.props.menu.search.routes} />
            )
          }
        })()}
      </div>
    );
  }

  componentDidMount() {
    $(this.refs.menu).find(".dropdown").dropdown({on: 'click'})
  }

  componentDidUpdate() {
    $(this.refs.menu).find(".dropdown").dropdown({on: 'click'})
  }
}
