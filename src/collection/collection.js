import React from 'react'
import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import Table from '../table'
import _ from 'lodash'

class Collection extends React.Component {

  static PropTypes = {
    all: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.array,
    entity: PropTypes.object,
    empty: PropTypes.object,
    filter: PropTypes.object,
    params: PropTypes.object,
    records: PropTypes.array,
    sort: PropTypes.object,
    total: PropTypes.number
  }

  static defaultProps = {
    entity: 'record'
  }

  render() {
    const { all, columns, empty, entity, records, status } = this.props

    if(status === 'completed' && all === 0) {
      if(empty) {
        return (
          <div className="table-empty">
            <div className="table-empty-message">
              <h2><i className={`circular ${empty.icon} icon`} /></h2>
              <h3>No { _.startCase(pluralize(entity.replace('_', ' '))) }</h3>
              <p>You have not yet created any { pluralize(entity.replace('_', ' ')) }</p>
              { empty.modal &&
                <div className="ui basic button red" onClick={ this._handleAddNew.bind(this)}>
                  <i className="plus icon" />
                  Create New {_.startCase(entity.replace('_', ' '))}
                </div>
              }
            </div>
          </div>
        )
      } else {
        return (
          <div className="table-empty">
            <div className="table-empty-message">
              <h3>No Results Found</h3>
              <p>There are no { pluralize(entity.replace('_', ' ')) }</p>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div className="reframe-collection">
          <div className="reframe-collection-layout">
            { status === 'loading' && records.length === 0 &&
              <div className="reframe-loader">
                <div className="ui active inverted dimmer">
                  <div className="ui large text loader">Loading</div>
                </div>
              </div>
            }
            { status !== 'failure' && records.length > 0 && columns &&
              <Table { ...this._getTable() } />
            }
            { status === 'completed' && records.length === 0 &&
              <div className="reframe-collection-empty">
                <div className="reframe-collection-empty-message">
                  <h2><i className="circular remove icon" /></h2>
                  <h3>No Results Found</h3>
                  <p>No records matched your query</p>
                </div>
              </div>
            }
            { status === 'failure' &&
              <div className="reframe-error">
                <div className="reframe-error-message">
                  <i className="warning sign icon" />
                  <h2>Unable to load<br /> records</h2>
                </div>
              </div>
            }
            { status === 'loading' && records.length > 0 &&
              <div className="reframe-collection-loader">
                <div className="ui active inverted dimmer">
                  <div className="ui small loader"></div>
                </div>
              </div>
            }
          </div>
        </div>
      )
    }
  }

  componentDidMount() {
    const { data, endpoint, onSetRecords } = this.props
    const filter = this.props.filter || {}
    const sort = this.props.sort || { key: 'created_at', order: 'desc' }
    this.props.onSetParams(filter, sort)
    if(data) onSetRecords(data)
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props
    if(!_.isEqual(prevProps.params, params)) {
      this._handleFetch(0)
    }
  }

  _getTable() {
    const { columns, link, modal, params, records, status, onSort } = this.props
    const { sort } = params
    return {
      columns,
      export: this.props.export,
      link,
      modal,
      records,
      sort,
      status,
      onLoadMore: this._handleFetch.bind(this),
      onSort: this._handleSort.bind(this)
    }
  }

  _handleSort(key) {
    this.props.onSort(key)
  }

  _handleFetch(skip = null) {
    const { endpoint, records, params, total, onFetch } = this.props
    if(!endpoint) return
    const { filter, sort } = params
    const loaded = records.length
    const $page = { skip: skip !== null ? skip : loaded }
    const query = { $page }
    if(filter) query.$filter = filter
    if(sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key
    if(skip === 0 || loaded < total) onFetch(endpoint, query)
  }

}

export default Collection
