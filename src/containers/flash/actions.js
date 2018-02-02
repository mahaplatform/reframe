export const set = (style, message) => ({
  type: 'SET',
  style,
  message
})

export const clear = () => ({
  type: 'CLEAR'
})
