import React from 'react'
import ReactDOM from 'react-dom'
import FetchCollection from 'collection/fetch'
import Logger from 'utils/logger'
import when from 'when'

const Actions = {
  reload: () => {Logger.log("Clicked Reload")},
  export: () => {Logger.log("Clicked Export")},
  delete: id => {Logger.log("Clicked Delete", id)},
  edit: id => {Logger.log("Clicked Edit", id)},
  sort: col => {
    Logger.log("Clicked column header", col)
  },
  chooseColumns: () => {Logger.log("Clicked column chooser")}
}

export default class CollectionExamples extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        view: 'table',
        sort: { key: 'first_name', order: 'asc' }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Collections</h1>
        <FetchCollection {...this.getTable()} promise={when(this.getSortedRecords()).delay(2000)}/>
        <FetchCollection {...this.getTable()} endpoint={'data.json'}/>
      </div>
    )
  }

  componentWillMount() {
    this.dataPromise = this.makePromise()
  }

  makePromise() {
    return when()
  }

  getTable() {
    return {
      columns: [
        { label: 'ID', key: 'id', primary: false, visible: false, cell: 'id' },
        { label: 'First Name', key: 'first_name', primary: true, visible: true },
        { label: 'Last Name', key: 'last_name', primary: true, visible: true }
      ],
      collectionActions: [
        { key: 'refresh', icon: 'refresh', label: 'Refresh', handler: Actions.reload },
        { key: 'export', icon: 'download', label: 'Export', handler: Actions.export }
      ],
      recordActions: [
        { key: 'delete', icon: 'times', label: 'delete', handler: Actions.delete },
        { key: 'edit', icon: 'times', label: 'edit', handler: Actions.edit }
      ],
      sort: this.state.table.sort,
      onClickColumnHeader: col => {
        Logger.log("Clicked column header", col)
        if(col === this.state.table.sort.key) {
          const order = this.state.table.sort.order === 'asc' ? 'desc' : 'asc'
          const key = this.state.table.sort.key
          this.setState({table: {...this.state.table, sort: {key, order}}})
        }
        else {
          const order = 'asc'
          const key = col
          this.setState({table: {...this.state.table, sort: {key, order}}})
        }
        //this.dataPromise = this.makePromise()
        this.forceUpdate()
      },
      onClickColumnChooser: Actions.chooseColumns
    }
  }

  getSortedRecords() {
    const records = [
      { id: 1, first_name: "Bob", last_name: "Belcher" },
      { id: 2, first_name: "Linda", last_name: "Belcher" },
      { id: 3, first_name: "Tina", last_name: "Belcher" },
      { id: 4, first_name: "Gene", last_name: "Belcher" },
      { id: 5, first_name: "Louise", last_name: "Belcher" },
      { id: 6, first_name: "Hugo", last_name: "Habercore" },
      { id: 7, first_name: "Ron", last_name: "Lynch" },
      { id: 10, first_name: "Calvin", last_name: "Fischoeder" },
      { id: 11, first_name: "Felix", last_name: "Fischoeder" }
    ]
    return _.orderBy(records, [this.state.table.sort.key], [this.state.table.sort.order])
  }
}

