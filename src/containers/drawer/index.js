import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import drawer from './drawer'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.drawer',
  component: drawer,
  reducer,
  actions
})
