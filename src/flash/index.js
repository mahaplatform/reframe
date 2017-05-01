import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import flash from './flash'
import * as actions from './actions'

export default Singleton('platform.flash', flash, reducer, actions)
