export const load = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'LOAD_REQUEST',
  success: 'LOAD_SUCCESS',
  failure: 'LOAD_FAILURE'
})

export const setChosen = (chosen) => ({
  type: 'SET_CHOSEN',
  chosen
})

export const setQuery = (query)=> ({
  type: 'SET_QUERY',
  query
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const toggleFilter = (id: number) => ({
  type: 'TOGGLE_FILTER',
  id
})

export const toggleRecord = (multiple, record) => ({
  type: 'TOGGLE_RECORD',
  multiple,
  record
})
