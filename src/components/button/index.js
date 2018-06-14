import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import button from './button'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.button',
  component: button,
  reducer,
  actions
})
