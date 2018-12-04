import PropTypes from 'prop-types'
import React from 'react'
import Body from './body'
import _ from 'lodash'

class TableField extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
    defaultValue: PropTypes.array,
    isValid: PropTypes.bool,
    row: PropTypes.object,
    rows: PropTypes.array,
    values: PropTypes.object,
    onAdd: PropTypes.func,
    onSet: PropTypes.func,
    onReady: PropTypes.func,
    onRemove: PropTypes.func,
    onReorder: PropTypes.func,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    onReady: () => {}
  }

  columns = []

  _handleAdd = this._handleAdd.bind(this)
  _handleKeyDown = this._handleKeyDown.bind(this)

  render() {
    const { columns } = this.props
    return (
      <div className="reframe-tablefield">
        <div className="reframe-tablefield-header">
          <div className="reframe-tablefield-row">
            <div className="reframe-tablefield-handle">&nbsp;</div>
            { columns.map((column, j) => (
              <div className="reframe-tablefield-column" key={`column_${j}`}>
                { column.label }
              </div>
            ))}
            <div className="reframe-tablefield-actions">&nbsp;</div>
          </div>
        </div>
        <Body { ...this._getBody() } />
        <div className="reframe-tablefield-footer">
          <div className="reframe-tablefield-row">
            <div className="reframe-tablefield-handle">&nbsp;</div>
            { columns.map((column, j) => (
              <div className="reframe-tablefield-column" key={`column_${j}`}>
                <input { ...this._getInput(column) } />
              </div>
            ))}
            <div className="reframe-tablefield-actions" onClick={ this._handleAdd }>
              <i className="fa fa-fw fa-plus" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSet, onReady } = this.props
    if(defaultValue) onSet(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { rows } = this.props
    if(!_.isEqual(rows, prevProps.rows)) {
      this.props.onChange(rows.map(row => _.omit(row, ['code'])))
    }
  }

  _getInput(column) {
    const { values } = this.props
    return {
      type: 'text',
      placeholder: column.label,
      ref: (node) => this.columns[column.key] = node,
      onKeyDown: this._handleKeyDown,
      onChange: this._handleChange.bind(this, column.key),
      value: values[column.key] || ''
    }
  }

  _getBody() {
    const { columns, rows, onRemove, onReorder } = this.props
    return {
      columns,
      rows,
      onRemove,
      onReorder
    }
  }

  _handleAdd() {
    const { isValid, row, onAdd } = this.props
    if(isValid) onAdd(row)
  }

  _handleChange(key, e) {
    this.props.onUpdate(key, e.target.value)
  }

  _handleKeyDown(e) {
    if(!(e.keyCode === 13 && e.shiftKey === false)) return
    e.preventDefault()
    this._handleAdd()
  }

}

export default TableField
