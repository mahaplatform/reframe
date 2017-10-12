import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import filters from './filters'
import * as actions from './actions'
import * as selectors from './selectors'

const Filters = Factory({
  namespace: 'reframe.filters',
  component: filters,
  reducer,
  actions,
  selectors
})

export default Filters
