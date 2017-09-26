// @flow

import type { Ids, Set, Toggle } from './types'

export const set = (ids: Ids): Set => ({
  type: 'SET',
  ids
})

export const toggle = (id: number): Toggle => ({
  type: 'TOGGLE',
  id
})
