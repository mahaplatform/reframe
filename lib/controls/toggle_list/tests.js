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

var _toggle_list = require('./toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toggle_list component', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        ids: [1, 2, 3]
      };

      (0, _chai.expect)(actions.set([1, 2, 3])).to.eql(expected);
    });

    it('can dispatch toggle', function () {

      var expected = {
        type: 'TOGGLE',
        id: 1
      };

      (0, _chai.expect)(actions.toggle(1)).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        chosen: []
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set chosen', function () {

      var state = {
        chosen: []
      };

      var action = {
        type: 'SET',
        ids: [1, 2, 3]
      };

      var expected = {
        chosen: [1, 2, 3]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can add value', function () {

      var state = {
        chosen: [1, 2]
      };

      var action = {
        type: 'TOGGLE',
        id: 3
      };

      var expected = {
        chosen: [1, 2, 3]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can remove value', function () {

      var state = {
        chosen: [1, 2, 3]
      };

      var action = {
        type: 'TOGGLE',
        id: 3
      };

      var expected = {
        chosen: [1, 2]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var toggle_list = (0, _enzyme.shallow)(_react2.default.createElement(_toggle_list2.default, null));
      (0, _chai.expect)(toggle_list.is('div.reframe-toggle-list')).to.be.true;
    });
  });
});