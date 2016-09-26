import React from 'react'
import { connect } from 'react-redux'
import Component from '../component'
import Collection from './components/collection'

class Index extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    filters: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
    columns: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]).isRequired,
    records: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]).isRequired,
    sort: React.PropTypes.shape({
      key: React.PropTypes.string,
      order: React.PropTypes.string,
    }),
    card: React.PropTypes.object,
    layout: React.PropTypes.oneOf(['table', 'card']),
    expanded: React.PropTypes.bool,
    empty: React.PropTypes.string,
    entity: React.PropTypes.string,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array
  }

  render() {
    return <Collection {...this.props} />
  }

}

const validation = {
  required: ['id','columns','records']
}

export default Component(validation, 'collection', 'id')(Index)
