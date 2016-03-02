import React from 'react'
import ReactDOM from 'react-dom'
import InfiniteContainer from 'containers/infinite'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'
import Logger from 'utils/logger'
import _ from 'lodash'
import when from 'when'
import faker from 'faker'

const fakeRecords = page => {
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

const fakeApiClient = ({method, path, params}) => {
  return {
    entity: () => when(fakeRecords(params.page || 1)).delay(1500)
  }
}

export default class FetchExamples extends React.Component {
  constructor(props) {
    super(props)
    this.exampleClient = fakeApiClient
  }

  render() {
    return (
      <div>
        <h1>Infinite Container</h1>

        <InfiniteContainer endpoint="/api/data" client={this.exampleClient} injectAs="records">
          <PeopleList />
        </InfiniteContainer>
      </div>
    )
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}

const PeopleList = props => {
  const people = props.records || []
  return (
    <LoadingContainer content={props.records} useLoader>
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
