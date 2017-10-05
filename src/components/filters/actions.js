export const set = (results) => ({
  type: 'SET',
  results
})

export const change = (name, value) => ({
  type: 'CHANGE',
  name,
  value
})

export const addPanel = (panel) => ({
  type: 'ADD_PANEL',
  panel
})

export const removePanel = () => ({
  type: 'REMOVE_PANEL'
})

export const reset = () => ({
  type: 'RESET'
})
