import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Infinite extends React.Component {

  static PropTypes = {
    all: PropTypes.number,
    endpoint: PropTypes.string,
    records: PropTypes.array,
    status: PropTypes.string,
    total: PropTypes.number,
    onFetch: PropTypes.func
  }

  render() {
    const { children } = this.props
    return (
      <div className="reframe-infinite">
        <div className="reframe-infinite-body" ref="infinite">
          { children }
        </div>
        { status === 'loading' &&
          <div className="reframe-infinite-footer">
            <div className="ui active inverted dimmer">
              <div className="ui small loader"></div>
            </div>
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    this.listener = _.throttle(this._scrollListener.bind(this), 100)
    this._attachScrollListener()
  }

componentDidUpdate(prevProps) {
    const { filter, sort, loaded, records, status } = this.props
    if(!_.isEqual(prevProps.sort, sort) || !_.isEqual(prevProps.filter, filter)) {
      this._handleFetch(0)
    } else if(prevProps.status !== status) {
      if(status === 'loaded' && records.length > 0) {
        this._attachScrollListener()
      } else if(status === 'pending') {
        this._handleFetch(loaded)
      } else if(status === 'completed') {
        this._detachScrollListener()
      }
    }
  }

  componentWillUnmount() {
    this._detachScrollListener()
  }

  _attachScrollListener() {
    const { infinite } = this.refs
    infinite.addEventListener('scroll', this.listener, true)
    infinite.addEventListener('resize', this.listener, true)
    this._scrollListener()
  }

  _detachScrollListener() {
    const { infinite } = this.refs
    infinite.removeEventListener('scroll', this._listener(), true)
    infinite.removeEventListener('resize', this._listener(), true)
  }

  _scrollListener() {
    const { infinite } = this.refs
    const { records, status, total } = this.props
    const bottomPosition = infinite.scrollHeight - (infinite.scrollTop + infinite.offsetHeight)
    const percentRemaining = (bottomPosition / infinite.scrollHeight) * 100
    if(percentRemaining <= 20 && status !== 'laoding' && records.length < total) {
      this._handleFetch(records.length)
    }
  }

  _handleFetch(loaded) {
    const { endpoint, filter, sort, onFetch } = this.props
    // const $filter = filter
    // const $page = { skip: loaded }
    // const $sort = (sort.order === 'desc' ? '-' : '') + sort.key
    const params = {} //{ $filter, $page, $sort }
    onFetch(endpoint, params)
  }

}

export default Infinite
