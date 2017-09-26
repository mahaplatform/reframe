// @flow

import type { SetParams, Sort, Filter, SetRecords } from './types'

export const setParams = (filter: Object, sort: Object): SetParams => ({
  type: 'SET_PARAMS',
  filter,
  sort
})

export const sort = (key: string): Sort => ({
  type: 'SORT',
  key
})

export const filter = (filter: Object): Filter => ({
  type: 'FILTER',
  filter
})

export const setRecords = (records: Array<Object>): SetRecords => ({
  type: 'SET_RECORDS',
  records
})
