import PropTypes from 'prop-types'
import React from 'react'
import Row from './row'

class Body extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
    onRemove: PropTypes.func,
    onReorder: PropTypes.func
  }

  render() {
    const { rows} = this.props
    return (
      <div className="reframe-tablefield-body">
        { rows.map((row, i) => (
          <Row { ...this._getRow(row, i) }  key={`row_${row.code}`} />
        ))}
      </div>
    )
  }

  _getRow(row, index) {
    const { columns, onRemove, onReorder } = this.props
    return {
      row,
      columns,
      index,
      onRemove,
      onReorder
    }
  }

}

export default Body
