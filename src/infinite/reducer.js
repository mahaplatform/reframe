import * as actionTypes from './action_types'

const INITIAL_STATE = {
  all: 0,
  records: [],
  status: 'pending',
  total: 300
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.FETCH_REQUEST:
    return {
      ...state,
      status: 'loading'
    }

  case actionTypes.FETCH_SUCCESS:
    return {
      ...state,
      all: action.result.pagination.all,
      records: (action.result.pagination.skip > 0) ? [
        ...state.records,
        ...action.result.data
      ] : action.result.data,
      total: action.result.pagination.total,
      status: (loaded >= action.result.pagination.total) ? 'completed' : 'loaded'
    }

  case actionTypes.FETCH_FAILURE:
    return {
      ...state,
      status: 'failure'
    }

  default:
    return state
  }

}
