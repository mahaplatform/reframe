import React from 'react'
import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import Filter from '../filter'
import _ from 'lodash'
import Infinite from '../infinite'
import { Empty, Results } from './results'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static PropTypes = {
    all: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.array,
    entity: PropTypes.object,
    empty: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
      PropTypes.shape({
        icon: PropTypes.string,
        message: PropTypes.string,
        modal: PropTypes.func
      })
    ]),
    failure: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    filter: PropTypes.object,
    filters: PropTypes.array,
    handler: PropTypes.func,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    link: PropTypes.string,
    modal: PropTypes.string,
    params: PropTypes.object,
    records: PropTypes.array,
    sort: PropTypes.object,
    total: PropTypes.number
  }

  static defaultProps = {
    entity: 'record'
  }

  render() {
    const { filters, records } = this.props
    return (
      <div className="reframe-collection">
        <div className="reframe-collection-layout">
          { filters &&
            <div className="reframe-collection-header">
              <Filter { ...this._getFilter() } />
            </div>
          }
          { records ? <Results { ...this.props } /> : <Infinite { ...this._getInfinite() } /> }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { data, onSetRecords } = this.props
    const filter = this.props.filter || {}
    const sort = this.props.sort || { key: 'created_at', order: 'desc' }
    this.props.onSetParams(filter, sort)
    if(data) onSetRecords(data)
  }

  _getFilter() {
    const { filters, params, onFilter } = this.props
    return {
      fields: filters,
      filters: params.filter,
      onChange: onFilter
    }
  }

  _getInfinite() {
    const { endpoint, params, loading, empty, failure } = this.props
    const { filter, sort } = params
    return {
      endpoint,
      filter,
      loading,
      empty: <Empty { ...this.props } />,
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort
    }
  }

  _handleFetch(skip = null) {
    const { endpoint, records, params, total, onFetch } = this.props
    if(!endpoint) return
    const { filter, sort } = params
    const loaded = records.length
    const $page = { skip: skip !== null ? skip : loaded }
    const query = { $page }
    if(filter) query.$filter = filter
    if(sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key
    if(skip === 0 || loaded < total) onFetch(endpoint, query)
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
