import * as actionTypes from './action_types'

const INITIAL_STATE = {
  status: 'pending',
  config: [],
  entity: {},
  data: {},
  errors: {}
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET_SECTIONS:
    return {
      ...state,
      config: action.sections,
      status: 'configured'
    }

  default:
    return state
  }

}
