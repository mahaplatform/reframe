// @flow

import type { Method, OnSuccess, OnFailure } from '../types'
import type { Items, Open, Close, Clear, Request } from './types'

export const open = (items: Items): Open => ({
  type: 'OPEN',
  items
})

export const close = (): Close => ({
  type: 'CLOSE'
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})

export const request = (method: Method, endpoint: string, onSuccess: OnSuccess, onFailure: OnFailure): Request => ({
  type: 'API_REQUEST',
  method,
  endpoint,
  request: 'REQUEST_REQUEST',
  success: 'REQUEST_SUCCESS',
  failure: 'REQUEST_FAILURE',
  onSuccess,
  onFailure
})
