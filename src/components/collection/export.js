import SortableList from '../sortable_list'
import pluralize from 'pluralize'
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
          <div className="reframe-collection-tasks-panel-footer-item">
            <div className="ui fluid red button" onClick={ this._handleDownload.bind(this, 'csv') }>
              Download CSV
            </div>
          </div>
          <div className="reframe-collection-tasks-panel-footer-item">
            <div className="ui fluid red button" onClick={ this._handleDownload.bind(this, 'xlsx') }>
              Download XLSX
            </div>
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

  _handleDownload(extension) {
    const { items } = this.state
    const { endpoint, entity, filter, sort, token } = this.props
    const query = {
      $filter: filter,
      $sort: sort,
      $select: items.filter(item => item.checked).reduce((select, item) => ({
        ...select,
        [item.label]: item.key
      }), {})
    }
    const entities = pluralize(entity)
    const enclosure = encodeURIComponent('"')
    const url = `${endpoint}.${extension}?enclosure=${enclosure}&filename=${entities}&token=${token}&download=true&${qs.stringify(query)}`
    window.location.href = url
  }

  _handleDone() {
    this.props.onDone()
  }

}

export default Export
