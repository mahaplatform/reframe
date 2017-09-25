'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _prompt = require('./prompt');

var _prompt2 = _interopRequireDefault(_prompt);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('prompt component', function () {

  var message = 'Are you sure?';

  var options = [{ label: 'Yes', handler: function handler() {} }, { label: 'No', handler: function handler() {} }];

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: actionTypes.OPEN,
        message: message,
        options: options
      };

      (0, _chai.expect)(actions.open(message, options)).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: actionTypes.CLOSE
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        message: null,
        options: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open prompt', function () {

      var state = {
        message: null,
        options: null
      };

      var action = {
        type: actionTypes.OPEN,
        message: message,
        options: options
      };

      var expected = {
        message: message,
        options: options
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close prompt', function () {

      var state = {
        message: message,
        options: options
      };

      var action = {
        type: actionTypes.CLOSE
      };

      var expected = {
        message: null,
        options: null
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {});
  });
});