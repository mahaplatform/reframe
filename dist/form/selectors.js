'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = exports.defaults = exports.filtered = undefined;

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sectionsSelector = function sectionsSelector(state) {
  return state.config;
};

var dataSelector = function dataSelector(state) {
  return state.data;
};

var filtered = exports.filtered = (0, _reselect.createSelector)(sectionsSelector, dataSelector, function (sections, data) {
  var entity = {};
  _mapFields(sections, function (field) {
    if (field.include !== false) {
      entity[field.name] = data[field.name];
    }
  });
  return entity;
});

var defaults = exports.defaults = (0, _reselect.createSelector)(sectionsSelector, function (sections) {
  var defaults = {};
  _mapFields(sections, function (field) {
    if (field.include !== false) {
      defaults[field.name] = field.defaultValue;
    }
  });
  return defaults;
});

var errors = exports.errors = (0, _reselect.createSelector)(sectionsSelector, dataSelector, function (sections, data) {
  var message = 'There were problems with your data.';
  var errors = {};
  _mapFields(sections, function (field) {
    var value = data[field.name];
    if (field.required && _lodash2.default.isEmpty(value)) {
      errors[field.name] = ['field is required'];
    }
  });
  return errors ? { message: message, errors: errors } : null;
});

var _mapFields = function _mapFields(sections, callback) {
  sections.map(function (section) {
    section.fields.map(function (field) {
      if (field.type === 'fields') {
        field.fields.map(callback);
      } else {
        callback(field);
      }
    });
  });
};