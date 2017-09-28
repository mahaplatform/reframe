// @flow

import type { SetParams, Sort, Filter, SetRecords, SetFilter, SetQuery, ToggleFilter, Actions, State } from './types'

const INITIAL_STATE: State = {
  filtering: false,
  sort: {
    key: null,
    order: null
  },
  filter: {},
  q: '',
  records: null
}

const setParams = (state: State, action: SetParams): State => ({
  ...state,
  filter: action.filter,
  sort: action.sort
})

const filter = (state: State, action: Filter): State => ({
  ...state,
  filter: action.filter
})

const sort = (state: State, action: Sort): State => ({
  ...state,
  sort: {
    key: action.key,
    order: (state.sort.key == action.key && state.sort.order == 'asc') ? 'desc' : 'asc'
  }
})

const setRecords = (state: State, action: SetRecords): State => ({
  ...state,
  records: action.records
})

const setFilter = (state: State, action: SetFilter): State => ({
  ...state,
  filter: action.filter
})

const setQuery = (state: State, action: SetQuery): State => ({
  ...state,
  q: action.q
})

const toggleFilter = (state: State, action: ToggleFilter): State => ({
  ...state,
  filtering: !state.filtering
})

const reducer = (state: State = INITIAL_STATE, action: Actions): State => {

  switch (action.type) {

  case 'SET_PARAMS':
    return setParams(state, action)

  case 'FILTER':
    return filter(state, action)

  case 'SORT':
    return sort(state, action)

  case 'SET_RECORDS':
    return setRecords(state, action)

  case 'SET_FILTER':
    return setFilter(state, action)

  case 'SET_QUERY':
    return setQuery(state, action)

  case 'TOGGLE_FILTER':
    return toggleFilter(state, action)

  default:
    return state
  }

}

export default reducer
