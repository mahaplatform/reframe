import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import toggle_list from './toggle_list'
import * as actions from './actions'

export default Factory({
  namespace: 'reframe.toggle_list',
  component: toggle_list,
  reducer,
  actions
})
