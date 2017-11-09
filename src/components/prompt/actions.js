export const open = (title, message, options) => ({
  type: 'OPEN',
  title,
  message,
  options
})

export const close = () => ({
  type: 'CLOSE'
})

export const clear = () => ({
  type: 'CLEAR'
})
