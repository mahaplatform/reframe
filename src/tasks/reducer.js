import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  items: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      items: action.items
    }

  case actionTypes.CLOSE:
    return INITIAL_STATE

  default:
    return state
  }

}
