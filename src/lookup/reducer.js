import * as actionTypes from './action_types'

const INITIAL_VALUE = {
  active: false,
  query: null,
  chosen: null,
  status: 'ready'
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case actionTypes.BEGIN:
    return {
      ...state,
      active: true
    }

  case actionTypes.CLEAR:
    return {
      ...state,
      chosen: null
    }

  case actionTypes.CANCEL:
    return {
      ...state,
      active: false
    }

  case actionTypes.CHOOSE:
    return {
      ...state,
      active: false,
      chosen: action.chosen
    }

  case actionTypes.TYPE:
    return {
      ...state,
      query: action.q
    }

  case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      status: 'success'
    }

  default:
    return state

  }

}
