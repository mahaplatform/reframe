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

function initialize(columns, value) {
  return {
    type: actionTypes.INITIALIZE,
    columns: columns,
    value: value
  };
}

function addRow() {
  return {
    type: actionTypes.ADD_ROW
  };
}

function moveRow(fromIndex, toIndex) {
  return {
    type: actionTypes.MOVE_ROW,
    fromIndex: fromIndex,
    toIndex: toIndex
  };
}

function removeRow(index) {
  return {
    type: actionTypes.REMOVE_ROW,
    index: index
  };
}

function updateTable(value) {
  return {
    type: actionTypes.UPDATE_TABLE,
    value: value
  };
}

function updateCell(index, code, value) {
  return {
    type: actionTypes.UPDATE_CELL,
    index: index,
    code: code,
    value: value
  };
}