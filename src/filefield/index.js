import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import filefield from './filefield'
import * as actions from './actions'

export default Singleton({
  namespace: 'reframe.filefield',
  component: filefield,
  reducer,
  actions
})
