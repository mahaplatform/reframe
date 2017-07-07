import _ from 'lodash'
import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  query: '',
  chosen: [],
  status: 'ready'
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.RESET:
    return INITIAL_STATE

  case actionTypes.TYPE:
    return {
      ...state,
      query: action.q
    }

  case actionTypes.TOGGLE:
    const index = _.findIndex(state.chosen, { id: action.record.id })
    return {
      ...state,
      chosen: index >= 0 ? state.chosen.filter(record => record.id !== action.record.id) : [
        ...state.chosen,
        action.record
      ]
    }

  case actionTypes.LOAD_REQUEST:
    return {
      ...state,
      status: 'loading'
    }

  case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      status: 'success',
      chosen: action.result.data
    }

  case actionTypes.LOAD_FAILURE:
    return {
      ...state,
      status: 'failure'
    }

  default:
    return state
  }

}
