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

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tasks component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        items: []
      };

      (0, _chai.expect)(actions.open([])).to.eql(expected);
    });

    it('can dispatch close', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });

    it('can dispatch clear', function () {

      var expected = {
        type: 'CLEAR'
      };

      (0, _chai.expect)(actions.clear()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open tasks', function () {

      var state = {};

      var action = {
        type: 'OPEN',
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var expected = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }],
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close tasks', function () {

      var state = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }],
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear tasks', function () {

      var state = {
        items: [{ foo: '1' }, { bar: '2' }, { baz: '3' }]
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(
        _tasks2.default,
        null,
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(tasks.is('div.reframe-tasks')).to.be.true;

      var child = tasks.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var overlay = tasks.childAt(1).childAt(0);
      (0, _chai.expect)(overlay.is('div.reframe-tasks-overlay')).to.be.true;

      var list = tasks.childAt(2).childAt(0);
      (0, _chai.expect)(list.is('div.reframe-tasks-list')).to.be.true;

      var cancel = list.childAt(0);
      (0, _chai.expect)(cancel.is('div.reframe-tasks-cancel')).to.be.true;
      (0, _chai.expect)(cancel.text()).to.equal('Cancel');
    });

    it('render a list of items', function () {

      var items = [{ label: 'Foo', handler: function handler() {} }, { label: 'Bar', handler: function handler() {} }];

      var tasks = (0, _enzyme.mount)(_react2.default.createElement(_tasks2.default, { open: true, items: items }));
      var list = tasks.childAt(1);
      (0, _chai.expect)(list.children().length).to.equal(3);

      var foo = list.childAt(0);
      (0, _chai.expect)(foo.is('div.reframe-tasks-item')).to.be.true;
      (0, _chai.expect)(foo.text()).to.equal('Foo');

      var bar = list.childAt(1);
      (0, _chai.expect)(bar.is('div.reframe-tasks-item')).to.be.true;
      (0, _chai.expect)(bar.text()).to.equal('Bar');

      var cancel = list.childAt(2);
      (0, _chai.expect)(cancel.is('div.reframe-tasks-cancel')).to.be.true;
      (0, _chai.expect)(cancel.text()).to.equal('Cancel');
    });

    it('handles onClose on clicked overlay', function () {

      var onClose = (0, _sinon.spy)();
      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { onClose: onClose }));
      var overlay = tasks.childAt(0).childAt(0);
      overlay.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('handles onClose on clicked cancel', function () {

      var onClose = (0, _sinon.spy)();
      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { onClose: onClose }));
      var cancel = tasks.find('div.reframe-tasks-cancel');
      cancel.simulate('click');
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('calls onClear', function (done) {

      var onClear = (0, _sinon.spy)();

      var tasks = (0, _enzyme.mount)(_react2.default.createElement(_tasks2.default, { open: true, onClear: onClear }));

      tasks.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });

    it('handles item with a route', function () {

      var onClose = (0, _sinon.spy)();

      var items = [{ label: 'Foo', route: '/a/b/c' }];

      var context = {
        router: {
          history: {
            push: (0, _sinon.spy)()
          }
        }
      };

      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { open: true, items: items, onClose: onClose }), { context: context });
      var foo = tasks.find('div.reframe-tasks-list div.reframe-tasks-item');
      foo.simulate('click');
      (0, _chai.expect)(context.router.history.push.calledOnce).to.be.true;
      (0, _chai.expect)(context.router.history.push.calledWith('/a/b/c')).to.be.true;
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });

    it('handles item with function', function () {

      var innerHandler = (0, _sinon.spy)();

      var handler = function handler(done) {
        innerHandler();
        done();
      };
      var onClose = (0, _sinon.spy)();

      var items = [{ label: 'Foo', handler: handler }];

      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { open: true, items: items, onClose: onClose }));
      var foo = tasks.find('div.reframe-tasks-list div.reframe-tasks-item');
      foo.simulate('click');
      (0, _chai.expect)(innerHandler.calledOnce).to.be.true;
      (0, _chai.expect)(onClose.calledOnce).to.be.true;
    });
  });
});