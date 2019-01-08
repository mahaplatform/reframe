import { CSSTransition } from 'react-transition-group'
import { Empty, Results } from './results'
import Infinite from '../infinite'
import PropTypes from 'prop-types'
import Buttons from '../buttons'
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
    buttons: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.array
    ]),
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
    footer: PropTypes.bool,
    handler: PropTypes.func,
    icon: PropTypes.string,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    link: PropTypes.func,
    managing: PropTypes.bool,
    modal: PropTypes.string,
    new: PropTypes.func,
    open: PropTypes.bool,
    panel: PropTypes.any,
    q: PropTypes.string,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    rowClass: PropTypes.func,
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
    onSetSelected: PropTypes.func,
    onSetRecords: PropTypes.func,
    onToggleTasks: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    entity: 'record',
    footer: true,
    search: true,
    selectable: false
  }

  render() {
    const { buttons, endpoint, records } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-collection-canvas" onClick={ this._handleToggleTasks.bind(this) } />
        <Tasks { ...this._getTasks() } />
        <div className="reframe-collection-body">
          <Header { ...this._getHeader() } />
          { records && <Results { ...this._getResults() } /> }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
          <CSSTransition in={ !_.isNil(buttons) && !_.isNil(buttons(this.props)) } classNames="expanded" timeout={ 150 } mountOnEnter={ true } unmountOnExit={ true }>
            <div className="reframe-collection-footer">
              <div className="reframe-collection-footer-items">
                <Buttons { ...this._getButtons() } />
              </div>
            </div>
          </CSSTransition>
        </div>
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
      router.replace(router.pathname+'?'+query)
    }
  }

  _getFilterFromUrl() {
    const { search } = this.context.router
    if(_.isEmpty(search)) return null
    const query = qs.parse(search.replace('?',''))
    if(!query.$filter) return null
    return query.$filter
  }

  _getClass() {
    const classes = ['reframe-collection']
    if(this.props.managing) classes.push('managing')
    return classes.join(' ')
  }

  _getHeader() {
    const { filter, filters, managing, search, tasks, onSetQuery, onToggleTasks } = this.props
    return {
      export: this.props.export,
      filter,
      filters,
      managing,
      search,
      tasks,
      onSetQuery,
      onToggleTasks
    }
  }

  _getButtons() {
    if(!this.props.buttons) return { buttons: null }
    return {
      buttons: this.props.buttons(this.props)
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
    const footer = this.props.footer ? ({ all, total }) => all ? <span><strong>NOW SHOWING:</strong> { total } / { all } records</span> : '' : false
    return {
      cacheKey,
      endpoint,
      filter,
      footer,
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
