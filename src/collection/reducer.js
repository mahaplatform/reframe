// @flow

import type { SetParams, Sort, Filter, SetRecords, Actions, State } from './types'

const INITIAL_STATE: State = {
  params: {
    sort: {
      key: null,
      order: null
    },
    filter: {}
  },
  records: null
}

const setParams = (state: State, action: SetParams): State => ({
  ...state,
  params: {
    filter: action.filter,
    sort: action.sort
  }
})

const filter = (state: State, action: Filter): State => ({
  ...state,
  params: {
    ...state.params,
    filter: action.filter
  }
})

const sort = (state: State, action: Sort): State => ({
  ...state,
  params: {
    ...state.params,
    sort: {
      key: action.key,
      order: (state.params.sort.key == action.key && state.params.sort.order == 'asc') ? 'desc' : 'asc'
    }
  }
})

const setRecords = (state: State, action: SetRecords): State => ({
  ...state,
  records: action.records
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

  default:
    return state
  }

}

export default reducer
