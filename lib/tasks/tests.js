'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tasks component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        items: []
      };

      (0, _chai.expect)(actions.open([])).to.eql(expected);
    });

    it('can dispatch close', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: 'CLEAR'
      };

      (0, _chai.expect)(actions.clear()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open tasks', function () {

      var state = {};

      var action = {
        type: 'OPEN',
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var expected = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }],
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close tasks', function () {

      var state = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }],
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear tasks', function () {

      var state = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {});
  });
});