'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBusy = exports.isReady = exports.filtered = exports.defaults = exports.fields = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _flat = require('flat');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = function sections(state) {
  return state.config;
};

var data = function data(state) {
  return state.data;
};

var ready = function ready(state) {
  return state.ready;
};

var busy = function busy(state) {
  return state.busy;
};

var fields = exports.fields = (0, _reselect.createSelector)(sections, function (sections) {
  return sections.reduce(function (fields, section) {
    return [].concat((0, _toConsumableArray3.default)(fields), (0, _toConsumableArray3.default)(section.fields.reduce(function (fields, field) {
      return [].concat((0, _toConsumableArray3.default)(fields), [field.type === 'fields' ? field.fields.reduce(function (fields, field) {
        return [].concat((0, _toConsumableArray3.default)(fields), [field]);
      }, []) : field]);
    }, [])));
  }, []);
});

var defaults = exports.defaults = (0, _reselect.createSelector)(fields, function (fields) {
  return fields.reduce(function (defaults, field) {
    if (field.include === false) return defaults;
    return (0, _extends5.default)({}, defaults, (0, _defineProperty3.default)({}, field.name, field.defaultValue));
  }, {});
});

var filtered = exports.filtered = (0, _reselect.createSelector)(fields, data, function (fields, data) {
  return (0, _flat.unflatten)(fields.reduce(function (entity, field) {
    if (field.include === false || field.type == 'text') return entity;
    return (0, _extends5.default)({}, entity, (0, _defineProperty3.default)({}, field.name, !_lodash2.default.isNil(_lodash2.default.get(data, field.name)) ? _lodash2.default.get(data, field.name) : null));
  }, {}));
});

var isReady = exports.isReady = (0, _reselect.createSelector)(fields, ready, function (fields, ready) {
  return fields.reduce(function (isReady, field) {
    if (!isReady) return false;
    return _lodash2.default.includes(ready, field.name);
  }, true);
});

var isBusy = exports.isBusy = (0, _reselect.createSelector)(busy, function (busy) {
  return busy.length > 0;
});