import { Empty, Results } from './results'
import Infinite from '../infinite'
import PropTypes from 'prop-types'
import Header from './header'
import Tasks from './tasks'
import React from 'react'
import _ from 'lodash'
import qs from 'qs'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object,
    router: PropTypes.object
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
      PropTypes.string
    ]),
    export: PropTypes.array,
    failure: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    filter: PropTypes.object,
    filters: PropTypes.array,
    handler: PropTypes.func,
    icon: PropTypes.string,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    link: PropTypes.string,
    managing: PropTypes.bool,
    modal: PropTypes.string,
    new: PropTypes.func,
    open: PropTypes.bool,
    panel: PropTypes.any,
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    search: PropTypes.bool,
    selected: PropTypes.array,
    selectable: PropTypes.bool,
    sort: PropTypes.object,
    table: PropTypes.array,
    tasks: PropTypes.array,
    token: PropTypes.string,
    onAddPanel: PropTypes.func,
    onClearPanel: PropTypes.func,
    onFetch: PropTypes.func,
    onRemovePanel: PropTypes.func,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSetColumns: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetQuery: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleTasks: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record',
    search: true,
    selectable: false
  }

  render() {
    const { endpoint, records } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-collection-body">
          <Header { ...this._getHeader() } />
          { records && <Results { ...this._getResuts() } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
        </div>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleTasks.bind(this) } />
        <Tasks { ...this._getTasks() } />
      </div>
    )
  }

  componentDidMount() {
    const { data, defaultSort, table, onSetParams, onSetColumns, onSetRecords } = this.props
    const filter = this._getFilterFromUrl() || this.props.filter || {}
    const sort = defaultSort || { key: 'created_at', order: 'desc' }
    onSetParams(filter, sort)
    if(table) onSetColumns(table)
    if(data) onSetRecords(data)
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props
    const { router } = this.context
    if(!_.isEqual(filter, prevProps.filter)) {
      const query = qs.stringify({ $filter: filter }, { encode: false })
      router.history.replace(router.route.location.pathname+'?'+query)
    }
  }

  _getFilterFromUrl() {
    const { location } = this.context.router.route
    if(_.isEmpty(location.search)) return null
    const query = qs.parse(location.search.substr(1))
    if(!query.$filter) return null
    return query.$filter
  }

  _getClass() {
    const classes = ['reframe-collection']
    if(this.props.managing) classes.push('managing')
    return classes.join(' ')
  }

  _getHeader() {
    const { filter, filters, search, tasks, onSetQuery, onToggleTasks } = this.props
    return {
      export: this.props.export,
      filter,
      filters,
      search,
      tasks,
      onSetQuery,
      onToggleTasks
    }
  }

  _getTasks() {
    return this.props
  }

  _getResults() {
    return {
      ...this.props
    }
  }

  _getInfinite() {
    const { cacheKey, endpoint, failure, loading, q, sort, onSetSelected } = this.props
    const filter = {
      ...this.props.filter,
      q
    }
    return {
      cacheKey,
      endpoint,
      filter,
      footer: ({ all, total }) => all ? <span><strong>NOW SHOWING:</strong> { total } / { all } records</span> : '',
      loading,
      empty: this._getEmpty(),
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort,
      onUpdateSelected: onSetSelected
    }
  }

  _getEmpty() {
    const { empty } = this.props
    if(_.isFunction(empty)) return React.createElement(empty, this.props)
    return <Empty { ...this.props } />
  }

  _handleToggleTasks() {
    this.props.onToggleTasks()
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
