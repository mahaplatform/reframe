'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = exports.validateResults = exports.rules = exports.isBusy = exports.isReady = exports.filtered = exports.defaults = exports.fields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = require('reselect');

var _flat = require('flat');

var _checkit = require('checkit');

var _checkit2 = _interopRequireDefault(_checkit);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    return [].concat(_toConsumableArray(fields), _toConsumableArray(section.fields.reduce(function (fields, field) {
      return [].concat(_toConsumableArray(fields), [field.type === 'fields' ? field.fields.reduce(function (fields, field) {
        return [].concat(_toConsumableArray(fields), [field]);
      }, []) : field]);
    }, [])));
  }, []);
});

var defaults = exports.defaults = (0, _reselect.createSelector)(fields, function (fields) {
  return fields.reduce(function (defaults, field) {
    if (field.include === false) return defaults;
    return _extends({}, defaults, _defineProperty({}, field.name, field.defaultValue));
  }, {});
});

var filtered = exports.filtered = (0, _reselect.createSelector)(fields, data, function (fields, data) {
  return (0, _flat.unflatten)(fields.reduce(function (entity, field) {
    if (field.include === false || field.type == 'text') return entity;
    return _extends({}, entity, _defineProperty({}, field.name, !_lodash2.default.isNil(_lodash2.default.get(data, field.name)) ? _lodash2.default.get(data, field.name) : null));
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

var rules = exports.rules = (0, _reselect.createSelector)(fields, function (fields) {
  return fields.reduce(function (rules, field) {
    return _extends({}, rules, _defineProperty({}, field.name, [].concat(_toConsumableArray(field.required ? ['required'] : []), _toConsumableArray(field.rules || []))));
  }, {});
});

var validateResults = exports.validateResults = (0, _reselect.createSelector)(rules, filtered, function (rules, filtered) {
  var results = (0, _checkit2.default)(rules).validateSync(filtered);
  return results[0] ? results[0].toJSON() : null;
});

var isValid = exports.isValid = (0, _reselect.createSelector)(validateResults, function (validateResults) {
  return validateResults === null;
});