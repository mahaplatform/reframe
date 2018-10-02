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

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('drawer component', function () {

  describe('actions', function () {

    it('can dispatch open', function () {

      var expected = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        location: 'right'
      };

      (0, _chai.expect)(actions.open(_react2.default.createElement(
        'div',
        null,
        'Foo'
      ), 'right')).to.eql(expected);
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
        location: null,
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can open drawer', function () {

      var state = {
        component: null,
        location: null
      };

      var action = {
        type: 'OPEN',
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        location: 'right'
      };

      var expected = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        location: 'right',
        open: true
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can close drawer', function () {

      var state = {
        component: _react2.default.createElement(
          'div',
          null,
          'Foo'
        ),
        location: 'right',
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
        location: 'right',
        open: false
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var drawer = (0, _enzyme.shallow)(_react2.default.createElement(
        _drawer2.default,
        { location: 'right' },
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(drawer.is('div.reframe-drawer')).to.be.true;

      var child = drawer.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var overlay = drawer.childAt(1).childAt(0);
      (0, _chai.expect)(overlay.is('div.reframe-drawer-overlay')).to.be.true;

      var panel = drawer.childAt(2).childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-drawer-panel.reframe-drawer-panel-right')).to.be.true;
    });
  });

  it('renders open with a component', function () {

    var component = _react2.default.createElement('div', { className: 'foo' });

    var drawer = (0, _enzyme.shallow)(_react2.default.createElement(_drawer2.default, { component: component, open: true }), { lifecycleExperimental: true });

    var panelComponent = drawer.childAt(1).childAt(0).childAt(0);
    (0, _chai.expect)(panelComponent.is('div.foo')).to.be.true;
  });

  it('handles close on clicked overlay', function () {

    var onClose = (0, _sinon.spy)();

    var drawer = (0, _enzyme.shallow)(_react2.default.createElement(_drawer2.default, { onClose: onClose }));

    var overlay = drawer.childAt(0).childAt(0);
    overlay.simulate('click');
    (0, _chai.expect)(onClose.calledOnce).to.be.true;
  });

  it('calls onClear', function (done) {

    var onClear = (0, _sinon.spy)();

    var drawer = (0, _enzyme.shallow)(_react2.default.createElement(_drawer2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

    drawer.setProps({ open: false });

    setTimeout(function () {
      (0, _chai.expect)(onClear.calledOnce).to.be.true;
      done();
    }, 500);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJjb21wb25lbnQiLCJsb2NhdGlvbiIsIm9wZW4iLCJ0byIsImVxbCIsImNsb3NlIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJkcmF3ZXIiLCJpcyIsImJlIiwidHJ1ZSIsImNoaWxkIiwiY2hpbGRBdCIsIm92ZXJsYXkiLCJwYW5lbCIsImxpZmVjeWNsZUV4cGVyaW1lbnRhbCIsInBhbmVsQ29tcG9uZW50Iiwib25DbG9zZSIsInNpbXVsYXRlIiwiY2FsbGVkT25jZSIsImRvbmUiLCJvbkNsZWFyIiwic2V0UHJvcHMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyxrQkFBVCxFQUE2QixZQUFNOztBQUVqQ0EsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLG1CQUFILEVBQXdCLFlBQU07O0FBRTVCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTSxNQURTO0FBRWZDLG1CQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSTtBQUdmQyxrQkFBVTtBQUhLLE9BQWpCOztBQU1BLHdCQUFPTixRQUFRTyxJQUFSLENBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFiLEVBQTZCLE9BQTdCLENBQVAsRUFBOENDLEVBQTlDLENBQWlEQyxHQUFqRCxDQUFxRE4sUUFBckQ7QUFFRCxLQVZEOztBQVlBRCxPQUFHLG9CQUFILEVBQXlCLFlBQU07O0FBRTdCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTTtBQURTLE9BQWpCOztBQUlBLHdCQUFPSixRQUFRVSxLQUFSLEVBQVAsRUFBd0JGLEVBQXhCLENBQTJCQyxHQUEzQixDQUErQk4sUUFBL0I7QUFFRCxLQVJEO0FBVUQsR0F4QkQ7O0FBMEJBRixXQUFTLFNBQVQsRUFB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Q0FBZSxDQUFmLEVBQWtCQSxPQUFsQixDQUEwQixDQUExQixFQUE2QkEsT0FBN0IsQ0FBcUMsQ0FBckMsQ0FBdkI7QUFDQSxzQkFBT0ksZUFBZVIsRUFBZixDQUFrQixTQUFsQixDQUFQLEVBQXFDUCxFQUFyQyxDQUF3Q1EsRUFBeEMsQ0FBMkNDLElBQTNDO0FBRUQsR0FURDs7QUFXQWYsS0FBRyxrQ0FBSCxFQUF1QyxZQUFNOztBQUUzQyxRQUFNc0IsVUFBVSxpQkFBaEI7O0FBRUEsUUFBTVYsU0FBUyxxQkFBUSw4QkFBQyxnQkFBRCxJQUFRLFNBQVVVLE9BQWxCLEdBQVIsQ0FBZjs7QUFFQSxRQUFNSixVQUFVTixPQUFPSyxPQUFQLENBQWUsQ0FBZixFQUFrQkEsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBaEI7QUFDQUMsWUFBUUssUUFBUixDQUFpQixPQUFqQjtBQUNBLHNCQUFPRCxRQUFRRSxVQUFmLEVBQTJCbEIsRUFBM0IsQ0FBOEJRLEVBQTlCLENBQWlDQyxJQUFqQztBQUVELEdBVkQ7O0FBWUFmLEtBQUcsZUFBSCxFQUFvQixVQUFDeUIsSUFBRCxFQUFVOztBQUU1QixRQUFNQyxVQUFVLGlCQUFoQjs7QUFFQSxRQUFNZCxTQUFTLHFCQUFRLDhCQUFDLGdCQUFELElBQVEsTUFBTyxJQUFmLEVBQXNCLFNBQVVjLE9BQWhDLEdBQVIsRUFBc0QsRUFBRU4sdUJBQXVCLElBQXpCLEVBQXRELENBQWY7O0FBRUFSLFdBQU9lLFFBQVAsQ0FBZ0IsRUFBRXRCLE1BQU0sS0FBUixFQUFoQjs7QUFFQXVCLGVBQVcsWUFBTTtBQUNmLHdCQUFPRixRQUFRRixVQUFmLEVBQTJCbEIsRUFBM0IsQ0FBOEJRLEVBQTlCLENBQWlDQyxJQUFqQztBQUNBVTtBQUNELEtBSEQsRUFHRyxHQUhIO0FBS0QsR0FiRDtBQWVELENBbkpEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCB7IHNweSB9IGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vZHJhd2VyJ1xuXG5kZXNjcmliZSgnZHJhd2VyIGNvbXBvbmVudCcsICgpID0+IHtcblxuICBkZXNjcmliZSgnYWN0aW9ucycsICgpID0+IHtcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggb3BlbicsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdPUEVOJyxcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PixcbiAgICAgICAgbG9jYXRpb246ICdyaWdodCdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMub3Blbig8ZGl2PkZvbzwvZGl2PiwgJ3JpZ2h0JykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIGNsb3NlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ0NMT1NFJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5jbG9zZSgpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3JlZHVjZXInLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIHNldCBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgY29tcG9uZW50OiBudWxsLFxuICAgICAgICBsb2NhdGlvbjogbnVsbCxcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCAnJykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIG9wZW4gZHJhd2VyJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgY29tcG9uZW50OiBudWxsLFxuICAgICAgICBsb2NhdGlvbjogbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdPUEVOJyxcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PixcbiAgICAgICAgbG9jYXRpb246ICdyaWdodCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNvbXBvbmVudDogPGRpdj5Gb288L2Rpdj4sXG4gICAgICAgIGxvY2F0aW9uOiAncmlnaHQnLFxuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBjbG9zZSBkcmF3ZXInLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBsb2NhdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdDTE9TRSdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNvbXBvbmVudDogPGRpdj5Gb288L2Rpdj4sXG4gICAgICAgIGxvY2F0aW9uOiAncmlnaHQnLFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZHJhd2VyID0gc2hhbGxvdyg8RHJhd2VyIGxvY2F0aW9uPVwicmlnaHRcIj48ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+PC9EcmF3ZXI+KVxuICAgICAgZXhwZWN0KGRyYXdlci5pcygnZGl2LnJlZnJhbWUtZHJhd2VyJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgY2hpbGQgPSBkcmF3ZXIuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGNoaWxkLmlzKCdkaXYuZm9vJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IGRyYXdlci5jaGlsZEF0KDEpLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChvdmVybGF5LmlzKCdkaXYucmVmcmFtZS1kcmF3ZXItb3ZlcmxheScpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IHBhbmVsID0gZHJhd2VyLmNoaWxkQXQoMikuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHBhbmVsLmlzKCdkaXYucmVmcmFtZS1kcmF3ZXItcGFuZWwucmVmcmFtZS1kcmF3ZXItcGFuZWwtcmlnaHQnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGl0KCdyZW5kZXJzIG9wZW4gd2l0aCBhIGNvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZm9vXCIgLz5cblxuICAgIGNvbnN0IGRyYXdlciA9IHNoYWxsb3coPERyYXdlciBjb21wb25lbnQ9eyBjb21wb25lbnQgfSBvcGVuPXsgdHJ1ZSB9IC8+LCB7IGxpZmVjeWNsZUV4cGVyaW1lbnRhbDogdHJ1ZSB9KVxuXG4gICAgY29uc3QgcGFuZWxDb21wb25lbnQgPSBkcmF3ZXIuY2hpbGRBdCgxKS5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICBleHBlY3QocGFuZWxDb21wb25lbnQuaXMoJ2Rpdi5mb28nKSkudG8uYmUudHJ1ZVxuXG4gIH0pXG5cbiAgaXQoJ2hhbmRsZXMgY2xvc2Ugb24gY2xpY2tlZCBvdmVybGF5JywgKCkgPT4ge1xuXG4gICAgY29uc3Qgb25DbG9zZSA9IHNweSgpXG5cbiAgICBjb25zdCBkcmF3ZXIgPSBzaGFsbG93KDxEcmF3ZXIgb25DbG9zZT17IG9uQ2xvc2UgfSAvPilcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkcmF3ZXIuY2hpbGRBdCgwKS5jaGlsZEF0KDApXG4gICAgb3ZlcmxheS5zaW11bGF0ZSgnY2xpY2snKVxuICAgIGV4cGVjdChvbkNsb3NlLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcblxuICB9KVxuXG4gIGl0KCdjYWxscyBvbkNsZWFyJywgKGRvbmUpID0+IHtcblxuICAgIGNvbnN0IG9uQ2xlYXIgPSBzcHkoKVxuXG4gICAgY29uc3QgZHJhd2VyID0gc2hhbGxvdyg8RHJhd2VyIG9wZW49eyB0cnVlIH0gb25DbGVhcj17IG9uQ2xlYXIgfSAvPiwgeyBsaWZlY3ljbGVFeHBlcmltZW50YWw6IHRydWUgfSlcblxuICAgIGRyYXdlci5zZXRQcm9wcyh7IG9wZW46IGZhbHNlIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGV4cGVjdChvbkNsZWFyLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcbiAgICAgIGRvbmUoKVxuICAgIH0sIDUwMClcblxuICB9KVxuXG59KVxuIl19