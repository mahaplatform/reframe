import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import lookup from './lookup'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'reframe.lookup',
  component: lookup,
  reducer,
  actions,
  selectors
})
