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
        type: 'OPEN',
        message: message,
        options: options
      };

      (0, _chai.expect)(actions.open(message, options)).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        message: null,
        options: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open prompt', function () {

      var state = {
        message: null,
        options: null,
        open: false
      };

      var action = {
        type: 'OPEN',
        message: message,
        options: options
      };

      var expected = {
        message: message,
        options: options,
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close prompt', function () {

      var state = {
        message: message,
        options: options,
        open: true
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        message: message,
        options: options,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear prompt', function () {

      var state = {
        message: message,
        options: options,
        open: true
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        message: null,
        options: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, null));
      (0, _chai.expect)(prompt.is('div.reframe-prompt')).to.be.true;
    });

    it('handles onClose on clicked overlay', function () {

      var onClose = (0, _sinon.spy)();
      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { onClose: onClose }));
      var overlay = prompt.childAt(0).childAt(0);
      overlay.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('handles onClose on clicked cancel', function () {

      var onClose = (0, _sinon.spy)();
      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { cancel: true, onClose: onClose }));
      var cancel = prompt.find('div.reframe-prompt-cancel');
      cancel.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('calls onClear', function (done) {

      var onClear = (0, _sinon.spy)();

      var prompt = (0, _enzyme.shallow)(_react2.default.createElement(_prompt2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

      prompt.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });
  });
});