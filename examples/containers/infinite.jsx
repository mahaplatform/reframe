import React from 'react'
import ReactDOM from 'react-dom'
import InfiniteContainer from 'containers/infinite'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'
import Logger from 'utils/logger'
import _ from 'lodash'
import when from 'when'
import faker from 'faker'

// A function to generate some phony data for each page
const fakeRecords = page => {
  // Create an array of fake records
  const records = _.map(
    _.range((page - 1) * 25 + 1, (page - 1) * 25 + 25), i => {
      return {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email()
      }
    }
  )

  page = parseInt(page, 10)

  // Generate the link metadata depending on what page we're on
  let links = {}
  if ( page === 1 ) {
    links.self = `/api/data?page=${page}`
    links.next = `/api/data?page=${page + 1}`
  }
  else if ( page > 1 && page < 5 ) {
    links.prev = `/api/data?page=${page - 1}`
    links.self = `/api/data?page=${page}`
    links.next = `/api/data?page=${page + 1}`
  }
  else {
    links.prev = `/api/data?page=${page - 1}`
    links.self = `/api/data?page=${page}`
  }

  return {
    current_page: page,
    records,
    links,
    total_pages: 5,
    total_records: 125
  }
}

// This is a phony API client for the purposes of demonstration.
const fakeApiClient = ({method, path, params}) => {
  return {
    entity: () => when(fakeRecords(params.page || 1)).delay(1500)
  }
}

export default class FetchExamples extends React.Component {

  render() {
    return (
      <div>
        <h1>Infinite Container</h1>
        {/* An example of using the container to inject an array of resolved records page by page */}
        <InfiniteContainer endpoint="/api/data" client={fakeApiClient} injectAs="records">
          <PeopleList />
        </InfiniteContainer>
      </div>
    )
  }

}

// A component with a table to present data, plus an example of how to check for loading states
const PeopleList = props => {
  const people = props.records || []
  return (
    <LoadingContainer content={props.records} useLoader isLoading={props.status === 'awaiting'}>
      <EmptyState>
        <h1>No People.</h1>
      </EmptyState>
      <PresentState>
        <div className="ui segment">
          <table className="ui very basic table">
            <thead>
            <tr>
              <th>FIrst Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {people.map(
              person => {
                return (
                  <tr>
                    <td>{person.first_name}</td>
                    <td>{person.last_name}</td>
                    <td>{person.email}</td>
                  </tr>
                )
              }
            )}
            </tbody>
          </table>
          { !props.isAtEnd ? <div className="ui active centered inline loader"></div> : null }
        </div>
      </PresentState>
    </LoadingContainer>
  )
}
