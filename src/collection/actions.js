import * as actionTypes from './action_types'

export const setParams = (filter, sort) => ({
  type: actionTypes.SET_PARAMS,
  filter,
  sort
})

export const sort = (key) => ({
  type: actionTypes.SORT,
  key
})

export const filter = (filter) => ({
  type: actionTypes.FILTER,
  filter
})

export const setRecords = (records) => ({
  type: 'SET_RECORDS',
  records
})
