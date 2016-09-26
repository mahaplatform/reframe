import React from 'react'
import Control from '../../control'

class Cell extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    index: React.PropTypes.number,
    code: React.PropTypes.string,
    type: React.PropTypes.string,
    options: React.PropTypes.array,
    defaultValue: React.PropTypes.string,
    onUpdateCell: React.PropTypes.func
  }

  render() {
    const { code, type, options, defaultValue } = this.props
    return (
      <td>
        <Control code={code}
                 type={type}
                 options={options}
                 defaultValue={defaultValue}
                 onChange={this._handleUpdateCell.bind(this)} />
      </td>
    )
  }

  _handleUpdateCell(value) {
    const { id, index, code, onUpdateCell } = this.props
    onUpdateCell(id, index, code, value)
  }

}

export default Cell
