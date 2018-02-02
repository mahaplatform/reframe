export const fetch = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'FETCH_REQUEST',
  success: 'FETCH_SUCCESS',
  failure: 'FETCH_FAILURE'
})

export const begin = () => ({
  type: 'BEGIN'
})

export const end = () => ({
  type: 'END'
})

export const remove = (index) => ({
  type: 'REMOVE',
  index
})

export const select = (selected) => ({
  type: 'SELECT',
  selected
})
