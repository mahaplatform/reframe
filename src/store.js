import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const CreateStore = (reducer) => {

  const loggerMiddleware = createLogger()

  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)

  return createStoreWithMiddleware(reducer)
}

export default CreateStore
