import * as actionTypes from './action_types'
import update from 'react/lib/update'
import _ from 'lodash'

const INITIAL_VALUE = {
  columns: [],
  value: {}
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case actionTypes.INITIALIZE:
    return {
      ...state,
      columns: action.columns,
      value: action.value || state.value
    }

  case actionTypes.REMOVE_ROW:
    return {
      ...state,
      value: _.remove(state.value, function(row,index) {
        return (index != action.index)
      })
    }

  case actionTypes.MOVE_ROW:
    const rows = state.value
    const row = rows[action.fromIndex]
    return {
      ...state,
      value: update(rows, { $splice: [ [action.fromIndex, 1], [action.toIndex, 0, row] ] })
    }

  case actionTypes.ADD_ROW:
    let newrow = {}
    state.columns.map((column) => {
      newrow[column.code] = null
    })
    return {
      ...state,
      value: [...state.value, newrow]
    }

  case actionTypes.UPDATE_TABLE:
    return {
      ...state,
      value: action.value
    }

  case actionTypes.UPDATE_CELL:
    let value = _.cloneDeep(state.value)
    value[action.index][action.code] = action.value
    return {
      ...state,
      value: value
    }

  default:
    return state

  }

}
