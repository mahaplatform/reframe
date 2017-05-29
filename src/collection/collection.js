import React from 'react'
import PropTypes from 'prop-types'
import Table from '../table'

class Collection extends React.Component {

  static PropTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
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
    if(data) onSetRecords(data)
  }

  _getTable() {
    const { columns, records, sort } = this.props
    return {
      columns,
      records,
      sort,
      total: 300,
      onLoadMore: () => console.log(`Load More`),
      onSort: (key) => console.log(`Sort ${key}`)
    }
  }

}

export default Collection
