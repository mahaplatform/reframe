import * as actionTypes from './action_types'

export const set = (cards) => ({
  type: actionTypes.SET,
  cards
})

export const push = (card) => ({
  type: actionTypes.PUSH,
  card
})

export const pop = () => ({
  type: actionTypes.POP
})
