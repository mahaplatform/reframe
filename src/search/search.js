import React from 'react'
import PropTypes from 'prop-types'
import List from '../list'
import _ from 'lodash'

class Search extends React.Component {

  static PropTypes = {
    status: PropTypes.string,
    results: PropTypes.array,
    itemMap: PropTypes.func
  }

  render() {
    const { label, query, results, status } = this.props
    return (
      <div className="reframe-search">
        <div className="reframe-search-form">
          <div className="reframe-search-input">
            <div className="ui input">
              <input type="text" placeholder={`Find a ${label}...`} onChange={this._handleType.bind(this)} value={ query } ref="query" />
            </div>
            { query.length > 0 && <i className="remove circle icon" onClick={this._handleResetSearch.bind(this)} /> }
          </div>
        </div>
        { status === 'loading' && !results &&
          <div className="reframe-search-loader">
            <div className="reframe-loader">
              <div className="ui active inverted dimmer">
                <div className="ui large text loader">Loading</div>
              </div>
            </div>
          </div>
        }
        { results && results.length === 0 &&
          <div className="reframe-search-empty">
            <div className="reframe-search-empty-message">
              <h2><i className="circular remove icon" /></h2>
              <h3>No Results Found</h3>
              <p>No { label } match your query</p>
            </div>
          </div>
        }
        { results && results.length > 0 &&
          <div className="reframe-search-results">
            <List { ...this._getList() } />
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { sort, endpoint, onLookup } = this.props
    this._handleLookup = _.throttle(onLookup.bind(this), 500)
    setTimeout(() => this.refs.query.focus(), 500)
    onLookup(endpoint, { $filter: { q: '' }, $sort: sort })
  }

  _handleType(event) {
    const { sort, endpoint } = this.props
    const q = event.target.value
    const query = { $filter: { q }, $sort: sort }
    this.props.onType(q)
    this._handleLookup(endpoint, query)
  }

  _handleResetSearch() {
    const { sort, endpoint, onType, onLookup } = this.props
    onType('')
    onLookup(endpoint, { $filter: { q: '' }, $sort: sort })
  }

  _getList() {
    const { results, itemMap } = this.props
    return {
      items: itemMap(results)
    }
  }

}

export default Search
