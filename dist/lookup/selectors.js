'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chosen = undefined;

var _reselect = require('reselect');

var resultsSelector = function resultsSelector(state) {
  return state.results;
};

var selectedSelector = function selectedSelector(state) {
  return state.selected;
};

var chosen = exports.chosen = (0, _reselect.createSelector)(resultsSelector, selectedSelector, function (results, selected) {
  var index = selected || 0;
  return results.length > 0 ? results[index] : null;
});