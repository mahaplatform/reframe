import { Factory } from 'redux-rubberstamp'
import reducer from './reducer'
import filters from './filters'
import * as actions from './actions'

const Filters = Factory({
  namespace: 'reframe.filters',
  component: filters,
  reducer,
  actions
})

export default Filters
