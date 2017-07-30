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
    empty: PropTypes.object,
    entity: PropTypes.string
  }

  render() {
    const { empty, entity } = this.props
    return (
      <div className="reframe-message">
        <div className="reframe-message-panel">
          <h2><i className={`circular ${empty && empty.icon ? empty.icon : 'warning sign'} icon`} /></h2>
          <h3>No { _.startCase(pluralize(entity.replace('_', ' '))) }</h3>
          { !empty || (empty && !empty.message) && <p>You have not yet created any { pluralize(entity.replace('_', ' ')) }</p>}
          { empty && empty.message && <p>{ empty.message }</p>}
          { empty.modal &&
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
    this.context.modal.open(this.props.empty.modal)
  }

}

export class Results extends React.Component {

  static propTypes = {
    columns: PropTypes.object,
    export: PropTypes.object,
    handler: PropTypes.func,
    layout: PropTypes.any,
    link: PropTypes.string,
    modal: PropTypes.func,
    params: PropTypes.object,
    records: PropTypes.array,
    sort: PropTypes.string,
    status: PropTypes.string,
    onLoadMore: PropTypes.func,
    onSort: PropTypes.func
  }

  render() {
    const { columns, layout } = this.props
    if(columns) return <Table { ...this._getTable() } />
    if(layout) return React.createElement(layout, { ...this._getCustomLayout() })
  }

  _getScrollpane() {
    return {
      onReachBottom: this.props.onLoadMore.bind(this)
    }
  }

  _getTable() {
    const { columns, handler, link, modal, params, records, status, onLoadMore, onSort } = this.props
    const { sort } = params
    return {
      columns,
      export: this.props.export,
      handler,
      link,
      modal,
      records,
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
