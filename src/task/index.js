import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import task from './task'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.task',
  component: task,
  reducer,
  actions
})
