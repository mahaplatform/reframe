'use strict';

require('jsdom-global/register');

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('checkbox', function () {

  describe('component', function () {

    it('renders with a default state', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(control.is('div.reframe-checkbox')).to.be.true;

      var checkbox = control.childAt(0);
      (0, _chai.expect)(checkbox.is('div.ui.checkbox')).to.be.true;

      var icon = checkbox.childAt(0);
      (0, _chai.expect)(icon.is('i.toggle.off.icon')).to.be.true;
    });

    it('renders with a disabled state', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { disabled: true }));
      (0, _chai.expect)(control.find('div.checkbox').is('.disabled')).to.be.true;
    });

    it('renders with a on state', function () {

      var control = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { defaultValue: true }));
      (0, _chai.expect)(control.find('i').is('i.toggle.on.icon')).to.be.true;
    });

    it('handles click', function () {

      var control = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(control.find('i').is('i.toggle.off.icon')).to.be.true;
      control.find('i').simulate('click');
      (0, _chai.expect)(control.find('i').is('i.toggle.on.icon')).to.be.true;
    });

    it('calls onSet', function () {

      var onSet = (0, _sinon.spy)();
      (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { onSet: onSet }));
      (0, _chai.expect)(onSet.calledOnce).to.be.true;
    });

    it('calls onReady', function () {

      var onReady = (0, _sinon.spy)();
      (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { onReady: onReady }));
      (0, _chai.expect)(onReady.calledOnce).to.be.true;
    });

    it('calls onChange', function () {

      var onChange = (0, _sinon.spy)();
      var control = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { onChange: onChange }));
      (0, _chai.expect)(onChange.called).to.be.false;
      control.find('i').simulate('click');
      (0, _chai.expect)(onChange.callCount).to.eql(1);
      (0, _chai.expect)(onChange.getCall(0).args[0]).to.be.true;
      control.find('i').simulate('click');
      (0, _chai.expect)(onChange.callCount).to.eql(2);
      (0, _chai.expect)(onChange.getCall(1).args[0]).to.be.false;
    });
  });
});