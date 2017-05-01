import * as actionTypes from './action_types'

const INITIAL_STATE = {
  stack: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.PUSH:
    return {
      stack: [
        ...state.stack,
        action.pathname
      ]
    }

  case actionTypes.BACK:
    return {
      stack: state.stack.slice(0, -1)
    }


  case actionTypes.RESET:
    return {
      stack: [action.pathname]
    }

  default:
    return state
  }

}
