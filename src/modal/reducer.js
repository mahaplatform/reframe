import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  component: null,
  open: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      component: action.component,
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
