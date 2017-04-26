import * as actionTypes from './action_types'

export const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {}

  default:
    return state
  }

}
