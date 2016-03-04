import React from 'react'
import ReactDOM from 'react-dom'
import Event from './event.js'
import _ from 'lodash'

class Comments extends React.Component {

  static propTypes = {
    records: React.PropTypes.array,
    empty: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    empty: "No records found."
  }

  render() {
    if(_.isEmpty(this.props.records)) {
      return <p>{this.props.empty}</p>
    } else {
      return (
        <div className="ui feed">
          { this.props.records.map((record, index) => {
            return <Event {...record} key={`event_${index}`} />
          })}
        </div>
      )
    }
  }

}

export default Comments
