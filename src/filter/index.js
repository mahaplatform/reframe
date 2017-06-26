import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import filter from './filter'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.filter',
  component: filter,
  reducer,
  actions
})
