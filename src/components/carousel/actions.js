export const setTotal = (total) => ({
  type: 'SET_TOTAL',
  total
})

export const previous = () => ({
  type: 'PREVIOUS'
})

export const next = () => ({
  type: 'NEXT'
})

export const goto = (index) => ({
  type: 'GOTO',
  index
})
