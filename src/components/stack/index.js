import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import stack from './stack'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.stack',
  component: stack,
  reducer,
  actions
})
