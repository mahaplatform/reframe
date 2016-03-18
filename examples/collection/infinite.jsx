import React from 'react'
import ReactDOM from 'react-dom'
import InfiniteCollection from 'collection/infinite'
import Logger from 'utils/logger'
import Config from 'utils/config'

const Actions = {
  reload: () => {Logger.log("Clicked Reload")},
  export: () => {Logger.log("Clicked Export")},
  delete: id => {Logger.log("Clicked Delete", id)},
  edit: id => {Logger.log("Clicked Edit", id)}
}

Config.set('collections.exporter.urlPrefix', 'http://api.localhost:8080/')

export default class InfiniteCollectionExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>Infinite Collection</h1>
        <InfiniteCollection {...this.getTable()} />
      </div>
    )
  }

  getTable() {
    return {
      id: "infinite_test_collection",
      endpoint: "/examples/data.json",
      columns: [
        { label: 'First Name', key: 'first_name', primary: true, visible: true },
        { label: 'Last Name', key: 'last_name', primary: true, visible: true },
        { label: 'ID', key: 'id', primary: false, visible: false, cell: 'id' }
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
