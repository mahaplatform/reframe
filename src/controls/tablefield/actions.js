import * as actionTypes from './action_types'

export function initialize(cid, columns, value) {
  return {
    type: actionTypes.INITIALIZE,
    cid,
    columns,
    value
  }
}

export function addRow(cid) {
  return {
    type: actionTypes.ADD_ROW,
    cid
  }
}

export function moveRow(cid, fromIndex, toIndex) {
  return {
    type: actionTypes.MOVE_ROW,
    cid,
    fromIndex,
    toIndex
  }
}

export function removeRow(cid, index) {
  return {
    type: actionTypes.REMOVE_ROW,
    cid,
    index
  }
}

export function updateTable(cid, value) {
  return {
    type: actionTypes.UPDATE_TABLE,
    cid,
    value
  }
}

export function updateCell(cid, index, code, value) {
  return {
    type: actionTypes.UPDATE_CELL,
    cid,
    index,
    code,
    value
  }
}