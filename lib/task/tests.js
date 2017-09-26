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

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('task component', function () {

  describe('actions', function () {});

  describe('reducer', function () {});

  describe('component', function () {

    it('handles route', function () {

      var onDone = (0, _sinon.spy)();

      var context = {
        router: {
          history: {
            push: (0, _sinon.spy)()
          }
        }
      };

      var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Foo', route: '/a/b/c', onDone: onDone }), { context: context });
      task.simulate('click');
      (0, _chai.expect)(context.router.history.push.calledOnce).to.be.true;
      (0, _chai.expect)(context.router.history.push.calledWith('/a/b/c')).to.be.true;
      (0, _chai.expect)(onDone.calledOnce).to.be.true;
    });

    it('handles function', function () {

      var innerHandler = (0, _sinon.spy)();

      var handler = function handler(done) {
        innerHandler();
        done();
      };

      var onDone = (0, _sinon.spy)();

      var task = (0, _enzyme.shallow)(_react2.default.createElement(_task2.default, { label: 'Foo', handler: handler, onDone: onDone }), { context: context });
      task.simulate('click');
      (0, _chai.expect)(innerHandler.calledOnce).to.be.true;
      (0, _chai.expect)(onDone.calledOnce).to.be.true;
    });
  });
});