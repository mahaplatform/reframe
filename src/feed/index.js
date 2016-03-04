import React from 'react'
import ReactDOM from 'react-dom'
import Event from './event.js'
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
      <LoadingContainer content={this.props.records} useLoader isLoading={this.props.status === 'awaiting'}>
        <EmptyState>
          <p>{this.props.empty}</p>
        </EmptyState>
        <PresentState>
          <div className="ui feed">
            { this.props.records.map((record, index) => {
              return <Event {...record} key={`event_${index}`} />
            })}
          </div>
        </PresentState>
      </LoadingContainer>
    )
  }

}

export default Comments
