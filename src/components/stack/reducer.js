export const INITIAL_STATE = {
  cards: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return {
      cards: action.cards
    }

  case 'PUSH':
    return {
      cards: [
        ...state.cards,
        action.card
      ]
    }

  case 'POP':
    return {
      cards: state.cards.slice(0, state.cards.length - 1)
    }

  default:
    return state
  }

}
