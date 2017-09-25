import React from 'react'
import PropTypes from 'prop-types'
import Filter from '../filter'
import _ from 'lodash'
import Infinite from '../infinite'
import { Empty, Results } from './results'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    all: PropTypes.number,
    cacheKey: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    endpoint: PropTypes.string,
    entity: PropTypes.string,
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
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    total: PropTypes.number,
    onFetch: PropTypes.func,
    onFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetRecords: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record'
  }

  render() {
    const { endpoint, filter, records } = this.props
    return (
      <div className="reframe-collection">
        { filter &&
          <div className="reframe-collection-header">
            <Filter { ...this._getFilter() } />
          </div>
        }
        { records && <Results { ...this.props } /> }
        { endpoint && <Infinite { ...this._getInfinite() } /> }
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
    const { entity, filters, params, onFilter } = this.props
    const article = _.includes(['a','e','i','o'], entity[0]) ? 'an' : 'a'
    return {
      fields: filters,
      filters: params.filter,
      prompt: `Find ${article} ${entity}`,
      onChange: onFilter
    }
  }

  _getInfinite() {
    const { cacheKey, endpoint, params, loading, empty, failure } = this.props
    const { filter, sort } = params
    return {
      cacheKey,
      endpoint,
      filter,
      loading,
      empty: _.isPlainObject(empty) ? <Empty { ...this.props } /> : empty,
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
