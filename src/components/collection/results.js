import PropTypes from 'prop-types'
import pluralize from 'pluralize'
import Message from '../message'
import Table from '../table'
import React from 'react'
import _ from 'lodash'

export const Empty = (props) => {

  const { empty, entity, icon } = props

  const entitities = pluralize(entity.replace('_', ' '))

  const text = empty || `You have not yet created any ${entitities}`

  const button = (props.new) ? {
    label: `Create New ${_.startCase(entity.replace('_', ' '))}`,
    modal: props.new
  } : null

  const message = {
    icon,
    title: `No ${_.startCase(pluralize(entity.replace('_', ' ')))}`,
    text,
    button
  }

  return <Message { ...message } />

}

export class Results extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
    handler: PropTypes.func,
    layout: PropTypes.any,
    link: PropTypes.string,
    modal: PropTypes.func,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.object,
    status: PropTypes.string,
    table: PropTypes.array,
    onLoadMore: PropTypes.func,
    onSort: PropTypes.func
  }

  render() {
    const { table, layout } = this.props
    if(table) return <Table { ...this._getTable() } />
    if(layout) return React.createElement(layout, { ...this._getCustomLayout() })
  }

  _getScrollpane() {
    return {
      onReachBottom: this.props.onLoadMore.bind(this)
    }
  }

  _getTable() {
    const { columns, handler, link, modal, records, recordTasks, sort, status, onLoadMore, onSort } = this.props
    return {
      columns,
      handler,
      link,
      modal,
      records,
      recordTasks,
      sort,
      status,
      onLoadMore,
      onSort
    }
  }

  _getCustomLayout() {
    const { records, sort, status, onLoadMore, onSort  } = this.props
    return {
      records,
      sort,
      status,
      onLoadMore,
      onSort
    }
  }

}
