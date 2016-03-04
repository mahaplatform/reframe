import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './comment.js'
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
        <div className="ui comments">
          { this.props.records.map((record) => {
            return <Comment {...record} />
          })}
        </div>
      )
    }
  }

}

export default Comments
