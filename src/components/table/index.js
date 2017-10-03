// @flow

import type { Node } from '../../types'
import type { Props, State, Column } from './types'

import { Link } from 'react-router-dom'
import Format from '../../utils/format'
import PropTypes from 'prop-types'
import _ from 'lodash'
import React from 'react'

_.templateSettings.interpolate = /#{([\s\S]+?)}/g

class Table extends React.Component<Props, State> {

  _handleResize: any = _.debounce(this._resizeColumns, 100)

  body: any

  static contextTypes = {
    modal: PropTypes.object,
    tasks: PropTypes.object
  }

  state = {
    widths: []
  }

  render(): Node {
    const { columns, handler, link, modal, records, recordTasks, sort } = this.props
    return (
      <div className="reframe-table">
        <div className="reframe-table-head">
          <div className="reframe-table-head-wrapper">
            <div className="reframe-table-head-row">
              { columns.map((column, columnIndex) => (
                <div key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && column.key === sort.key &&
                    (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                  }
                </div>
              ))}
              { (link || recordTasks) && <div className="reframe-table-head-cell mobile collapsing" style={ this._getHeadStyle(columns.length) } /> }
            </div>
          </div>
        </div>
        <div className="reframe-table-body">
          <div className="reframe-table-body-wrapper" ref={ (node) => this.body = node }>
            { records.map((record, rowIndex) => {

              const row = columns.map((column, columnIndex) => (
                <div key={ `cell_${rowIndex}_${columnIndex}` } className={ this._getBodyClass(column) }>
                  <Format { ...record } format={ column.format } value={ _.get(record, column.key) } />
                </div>
              ))

              if(link) {
                return (
                  <Link key={ `record_${rowIndex}` } className="reframe-table-body-row" to={ _.template(link)(record) }>
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

  componentDidMount(): void {
    this._resizeColumns()
    window.addEventListener('resize', this._handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize.bind(this))
  }

  _getHeaderClass(column: Column): string {
    let classes = ['reframe-table-head-cell', 'padded']
    if(column.primary === true) classes.push('mobile')
    if(column.collapsing === true) classes.push('collapsing')
    return classes.join(' ')
  }

  _getBodyClass(column: Column): string {
    let classes = ['reframe-table-body-cell']
    if(column.primary === true) classes.push('mobile')
    if(column.collapsing === true) classes.push('collapsing')
    if(column.centered === true) classes.push('centered')
    if(!_.isFunction(column.format) && !_.isElement(column.format)) classes.push('padded')
    return classes.join(' ')
  }

  _getHeadStyle(index: number): Object {
    const { widths } = this.state
    return widths[index] ? { width: `${widths[index]}px` } : {}
  }

  _resizeColumns(): void {
    const firstRow = this.body.childNodes[0]
    const headerCells = Array.from(firstRow.childNodes)
    const widths = headerCells.map((cell, index) => cell.offsetWidth)
    console.log(widths)
    this.setState({ widths })
  }

  _handleSort(column: Column): void {
    const key = column.sort || column.key
    this.props.onSort(key)
  }

  _handleHandler(id: number): void {
    this.props.handler(id)
  }

  _handleModal(id: number): void {
    const { modal } = this.props
    this.context.model.open(modal)
  }

  _handleTasks(id: number): void {
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
