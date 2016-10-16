'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _tab = require('../components/tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../components/tab');

describe('tab component', function () {

  it('renders an inactive tab', function () {
    var tab = (0, _enzyme.shallow)(_react2.default.createElement(_tab2.default, { label: 'Details', index: 1, active: false }));
    expect(tab.is('div.item')).toBeTruthy();
    expect(tab.text()).toEqual('Details');
  });

  it('renders an active tab', function () {
    var tab = (0, _enzyme.shallow)(_react2.default.createElement(_tab2.default, { label: 'Details', index: 1, active: true }));
    expect(tab.is('div.item.active')).toBeTruthy();
    expect(tab.text()).toEqual('Details');
  });
});