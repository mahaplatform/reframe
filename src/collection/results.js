import React from 'react'
import Table from '../table'
import _ from 'lodash'
import pluralize from 'pluralize'

export const Empty = (props) => (
  <div className="reframe-message">
    <div className="reframe-message-panel">
      <h2><i className={`circular ${props.empty.icon} icon`} /></h2>
      <h3>No { _.startCase(pluralize(props.entity.replace('_', ' '))) }</h3>
      <p>You have not yet created any { pluralize(props.entity.replace('_', ' ')) }</p>
      { props.empty.modal &&
        <div className="ui basic button red" onClick={ props.onAddNew.bind(this)}>
          <i className="plus icon" />
          Create New {_.startCase(props.entity.replace('_', ' '))}
        </div>
      }
    </div>
  </div>
)

export class Results extends React.Component {

  render() {
    const { columns, layout } = this.props
    if(columns) return <Table { ...this._getTable() } />
    if(layout) return React.createElement(layout, { ...this._getCustomLayout() })
  }

  _getScrollpane() {
    return {
      onReachBottom: this.props.onLoadMore.bind(this)
    }
  }

  _getTable() {
    const { columns, handler, link, modal, params, records, status, onLoadMore, onSort } = this.props
    const { sort } = params
    return {
      columns,
      export: this.props.export,
      handler,
      link,
      modal,
      records,
      sort,
      status,
      onLoadMore,
      onSort
    }
  }

  _getCustomLayout() {
    const { records, sort, status, onLoadMore, onSort  } = this.props
    return {
      records,
      sort,
      status,
      onLoadMore,
      onSort
    }
  }

}
