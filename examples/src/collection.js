import React from 'react'
import ReactDOM from 'react-dom'
import { Collection } from 'reframe'

class CollectionExample extends React.Component {

  render() {
    return <Collection {...this._getCollection()} />
  }

  _getCollection() {
    return {
      id: 'people',
      columns: [
        { label: 'Name', key: 'name', visible: true },
      ],
      records: '/data/contacts.json'
    }
  }

}

ReactDOM.render(<CollectionExample />, document.getElementById('app'))
