import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import history from './history'
import * as actions from './actions'

export default Singleton('platform.history', history, reducer, actions)
