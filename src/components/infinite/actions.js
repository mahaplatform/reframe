export const fetch = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'FETCH_REQUEST',
  success: 'FETCH_SUCCESS',
  failure: 'FETCH_FAILURE'
})

export const fetchDelay = () => ({
  type: 'FETCH_DELAY'
})

export const fetchTimeout = () => ({
  type: 'FETCH_TIMEOUT'
})
