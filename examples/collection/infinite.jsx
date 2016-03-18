import React from 'react'
import ReactDOM from 'react-dom'
import InfiniteCollection from 'collection/infinite'
import Logger from 'utils/logger'
import Config from 'utils/config'
import when from 'when'
import faker from 'faker'

const Actions = {
  reload: () => {Logger.log("Clicked Reload")},
  export: () => {Logger.log("Clicked Export")},
  delete: id => {Logger.log("Clicked Delete", id)},
  edit: id => {Logger.log("Clicked Edit", id)}
}

Config.set('collections.exporter.urlPrefix', 'http://api.localhost:8080/')


// A function to generate some phony data for each page
const fakeRecords = page => {
  // Create an array of fake records
  const perPage = 50
  const records = _.map(
    _.range((page - 1) * perPage + 1, (page - 1) * perPage + perPage), i => {
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
    total_records: 250
  }
}

// This is a phony API client for the purposes of demonstration.
const fakeApiClient = ({method, path, params}) => {
  return {
    entity: () => when(fakeRecords(params.page || 1)).delay(1500)
  }
}

export default class InfiniteCollectionExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>Infinite Collection</h1>
        <InfiniteCollection {...this.getTable()} client={fakeApiClient} />
      </div>
    )
  }

  getTable() {
    return {
      id: "infinite_test_collection",
      endpoint: "/examples/data.json",
      columns: [
        { label: 'ID', key: 'id', primary: false, visible: false, cell: 'id' },
        { label: 'First Name', key: 'first_name', primary: true, visible: true },
        { label: 'Last Name', key: 'last_name', primary: true, visible: true },
        { label: 'Email', key: 'email', primary: true, visible: true }
      ],
      filters: [
        { code: 'id', label: 'ID', type: 'textfield' },
        { code: 'first_name', label: 'First Name', type: 'textfield' },
        { code: 'last_name', label: 'Last Name', type: 'textfield' }
      ],
      recordActions: [
        { key: 'delete', icon: 'times', label: 'delete', handler: Actions.delete },
        { key: 'edit', icon: 'times', label: 'edit', handler: Actions.edit }
      ]
    }
  }
}
