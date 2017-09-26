import _ from 'lodash'

export const INITIAL_STATE = {
  chosen: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'TOGGLE':
    const included = _.includes(state.chosen, action.id)
    return {
      ...state,
      chosen: included ? _.without(state.chosen, action.id) : [
        ...state.chosen,
        action.id
      ]
    }

  case 'SET':
    return {
      ...state,
      chosen: action.ids
    }

  default:
    return state
  }

}
