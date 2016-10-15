import React from 'react'
import _ from 'lodash'
import Row from './row'

class Tbody extends React.Component {

  static propTypes = {
    empty: React.PropTypes.string,
    columns: React.PropTypes.array,
    records: React.PropTypes.array,
    selected: React.PropTypes.array,
    status: React.PropTypes.string,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    onSelect: React.PropTypes.func
  }

  render() {
    const { empty, status, columns, records, selected, recordActions, batchActions, onSelect } = this.props
    const visible = _.filter(columns, (column) => { return column.visible })
    const colspan = visible.length + 2
    if(_.isEmpty(records) && status == 'records_loading') {
      return (
        <tbody>
          <tr>
            <td colSpan={colspan} className="center aligned">
              <div className="ui active inverted dimmer">
                <div className="ui huge text loader">Loading</div>
              </div>
            </td>
          </tr>
        </tbody>
      )
    } else if(status == 'records_failed') {
      return (
        <tbody>
          <tr>
            <td colSpan={colspan} className="center aligned">
              <i className="warning sign icon"></i>
              Unable to load records
            </td>
          </tr>
        </tbody>
      )
    } else if(records && records.length > 0) {
      return (
        <tbody>
        {records.map((record, index) => {
          return <Row key={`record_${index}`}
                      columns={columns}
                      selected={selected}
                      recordActions={recordActions}
                      batchActions={batchActions}
                      record={record}
                      onSelect={onSelect} />
        })}
        </tbody>
      )
    } else {
      return (
        <tbody>
          <tr>
            <td colSpan={colspan} className="center aligned">{empty}</td>
          </tr>
        </tbody>
      )
    }
  }

}

export default Tbody
