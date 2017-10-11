import SortableList from '../sortable_list'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Columns extends React.Component {

  render() {
    return (
      <div className="reframe-collection-tasks-panel">
        <div className="reframe-collection-tasks-panel-header">
          <div className="reframe-collection-tasks-panel-header-icon" onClick={ this._handleDone.bind(this) }>
            <i className="fa fa-chevron-left" />
          </div>
          <div className="reframe-collection-tasks-panel-header-title">
            Manage Columns
          </div>
          <div className="reframe-collection-tasks-panel-header-icon" />
        </div>
        <div className="reframe-collection-tasks-panel-body">
          <SortableList { ...this._getSortableList() } />
        </div>
        <div className="reframe-collection-tasks-panel-footer" onClick={ this._handleReset.bind(this) }>
          Reset Columns
        </div>
      </div>
    )
  }

  _getSortableList() {
    const { columns, onSetColumns } = this.props
    return {
      defaultValue: columns.map(column => ({
        label: column.label,
        checked: (column.visible !== false)
      })),
      onUpdate: (items) => onSetColumns(items.map(item => ({
        ..._.find(columns, { label: item.label }),
        visible: item.checked
      })))
    }
  }

  _handleReset() {
    this.props.onSetColumns(this.props.table)
  }

  _handleDone() {
    this.props.onDone()
  }

}

export default Columns
