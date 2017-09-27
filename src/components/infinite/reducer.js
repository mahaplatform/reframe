// @flow

import type { FetchRequest, FetchSuccess, FetchFailure, FetchDelay, FetchTimeout, State, Action } from './types'

import _ from 'lodash'

const INITIAL_STATE: State = {
  all: null,
  records: null,
  request_id: null,
  status: 'pending',
  total: null
}

const fetchRequest = (state: State, action: FetchRequest): State => ({
  ...state,
  request_id: action.request_id,
  status: 'loading'
})

const fetchSuccess = (state: State, action: FetchSuccess): State => {
  if(action.request_id !== state.request_id) return state
  if(!_.includes(['loading','delayed'], state.status)) return state
  const loaded = state.records ? state.records.length : 0
  return {
    ...state,
    all: action.result.pagination.all,
    request_id: null,
    records: (action.result.pagination.skip > 0) ? [
      ...state.records || [],
      ...action.result.data
    ] : action.result.data,
    total: action.result.pagination.total,
    status: (loaded + action.result.data.length >= action.result.pagination.total) ? 'completed' : 'loaded'
  }
}

const fetchFailure = (state: State, action: FetchFailure): State => ({
  ...state,
  status: 'failed'
})

const fetchDelay = (state: State, action: FetchDelay): State => ({
  ...state,
  status: 'delayed'
})

const fetchTimeout = (state: State, action: FetchTimeout): State => ({
  ...state,
  status: 'timeout'
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'FETCH_REQUEST':
    return fetchRequest(state, action)

  case 'FETCH_SUCCESS':
    return fetchSuccess(state, action)

  case 'FETCH_FAILURE':
    return fetchFailure(state, action)

  case 'FETCH_DELAY':
    return fetchDelay(state, action)

  case 'FETCH_TIMEOUT':
    return fetchTimeout(state, action)

  default:
    return state
  }

}

export default reducer
