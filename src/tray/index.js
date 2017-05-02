import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import tray from './tray'
import * as actions from './actions'

export default Singleton({
  namespace: 'platform.tray',
  component: tray,
  reducer,
  actions
})
