import * as actionTypes from './action_types'

const initialState = {
  title: props.title,
  open: props.open
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return { ...state, open: true }
    case actionTypes.CLOSE_MODAL:
      return { ...state, open: false }
    default:
      return state
  }
}
