import React from 'react'
import ReactDOM from 'react-dom'
import Collection from 'src/collection'

const Actions = {
  reload: () => {console.log("Clicked Reload")},
  export: () => {console.log("Clicked Export")},
  delete: id => {console.log("Clicked Delete", id)},
  edit: id => {console.log("Clicked Edit", id)},
  sort: col => {console.log("Clicked column header", col)},
  chooseColumns: () => {console.log("Clicked column chooser")}
}

export default class CollectionExamples extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      table: {
        view: 'table',
        sort: { key: 'first_name', order: 'ascending' }
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Collections</h1>
        <Collection {...this.getTable()} />
      </div>
    )
  }

  getTable() {
    return {
      columns: [
        { label: 'ID', key: 'id', primary: false, visible: false, cell: 'id' },
        { label: 'First Name', key: 'first_name', primary: true, visible: true },
        { label: 'Last Name', key: 'last_name', primary: true, visible: true }
      ],
      records: [
        { id: 1, first_name: "Bob", last_name: "Belcher" },
        { id: 2, first_name: "Linda", last_name: "Belcher" },
        { id: 3, first_name: "Tina", last_name: "Belcher" },
        { id: 4, first_name: "Gene", last_name: "Belcher" },
        { id: 5, first_name: "Louise", last_name: "Belcher" },
        { id: 6, first_name: "Hugo", last_name: "Habercore" },
        { id: 7, first_name: "Ron", last_name: "Lynch" },
        { id: 10, first_name: "Calvin", last_name: "Fischoeder" },
        { id: 11, first_name: "Felix", last_name: "Fischoeder" }
      ],
      sort: this.state.table.sort,
      collectionActions: [
        { key: 'refresh', icon: 'refresh', label: 'Refresh', handler: Actions.reload },
        { key: 'export', icon: 'download', label: 'Export', handler: Actions.export }
      ],
      recordActions: [
        { key: 'delete', icon: 'times', label: 'delete', handler: Actions.delete },
        { key: 'edit', icon: 'times', label: 'edit', handler: Actions.edit }
      ],
      onClickColumnHeader: Actions.sort,
      onClickColumnChooser: Actions.chooseColumns
    }
  }
}

