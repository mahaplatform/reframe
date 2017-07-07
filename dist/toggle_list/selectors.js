'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ids = undefined;

var _reselect = require('reselect');

var chosenSelector = function chosenSelector(state) {
  return state.chosen;
};

var ids = exports.ids = (0, _reselect.createSelector)(chosenSelector, function (chosen) {
  return chosen.map(function (result) {
    return result.id;
  });
});