'use strict';

var _chai = require('chai');

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('history component', function () {

  describe('actions', function () {

    it('can dispatch push', function () {

      var expected = {
        type: actionTypes.PUSH,
        pathname: '/test'
      };

      (0, _chai.expect)(actions.push('/test')).to.eql(expected);
    });

    it('can dispatch back', function () {

      var expected = {
        type: actionTypes.BACK
      };

      (0, _chai.expect)(actions.back()).to.eql(expected);
    });

    it('can dispatch reset', function () {

      var expected = {
        type: actionTypes.RESET,
        pathname: '/test'

      };

      (0, _chai.expect)(actions.reset('/test')).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        stack: []
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can push to an empty stack', function () {

      var state = {
        stack: []
      };

      var action = {
        type: actionTypes.PUSH,
        pathname: '/test'
      };

      var expected = {
        stack: ['/test']
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can push to an existing stack', function () {

      var state = {
        stack: ['/one']
      };

      var action = {
        type: actionTypes.PUSH,
        pathname: '/two'
      };

      var expected = {
        stack: ['/one', '/two']
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can back from an existing stack', function () {

      var state = {
        stack: ['/one', '/two']
      };

      var action = {
        type: actionTypes.BACK
      };

      var expected = {
        stack: ['/one']
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can back from an empty stack', function () {

      var state = {
        stack: []
      };

      var action = {
        type: actionTypes.BACK
      };

      var expected = {
        stack: []
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can reset the stack', function () {

      var state = {
        stack: ['/one', '/two']
      };

      var action = {
        type: actionTypes.RESET,
        pathname: '/three'
      };

      var expected = {
        stack: ['/three']
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {});
});