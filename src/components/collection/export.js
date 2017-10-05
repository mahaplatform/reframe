import SortableList from '../sortable_list'
import PropTypes from 'prop-types'
import React from 'react'
import qs from 'qs'

class Export extends React.Component {

  state = {
    items: []
  }

  render() {
    const { items } = this.props
    return (
      <div className="reframe-collection-tasks-panel">
        <div className="reframe-collection-tasks-panel-header">
          <div className="reframe-collection-tasks-panel-header-icon" onClick={ this._handleDone.bind(this) }>
            <i className="fa fa-chevron-left" />
          </div>
          <div className="reframe-collection-tasks-panel-header-title">
            Export Results
          </div>
          <div className="reframe-collection-tasks-panel-header-icon" />
        </div>
        <div className="reframe-collection-tasks-panel-body">
          <SortableList { ...this._getSortableList() } />
        </div>
        <div className="reframe-collection-tasks-panel-footer">
          <div className="ui fluid red button" onClick={ this._handleClick.bind(this) }>
            Download Data
          </div>
        </div>
      </div>
    )
  }

  _getSortableList() {
    const { defaultValue } = this.props
    return {
      defaultValue,
      onUpdate: (items) => this.setState({ items })
    }
  }

  _handleClick() {
    const { items } = this.state
    const { endpoint, filter, sort, token } = this.props
    const query = {
      ...filter,
      $sort: sort,
      $select: items.filter(item => item.checked).reduce((select, item) => ({
        ...select,
        [item.label]: item.key
      }), {})
    }
    const url = `${endpoint}.csv?token=${token}&download=true&${qs.stringify(query)}`
    window.location.href = url
  }

  _handleDone() {
    this.props.onDone()
  }

}

export default Export
