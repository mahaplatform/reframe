import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import search from './search'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.search',
  component: search,
  reducer,
  actions
})
