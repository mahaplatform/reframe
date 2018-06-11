import Format from '../../utils/format'
import PropTypes from 'prop-types'
import _ from 'lodash'
import React from 'react'

class Table extends React.Component {

  static contextTypes = {
    modal: PropTypes.object,
    router: PropTypes.object,
    tasks: PropTypes.object
  }

  static propTypes = {
    columns: PropTypes.array,
    handler: PropTypes.func,
    link: PropTypes.string,
    modal: PropTypes.any,
    records: PropTypes.array,
    recordTasks: PropTypes.array,
    rowClass: PropTypes.string,
    selectable: PropTypes.bool,
    selected: PropTypes.array,
    selectAll: PropTypes.bool,
    sort: PropTypes.object,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSort: PropTypes.func
  }

  static defaultProps = {
    onSelect: (id) => {},
    onSelectAll: () => {}
  }

  _handleResize: any = _.debounce(this._resizeColumns, 100)

  head: any

  state = {
    widths: []
  }

  render(){
    const { columns, link, records, recordTasks, selectable, selected, selectAll, sort } = this.props
    return (
      <div className="reframe-table">
        <table className="reframe-table-pinned">
          <thead>
            <tr>
              { selectable &&
                <td className="reframe-table-check-cell mobile" onClick={ this._handleSelectAll.bind(this) }>
                  { selectAll ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                </td>
              }
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex + (selectable ? 1 : 0)) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="fa fa-fw fa-chevron-up" /> : <i className="fa fa-fw fa-chevron-down" />)
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
                <td className="reframe-table-check-cell mobile" onClick={ this._handleSelectAll.bind(this) }>
                  { selectAll ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                </td>
              }
              { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                <td key={`header-${columnIndex}`} className={ this._getHeaderClass(column) } style={ this._getHeadStyle(columnIndex + (selectable ? 1 : 0)) } onClick={ this._handleSort.bind(this, column) }>
                  { column.label }
                  { sort && (column.key === sort.key || column.sort === sort.key) &&
                    (sort.order === 'asc' ? <i className="fa fa-fw fa-chevron-up" /> : <i className="fa fa-fw fa-chevron-down" />)
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
                  <td key={`cell_${rowIndex}_select`} className="reframe-table-check-cell mobile" onClick={ this._handleSelect.bind(this, record.id) }>
                    { _.includes(selected, record.id) ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
                  </td>
                }
                { columns.filter(column => column.visible !== false).map((column, columnIndex) => (
                  <td key={ `cell_${rowIndex}_${columnIndex}` } className={ this._getBodyClass(column) } onClick={ this._handleClick.bind(this, record, rowIndex) }>
                    <Format { ...record } format={ column.format } value={ _.get(record, column.key) } />
                  </td>
                )) }
                { recordTasks &&
                  <td className="icon mobile collapsing centered" onClick={ this._handleTasks.bind(this, record.id) }>
                    <i className="fa fa-fw fa-ellipsis-v" />
                  </td>
                }
                { link &&
                  <td className="reframe-table-body-cell icon mobile collapsing centered">
                    <i className="fa fa-fw fa-chevron-right" />
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  componentDidMount(){
    setTimeout(() => this._resizeColumns(), 250)
    window.addEventListener('resize', this._handleResize.bind(this))
  }

  componentDidUpdate(prevProps) {
    const { columns } = this.props
    if(!_.isEqual(prevProps.columns, columns)) this._resizeColumns()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize.bind(this))
  }

  _getHeaderClass(column) {
    let classes = ['padded']
    if(column.primary === true) classes.push('mobile')
    if(column.format === 'check' || column.collapsing === true) classes.push('collapsing')
    return classes.join(' ')
  }

  _getBodyClass(column) {
    let classes = []
    if(column.primary === true) classes.push('mobile')
    if(column.format === 'check' || column.collapsing === true) classes.push('collapsing')
    if(column.format === 'check' || column.centered === true) classes.push('centered')
    if(column.format === 'currency') classes.push('right')
    if(!_.isFunction(column.format) && !_.isElement(column.format)) classes.push('padded')
    return classes.join(' ')
  }

  _getBodyRowClass(record) {
    const { link, modal, handler, rowClass } = this.props
    let classes = []
    if(link || modal || handler) classes.push('reframe-table-link')
    if(rowClass && _.isString(rowClass)) classes.push(rowClass)
    if(rowClass && _.isFunction(rowClass)) classes.push(rowClass(record))
    return classes.join(' ')
  }

  _getHeadStyle(index){
    const { widths } = this.state
    const width = (typeof index !== 'undefined') ? widths[index] : widths[widths.length - 1]
    return width ? { width: `${width}px` } : {}
  }

  _resizeColumns() {
    if(!this.head) return
    const headerCells = Array.from(this.head.childNodes)
    const widths = headerCells.map((cell, index) => cell.offsetWidth)
    this.setState({ widths })
  }

  _handleClick(record, index) {
    const { link, modal, handler } = this.props
    if(link) return this._handleLink(record, index)
    if(modal) return this._handleModal(record, index)
    if(handler) return this._handleHandler(record, index)
  }

  _handleSelect(id) {
    this.props.onSelect(id)
  }

  _handleSelectAll() {
    this.props.onSelectAll()
  }

  _handleLink(record, index) {
    const { link } = this.props
    _.templateSettings.interpolate = /#{([\s\S]+?)}/g
    const path = _.template(link)(record)
    this.context.router.history.push(path)
  }

  _handleModal(record, index) {
    this.context.model.open(() => <this.props.modal record={ record } index={ index } />)
  }

  _handleHandler(record, index) {
    this.props.handler(record, index)
  }

  _handleSort(column) {
    const key = column.sort || column.key
    this.props.onSort(key)
  }

  _handleTasks(id) {
    const { recordTasks } = this.props
    const tasks = recordTasks.map(task => {
      if(task.modal) {
        return {
          ...task,
          modal: () => <task.modal id={ id } />
        }
      } else if(task.handler) {
        return {
          ...task,
          handler: () => task.handler(id)
        }
      }
    })
    this.context.tasks.open(tasks)
  }

}

export default Table
