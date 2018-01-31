'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = exports.files = undefined;

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

var files = exports.files = (0, _reselect.createSelector)(filesSelector, function (files) {
  return files.sort(function (fileA, fileB) {
    var aIsImage = (fileA.contentType || fileA.asset.content_type).match(/image/) !== null;
    var bIsImage = (fileB.contentType || fileB.asset.content_type).match(/image/) !== null;
    if (aIsImage && !bIsImage) return -1;
    if (bIsImage && !aIsImage) return 1;
    return 0;
  });
});

var value = exports.value = (0, _reselect.createSelector)(files, multipleSelector, function (files, multiple) {
  var assetIds = files.filter(function (file) {
    return !_lodash2.default.isNil(file.asset);
  }).map(function (file) {
    return file.asset.id;
  });
  return multiple ? assetIds : assetIds[0];
});