import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './comment.js'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'

class Comments extends React.Component {

  static propTypes = {
    records: React.PropTypes.array,
    empty: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    empty: "No records found."
  }

  render() {
    return (
      <LoadingContainer content={this.props.records} useLoader>
        <EmptyState>
          <p>{this.props.empty}</p>
        </EmptyState>
        <PresentState>
          <div className="ui feed">
            { this.props.records.map((record, index) => {
              return <Comment {...record} key={`event_${index}`} />
            })}
          </div>
        </PresentState>
      </LoadingContainer>
    )
  }

}

export default Comments
