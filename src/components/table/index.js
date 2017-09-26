import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import Format from '../../utils/format'

class Table extends React.Component {

  static contextTypes = {
    tasks: PropTypes.object
  }

  static propTypes = {
    columns: PropTypes.array,
    export: PropTypes.array,
    handler: PropTypes.func,
    link: PropTypes.string,
    modal: PropTypes.element,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    sort: PropTypes.shape({
      key: PropTypes.string,
      order: PropTypes.string
    }),
    total: PropTypes.number,
    onLoadMore: PropTypes.func,
    onSort: PropTypes.func
  }

  render() {
    const { columns, handler, link, modal, records, recordTasks, sort } = this.props
    return (
      <div className="reframe-table">
        <div className="reframe-table-head reframe-scrollpane-header">
          <div className="reframe-table-head-wrapper">
            <div className="reframe-table-head-row" ref={ (node) => this.head = node }>
              { columns.map((column, columnIndex) => {
                let klass = ['reframe-table-head-cell', 'padded']
                if(column.primary === true) klass.push('mobile')
                if(column.collapsing === true) klass.push('collapsing')
                return (
                  <div key={`header-${columnIndex}`} className={ klass.join(' ') } onClick={ this._handleSort.bind(this, column) }>
                    { column.label }
                    { sort && column.key === sort.key &&
                      (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                    }
                  </div>
                )
              })}
              { link && <div className="reframe-table-head-cell mobile collapsing" /> }
            </div>
          </div>
        </div>
        <div className="reframe-table-body">
          <div className="reframe-table-body-wrapper" ref={ (node) => this.body = node }>
            { records.map((record, rowIndex) => {
              const row = columns.map((column, columnIndex) => {
                const value = _.get(record, column.key)
                let klass = ['reframe-table-body-cell']
                if(column.primary === true) klass.push('mobile')
                if(column.collapsing === true) klass.push('collapsing')
                if(column.centered === true) klass.push('centered')
                if(!column.format) klass.push('padded')
                return (
                  <div key={ `cell_${rowIndex}_${columnIndex}` } className={ klass.join(' ') }>
                    <Format {...record} format={column.format} value={value} />
                  </div>
                )
              }).concat((this.props.export ? [<div key="cell_extra" className="reframe-table-body-cell mobile" />] : []))

              if(link) {
                _.templateSettings.interpolate = /#{([\s\S]+?)}/g
                const to = _.template(link)(record)
                return (
                  <Link key={ `record_${rowIndex}` } className="reframe-table-body-row" to={to}>
                    { row }
                    <div className="reframe-table-body-cell icon mobile collapsing centered padded">
                      <i className="chevron right icon" />
                    </div>
                  </Link>
                )
              } else if(modal) {
                return (
                  <div key={ `record_${rowIndex}` } className="reframe-table-body-row" onClick={ this._handleModal.bind(this, record.id) }>
                    { row }
                  </div>
                )
              } else if(handler) {
                return (
                  <div key={ `record_${rowIndex}` } className="reframe-table-body-row" onClick={ this._handleHandler.bind(this, record.id) }>
                    { row }
                  </div>
                )
              } else if(recordTasks) {
                return (
                  <div key={ `record_${rowIndex}` } className="reframe-table-body-row">
                    { row }
                    <div className="reframe-table-body-cell icon mobile collapsing centered padded" onClick={ this._handleTasks.bind(this, record.id) }>
                      <i className="ellipsis vertical icon" />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={ `record_${rowIndex}` } className="reframe-table-body-row">
                    { row }
                  </div>
                )
              }

            })}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._resizeColumns()
  }

  componentDidUpdate() {
    this._resizeColumns()
  }

  _resizeColumns() {
    const rows = this.body.childNodes
    if(rows.length === 0) return
    Array.from(rows[0].childNodes).map((cell, index) => {
      cell.style.width = `${cell.offsetWidth}px`
    })
  }

  _handleSort(column) {
    const key = column.sort || column.key
    this.props.onSort(key)
  }

  _handleHandler(id) {
    this.props.handler(id)
  }

  _handleTasks(id) {
    const { recordTasks } = this.props
    const tasks = recordTasks.map(task => {
      if(task.modal) {
        return {
          ...task,
          modal: () => <task.modal id={ id } />
        }
      }
    })
    this.context.tasks.open(tasks)
  }

}

export default Table
