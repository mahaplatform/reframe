'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _breadcrumb = require('../breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../breadcrumb');

describe('breadcrumb component', function () {

  it('renders with a route', function () {

    var breadcrumb = (0, _enzyme.shallow)(_react2.default.createElement(_breadcrumb2.default, { label: 'Dashboard', route: '/admin' }));
    expect(breadcrumb.is('span')).toBeTruthy();
    expect(breadcrumb.children().length).toEqual(2);

    var link = breadcrumb.childAt(0).shallow();
    expect(link.is('a.section')).toBeTruthy();
    expect(link.text()).toEqual('Dashboard');

    var divider = breadcrumb.childAt(1).shallow();
    expect(divider.is('div.divider')).toBeTruthy();
    expect(divider.text()).toEqual(' / ');
  });

  it('renders without a route', function () {

    var breadcrumb = (0, _enzyme.shallow)(_react2.default.createElement(_breadcrumb2.default, { label: 'Contacts' }));
    expect(breadcrumb.is('span')).toBeTruthy();
    expect(breadcrumb.children().length).toEqual(1);

    var section = breadcrumb.childAt(0).shallow();
    expect(section.is('div.active.section')).toBeTruthy();
    expect(section.text()).toEqual('Contacts');
  });
});