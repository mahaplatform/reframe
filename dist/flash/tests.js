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

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('flash component', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: actionTypes.SET,
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)(actions.set('success', 'good job')).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: actionTypes.CLEAR
      };

      (0, _chai.expect)(actions.clear()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set flash message', function () {

      var state = {
        message: null,
        style: null
      };

      var action = {
        type: actionTypes.SET,
        style: 'success',
        message: 'good job'
      };

      var expected = {
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear flash message', function () {

      var state = {
        style: 'success',
        message: 'good job'
      };

      var action = {
        type: actionTypes.CLEAR
      };

      var expected = {
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var config = {
        message: null,
        style: null,
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(
        _component2.default,
        config,
        _react2.default.createElement(
          'div',
          null,
          'child'
        )
      ));
      (0, _chai.expect)(flash.is('div.reframe-flash')).to.be.true;
      (0, _chai.expect)(flash.children.length).to.be.equal(1);

      var child = flash.childAt(0);
      (0, _chai.expect)(child.is('div')).to.be.truthy;
      (0, _chai.expect)(child.text()).to.equal('child');
    });

    it('renders with flash', function () {

      var config = {
        message: 'good job',
        style: 'success',
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(_component2.default, config));

      var transitionGroup = flash.childAt(0);
      var panel = transitionGroup.childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-flash-popup.success')).to.be.true;

      var paragraph = panel.childAt(0);
      (0, _chai.expect)(paragraph.is('p')).to.be.truthy;
      (0, _chai.expect)(paragraph.text()).to.equal('good job');

      var icon = paragraph.childAt(0);
      (0, _chai.expect)(icon.is('i.fa.fa-check-circle')).to.be.true;
    });
  });
});