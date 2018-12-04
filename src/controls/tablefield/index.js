import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import tablefield from './tablefield'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'reframe.tablefield',
  component: tablefield,
  reducer,
  actions,
  selectors
})
