import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import form from './form'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'reframe.form',
  component: form,
  reducer,
  actions,
  selectors
})
