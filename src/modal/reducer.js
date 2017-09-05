import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  components: [],
  open: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.PUSH:
    return {
      components: [
        ...state.components,
        action.component
      ],
      open: true
    }

  case actionTypes.POP:
    return {
      ...state,
      components: state.components.slice(0, state.components.length - 1)
    }

  case actionTypes.CLEAR:
    return {
      ...state,
      open: false
    }

  default:
    return state
  }

}
