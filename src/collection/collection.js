import React from 'react'
import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import Filter from '../filter'
import _ from 'lodash'
import { Loading, Empty, Failure, Results } from './results'

class Collection extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static PropTypes = {
    all: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.array,
    entity: PropTypes.object,
    empty: PropTypes.shape({
      icon: PropTypes.string,
      message: PropTypes.string,
      modal: PropTypes.func
    }),
    filter: PropTypes.object,
    filters: PropTypes.array,
    handler: PropTypes.func,
    layout: PropTypes.func,
    link: PropTypes.string,
    modal: PropTypes.string,
    params: PropTypes.object,
    records: PropTypes.array,
    sort: PropTypes.object,
    total: PropTypes.number
  }

  static defaultProps = {
    entity: 'record'
  }

  render() {
    const { all, empty, entity, filters, records, status } = this.props
    if(status === 'completed' && all === 0) {
      if(empty) {
        return (
          <div className="reframe-collection">
            { empty.component ?
              <div className="reframe-collection-empty">
                { _.isFunction(empty.component) ? React.createElement(empty.component) : empty.component }
              </div> :
              <div className="reframe-collection-empty">
                <div className="reframe-collection-empty-message">
                  { empty.icon && <h2><i className={`circular ${empty.icon} icon`} /></h2>}
                  { empty.title ?
                    <h3>{ empty.title }</h3> :
                    <h3>No { _.startCase(pluralize(entity.replace('_', ' '))) }</h3>
                  }
                  { empty.message ?
                    <p>{ empty.message }</p> :
                    <p>You have not yet created any { pluralize(entity.replace('_', ' ')) }</p>
                  }
                  { empty.modal &&
                    <div className="ui basic button" onClick={ this._handleAddNew.bind(this)}>
                      <i className="plus icon" />
                      Create New {_.startCase(entity.replace('_', ' '))}
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        )
      } else {
        return <Empty />
      }
    } else {
      return (
        <div className="reframe-collection">
          <div className="reframe-collection-layout">
            { filters &&
              <div className="reframe-collection-header">
                <Filter { ...this._getFilter() } />
              </div>
            }
            { status === 'loading' && records.length > 0 && <Loading /> }
            { status === 'completed' && records.length === 0 && <Empty /> }
            { status !== 'failure' && records.length > 0 && <Results { ...this._getResults() } /> }
            { status === 'failure' && <Failure /> }
          </div>
        </div>
      )
    }
  }

  componentDidMount() {
    const { data, onSetRecords } = this.props
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

  _getFilter() {
    const { filters, params, onFilter } = this.props
    return {
      fields: filters,
      filters: params.filter,
      onChange: onFilter
    }
  }

  _getResults() {
    return {
      ...this.props,
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

  _handleAddNew() {
    this.context.modal.open(this.props.empty.modal)
  }

}


export default Collection
