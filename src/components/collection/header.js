import React from 'react'
import PropTypes from 'prop-types'
import Searchbox from '../searchbox'

class Header extends React.Component {

  static propTypes = {
    export: PropTypes.array,
    filters: PropTypes.array,
    onSetQuery: PropTypes.func,
    onToggleFilter: PropTypes.func
  }

  render() {
    const { filters } = this.props
    return (
      <div className="reframe-collection-header">
        <div className="reframe-collection-header-search">
          <Searchbox { ...this._getSearchbox() } />
        </div>
        { filters &&
          <div className="reframe-collection-header-icon" title="Filter Records" onClick={ this._handleToggleFilter.bind(this) }>
            <i className="fa fa-sliders" />
          </div>
        }
        { this.props.export &&
          <div className="reframe-collection-header-icon" title="Export Records" onClick={ this._handleExport.bind(this) }>
            <i className="fa fa-download" />
          </div>
        }
      </div>
    )
  }

  _getSearchbox() {
    const { onSetQuery } = this.props
    return {
      onChange: onSetQuery
    }
  }

  _handleExport() {
    console.log('export')
  }

  _handleToggleFilter() {
    this.props.onToggleFilter()
  }

}

export default Header
