import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from '../../actions'
import Cell from './cell'
import RecordActions from '../record_actions'

import _ from 'lodash'

class Row extends React.Component {

  static propTypes = {
    record: React.PropTypes.object,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    columns: React.PropTypes.array,
    selected: React.PropTypes.array,
    onSelect: React.PropTypes.func,
  }

  render() {
    const { record, columns, selected, recordActions, batchActions } = this.props
    const checked = _.includes(selected, record.id)
    const classes = (checked) ? ['positive'] : []
    const visible = _.filter(columns, (column) => { return column.visible })
    return (
      <tr className={classes.join(' ')}>
        {(() => {
          if(batchActions) {
            return (
              <td>
                <input type="checkbox"
                       checked={checked}
                       onChange={this._handleSelect.bind(this, record.id)} />
              </td>
            )
          }
        })()}
        {visible.map((column, index) => {
          return <Cell key={`column_${index}`}
                       column={column}
                       record={record} />
        })}
        {(() => {
          if(recordActions) {
            return (
              <td className="center primary aligned">
                <RecordActions icon="ellipsis vertical"
                               button={false}
                               record={record}
                               recordActions={recordActions} />
              </td>
            )
          } else {
            return <td className="primary" />
          }
        })()}
      </tr>
    )
  }

  _handleSelect(recordId) {
    this.props.onSelect(recordId);
  }

}

export default Row
