export const set = (cards) => ({
  type: 'SET',
  cards
})

export const push = (card) => ({
  type: 'PUSH',
  card
})

export const pop = () => ({
  type: 'POP'
})
