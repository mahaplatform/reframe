'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
exports.addRow = addRow;
exports.moveRow = moveRow;
exports.removeRow = removeRow;
exports.updateTable = updateTable;
exports.updateCell = updateCell;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function initialize(cid, columns, value) {
  return {
    type: actionTypes.INITIALIZE,
    cid: cid,
    columns: columns,
    value: value
  };
}

function addRow(cid) {
  return {
    type: actionTypes.ADD_ROW,
    cid: cid
  };
}

function moveRow(cid, fromIndex, toIndex) {
  return {
    type: actionTypes.MOVE_ROW,
    cid: cid,
    fromIndex: fromIndex,
    toIndex: toIndex
  };
}

function removeRow(cid, index) {
  return {
    type: actionTypes.REMOVE_ROW,
    cid: cid,
    index: index
  };
}

function updateTable(cid, value) {
  return {
    type: actionTypes.UPDATE_TABLE,
    cid: cid,
    value: value
  };
}

function updateCell(cid, index, code, value) {
  return {
    type: actionTypes.UPDATE_CELL,
    cid: cid,
    index: index,
    code: code,
    value: value
  };
}