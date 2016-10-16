'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../index');

describe('tasks component', function () {

  it('renders tasks', function () {
    var deleteContact = _sinon2.default.spy();
    var config = {
      tasks: [{ label: 'edit contact', route: '/contacts/1/edit', primary: true }, { label: 'delete contact', handler: deleteContact }]
    };
    var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, config));

    expect(tasks.is('div.tasks')).toBeTruthy();

    var buttons = tasks.childAt(0);
    expect(buttons.children().length).toEqual(2);

    var primary = buttons.childAt(0);
    expect(primary.is('Task[route="/contacts/1/edit"]')).toBeTruthy();

    var secondary = buttons.childAt(1);
    expect(secondary.is('div.ui.icon.top.right.pointing.dropdown.button')).toBeTruthy();
    expect(secondary.childAt(0).is('i.setting.icon')).toBeTruthy();
    expect(secondary.childAt(1).is('i.caret.down.icon')).toBeTruthy();

    var menu = secondary.childAt(2);
    expect(menu.is('div.menu')).toBeTruthy();
    expect(menu.children().length).toEqual(2);

    var first = menu.childAt(0);
    expect(first.is('Task[route="/contacts/1/edit"]')).toBeTruthy();

    var second = menu.childAt(1);
    expect(second.is('Task')).toBeTruthy();
  });
});