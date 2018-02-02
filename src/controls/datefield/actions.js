export const setValue = (value) => ({
  type: 'SET_VALUE',
  value
})

export const setCurrent = (month, year) => ({
  type: 'SET_CURRENT',
  month,
  year
})

export const previous = () => ({
  type: 'PREVIOUS'
})


export const next = () => ({
  type: 'NEXT'
})

export const begin = () => ({
  type: 'BEGIN'
})

export const cancel = () => ({
  type: 'CANCEL'
})

export const choose = (value)=> ({
  type: 'CHOOSE',
  value
})

export const clear = () => ({
  type: 'CLEAR'
})
