import React from 'react'
import ReactDOM from 'react-dom'
import Row from './row.js';
import _ from 'lodash'

class Tbody extends React.Component {

  render() {
    const isLoading = this.props.status === 'LOADING' || this.props.status === 'SYNCING'
    let colspan = this.props.columns.length
    colspan += (!_.isEmpty(this.props.batchActions)) ? 1 : 0
    colspan += (!_.isEmpty(this.props.recordActions)) ? 1 : 0
    if(_.isEmpty(this.props.records) && !isLoading) {
      return(
        <tbody ref="tbody">
          <tr>
            <td colSpan={colspan} className="center aligned">
              {this.props.empty}
            </td>
          </tr>
        </tbody>
      )
    }
    else if(isLoading) {
      return (
        <tbody ref="tbody">
          <tr>
            <td colSpan={colspan} className="center aligned">
              <div className="ui active centered inline loader"></div>
            </td>
          </tr>
        </tbody>
      )
    }
    else {
      return (
        <tbody ref="tbody">
          { this.props.records.map((record, index) => {
            let isChecked = _.includes(this.props.checked, record.id)
            return <Row key={`record_${record.id}`} {...this.props} record={record} isChecked={isChecked} />
          })}
        </tbody>
      )
    }
  }

}

export default Tbody
