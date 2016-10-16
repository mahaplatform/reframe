'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../task');

describe('task component', function () {

  it('renders with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', route: '/contacts/1/details' }));
    expect(task.is('Link[to="/contacts/1/details"]')).toBeTruthy();
    expect(task.childAt(0).text()).toEqual('Details');
  });

  it('renders primary as a button', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', route: '/contacts/1/details', primary: true }));
    expect(task.is('Link.ui.button')).toBeTruthy();
  });

  it('renders secondary as a link', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', route: '/contacts/1/details', primary: false }));
    expect(task.is('Link')).toBeTruthy();
  });

  it('renders with a handler', function () {
    var onClick = _sinon2.default.spy();
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', handler: onClick }));
    expect(task.is('a[onClick]')).toBeTruthy();
    expect(task.text()).toEqual('Details');
    task.simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });

  it('renders primary as a button', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', handler: function handler() {}, primary: true }));
    expect(task.is('a.ui.button')).toBeTruthy();
  });

  it('renders secondary as a link', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Details', handler: function handler() {}, primary: false }));
    expect(task.is('a')).toBeTruthy();
  });
});