import React from 'react'
import PropTypes from 'prop-types'
import Table from '../table'

export const Loading = () => (
  <div className="reframe-collection-loader">
    <div className="ui active inverted dimmer">
      <div className="ui small loader"></div>
    </div>
  </div>
)

export const Empty = () => (
  <div className="reframe-collection-empty">
    <div className="reframe-collection-empty-message">
      <h2><i className="circular remove icon" /></h2>
      <h3>No Results Found</h3>
      <p>No records matched your query</p>
    </div>
  </div>
)

export const Failure = () => (
  <div className="reframe-error">
    <div className="reframe-error-message">
      <i className="warning sign icon" />
      <h2>Unable to load<br /> records</h2>
    </div>
  </div>
)

export class Results extends React.Component {

  render() {
    const { columns, layout } = this.props
    if(columns) return <Table { ...this._getTable() } />
    if(layout) return React.createElement(layout, { ...this._getCustomLayout() })
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
