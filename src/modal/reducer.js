import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  components: [],
  open: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      ...state,
      open: true
    }

  case actionTypes.CLOSE:
    return {
      ...state,
      open: false
    }

  case actionTypes.PUSH:
    return {
      ...state,
      components: [
        ...state.components,
        action.component
      ]
    }

  case actionTypes.POP:
    return {
      ...state,
      components: state.components.slice(0, state.components.length - action.panels)
    }

  default:
    return state
  }

}
