import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import component from './component'
import * as actions from './actions'

export default Singleton('platform.prompt', component, reducer, actions)
