import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  cards: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET:
    return {
      cards: action.cards
    }

  case actionTypes.PUSH:
    return {
      cards: [
        ...state.cards,
        action.card
      ]
    }

  case actionTypes.POP:
    return {
      cards: state.cards.slice(0, state.cards.length - 1)
    }

  default:
    return state
  }

}
