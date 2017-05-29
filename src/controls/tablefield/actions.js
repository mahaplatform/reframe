import * as actionTypes from './action_types'

export function initialize(columns, value) {
  return {
    type: actionTypes.INITIALIZE,
    columns,
    value
  }
}

export function addRow() {
  return {
    type: actionTypes.ADD_ROW
  }
}

export function moveRow(fromIndex, toIndex) {
  return {
    type: actionTypes.MOVE_ROW,
    fromIndex,
    toIndex
  }
}

export function removeRow(index) {
  return {
    type: actionTypes.REMOVE_ROW,
    index
  }
}

export function updateTable(value) {
  return {
    type: actionTypes.UPDATE_TABLE,
    value
  }
}

export function updateCell(index, code, value) {
  return {
    type: actionTypes.UPDATE_CELL,
    index,
    code,
    value
  }
}
