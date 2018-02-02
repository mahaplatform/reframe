export const setParams = (filter, sort) => ({
  type: 'SET_PARAMS',
  filter,
  sort
})

export const setColumns = (columns) => ({
  type: 'SET_COLUMNS',
  columns
})

export const setSelected = (selected) => ({
  type: 'SET_SELECTED',
  selected
})

export const sort = (key) => ({
  type: 'SORT',
  key
})

export const filter = (filter) => ({
  type: 'FILTER',
  filter
})

export const setRecords = (records) => ({
  type: 'SET_RECORDS',
  records
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const setQuery = (q) => ({
  type: 'SET_QUERY',
  q
})

export const toggleTasks = () => ({
  type: 'TOGGLE_TASKS'
})

export const addPanel = (panel) => ({
  type: 'ADD_PANEL',
  panel
})

export const removePanel = (panel)=> ({
  type: 'REMOVE_PANEL'
})

export const clearPanel = (panel) => ({
  type: 'CLEAR_PANEL'
})
