import React from 'react'
import PropTypes from 'prop-types'
import Table from '../table'

class Collection extends React.Component {

  static PropTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    filter: PropTypes.object,
    params: PropTypes.shape({
      filter: PropTypes.object,
      sort: PropTypes.object,
    }),
    records: PropTypes.array,
    sort: PropTypes.shape({
      key: PropTypes.string,
      order: PropTypes.string,
    })
  }

  render() {
    const { children } = this.props
    return (
      <div className="reframe-collection">
        <div className="reframe-collection-layout">
          <Table { ...this._getTable() } />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { data, onSetRecords } = this.props
    const filter = this.props.filter || {}
    const sort = this.props.sort || {
      key: 'created_at',
      order: 'desc'
    }
    this.props.onSetParams(filter, sort)
    if(data) onSetRecords(data)
  }

  _getTable() {
    const { columns, params, records, total, onSort } = this.props
    const { sort } = params
    return {
      columns,
      records,
      sort,
      total: 300,
      onLoadMore: () => console.log(`Load More`),
      onSort: onSort.bind(this)
    }
  }

}

export default Collection
