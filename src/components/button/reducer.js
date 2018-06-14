const INITIAL_STATE = {
  error: null,
  result: null,
  status: 'pending'
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'REQUEST_REQUEST':
    return {
      ...state,
      status: 'submitting'
    }

  case 'REQUEST_FAILURE':
    return {
      ...state,
      status: 'failure',
      error: action.result.error.message
    }

  case 'REQUEST_SUCCESS':
    return {
      ...state,
      result: action.result.data,
      status: 'success'
    }

  default:
    return state
  }

}

export default reducer
