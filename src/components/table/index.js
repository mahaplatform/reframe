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

  static defaultProps = {
    onSelect: (id) => {},
    onSelectAll: () => {}
  }

  state = {
    widths: []
  }

  render(): Node {
    const { columns, link, records, recordTasks, selectable, selected, selectAll, sort } = this.props
    return (
      <div className="reframe-table">
        <table className="reframe-table-pinned">
          <thead>
            <tr>
              { selectable &&
                <td className="reframe-table-check-cell" onClick={ this._handleSelectAll.bind(this) }>
                  { selectAll ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                </td>
              }
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex + (selectable ? 1 : 0)) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                  }
                </td>
              ))}
              { (link || recordTasks) &&
                <td className="reframe-table-head-cell mobile collapsing next" style={ this._getHeadStyle() } />
              }
            </tr>
          </thead>
        </table>
        <table className="reframe-table-data">
          <thead>
            <tr ref={ (node) => this.head = node }>
              { selectable &&
                <td className="reframe-table-check-cell" onClick={ this._handleSelectAll.bind(this) }>
                  { selectAll ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                </td>
              }
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex + (selectable ? 1 : 0)) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="chevron up icon" /> : <i className="chevron down icon" />)
                  }
                </td>
              ))}
              { (link || recordTasks) &&
                <td className="reframe-table-head-cell mobile collapsing next" style={ this._getHeadStyle() } />
              }
            </tr>
          </thead>
          <tbody>
            { records.map((record, rowIndex) => (
              <tr key={ `record_${rowIndex}` } className={ this._getBodyRowClass(record) }>
                { selectable &&
                  <td key={`cell_${rowIndex}_select`} className="reframe-table-check-cell" onClick={ this._handleSelect.bind(this, record.id) }>
                    { _.includes(selected, record.id) ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                  </td>
                }
                { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                  <td key={ `cell_${rowIndex}_${columnIndex}` } className={ this._getBodyClass(column) } onClick={ this._handleClick.bind(this, record) }>
                    <Format { ...record } format={ column.format } value={ _.get(record, column.key) } />
                  </td>
                )) }
                { recordTasks &&
                  <td className="icon mobile collapsing centered" onClick={ this._handleTasks.bind(this, record.id) }>
                    <i className="ellipsis vertical icon" />
                  </td>
                }
                { link &&
                  <td className="reframe-table-body-cell icon mobile collapsing centered">
                    <i className="chevron right icon" />
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  componentDidMount(): void {
    setTimeout(() => this._resizeColumns(), 250)
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
    if(column.format === 'check' || column.collapsing === true) classes.push('collapsing')
    return classes.join(' ')
  }

  _getBodyClass(column: Column): string {
    let classes = []
    if(column.primary === true) classes.push('mobile')
    if(column.format === 'check' || column.collapsing === true) classes.push('collapsing')
    if(column.format === 'check' || column.centered === true) classes.push('centered')
    if(column.format === 'currency') classes.push('right')
    if(!_.isFunction(column.format) && !_.isElement(column.format)) classes.push('padded')
    return classes.join(' ')
  }

  _getBodyRowClass(record: Object): string {
    const { link, modal, handler, rowClass } = this.props
    let classes = []
    if(link || modal || handler) classes.push('reframe-table-link')
    if(rowClass && _.isString(rowClass)) classes.push(rowClass)
    if(rowClass && _.isFunction(rowClass)) classes.push(rowClass(record))
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
    this.setState({ widths })
  }

  _handleClick(record: Object): void {
    const { link, modal, handler } = this.props
    if(link) return this._handleLink(record)
    if(modal) return this._handleModal(record.id)
    if(handler) return this._handleHandler(record.id)
  }

  _handleSelect(id: number): void {
    this.props.onSelect(id)
  }

  _handleSelectAll(): void {
    this.props.onSelectAll()
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
