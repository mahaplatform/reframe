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

var _tray = require('./tray');

var _tray2 = _interopRequireDefault(_tray);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tray component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        )
      };

      (0, _chai.expect)(actions.open(_react2.default.createElement(
        'div',
        null,
        'Foo'
      ))).to.eql(expected);
    });

    it('can dispatch close', function () {

      var expected = {
        type: 'CLOSE'
      };

      (0, _chai.expect)(actions.close()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        component: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open tray', function () {

      var state = {
        component: null
      };

      var action = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        )
      };

      var expected = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close tray', function () {

      var state = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: true
      };

      var action = {
        type: 'CLOSE'
      };

      var expected = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var tray = (0, _enzyme.shallow)(_react2.default.createElement(
        _tray2.default,
        null,
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(tray.is('div.reframe-tray')).to.be.true;

      var child = tray.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var overlay = tray.childAt(1).childAt(0);
      (0, _chai.expect)(overlay.is('div.reframe-tray-overlay')).to.be.true;

      var panel = tray.childAt(2).childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-tray-panel')).to.be.true;
    });
  });

  it('renders open with a component', function () {

    var component = _react2.default.createElement('div', { className: 'foo' });

    var tray = (0, _enzyme.shallow)(_react2.default.createElement(_tray2.default, { component: component, open: true }), { lifecycleExperimental: true });

    var panelComponent = tray.childAt(1).childAt(0).childAt(0);
    (0, _chai.expect)(panelComponent.is('div.foo')).to.be.true;
  });

  it('handles close', function () {

    var onClose = (0, _sinon.spy)();

    var tray = (0, _enzyme.shallow)(_react2.default.createElement(_tray2.default, { onClose: onClose }));

    var overlay = tray.childAt(0).childAt(0);
    overlay.simulate('click');
    (0, _chai.expect)(onClose.calledOnce).to.be.true;
  });

  it('calls onClear', function (done) {

    var onClear = (0, _sinon.spy)();

    var tray = (0, _enzyme.shallow)(_react2.default.createElement(_tray2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

    tray.setProps({ open: false });

    setTimeout(function () {
      (0, _chai.expect)(onClear.calledOnce).to.be.true;
      done();
    }, 500);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJjb21wb25lbnQiLCJvcGVuIiwidG8iLCJlcWwiLCJjbG9zZSIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwidHJheSIsImlzIiwiYmUiLCJ0cnVlIiwiY2hpbGQiLCJjaGlsZEF0Iiwib3ZlcmxheSIsInBhbmVsIiwibGlmZWN5Y2xlRXhwZXJpbWVudGFsIiwicGFuZWxDb21wb25lbnQiLCJvbkNsb3NlIiwic2ltdWxhdGUiLCJjYWxsZWRPbmNlIiwiZG9uZSIsIm9uQ2xlYXIiLCJzZXRQcm9wcyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUVBQyxTQUFTLGdCQUFULEVBQTJCLFlBQU07O0FBRS9CQSxXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsbUJBQUgsRUFBd0IsWUFBTTs7QUFFNUIsVUFBTUMsV0FBVztBQUNmQyxjQUFNLE1BRFM7QUFFZkMsbUJBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZJLE9BQWpCOztBQUtBLHdCQUFPTCxRQUFRTSxJQUFSLENBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFiLENBQVAsRUFBcUNDLEVBQXJDLENBQXdDQyxHQUF4QyxDQUE0Q0wsUUFBNUM7QUFFRCxLQVREOztBQVdBRCxPQUFHLG9CQUFILEVBQXlCLFlBQU07O0FBRTdCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTTtBQURTLE9BQWpCOztBQUlBLHdCQUFPSixRQUFRUyxLQUFSLEVBQVAsRUFBd0JGLEVBQXhCLENBQTJCQyxHQUEzQixDQUErQkwsUUFBL0I7QUFFRCxLQVJEO0FBVUQsR0F2QkQ7O0FBeUJBRixXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsdUJBQUgsRUFBNEIsWUFBTTs7QUFF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QUcsZUFBSCxFQUFvQixZQUFNOztBQUV4QixRQUFNcUIsVUFBVSxpQkFBaEI7O0FBRUEsUUFBTVYsT0FBTyxxQkFBUSw4QkFBQyxjQUFELElBQU0sU0FBVVUsT0FBaEIsR0FBUixDQUFiOztBQUVBLFFBQU1KLFVBQVVOLEtBQUtLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQSxPQUFoQixDQUF3QixDQUF4QixDQUFoQjtBQUNBQyxZQUFRSyxRQUFSLENBQWlCLE9BQWpCO0FBQ0Esc0JBQU9ELFFBQVFFLFVBQWYsRUFBMkJsQixFQUEzQixDQUE4QlEsRUFBOUIsQ0FBaUNDLElBQWpDO0FBRUQsR0FWRDs7QUFZQWQsS0FBRyxlQUFILEVBQW9CLFVBQUN3QixJQUFELEVBQVU7O0FBRTVCLFFBQU1DLFVBQVUsaUJBQWhCOztBQUVBLFFBQU1kLE9BQU8scUJBQVEsOEJBQUMsY0FBRCxJQUFNLE1BQU8sSUFBYixFQUFvQixTQUFVYyxPQUE5QixHQUFSLEVBQW9ELEVBQUVOLHVCQUF1QixJQUF6QixFQUFwRCxDQUFiOztBQUVBUixTQUFLZSxRQUFMLENBQWMsRUFBRXRCLE1BQU0sS0FBUixFQUFkOztBQUVBdUIsZUFBVyxZQUFNO0FBQ2Ysd0JBQU9GLFFBQVFGLFVBQWYsRUFBMkJsQixFQUEzQixDQUE4QlEsRUFBOUIsQ0FBaUNDLElBQWpDO0FBQ0FVO0FBQ0QsS0FIRCxFQUdHLEdBSEg7QUFLRCxHQWJEO0FBZUQsQ0E1SUQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IHsgc3B5IH0gZnJvbSAnc2lub24nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBUcmF5IGZyb20gJy4vdHJheSdcblxuZGVzY3JpYmUoJ3RyYXkgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gIGRlc2NyaWJlKCdhY3Rpb25zJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCBvcGVuJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLm9wZW4oPGRpdj5Gb288L2Rpdj4pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCBjbG9zZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdDTE9TRSdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuY2xvc2UoKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZWR1Y2VyJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBzZXQgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCAnJykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIG9wZW4gdHJheScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNvbXBvbmVudDogbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdPUEVOJyxcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PlxuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PixcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gY2xvc2UgdHJheScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNvbXBvbmVudDogPGRpdj5Gb288L2Rpdj4sXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgdHJheSA9IHNoYWxsb3coPFRyYXk+PGRpdiBjbGFzc05hbWU9XCJmb29cIiAvPjwvVHJheT4pXG4gICAgICBleHBlY3QodHJheS5pcygnZGl2LnJlZnJhbWUtdHJheScpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IGNoaWxkID0gdHJheS5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoY2hpbGQuaXMoJ2Rpdi5mb28nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBvdmVybGF5ID0gdHJheS5jaGlsZEF0KDEpLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChvdmVybGF5LmlzKCdkaXYucmVmcmFtZS10cmF5LW92ZXJsYXknKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBwYW5lbCA9IHRyYXkuY2hpbGRBdCgyKS5jaGlsZEF0KDApXG4gICAgICBleHBlY3QocGFuZWwuaXMoJ2Rpdi5yZWZyYW1lLXRyYXktcGFuZWwnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGl0KCdyZW5kZXJzIG9wZW4gd2l0aCBhIGNvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZm9vXCIgLz5cblxuICAgIGNvbnN0IHRyYXkgPSBzaGFsbG93KDxUcmF5IGNvbXBvbmVudD17IGNvbXBvbmVudCB9IG9wZW49eyB0cnVlIH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG5cbiAgICBjb25zdCBwYW5lbENvbXBvbmVudCA9IHRyYXkuY2hpbGRBdCgxKS5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICBleHBlY3QocGFuZWxDb21wb25lbnQuaXMoJ2Rpdi5mb28nKSkudG8uYmUudHJ1ZVxuXG4gIH0pXG5cbiAgaXQoJ2hhbmRsZXMgY2xvc2UnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBvbkNsb3NlID0gc3B5KClcblxuICAgIGNvbnN0IHRyYXkgPSBzaGFsbG93KDxUcmF5IG9uQ2xvc2U9eyBvbkNsb3NlIH0gLz4pXG5cbiAgICBjb25zdCBvdmVybGF5ID0gdHJheS5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICBvdmVybGF5LnNpbXVsYXRlKCdjbGljaycpXG4gICAgZXhwZWN0KG9uQ2xvc2UuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuXG4gIH0pXG5cbiAgaXQoJ2NhbGxzIG9uQ2xlYXInLCAoZG9uZSkgPT4ge1xuXG4gICAgY29uc3Qgb25DbGVhciA9IHNweSgpXG5cbiAgICBjb25zdCB0cmF5ID0gc2hhbGxvdyg8VHJheSBvcGVuPXsgdHJ1ZSB9IG9uQ2xlYXI9eyBvbkNsZWFyIH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG5cbiAgICB0cmF5LnNldFByb3BzKHsgb3BlbjogZmFsc2UgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZXhwZWN0KG9uQ2xlYXIuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuICAgICAgZG9uZSgpXG4gICAgfSwgNTAwKVxuXG4gIH0pXG5cbn0pXG4iXX0=