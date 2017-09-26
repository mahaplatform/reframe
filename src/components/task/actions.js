// @flow

import type { ItemRequest, Request } from './types'

export const request = ({ method, endpoint, onSuccess, onFailure }: ItemRequest): Request => ({
  type: 'API_REQUEST',
  method,
  endpoint,
  request: 'REQUEST_REQUEST',
  success: 'REQUEST_SUCCESS',
  failure: 'REQUEST_FAILURE',
  onSuccess,
  onFailure
})
