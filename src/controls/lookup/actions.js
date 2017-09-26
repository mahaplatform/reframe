export const begin = () => ({
  type: 'BEGIN'
})

export const end = () => ({
  type: 'END'
})

export const clear = () => ({
  type: 'CLEAR'
})

export const cancel = () => ({
  type: 'CANCEL'
})

export const choose = (chosen) => ({
  type: 'CHOOSE',
  chosen
})

export const query = (q) => ({
  type: 'QUERY',
  q
})

export const load = (query, endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'LOAD_REQUEST',
  success: 'LOAD_SUCCESS',
  failure: 'LOAD_FAILURE'
})

export const showForm = () => ({
  type: 'SHOW_FORM'
})

export const hideForm = () => ({
  type: 'HIDE_FORM'
})
