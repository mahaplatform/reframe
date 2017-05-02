import { Singleton } from 'redux-rubberstamp'
import reducer from './reducer'
import form from './form'
import * as actions from './actions'

export default Singleton({
  namespace: 'platform.form',
  component: form,
  reducer,
  actions
})
