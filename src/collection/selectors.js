import { createSelector } from 'reselect'

const recordsSelector = state => state.records

const sortSelector = state => state.params.sort

const staticSelector = state => state.static

export const records = createSelector(
  recordsSelector,
  sortSelector,
  staticSelector,
  (records, sort, staticData) => {
    if(!staticData) return records
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
