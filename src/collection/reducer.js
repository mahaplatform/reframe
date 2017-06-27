import * as actionTypes from './action_types'

const INITIAL_STATE = {
  all: 0,
  params: {
    sort: {
      key: null,
      order: null
    },
    filter: {}
  },
  records: [],
  static: false,
  status: 'pending',
  total: 0
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET_PARAMS:
    return {
      ...state,
      params: {
        filter: action.filter,
        sort: action.sort
      }
    }

  case actionTypes.FILTER:
    return {
      ...state,
      params: {
        ...state.params,
        filter: action.filter
      }
    }

  case actionTypes.SORT:
    return {
      ...state,
      params: {
        ...state.params,
        sort: {
          key: action.key,
          order: (state.params.sort.key == action.key && state.params.sort.order == 'asc') ? 'desc' : 'asc'
        }
      }
    }

  case actionTypes.SET_RECORDS:
    return {
      ...state,
      all: action.records.length,
      records: action.records,
      static: true,
      status: 'completed',
      total: action.records.length
    }

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
      status: (state.records.length + action.result.data.length >= action.result.pagination.total) ? 'completed' : 'loaded'
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
