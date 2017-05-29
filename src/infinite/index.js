import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import infinite from './infinite'
import * as actions from './actions'

export default Factory({
  namespace: 'platform.infinite',
  component: infinite,
  reducer,
  actions
})
