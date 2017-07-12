import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import searchbox from './searchbox'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.searchbox',
  component: searchbox,
  reducer,
  actions
})
