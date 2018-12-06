export const set = (link_id) => ({
  type: 'SET',
  link_id
})

export const remove = () => ({
  type: 'REMOVE'
})

export const fetchLink = (id) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint: `/api/admin/links/${id}`,
  request: 'FETCH_LINK_REQUEST',
  success: 'FETCH_LINK_SUCCESS',
  failure: 'FETCH_LINK_FAILURE'
})

export const createLink = (url) => ({
  type: 'API_REQUEST',
  method: 'POST',
  body: { url },
  endpoint: '/api/admin/links',
  request: 'FETCH_LINK_REQUEST',
  success: 'FETCH_LINK_SUCCESS',
  failure: 'FETCH_LINK_FAILURE'
})
