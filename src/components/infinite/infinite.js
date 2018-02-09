import React from 'react'
import _ from 'lodash'
import Scrollpane from '../scrollpane'
import { Appending, Delayed, Empty, Failure, Loader, NotFound, Timeout } from './results'

class Infinite extends React.Component {

  timeout: any = null

  static defaultProps = {
    cacheKey: null,
    delayed: Delayed,
    empty: Empty,
    failure: Failure,
    filter: {},
    footer: null,
    header: null,
    loading: Loader,
    notFound: NotFound,
    sort: {
      key: null,
      order: null
    },
    timeout: Timeout,
    onUpdateSelected: (ids) => {}
  }

  render() {
    const { all, delayed, empty, failure, footer, header, layout, loading, notFound, records, status, timeout, total } = this.props
    return (
      <div className="reframe-infinite">
        { header &&
          <div className="reframe-infinite-header">
            { React.createElement(header, this.props) }
          </div>
        }
        { status === 'loading' && !records && this._getComponent(loading) }
        { status === 'delayed' && this._getComponent(delayed) }
        { status === 'timeout' && this._getComponent(timeout) }
        { status === 'failed' && this._getComponent(failure) }
        { status !== 'failed' && total === 0 && all !== 0 && this._getComponent(notFound) }
        { status !== 'failed' && total === 0 && all === 0 && this._getComponent(empty) }
        { status !== 'failed' && records && records.length > 0 && layout &&
          <Scrollpane { ...this._getScrollpane() }>
            { React.createElement(layout, this.props) }
          </Scrollpane>
        }
        { status === 'loading' && records && records.length > 0 && this._getComponent(Appending) }
        { footer && total !== null && total !== 0 &&
          <div className="reframe-infinite-footer">
            { React.createElement(footer, this.props) }
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    this.timeout = null
    this._handleFetch(0)
  }

  // shouldComponentUpdate(nextProps: any, nextState: any): boolean {
  //   return ['all','cacheKey','exclude_ids','filter','records','sort','status','selected','total'].reduce((update, key) => {
  //     return update || !_.isEqual(this.props[key], nextProps[key])
  //   }, false)
  // }

  componentDidUpdate(prevProps) {
    const { cacheKey, exclude_ids, filter, records, selected, sort, status, onUpdateSelected } = this.props
    if(this.timeout && status !== prevProps.status && prevProps.status === 'loading') {
      clearTimeout(this.timeout)
    }
    if(cacheKey !== prevProps.cacheKey || !_.isEqual(prevProps.exclude_ids, exclude_ids)  || !_.isEqual(prevProps.filter, filter) || !_.isEqual(prevProps.sort, sort)) {
      this._handleFetch(0)
    }
    if(selected !== prevProps.selected && selected && records) {
      const selectedRecords = records.filter(record => _.includes(selected, record.id))
      if(onUpdateSelected) onUpdateSelected(selectedRecords)
    }
  }

  _getComponent(component){
    return _.isFunction(component) ? React.createElement(component, this.props) : component
  }

  _getScrollpane() {
    return {
      onReachBottom: this._handleFetch.bind(this)
    }
  }

  _handleFetch(skip = null) {
    const { endpoint, exclude_ids, filter, records, sort, total, onFetch } = this.props
    const loaded = records ? records.length : 0
    const query = {
      $page: { skip: skip !== null ? skip : loaded },
      ...(filter ? { $filter: filter } : {}),
      ...(sort && sort.key ? { $sort: (sort.order === 'desc' ? '-' : '') + sort.key } : {}),
      ...(exclude_ids ? { $exclude_ids: exclude_ids } : {})
    }
    if(onFetch && (skip === 0 || total === null || total === undefined || loaded < total)) onFetch(endpoint, query)
    this.timeout = setTimeout(this._handleDelay.bind(this), 3000)
  }

  _handleDelay() {
    const { status, onFetchDelay } = this.props
    if(status !== 'loading') return
    if(onFetchDelay) onFetchDelay()
    this.timeout = setTimeout(this._handleTimeout.bind(this), 3000)
  }

  _handleTimeout() {
    const { status, onFetchTimeout } = this.props
    if(status !== 'delyed') return
    if(onFetchTimeout) onFetchTimeout()
  }

  _handleRefresh() {
    const { onFetchTimeout } = this.props
    if(onFetchTimeout) onFetchTimeout()
  }

}

export default Infinite
