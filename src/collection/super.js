import React from 'react'
import ReactDOM from 'react-dom'
import FetchCollection from './fetch.js'
import tableReducer from './reducers/table_reducer'

import { createStore } from 'redux'

function createDefaultStore() {
  return createStore(tableReducer)
}

export default class SuperCollection extends React.Component {
  constructor() {

  }

  render() {
    return (
      <FetchCollection {...this.props} columns={this.mapColumns()} />
    )
  }

  mapColumns() {
    return _.map(this.props.columns, column => {
      return {
        visible: _.get(this.props.store)
        ...column
      }
    })
  }

  componentDidMount() {
    this.unlisten = store.subscribe(this.forceUpdate.bind(this))
  }

  componentWillUnmount() {
    this.unlisten()
  }
}

