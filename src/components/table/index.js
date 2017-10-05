// @flow

import type { Node } from '../../types'
import type { Props, State, Column } from './types'

import Format from '../../utils/format'
import PropTypes from 'prop-types'
import _ from 'lodash'
import React from 'react'

class Table extends React.Component<Props, State> {

  _handleResize: any = _.debounce(this._resizeColumns, 100)

  head: any

  static contextTypes = {
    modal: PropTypes.object,
    router: PropTypes.object,
    tasks: PropTypes.object
  }

  state = {
    widths: []
  }

  render(): Node {
    const { columns, handler, link, modal, records, recordTasks, sort } = this.props
    return (
      <div className="reframe-table">
        <table className="reframe-table-pinned">
          <thead>
            <tr>
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                  }
                </td>
              ))}
              { (link || recordTasks) && <td className="reframe-table-head-cell mobile collapsing" style={ this._getHeadStyle() } /> }
            </tr>
          </thead>
        </table>
        <table className="reframe-table-data">
          <thead>
            <tr ref={ (node) => this.head = node }>
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                  }
                </td>
              ))}
              { (link || recordTasks) && <td className="reframe-table-head-cell mobile collapsing" /> }
            </tr>
          </thead>
          <tbody>
            { records.map((record, rowIndex) => {

              const row = columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={ `cell_${rowIndex}_${columnIndex}` } className={ this._getBodyClass(column) }>
                  <Format { ...record } format={ column.format } value={ _.get(record, column.key) } />
                </td>
              ))

              if(link) {
                return (
                  <tr key={ `record_${rowIndex}` } className="reframe-table-link" onClick={ this._handleLink.bind(this, record) }>
                    { row }
                    <td className="reframe-table-body-cell icon mobile collapsing centered padded">
                      <i className="chevron right icon" />
                    </td>
                  </tr>
                )
              } else if(modal) {
                return (
                  <tr key={ `record_${rowIndex}` } className="reframe-table-link" onClick={ this._handleModal.bind(this, record.id) }>
                    { row }
                  </tr>
                )
              } else if(handler) {
                return (
                  <tr key={ `record_${rowIndex}` } className="reframe-table-link" onClick={ this._handleHandler.bind(this, record.id) }>
                    { row }
                  </tr>
                )
              } else if(recordTasks) {
                return (
                  <tr key={ `record_${rowIndex}` }>
                    { row }
                    <td className="icon mobile collapsing centered padded" onClick={ this._handleTasks.bind(this, record.id) }>
                      <i className="ellipsis vertical icon" />
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={ `record_${rowIndex}` }>
                    { row }
                  </tr>
                )
              }

            })}
          </tbody>
        </table>
      </div>
    )
  }

  componentDidMount(): void {
    this._resizeColumns()
    window.addEventListener('resize', this._handleResize.bind(this))
  }

  componentDidUpdate(prevProps: Props): void {
    const { columns } = this.props
    if(!_.isEqual(prevProps.columns, columns)) this._resizeColumns()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize.bind(this))
  }

  _getHeaderClass(column: Column): string {
    let classes = ['padded']
    if(column.primary === true) classes.push('mobile')
    if(column.collapsing === true) classes.push('collapsing')
    return classes.join(' ')
  }

  _getBodyClass(column: Column): string {
    let classes = []
    if(column.primary === true) classes.push('mobile')
    if(column.collapsing === true) classes.push('collapsing')
    if(column.centered === true) classes.push('centered')
    if(!_.isFunction(column.format) && !_.isElement(column.format)) classes.push('padded')
    return classes.join(' ')
  }

  _getHeadStyle(index?: number): Object {
    const { widths } = this.state
    const width = (typeof index !== 'undefined') ? widths[index] : widths[widths.length - 1]
    return width ? { width: `${width}px` } : {}
  }

  _resizeColumns(): void {
    if(!this.head) return
    const headerCells = Array.from(this.head.childNodes)
    const widths = headerCells.map((cell, index) => cell.offsetWidth)
    console.log(widths)
    this.setState({ widths })
  }

  _handleLink(record: Object): void {
    const { link } = this.props
    _.templateSettings.interpolate = /#{([\s\S]+?)}/g
    const path = _.template(link)(record)
    this.context.router.history.push(path)
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
