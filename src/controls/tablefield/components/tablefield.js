import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import * as actions from '../actions'
import Row from './row'
import DragLayer from './drag_layer'

class TableField extends React.Component {

  static propTypes = {
    state: React.PropTypes.shape({
      columns: React.PropTypes.array,
      value: React.PropTypes.object
    }),
    onInitialize: React.PropTypes.func,
    onAddRow: React.PropTypes.func,
    onMoveRow: React.PropTypes.func,
    onRemoveRow: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onUpdateCell: React.PropTypes.func
  }

  render() {
    const { onMoveRow, onRemoveRow, onUpdateCell } = this.props
    const { columns, value } = this.props.state
    const colspan = columns.length + 2
    return (
      <div className="tablefield">
        <table className="ui celled compact unstackable table">
          <thead>
            <tr>
              <th className="collapsing">&nbsp;</th>
              {columns.map((column, index) => {
                return <th key={`header_${index}`}>{column.header}</th>
              })}
              <th className="collapsing">&nbsp;</th>
            </tr>
          </thead>
          {(() => {
            if(value.length > 0) {
              return (
                <tbody>
                  {value.map((row, index) => {
                    return <Row key={`row_${index}`}
                                row={row}
                                columns={columns}
                                index={index}
                                onMoveRow={onMoveRow}
                                onRemoveRow={onRemoveRow}
                                onUpdateCell={onUpdateCell} />
                  })}
                </tbody>
              )
            } else {
              return (
                <tbody>
                  <tr>
                    <td colSpan={colspan} className="center aligned">There are not any rows</td>
                  </tr>
                </tbody>
              )
            }
          })()}
          <tfoot>
            <tr>
              <th colSpan={colspan} className="center aligned" onClick={this._handleAddRow.bind(this)}>
                <i className="icon plus"></i> Add a row
              </th>
            </tr>
          </tfoot>
        </table>
        <DragLayer />
      </div>
    )

  }

  componentDidMount() {
    this._handleInitialize()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this._handleUpdateTable(this.props.defaultValue)
    }
    if(prevProps.state.value != this.props.state.value) {
      this._handleChange(this.props.state.value)
    }
  }

  _handleInitialize() {
    const { columns, value, onInitialize } = this.props
    onInitialize(columns, value)
  }

  _handleAddRow() {
    this.props.onAddRow()
  }

  _handleChange(value) {
    this.props.onChange(value)
  }

  _handleUpdateTable(value) {
    this.props.onUpdateTable(value)
  }

}

const mapStateToProps = (state) => state

const mapDispatchToProps = {
  onInitialize: actions.initialize,
  onUpdateTable: actions.updateTable,
  onAddRow: actions.addRow,
  onMoveRow: actions.moveRow,
  onRemoveRow: actions.removeRow,
  onUpdateCell: actions.updateCell
}

TableField = connect(mapStateToProps, mapDispatchToProps)(TableField)
TableField = DragDropContext(HTML5Backend)(TableField)

export default TableField
