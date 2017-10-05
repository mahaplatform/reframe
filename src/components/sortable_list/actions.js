export const set = (items) => ({
  type: 'SET',
  items
})

export const toggle = (index) => ({
  type: 'TOGGLE',
  index
})

export const move = (from, to) => ({
  type: 'MOVE',
  from,
  to
})
