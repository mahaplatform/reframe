export const set = (rows) => ({
  type: 'SET',
  rows
})

export const add = (row) => ({
  type: 'ADD',
  row
})

export const remove = (index) => ({
  type: 'REMOVE',
  index
})

export const reorder = (from, to) => ({
  type: 'REORDER',
  from,
  to
})

export const update = (key, value) => ({
  type: 'UPDATE',
  key,
  value
})
