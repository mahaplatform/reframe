import { Collection } from 'reframe';

export default class Contacts extends React.Component {

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
