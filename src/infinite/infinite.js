import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Scrollpane from '../scrollpane'

class Infinite extends React.Component {

  static PropTypes = {
    all: PropTypes.number,
    cacheKey: PropTypes.string,
    empty: PropTypes.func,
    endpoint: PropTypes.string,
    filter: PropTypes.object,
    layout: PropTypes.func,
    loading: PropTypes.func,
    records: PropTypes.array,
    status: PropTypes.string,
    total: PropTypes.number,
    onFetch: PropTypes.func
  }

  static defaultProps = {
    cacheKey: null,
    sort: {
      key: null,
      order: null
    },
    filter: {}
  }

  render() {
    const { empty, layout, loading, records, status } = this.props
    return (
      <div className="reframe-infinite">
        { status === 'loading' && !records && ( _.isFunction(loading) ? React.createElement(loading) : loading ) }
        { status === 'delayed' &&
          <div className="reframe-collection-empty">
            <div className="reframe-collection-empty-message">
              <h2><i className="circular hourglass half icon" /></h2>
              <h3>The network is a bit slow</h3>
              <p>This is taking longer than we expected...</p>
            </div>
          </div>
        }
        { status === 'timeout' &&
          <div className="reframe-collection-empty">
            <div className="reframe-collection-empty-message">
              <h2><i className="circular hourglass end icon" /></h2>
              <h3>Your request timed out</h3>
              <p>It took too long to complete your request</p>
              <div className="ui basic button" onClick={ this._handleFetch.bind(this, 0) } >
                Try again
              </div>
            </div>
          </div>
        }
        { status !== 'failed' && records && records.length === 0 && ( _.isFunction(empty) ? React.createElement(empty) : empty ) }
        { status !== 'failed' && records && records.length > 0 &&
          <Scrollpane { ...this._getScrollpane() }>
            { _.isFunction(layout) ? React.createElement(layout, { records }) : layout }
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
