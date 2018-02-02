const INITIAL_STATE = {
  error: null,
  result: null,
  status: 'pending'
}

const request_request = (state, action) => ({
  ...state,
  status: 'submitting'
})

const request_failure = (state, action) => ({
  ...state,
  status: 'failure',
  error: action.result.error.message
})

const request_success = (state, action) => ({
  ...state,
  result: action.result.data,
  status: 'success'
})

const reducer = (state = INITIAL_STATE, action) => {

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
