import * as actionTypes from './action_types'

const INITIAL_STATE = {
  title: null,
  open: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN_MODAL:
    return { ...state, open: true }

  case actionTypes.CLOSE_MODAL:
    return { ...state, open: false }

  default:
    return state

  }

}
