'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PolymorphicComponent;
exports.morphOnPropPresent = morphOnPropPresent;
exports.morphOnPropEquals = morphOnPropEquals;
exports.morphOnPropNotEquals = morphOnPropNotEquals;
exports.morphOnPropMatches = morphOnPropMatches;
exports.morphOnPropValidation = morphOnPropValidation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PolymorphicComponent(structure) {
  var name = structure.name;
  var defaultForm = structure.defaultForm;
  var _structure$rules = structure.rules;
  var rules = _structure$rules === undefined ? [] : _structure$rules;
  var _structure$forwardMet = structure.forwardMethods;
  var forwardMethods = _structure$forwardMet === undefined ? [] : _structure$forwardMet;


  return _react2.default.createClass({});
}

function morphOnPropPresent(propertyName) {
  return function (props) {
    return _lodash2.default.has(props, propertyName);
  };
}

function morphOnPropEquals(property, value) {
  return function (props) {
    return _lodash2.default.get(props, property) === value;
  };
}

function morphOnPropNotEquals(property, value) {
  return _lodash2.default.negate(morphOnPropEquals(property, value));
}

function morphOnPropMatches(matches) {
  return _lodash2.default.matches(matches);
}

function morphOnPropValidation(cb) {
  return function (props) {
    return !!cb(props);
  };
}