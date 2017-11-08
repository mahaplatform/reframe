'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = undefined;

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filesSelector = function filesSelector(state, props) {
  return state.files;
};

var multipleSelector = function multipleSelector(state, props) {
  return props.multiple;
};

var value = exports.value = (0, _reselect.createSelector)(filesSelector, multipleSelector, function (files, multiple) {
  var assetIds = files.filter(function (file) {
    return !_lodash2.default.isNil(file.asset);
  }).map(function (file) {
    return file.asset.id;
  });
  return multiple ? assetIds : assetIds[0];
});