// @flow

import type { RequestRequest, RequestFailure, RequestSuccess, Action, State } from './types'

const INITIAL_STATE: State = {
  error: null,
  result: null,
  status: 'pending'
}

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
