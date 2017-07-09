import _ from 'lodash'
import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  chosen: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.TOGGLE:
    const included = _.includes(state.chosen, action.id)
    return {
      ...state,
      chosen: included ? _.without(state.chosen, action.id) : [
        ...state.chosen,
        action.id
      ]
    }

  case actionTypes.SET:
    return {
      ...state,
      chosen: action.ids
    }

  default:
    return state
  }

}
