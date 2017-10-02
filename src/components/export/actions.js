export const toggle = (index) => ({
  type: 'TOGGLE',
  index
})

export const move = (from, to) => ({
  type: 'MOVE',
  from,
  to
})
