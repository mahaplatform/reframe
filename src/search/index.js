import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import search from './search'
import * as actions from './actions'

export default Singleton('platform.search', search, reducer, actions)
