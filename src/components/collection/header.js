import React from 'react'
import PropTypes from 'prop-types'
import Searchbox from '../searchbox'

class Header extends React.Component {

  static propTypes = {
    export: PropTypes.array,
    filters: PropTypes.array,
    filter: PropTypes.object,
    onSetQuery: PropTypes.func,
    onToggleFilter: PropTypes.func
  }

  render() {
    const { filters, filter } = this.props
    const count = Object.keys(filter).reduce((count, key) => {
      if(filter[key].$eq) return count + 1
      if(filter[key].$in) return count + filter[key].$in.length
      return count
    }, 0)
    return (
      <div className="reframe-collection-header">
        <div className="reframe-collection-header-search">
          <Searchbox { ...this._getSearchbox() } />
        </div>
        { filters &&
          <div className="reframe-collection-header-filter" title="Filter Records" onClick={ this._handleToggleMode.bind(this, 'filter') }>
            <i className="fa fa-sliders" />
            { count > 0 && <div className="reframe-collection-header-filter-count">{ count }</div> }
          </div>
        }
        { this.props.export &&
          <div className="reframe-collection-header-export" title="Export Records" onClick={ this._handleToggleMode.bind(this, 'export') }>
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

  _handleToggleMode(mode) {
    this.props.onToggleMode(mode)
  }

}

export default Header
