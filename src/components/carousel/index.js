import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import carousel from './carousel'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.carousel',
  component: carousel,
  reducer,
  actions
})
