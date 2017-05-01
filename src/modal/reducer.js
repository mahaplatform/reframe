import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  components: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.PUSH:
    return {
      components: [
        ...state.components,
        action.component
      ]
    }

  case actionTypes.POP:
    return {
      components: state.components.slice(0, state.length - 1)
    }

  case actionTypes.CLOSE:
    return {
      components: []
    }

  default:
    return state
  }

}
