export const fetchItems = (endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  request: 'FETCH_ITEMS_REQUEST',
  success: 'FETCH_ITEMS_SUCCESS',
  failure: 'FETCH_ITEMS_FAILURE'
})

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
})

export const setSelected = (values) => ({
  type: 'SET_SELECTED',
  values
})

export const choose = (multiple, value) => ({
  type: 'CHOOSE',
  multiple,
  value
})
