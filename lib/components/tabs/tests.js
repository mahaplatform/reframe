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
      (0, _chai.expect)(tabs.is('div.reframe-tabs')).to.be.true;

      var header = tabs.childAt(0);
      (0, _chai.expect)(header.is('div.reframe-tabs-header')).to.be.true;

      var items = header.childAt(0);
      (0, _chai.expect)(items.is('div.reframe-tabs-items')).to.be.true;

      var body = tabs.childAt(1);
      (0, _chai.expect)(body.is('div.reframe-tabs-body')).to.be.true;
    });

    it('renders with header content', function () {

      var header = _react2.default.createElement('div', { className: 'foo' });

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { header: header }));
      var headerContentWrapper = tabs.childAt(0).childAt(0);
      (0, _chai.expect)(headerContentWrapper.is('div.reframe-tabs-header-content')).to.be.true;

      var headerContent = headerContentWrapper.childAt(0);
      (0, _chai.expect)(headerContent.is('div.foo')).to.be.true;
    });

    it('renders with items', function () {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items }));
      var headerItemsWrapper = tabs.childAt(0).childAt(0);
      (0, _chai.expect)(headerItemsWrapper.is('div.reframe-tabs-items')).to.be.true;
      (0, _chai.expect)(headerItemsWrapper.children().length).to.equal(2);

      var headerItem1 = headerItemsWrapper.childAt(0);
      (0, _chai.expect)(headerItem1.is('div.reframe-tabs-item')).to.be.true;

      var headerItem2 = headerItemsWrapper.childAt(1);
      (0, _chai.expect)(headerItem2.is('div.reframe-tabs-item')).to.be.true;

      var tabsWrapper = tabs.childAt(1);
      (0, _chai.expect)(tabsWrapper.is('div.reframe-tabs-body')).to.be.true;
      (0, _chai.expect)(tabsWrapper.children().length).to.equal(2);

      var tab1 = tabsWrapper.childAt(0);
      (0, _chai.expect)(tab1.is('div.reframe-tab')).to.be.true;

      var tab2 = tabsWrapper.childAt(0);
      (0, _chai.expect)(tab2.is('div.reframe-tab')).to.be.true;
    });

    it('renders with active item', function () {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items, chosen: 0 }));
      var headerItem1 = tabs.childAt(0).childAt(0).childAt(0);
      (0, _chai.expect)(headerItem1.is('div.active')).to.be.true;

      var headerItem2 = tabs.childAt(0).childAt(0).childAt(1);
      (0, _chai.expect)(headerItem2.is('div.active')).to.be.false;

      var tab1 = tabs.childAt(1).childAt(0);
      (0, _chai.expect)(tab1.is('div.active')).to.be.true;

      var tab2 = tabs.childAt(1).childAt(1);
      (0, _chai.expect)(tab2.is('div.active')).to.be.false;
    });

    it('handles onChoose', function (done) {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];
      var onChoose = (0, _sinon.spy)();
      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items, onChoose: onChoose }));
      tabs.childAt(0).childAt(0).childAt(0).simulate('click');
      setTimeout(function () {
        (0, _chai.expect)(onChoose.calledOnce).to.be.true;
        done();
      }, 20);
    });
  });
});