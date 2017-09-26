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

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tabs component', function () {

  describe('actions', function () {

    it('can dispatch choose', function () {

      var expected = {
        type: 'CHOOSE',
        index: 0
      };

      (0, _chai.expect)(actions.choose(0)).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        chosen: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can choose tab', function () {

      var state = {};

      var action = {
        type: 'CHOOSE',
        index: 0
      };

      var expected = {
        chosen: 0
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, null));
      (0, _chai.expect)(tabs.is('Scrollpane')).to.be.true;
    });

    // TODO: more component tests
  });
});