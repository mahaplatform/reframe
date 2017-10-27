// @flow

import type { ApiRequest } from '../../types'
import type { Query, FetchDelay, FetchTimeout, Select, SelectAll } from './types'

export const fetch = (endpoint: string, query: Query): ApiRequest => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'FETCH_REQUEST',
  success: 'FETCH_SUCCESS',
  failure: 'FETCH_FAILURE'
})

export const fetchDelay = (): FetchDelay => ({
  type: 'FETCH_DELAY'
})

export const fetchTimeout = (): FetchTimeout => ({
  type: 'FETCH_TIMEOUT'
})

export const select = (id: number): Select => ({
  type: 'SELECT',
  id
})

export const selectAll = (): SelectAll => ({
  type: 'SELECT_ALL'
})
