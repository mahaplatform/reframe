export const open = (component, location) => ({
  type: 'OPEN',
  component,
  location
})

export const close = () => ({
  type: 'CLOSE'
})

export const clear = () => ({
  type: 'CLEAR'
})
