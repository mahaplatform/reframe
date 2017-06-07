import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  component: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      component: action.component
    }

  case actionTypes.CLOSE:
    return {
      component: null
    }

  default:
    return state
  }

}
