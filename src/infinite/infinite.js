import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Scrollpane from '../scrollpane'

class Infinite extends React.Component {

  static PropTypes = {
    all: PropTypes.number,
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
    this._handleFetch(0)
  }

  componentDidUpdate(prevProps) {
    const { filter, sort } = this.props
    if(!_.isEqual(prevProps.filter, filter) || !_.isEqual(prevProps.sort, sort)) {
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
  }

}

export default Infinite
