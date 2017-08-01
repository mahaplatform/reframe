import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  items: null,
  open: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      items: action.items,
      open: true
    }

  case actionTypes.CLOSE:
    return {
      ...state,
      open: false
    }

  case actionTypes.CLEAR:
    return INITIAL_STATE

  default:
    return state
  }

}
