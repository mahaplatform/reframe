// @flow

import type { Load, Set, Choose, Back, Restart, ResetAll, Reset, Update, Remove, Query } from './types'

export const load = (key: string, endpoint: string, value: string, text: string, ids: Array<number>): Load => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  meta: { key, value, text },
  query: { $ids: ids },
  request: 'LOAD_REQUEST',
  success: 'LOAD_SUCCESS',
  failure: 'LOAD_FAILURE'
})

export const set = (key: string, value: string): Set => ({
  type: 'SET',
  key,
  value
})

export const choose = (index: number): Choose => ({
  type: 'CHOOSE',
  index
})

export const back = (): Back => ({
  type: 'BACK'
})

export const restart = (): Restart => ({
  type: 'RESTART'
})

export const resetAll = (): ResetAll => ({
  type: 'RESET_ALL'
})

export const reset = (key: string): Reset => ({
  type: 'RESET',
  key
})

export const update = (key: string, value: string): Update => ({
  type: 'UPDATE',
  key,
  value
})

export const remove = (key: string, index: number): Remove => ({
  type: 'REMOVE',
  key,
  index
})

export const query = (q: string): Query => ({
  type: 'QUERY',
  q
})
