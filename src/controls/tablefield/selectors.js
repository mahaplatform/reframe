import _ from 'lodash'
import { createSelector } from 'reselect'

const columns = (state, props) => props.columns

const values = (state, props) => state.values

export const isValid = createSelector(
  columns,
  values,
  (columns, values) => columns.reduce((valid, column) => {
    return !valid ? false : !_.isNil(values[column.key]) && !_.isEmpty(values[column.key])
  }, true)
)


export const row = createSelector(
  columns,
  values,
  (columns, values) => columns.reduce((row, column) => ({
    ...row,
    [column.key]: values[column.key]
  }), { code: _.random(100000000, 999999999).toString(36) })
)
