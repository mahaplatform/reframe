'use strict';

require('jsdom-global/register');

var _enzyme = require('enzyme');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _colorfield = require('./colorfield');

var _colorfield2 = _interopRequireDefault(_colorfield);

var _chai = require('chai');

var _sinon = require('sinon');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('collection', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        color: 'red'
      };

      (0, _chai.expect)(actions.set('red')).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        color: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set color', function () {

      var state = {
        color: null
      };

      var action = {
        type: 'SET',
        color: 'red'
      };

      var expected = {
        color: 'red'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, null));
      (0, _chai.expect)(colorfield.is('div.reframe-colorfield')).to.be.true;
      (0, _chai.expect)(colorfield.children().length).to.equal(10);
      (0, _chai.expect)(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#DB2828');
      (0, _chai.expect)(colorfield.childAt(1).node.props.style.backgroundColor).to.equal('#F2711C');
      (0, _chai.expect)(colorfield.childAt(2).node.props.style.backgroundColor).to.equal('#FBBD08');
      (0, _chai.expect)(colorfield.childAt(3).node.props.style.backgroundColor).to.equal('#B5CC18');
      (0, _chai.expect)(colorfield.childAt(4).node.props.style.backgroundColor).to.equal('#21BA45');
      (0, _chai.expect)(colorfield.childAt(5).node.props.style.backgroundColor).to.equal('#00B5AD');
      (0, _chai.expect)(colorfield.childAt(6).node.props.style.backgroundColor).to.equal('#2185D0');
      (0, _chai.expect)(colorfield.childAt(7).node.props.style.backgroundColor).to.equal('#6435C9');
      (0, _chai.expect)(colorfield.childAt(8).node.props.style.backgroundColor).to.equal('#A333C8');
      (0, _chai.expect)(colorfield.childAt(9).node.props.style.backgroundColor).to.equal('#E03997');

      var color = colorfield.childAt(0);
      (0, _chai.expect)(color.is('div.reframe-color'));
    });

    it('renders with a custom colors', function () {

      var colors = [{ name: 'red', value: '#990000' }];

      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { colors: colors }));
      (0, _chai.expect)(colorfield.is('div.reframe-colorfield')).to.be.true;
      (0, _chai.expect)(colorfield.children().length).to.equal(1);
      (0, _chai.expect)(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#990000');
    });

    it('renders with selected color', function () {

      var color = 'red';
      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { color: color }));
      var red = colorfield.childAt(0);
      var icon = red.childAt(0);
      (0, _chai.expect)(icon.is('i.check.icon')).to.be.true;

      var orange = colorfield.childAt(1);
      (0, _chai.expect)(orange.children().length).to.equal(0);
    });

    it('handles click', function () {

      var onSet = (0, _sinon.spy)();
      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { onSet: onSet }));

      var orange = colorfield.childAt(1);
      orange.simulate('click');
      (0, _chai.expect)(onSet.getCall(0).args[0]).to.equal('orange');
    });

    it('calls onSet', function () {

      var onSet = (0, _sinon.spy)();
      (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { defaultValue: 'red', onSet: onSet }), { lifecycleExperimental: true });
      (0, _chai.expect)(onSet.calledOnce).to.be.true;
    });

    it('calls onReady', function () {

      var onReady = (0, _sinon.spy)();
      (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { onReady: onReady }), { lifecycleExperimental: true });
      (0, _chai.expect)(onReady.calledOnce).to.be.true;
    });
  });
});