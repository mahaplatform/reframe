import * as actionTypes from './action_types'

const INITIAL_STATE = {
  message: null,
  style: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET:
    return {
      style: action.style,
      message: action.message
    }

  case actionTypes.CLEAR:
    return INITIAL_STATE

  default:
    return state
  }

}
