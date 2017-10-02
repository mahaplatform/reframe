// @flow

import type { SetParams, Sort, Filter, SetRecords, SetFilter, SetQuery, ToggleMode, Actions, State } from './types'

const INITIAL_STATE: State = {
  mode: null,
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

const toggleMode = (state: State, action: ToggleMode): State => ({
  ...state,
  mode: (state.mode === action.mode) ? null : action.mode
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

  case 'TOGGLE_MODE':
    return toggleMode(state, action)

  default:
    return state
  }

}

export default reducer
