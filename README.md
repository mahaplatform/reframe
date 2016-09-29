# ReFrame

## What is Reframe?
Reframe is a collection of components designed to help developers rapidly
prototype and build responsive web applications. Built upon open source
libraries like React, Redux, and Semantic UI, Reframe is intended
to coexist and integrate with the existing React ecosystem

## Frictionless Rapid Prototyping
Reframe is designed to reduce the cost and effort required to design and
implement application prototypes. Using a declarative syntax and
library of commonly used interface components, you can quickly assemble
a fully featured clickable prototypes of your application's layout and
functionality

## Accelerated Prototype to Production
Becuase Reframe enables you to statically mock your data OR connect it from
a remote data source, converting from prototype to application can be as eas
as replacing a JSON object with a URL endpoint

## Installation
Install with [npm](http://npmjs.com):

```sh
npm install --save reframe
```

## Example
Reframe components can be as simple or full featured as you need them to be.
Here's an example of a simple Reframe Collection component:

```JavaScript
import { Collection } from 'reframe';

export default class Contacts extends React.Component {

  render() {
    return <Collection {...this._getCollection()} />
  }

  _getCollection() {
    return {
      id: 'people',
      records: [
        { name: 'Greg Kops' },
        { name: 'Megan Pugh' },
        { name: 'Kath Tibbetts' },
        { name: 'Armand Zerilli' }
      ]
    }
  }

}
```

Here's an example of a more completely configured component:

```JavaScript
import { Collection } from 'reframe';

export default class Contact extends React.Component {

  render() {
    return <Collection {...this._getCollection()} />
  }

  _getCollection() {
    return {
      id: 'contacts-index',
      columns: [
        { label: 'Name', key: 'first_name', primary: true, visible: true, format: NameCell },
        { label: 'Email', key: 'email', primary: false, visible: true },
      ],
      records: '/admin/contacts',
      filters: '/admin/contacts/fields',
      sort: { key: 'created_at', order: 'desc' },
      card: {
        image: 'photo',
        url: '/admin/contacts/#{id}',
        content: ContentCard
      },
      entity: 'contact',
      empty: 'There are no contacts',
      recordActions: [
        { label: 'edit', icon: 'edit', redirect: '/admin/contacts/#{id}/edit'}
      ],
      batchActions: [
        { label: 'add to list', component: AddToList },
        { label: 'delete all', component: AddToList },
        { label: 'tag all', component: AddToList },
      ]
    }
  }

}

var NameCell = (props) => {
  return (
    <Link href={`/admin/contacts/${props.id}`}>
      <img src={props.photo} />
      {props.first_name} {props.last_name}
    </Link>
  )
}

const ContentCard = (props) => {
  return (
    <div>
      <h4>{props.first_name} {props.last_name}</h4>
      <p>{props.email}</p>
    </div>
  )
}
```

## Author & Credits

Reframe was originally written by [Greg Kops](https://github.com/mochini) and
[Armand Zerilli](https://github.com/zerilliworks) based upon their work at
[Think Topography](http://thinktopography.com). Reframe has been used in
production to support a handful of client applications.

Special thanks to [Rick Wong](https://github.com/RickWong) for his generous
donation of the 'reframe' npm package
