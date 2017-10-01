import React from 'react'
import PropTypes from 'prop-types'
import Filters from '../filters'
import _ from 'lodash'
import Infinite from '../infinite'
import { Empty, Results } from './results'
import Header from './header'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    cacheKey: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    defaultSort: PropTypes.object,
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
    filtering: PropTypes.bool,
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
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    onFetch: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetQuery: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleFilter: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record'
  }

  render() {
    const { endpoint, filters, records } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-collection-body">
          { filters &&
            <Header { ...this._getHeader() } />
          }
          { records && <Results { ...this.props } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
        </div>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleFilter.bind(this) } />
        { filters &&
          <div className="reframe-collection-filter">
            <Filters { ...this._getFilters() } />
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { data, defaultSort, onSetParams, onSetRecords } = this.props
    const filter = this.props.filter || {}
    const sort = defaultSort || { key: 'created_at', order: 'desc' }
    onSetParams(filter, sort)
    if(data) onSetRecords(data)
  }

  _getClass() {
    const classes = ['reframe-collection']
    if(this.props.filtering) classes.push('filtering')
    return classes.join(' ')
  }

  _getHeader() {
    const { onSetQuery, onToggleFilter } = this.props
    return {
      onSetQuery,
      onToggleFilter
    }
  }

  _getFilters() {
    const { entity, filters, filter, onSetFilter } = this.props
    const article = _.includes(['a','e','i','o'], entity[0]) ? 'an' : 'a'
    return {
      filters,
      values: filter,
      prompt: `Find ${article} ${entity}`,
      onUpdate: onSetFilter
    }
  }

  _getInfinite() {
    const { cacheKey, empty, endpoint, failure, filter, loading, q, sort } = this.props
    return {
      cacheKey,
      endpoint,
      filter: { ...filter, q },
      loading,
      empty: _.isPlainObject(empty) ? <Empty { ...this.props } /> : empty,
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort
    }
  }

  _handleToggleFilter() {
    this.props.onToggleFilter()
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
