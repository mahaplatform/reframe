import React from 'react'
import PropTypes from 'prop-types'
import Searchbox from '../searchbox'

class Header extends React.Component {

  static propTypes = {
    export: PropTypes.array,
    filters: PropTypes.array,
    filter: PropTypes.object,
    managing: PropTypes.bool,
    search: PropTypes.bool,
    tasks: PropTypes.array,
    onSetQuery: PropTypes.func,
    onToggleTasks: PropTypes.func
  }

  render() {
    const { filters, filter, managing, search, tasks } = this.props
    if(!filters && !this.props.export && !search && !tasks) return null
    const count = Object.keys(filter).reduce((count, key) => {
      if(filter[key].$eq) return count + 1
      if(filter[key].$in) return count + filter[key].$in.length
      return count
    }, 0)
    return (
      <div className="reframe-collection-header">
        <div className="reframe-collection-header-container">
          { (filters || this.props.export || tasks) &&
            <div className="reframe-collection-header-tasks" onClick={ this._handleToggleTasks.bind(this) }>
              { managing ? <i className="fa fa-times" /> : <i className="fa fa-sliders" /> }
            </div>
          }
          { search &&
            <div className="reframe-collection-header-search">
              <Searchbox { ...this._getSearchbox() } />
            </div>
          }
        </div>
      </div>
    )
  }

  _getSearchbox() {
    const onChange = this.props.onSetQuery
    return { onChange }
  }

  _handleToggleTasks() {
    this.props.onToggleTasks()
  }

}

export default Header
