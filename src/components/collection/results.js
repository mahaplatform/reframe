import React from 'react'
import PropTypes from 'prop-types'
import Table from '../table'
import _ from 'lodash'
import pluralize from 'pluralize'

export class Empty extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    empty: PropTypes.string,
    entity: PropTypes.string,
    icon: PropTypes.string,
    new: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ])
  }

  render() {
    const { empty, entity, icon } = this.props
    return (
      <div className="reframe-message">
        <div className="reframe-message-panel">
          <h2><i className={`circular ${icon ? icon : 'warning sign'} icon`} /></h2>
          <h3>No { _.startCase(pluralize(entity.replace('_', ' '))) }</h3>
          { !empty && <p>You have not yet created any { pluralize(entity.replace('_', ' ')) }</p>}
          { empty && <p>{ empty }</p>}
          { this.props.new &&
            <div className="ui basic button red" onClick={ this._handleAddNew.bind(this)}>
              <i className="plus icon" />
              Create New {_.startCase(entity.replace('_', ' '))}
            </div>
          }
        </div>
      </div>
    )
  }

  _handleAddNew() {
    this.context.modal.open(this.props.new)
  }

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
