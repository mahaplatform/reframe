import * as actionTypes from './action_types'

const INITIAL_VALUE = {
  active: false,
  value: null,
  month: null,
  year: null
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case actionTypes.SET_CURRENT:
    return {
      ...state,
      month: action.month,
      year: action.year
    }

  case actionTypes.SET_VALUE:
    return {
      ...state,
      value: action.value
    }

  case actionTypes.PREVIOUS:
    return {
      ...state,
      month: state.month === 0 ? 11 : state.month - 1,
      year: state.month === 0 ? state.year - 1 : state.year
    }

  case actionTypes.NEXT:
    return {
      ...state,
      month: state.month === 11 ? 0 : state.month + 1,
      year: state.month === 11 ? state.year + 1 : state.year
    }

  case actionTypes.BEGIN:
    return {
      ...state,
      active: true
    }

  case actionTypes.CANCEL:
    return {
      ...state,
      active: false
    }

  case actionTypes.CHOOSE:
    return {
      ...state,
      value: action.value,
      active: false
    }

  case actionTypes.CLEAR:
    return {
      ...state,
      value: null
    }

  default:
    return state

  }

}
