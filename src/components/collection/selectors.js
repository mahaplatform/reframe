import { createSelector } from 'reselect'

const recordsSelector = (state, props) => state.records

const sortSelector = (state, props) => state.sort

export const records = createSelector(
  recordsSelector,
  sortSelector,
  (records, sort) => {
    if(!records) return null
    return records.sort((a, b) => {
      const aValue = a[sort.key]
      const bValue = b[sort.key]
      if(sort.order === 'asc' && aValue < bValue) return -1
      if(sort.order === 'asc' && aValue > bValue) return 1
      if(sort.order === 'desc' && aValue > bValue) return -1
      if(sort.order === 'desc' && aValue < bValue) return 1
      return 0
    })
  }
)
