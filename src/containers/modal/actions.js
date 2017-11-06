export const close = () => ({
  type: 'CLOSE'
})

export const open = (component) => ({
  type: 'OPEN',
  component
})

export const pop = (num = 1) => ({
  type: 'POP',
  num
})

export const push = (component) => ({
  type: 'PUSH',
  component
})
