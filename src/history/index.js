import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import history from './history'
import * as actions from './actions'

export default Singleton({
  namespace: 'platform.history',
  component: history,
  reducer,
  actions
})
