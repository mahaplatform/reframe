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

var _searchbox = require('./searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('searchbox component', function () {

  describe('actions', function () {

    it('can dispatch type', function () {

      var expected = {
        type: 'TYPE',
        q: 'foo'
      };

      (0, _chai.expect)(actions.type('foo')).to.eql(expected);
    });

    it('can dispatch abort', function () {

      var expected = {
        type: 'ABORT'
      };

      (0, _chai.expect)(actions.abort()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can type', function () {

      var state = {
        q: ''
      };

      var action = {
        type: 'TYPE',
        q: 'foo'
      };

      var expected = {
        q: 'foo'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can abort', function () {

      var state = {
        q: 'foo'
      };

      var action = {
        type: 'ABORT'
      };

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, null));
      (0, _chai.expect)(searchbox.is('div.reframe-searchbox')).to.be.true;
      (0, _chai.expect)(searchbox.children().length).to.equal(2);

      var searchboxSearchIconWrapper = searchbox.childAt(0);
      (0, _chai.expect)(searchboxSearchIconWrapper.is('div.reframe-searchbox-icon')).to.be.true;

      var searchboxSearchIcon = searchboxSearchIconWrapper.childAt(0);
      (0, _chai.expect)(searchboxSearchIcon.is('i.search.icon')).to.be.true;

      var searchboxInputWrapper = searchbox.childAt(1);
      (0, _chai.expect)(searchboxInputWrapper.is('div.reframe-searchbox-input')).to.be.true;

      var searchboxInput = searchboxInputWrapper.childAt(0);
      (0, _chai.expect)(searchboxInput.is('div.ui.input')).to.be.true;

      var input = searchboxInput.childAt(0);
      (0, _chai.expect)(input.is('input[type="text"]')).to.be.true;
    });

    it('renders with a remove icon', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { q: 'foo' }));
      var searchboxRemoveIconWrapper = searchbox.childAt(2);
      (0, _chai.expect)(searchboxRemoveIconWrapper.is('div.reframe-searchbox-icon')).to.be.true;

      var searchboxRemoveIcon = searchboxRemoveIconWrapper.childAt(0);
      (0, _chai.expect)(searchboxRemoveIcon.is('i.remove.circle.icon')).to.be.true;
    });

    it('renders with value', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { q: 'foo' }));
      (0, _chai.expect)(searchbox.childAt(1).childAt(0).childAt(0).prop('value')).to.equal('foo');
    });

    it('renders with custom prompt', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { prompt: 'foo' }));
      (0, _chai.expect)(searchbox.childAt(1).childAt(0).childAt(0).prop('placeholder')).to.equal('foo');
    });

    it('handles onAbort', function () {

      var onAbort = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onAbort: onAbort, q: 'foo' }));
      searchbox.childAt(2).simulate('click');
      (0, _chai.expect)(onAbort.calledOnce).to.be.true;
    });

    it('handles onType', function () {

      var onType = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onType: onType }));
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } });
      (0, _chai.expect)(onType.calledOnce).to.be.true;
      (0, _chai.expect)(onType.calledWith('foo')).to.be.true;
    });

    it('handles onChange', function () {

      var onChange = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onChange: onChange }));
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } });
      (0, _chai.expect)(onChange.calledOnce).to.be.true;
      (0, _chai.expect)(onChange.calledWith('foo')).to.be.true;
    });
  });
});