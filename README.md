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

## Example
Here's an example of a simple Reframe collection component:

```JavaScript
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
      records: 'https://api.example.com/contacts'
    }
  }

}
```

## Installation
Install with [npm](http://npmjs.com):

```sh
npm install --save reframe
```

## Author & Credits

reframe was originally written by [Greg Kops](https://github.com/mochini) and
[Armand Zerilli](https://github.com/zerilliworks) based upon their work at
[Think Topography](http://thinktopography.com). reframe has been used in
production to support a handful of client applications.

Special thanks to [Rick Wong](https://github.com/RickWong) for his generous
donation of the 'reframe' npm package
