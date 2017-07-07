import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import toggle_list from './toggle_list'
import * as actions from './actions'
import * as selectors from './selectors'

export default Factory({
  namespace: 'competencies.toggle_list',
  component: toggle_list,
  reducer,
  actions,
  selectors
})
