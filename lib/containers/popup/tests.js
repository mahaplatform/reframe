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

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('popup component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        )
      };

      (0, _chai.expect)(actions.open(_react2.default.createElement(
        'div',
        null,
        'Foo'
      ))).to.eql(expected);
    });

    it('can dispatch close', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        component: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open popup', function () {

      var state = {
        component: null
      };

      var action = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        )
      };

      var expected = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close popup', function () {

      var state = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: true
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var popup = (0, _enzyme.shallow)(_react2.default.createElement(
        _popup2.default,
        null,
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(popup.is('div.reframe-popup')).to.be.true;

      var child = popup.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var panel = popup.childAt(1).childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-popup-panel')).to.be.true;

      var item = panel.childAt(0);
      (0, _chai.expect)(item.is('div.reframe-popup-panel-item')).to.be.true;
    });

    it('renders open with a component', function () {

      var component = _react2.default.createElement('div', { className: 'foo' });
      var popup = (0, _enzyme.shallow)(_react2.default.createElement(_popup2.default, { component: component, open: true }), { lifecycleExperimental: true });
      var panelComponent = popup.childAt(0).childAt(0).childAt(0).childAt(0);
      (0, _chai.expect)(panelComponent.node.type.props.className).to.equal('foo');
    });

    it('calls onClear', function (done) {

      var onClear = (0, _sinon.spy)();

      var popup = (0, _enzyme.shallow)(_react2.default.createElement(_popup2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

      popup.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });
  });
});