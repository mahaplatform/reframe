import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import collection from './collection'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'reframe.collection',
  component: collection,
  reducer,
  selectors,
  actions
})
