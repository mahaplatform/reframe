import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  message: null,
  options: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      message: action.message,
      options: action.options
    }

  case actionTypes.CLOSE:
    return INITIAL_STATE

  default:
    return state
  }

}
