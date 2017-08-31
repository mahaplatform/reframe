import * as actionTypes from './action_types'

const INITIAL_VALUE = {
  active: false,
  q: null,
  chosen: null,
  status: 'ready',
  adding: false
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

  case actionTypes.QUERY:
    return {
      ...state,
      q: action.q
    }

  case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      chosen: action.result.data[0],
      status: 'success'
    }

  case actionTypes.SHOW_FORM:
    return {
      ...state,
      adding: true
    }

  case actionTypes.HIDE_FORM:
    return {
      ...state,
      adding: false
    }
  default:
    return state

  }

}
