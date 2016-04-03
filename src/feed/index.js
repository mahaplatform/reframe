import React from 'react'
import ReactDOM from 'react-dom'
import Event from './event.js'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'
import InfiniteContainer from '../containers/infinite'

class Feed extends React.Component {

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
          <div className="feed">
            { this.props.records.map((record, index) => {
              return <Event {...record} key={`event_${index}`} />
            })}
          </div>
        </PresentState>
      </LoadingContainer>
    )
  }

}

export default class FeedWrapper extends React.Component {
  render() {
    if(this.props.endpoint) {
      return (
        <InfiniteContainer endpoint={this.props.endpoint} injectAs="records">
          <Feed {...this.props} />
        </InfiniteContainer>
      )
    }
    else {
      return <Feed {...this.props} records={this.props.data || this.props.records} />
    }
  }
}

