import React from 'react'
import Control from '../../control'

class Cell extends React.Component {

  static propTypes = {
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
    const { index, code, onUpdateCell } = this.props
    onUpdateCell(index, code, value)
  }

}

export default Cell
