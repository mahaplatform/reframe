// @flow

import type { Open, Close, Clear, RequestRequest, RequestFailure, RequestSuccess, Action, State } from './types'

const INITIAL_STATE: State = {
  error: null,
  items: null,
  open: false,
  result: null,
  status: 'pending'
}

const open = (state: State, action: Open): State => ({
  ...state,
  items: action.items,
  open: true
})

const close = (state: State, action: Close): State => ({
  ...state,
  open: false
})

const clear = (state: State, action: Clear): State => INITIAL_STATE

const request_request = (state: State, action: RequestRequest): State => ({
  ...state,
  status: 'submitting'
})

const request_failure = (state: State, action: RequestFailure): State => ({
  ...state,
  status: 'failure',
  error: action.result.error.message
})

const request_success = (state: State, action: RequestSuccess): State => ({
  ...state,
  result: action.result.data,
  status: 'success'
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'OPEN':
    return open(state, action)

  case 'CLOSE':
    return close(state, action)

  case 'CLEAR':
    return clear(state, action)

  case 'REQUEST_REQUEST':
    return request_request(state, action)

  case 'REQUEST_FAILURE':
    return request_failure(state, action)

  case 'REQUEST_SUCCESS':
    return request_success(state, action)

  default:
    return state
  }

}

export default reducer
