import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Scrollpane from '../scrollpane'
import { Delayed, Empty, Failure, Loading, Timeout } from './results'

class Infinite extends React.Component {

  static PropTypes = {
    all: PropTypes.number,
    cacheKey: PropTypes.string,
    delayed: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    empty: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    endpoint: PropTypes.string,
    failure: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    filter: PropTypes.object,
    layout: PropTypes.func,
    loading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    records: PropTypes.array,
    status: PropTypes.string,
    timeout: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    total: PropTypes.number,
    onFetch: PropTypes.func,
    onFetchDelay: PropTypes.func,
    onFetchTimeout: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    delayed: Delayed,
    empty: Empty,
    failure: Failure,
    filter: {},
    loading: Loading,
    sort: {
      key: null,
      order: null
    },
    timeout: Timeout
  }

  render() {
    const { delayed, empty, failure, layout, loading, records, status, timeout } = this.props
    return (
      <div className="reframe-infinite">
        { status === 'loading' && !records && this._getComponent(loading) }
        { status === 'delayed' && this._getComponent(delayed) }
        { status === 'timeout' && this._getComponent(timeout) }
        { status === 'failed' && this._getComponent(failure) }
        { status !== 'failed' && records && records.length === 0 && this._getComponent(empty) }
        { status !== 'failed' && records && records.length > 0 &&
          <Scrollpane { ...this._getScrollpane() }>
            { _.isFunction(layout) ? React.createElement(layout, this.props) : layout }
            { status === 'loading' &&
              <div className="reframe-infinite-loader">
                <div className="ui active inverted dimmer">
                  <div className="ui small loader"></div>
                </div>
              </div>
            }
          </Scrollpane>
        }
      </div>
    )
  }

  componentDidMount() {
    this.timeout = null
    this._handleFetch(0)
  }

  componentDidUpdate(prevProps) {
    const { cacheKey, filter, sort, status } = this.props
    if(this.timeout && status !== prevProps.status && prevProps.status === 'loading') {
      clearTimeout(this.timeout)
    }
    if(cacheKey !== prevProps.cacheKey || !_.isEqual(prevProps.filter, filter) || !_.isEqual(prevProps.sort, sort)) {
      this._handleFetch(0)
    }
  }

  _getComponent(component) {
    return _.isFunction(component) ? React.createElement(component, this.props) : component
  }

  _getScrollpane() {
    return {
      onReachBottom: this._handleFetch.bind(this)
    }
  }

  _handleFetch(skip = null) {
    const { endpoint, filter, records, sort, total, onFetch } = this.props
    const loaded = records ? records.length : 0
    const $page = { skip: skip !== null ? skip : loaded }
    const query = { $page }
    if(filter) query.$filter = filter
    if(sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key
    if(skip === 0 || total === null || loaded < total) onFetch(endpoint, query)
    this.timeout = setTimeout(this._handleDelay.bind(this), 3000)
  }

  _handleDelay() {
    if(this.props.status !== 'loading') return
    this.props.onFetchDelay()
    this.timeout = setTimeout(this._handleTimeout.bind(this), 3000)
  }

  _handleTimeout() {
    if(this.props.status !== 'delyed') return
    this.props.onFetchTimeout()
  }

  _handleRefresh() {
    this.props.onFetchTimeout()
  }

}

export default Infinite
