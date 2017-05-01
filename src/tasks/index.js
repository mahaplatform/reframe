import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import tasks from './tasks'
import * as actions from './actions'

export default Singleton('platform.tasks', tasks, reducer, actions)
