import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import history from './history'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.history',
  component: history,
  reducer,
  actions
})
