import { createSelector } from 'reselect'
import _ from 'lodash'

const recordsSelector = (state, props) => state.records

const sortSelector = (state, props) => state.sort

const filterSelector = (state, props) => state.filter

const filtersSelector = (state, props) => props.filters

const qSelector = (state, props) => state.q

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

export const filtered = createSelector(
  filtersSelector,
  filterSelector,
  qSelector,
  (filters, filter, q) => Object.keys(filter).reduce((filtered, key) => ({
    ...filtered,
    [key]: _getValue(filters, filter, key)
  }), { q })
)

const _getValue = (filters, filter, key) => {
  const field = _.find(filters, { name: key })
  if(!field) return null
  const value = filter[key]
  if(field.type === 'daterange') return { $dr: value.key }
  if(_.isArray(value)) return { $in: value.map(item => item.key) }
  if(_.isPlainObject(value)) return { $eq: value.key }
  return { $eq: value }
}
