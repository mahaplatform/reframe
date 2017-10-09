// @flow

import type { ItemRequest, Request } from './types'

export const request = ({ method, endpoint, body, onSuccess, onFailure }: ItemRequest): Request => ({
  type: 'API_REQUEST',
  method,
  endpoint,
  body,
  request: 'REQUEST_REQUEST',
  success: 'REQUEST_SUCCESS',
  failure: 'REQUEST_FAILURE',
  onSuccess,
  onFailure
})
