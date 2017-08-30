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

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('drawer component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: actionTypes.OPEN,
        component: 'foo',
        location: 'right'
      };

      (0, _chai.expect)(actions.open('foo', 'right')).to.eql(expected);
    });

    it('can dispatch close', function () {

      var expected = {
        type: actionTypes.CLOSE
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        component: null,
        location: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open drawer', function () {

      var state = {
        component: null,
        location: null
      };

      var action = {
        type: actionTypes.OPEN,
        component: 'foo',
        location: 'right'
      };

      var expected = {
        component: 'foo',
        location: 'right',
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close drawer', function () {

      var state = {
        component: 'foo',
        location: 'right'
      };

      var action = {
        type: actionTypes.CLOSE
      };

      var expected = {
        component: 'foo',
        location: 'right',
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {});
  });
});