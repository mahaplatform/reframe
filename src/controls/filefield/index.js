import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import filefield from './filefield'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'reframe.filefield',
  component: filefield,
  reducer,
  actions,
  selectors
})
