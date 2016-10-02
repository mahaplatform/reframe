'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('sinon');
jest.unmock('../task');

describe('task component', function () {

  it('renders with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', route: '/contact/1/edit' }));
    expect(task.is('Link[to="/contact/1/edit"]')).toBeTruthy();
  });

  it('renders as a button with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', button: true, route: '/contact/1/edit' }));
    expect(task.is('Link.ui.button')).toBeTruthy();
  });

  it('renders as a plain link with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', button: false, route: '/contact/1/edit' }));
    expect(task.is('Link')).toBeTruthy();
  });

  it('renders with a handler', function () {
    var onClick = _sinon2.default.spy();
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', handler: onClick }));
    expect(task.is('a[onClick]')).toBeTruthy();
    task.simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });

  it('renders as a button with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', button: true, handler: function handler() {} }));
    expect(task.is('a.ui.button')).toBeTruthy();
  });

  it('renders as a plain link with a route', function () {
    var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'edit contact', button: false, handler: function handler() {} }));
    expect(task.is('a')).toBeTruthy();
  });
});