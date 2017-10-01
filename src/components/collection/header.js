import React from 'react'
import PropTypes from 'prop-types'
import Searchbox from '../searchbox'

class Header extends React.Component {

  static propTypes = {
    filter: PropTypes.array,
    onSetQuery: PropTypes.func,
    onToggleFilter: PropTypes.func
  }

  render() {
    return (
      <div className="reframe-collection-header">
        <div className="reframe-collection-header-search">
          <Searchbox { ...this._getSearchbox() } />
        </div>
        <div className="reframe-collection-header-icon" onClick={ this._handleToggleFilter.bind(this) }>
          <i className="fa fa-sliders" />
        </div>
        <div className="reframe-collection-header-icon" onClick={ this._handleToggleFilter.bind(this) }>
          <i className="fa fa-download" />
        </div>
      </div>
    )
  }

  _getSearchbox() {
    const { onSetQuery } = this.props
    return {
      onChange: onSetQuery
    }
  }

  _handleToggleFilter() {
    this.props.onToggleFilter()
  }

}

export default Header
