import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createApiRequest from 'redux-api-request'
import createlocalStorage from 'redux-local-storage'
import reducer from './reducer'

class Root extends React.Component {

  constructor(props) {

    super(props)

    const loggerMiddleware = createLogger()

    const apiRequestMiddleware = createApiRequest()

    const localStorageMiddleware = createlocalStorage()

    const middleware = [
      thunkMiddleware,
      apiRequestMiddleware,
      localStorageMiddleware,
      ...(process.env.NODE_ENV !== 'production') ? [loggerMiddleware] : []
    ]

    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

    this.store = createStoreWithMiddleware(reducer)

  }

  render() {
    return (
      <Provider store={ this.store }>
        { this.props.children }
      </Provider>
    )
  }

}

export default Root
