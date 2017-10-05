import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Infinite from '../infinite'
import { Empty, Results } from './results'
import Header from './header'
import Tasks from './tasks'

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
    filtered: PropTypes.object,
    filters: PropTypes.array,
    handler: PropTypes.func,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    link: PropTypes.string,
    managing: PropTypes.bool,
    modal: PropTypes.string,
    mode: PropTypes.string,
    panel: PropTypes.any,
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    tasks: PropTypes.array,
    token: PropTypes.string,
    onAddPanel: PropTypes.func,
    onClearPanel: PropTypes.func,
    onFetch: PropTypes.func,
    onRemovePanel: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetParams: PropTypes.func,
    onSetQuery: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleTasks: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record'
  }

  render() {
    const { endpoint, records } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-collection-body">
          <Header { ...this._getHeader() } />
          { records && <Results { ...this.props } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
        </div>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleTasks.bind(this) } />
        <Tasks { ...this._getTasks() } />
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
    if(this.props.managing) classes.push('managing')
    return classes.join(' ')
  }

  _getHeader() {
    const { filter, filters, tasks, onSetQuery, onToggleTasks } = this.props
    return {
      export: this.props.export,
      filter,
      filters,
      tasks,
      onSetQuery,
      onToggleTasks
    }
  }

  _getTasks() {
    return {
      ...this.props
    }
  }

  _getInfinite() {
    const { cacheKey, empty, endpoint, failure, filtered, loading, sort } = this.props
    return {
      cacheKey,
      endpoint,
      filter: filtered,
      loading,
      empty: _.isPlainObject(empty) ? <Empty { ...this.props } /> : empty,
      failure,
      layout: (props) => <Results { ...this.props } { ...props } />,
      sort
    }
  }

  _handleToggleTasks() {
    this.props.onToggleTasks()
  }

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}

export default Collection
