import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Thead extends React.Component {

  static propTypes = {
    columns: React.PropTypes.array,
    params: React.PropTypes.object,
    batchActions: React.PropTypes.array,
    onSortRecords: React.PropTypes.func
  }

  render() {
    const { columns, params, batchActions } = this.props
    const visible = _.filter(columns, (column) => { return column.visible })
    return (
      <thead>
        <tr>
          {(batchActions) ? <th className="collapsing" /> : null }
          {visible.map((column, index) => {
            let classes = ['sortable']
            if(column.primary) {
              classes.push('primary')
            }
            if(column.collapsing) {
              classes.push('collapsing')
            }
            let icon = null
            if(column.key == params.sort.key) {
              classes.push('sorting')
              icon = (params.sort.order == 'asc') ? <i className="chevron up icon" /> : <i className="chevron down icon" />
            }
            return <th key={`column_${index}`}
                       onClick={this._handleSortRecords.bind(this, column.key)}
                       className={classes.join(' ')}>{column.label}{icon}</th>
          })}
          <th className="collapsing primary center aligned">
            <i className="columns icon" />
          </th>
        </tr>
      </thead>
    )
  }

  _handleSortRecords(column) {
    this.props.onSortRecords(column)
  }

}

export default Thead
