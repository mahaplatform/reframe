import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import select from './select'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.radio_group',
  component: select(false),
  reducer,
  actions
})
