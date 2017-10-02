import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import ex from './export'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.export',
  component: ex,
  reducer,
  actions
})
