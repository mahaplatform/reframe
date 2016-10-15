import * as actionTypes from './action_types'
import _ from 'lodash'

export const INITIAL_STATE = {
  status: 'uninitialized',
  data: {}
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.FETCH_RESOURCE_REQUEST:
    return {
      ...state,
      status: 'loading'
    }

  case actionTypes.FETCH_RESOURCE_SUCCESS:
    let data = null
    if(_.isObject(action.result)) {
      data = (action.result.records) ? action.result.records : action.result
    } else if (_.isArray(action.result)) {
      data = action.result
    }
    return {
      ...state,
      data: {
        ...state.data,
        [action.prop]: data
      },
      status: 'loaded'
    }

  case actionTypes.FETCH_RESOURCE_FAILURE:
    return {
      ...state,
      status: 'failed'
    }

  default:
    return state

  }
}
