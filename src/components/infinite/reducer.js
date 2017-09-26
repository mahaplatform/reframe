import _ from 'lodash'

const INITIAL_STATE = {
  all: null,
  records: null,
  request_id: null,
  status: 'pending',
  total: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'FETCH_REQUEST':
    return {
      ...state,
      request_id: action.request_id,
      status: 'loading'
    }

  case 'FETCH_SUCCESS':
    if(action.request_id !== state.request_id) return state
    if(!_.includes(['loading','delayed'], state.status)) return state
    const loaded = state.records ? state.records.length : 0
    return {
      ...state,
      all: action.result.pagination.all,
      request_id: null,
      records: (action.result.pagination.skip > 0) ? [
        ...state.records,
        ...action.result.data
      ] : action.result.data,
      total: action.result.pagination.total,
      status: (loaded + action.result.data.length >= action.result.pagination.total) ? 'completed' : 'loaded'
    }

  case 'FETCH_FAILURE':
    return {
      ...state,
      status: 'failed'
    }

  case 'FETCH_DELAY':
    return {
      ...state,
      status: 'delayed'
    }

  case 'FETCH_TIMEOUT':
    return {
      ...state,
      status: 'timeout'
    }

  default:
    return state
  }

}
