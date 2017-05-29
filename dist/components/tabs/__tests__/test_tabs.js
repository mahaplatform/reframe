'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _tabs = require('../components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../components/tabs');

describe('tabs component', function () {

  it('renders with tabs and pane', function () {
    var onChangeTab = _sinon2.default.spy();
    var config = {
      tabs: [{ label: 'One', content: _react2.default.createElement(
          'p',
          null,
          'One'
        ) }, { label: 'Two', content: _react2.default.createElement(
          'p',
          null,
          'Two'
        ) }, { label: 'Three', content: _react2.default.createElement(
          'p',
          null,
          'Three'
        ) }],
      onChangeTab: onChangeTab
    };
    var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, config));
    expect(tabs.is('div.tabs')).toBeTruthy();
    expect(tabs.children().length).toEqual(2);

    var menu = tabs.childAt(0);
    expect(menu.is('div.ui.top.attached.tabular.menu')).toBeTruthy();
    expect(menu.children().length).toEqual(config.tabs.length);

    var pane = tabs.childAt(1);
    expect(pane.is('div.ui.bottom.attached.active.tab.segment')).toBeTruthy();
  });
});