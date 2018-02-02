export const begin = () => ({
  type: 'BEGIN'
})

export const end = () => ({
  type: 'END'
})

export const type = (q)=> ({
  type: 'TYPE',
  q
})

export const abort = () => ({
  type: 'ABORT'
})
