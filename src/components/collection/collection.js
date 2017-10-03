import React from 'react'
import PropTypes from 'prop-types'
import Export from '../export'
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
    export: PropTypes.array,
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
    mode: PropTypes.string,
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    token: PropTypes.string,
    onFetch: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetQuery: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleMode: PropTypes.func
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
          <Header { ...this._getHeader() } />
          { records && <Results { ...this.props } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
        </div>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleMode.bind(this) } />
        { filters &&
          <div className="reframe-collection-filter">
            <Filters { ...this._getFilters() } />
          </div>
        }
        { this.props.export &&
          <div className="reframe-collection-export">
            <Export { ...this._getExport() } />
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
    if(this.props.mode) classes.push(this.props.mode)
    return classes.join(' ')
  }

  _getHeader() {
    const { filters, onSetQuery, onToggleMode } = this.props
    return {
      export: this.props.export,
      filters,
      onSetQuery,
      onToggleMode
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

  _getExport() {
    const { endpoint, token } = this.props
    return {
      defaultValue: this.props.export,
      endpoint,
      filter: this._getFilter(),
      sort: this._getSort(),
      token
    }
  }

  _getSort() {
    const { sort } = this.props
    return sort.key ? (sort.order === 'desc' ? '-' : '') + sort.key : null
  }

  _getFilter() {
    const { filter, q } = this.props
    return {
      ...filter,
      q
    }
  }

  _getInfinite() {
    const { cacheKey, empty, endpoint, failure, loading, sort } = this.props
    return {
      cacheKey,
      endpoint,
      filter: this._getFilter(),
      loading,
      empty: _.isPlainObject(empty) ? <Empty { ...this.props } /> : empty,
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort
    }
  }

  _handleToggleMode() {
    this.props.onToggleMode(this.props.mode)
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
