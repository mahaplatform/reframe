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

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('popup component', function () {

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

    it('can open popup', function () {

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

    it('can close popup', function () {

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

      var popup = (0, _enzyme.shallow)(_react2.default.createElement(
        _popup2.default,
        null,
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(popup.is('div.reframe-popup')).to.be.true;

      var child = popup.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var panel = popup.childAt(1).childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-popup-panel')).to.be.true;

      var item = panel.childAt(0);
      (0, _chai.expect)(item.is('div.reframe-popup-panel-item')).to.be.true;
    });

    it('renders open with a component', function () {

      var component = _react2.default.createElement('div', { className: 'foo' });
      var popup = (0, _enzyme.shallow)(_react2.default.createElement(_popup2.default, { component: component, open: true }), { lifecycleExperimental: true });
      var panelComponent = popup.childAt(0).childAt(0).childAt(0).childAt(0);
      (0, _chai.expect)(panelComponent.is('div.foo')).to.be.true;
    });

    it('calls onClear', function (done) {

      var onClear = (0, _sinon.spy)();

      var popup = (0, _enzyme.shallow)(_react2.default.createElement(_popup2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

      popup.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJjb21wb25lbnQiLCJvcGVuIiwidG8iLCJlcWwiLCJjbG9zZSIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwicG9wdXAiLCJpcyIsImJlIiwidHJ1ZSIsImNoaWxkIiwiY2hpbGRBdCIsInBhbmVsIiwiaXRlbSIsImxpZmVjeWNsZUV4cGVyaW1lbnRhbCIsInBhbmVsQ29tcG9uZW50IiwiZG9uZSIsIm9uQ2xlYXIiLCJzZXRQcm9wcyIsInNldFRpbWVvdXQiLCJjYWxsZWRPbmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyxpQkFBVCxFQUE0QixZQUFNOztBQUVoQ0EsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLG1CQUFILEVBQXdCLFlBQU07O0FBRTVCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTSxNQURTO0FBRWZDLG1CQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSSxPQUFqQjs7QUFLQSx3QkFBT0wsUUFBUU0sSUFBUixDQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYixDQUFQLEVBQXFDQyxFQUFyQyxDQUF3Q0MsR0FBeEMsQ0FBNENMLFFBQTVDO0FBRUQsS0FURDs7QUFXQUQsT0FBRyxvQkFBSCxFQUF5QixZQUFNOztBQUU3QixVQUFNQyxXQUFXO0FBQ2ZDLGNBQU07QUFEUyxPQUFqQjs7QUFJQSx3QkFBT0osUUFBUVMsS0FBUixFQUFQLEVBQXdCRixFQUF4QixDQUEyQkMsR0FBM0IsQ0FBK0JMLFFBQS9CO0FBRUQsS0FSRDtBQVVELEdBdkJEOztBQXlCQUYsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLHVCQUFILEVBQTRCLFlBQU07O0FBRWhDLFVBQU1DLFdBQVc7QUFDZkUsbUJB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LFVBQU1DLFVBQVUsaUJBQWhCOztBQUVBLFVBQU1YLFFBQVEscUJBQVEsOEJBQUMsZUFBRCxJQUFPLE1BQU8sSUFBZCxFQUFxQixTQUFVVyxPQUEvQixHQUFSLEVBQXFELEVBQUVILHVCQUF1QixJQUF6QixFQUFyRCxDQUFkOztBQUVBUixZQUFNWSxRQUFOLENBQWUsRUFBRW5CLE1BQU0sS0FBUixFQUFmOztBQUVBb0IsaUJBQVcsWUFBTTtBQUNmLDBCQUFPRixRQUFRRyxVQUFmLEVBQTJCcEIsRUFBM0IsQ0FBOEJRLEVBQTlCLENBQWlDQyxJQUFqQztBQUNBTztBQUNELE9BSEQsRUFHRyxHQUhIO0FBS0QsS0FiRDtBQWVELEdBMUNEO0FBNENELENBOUhEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCB7IHNweSB9IGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCdcblxuZGVzY3JpYmUoJ3BvcHVwIGNvbXBvbmVudCcsICgpID0+IHtcblxuICBkZXNjcmliZSgnYWN0aW9ucycsICgpID0+IHtcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggb3BlbicsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdPUEVOJyxcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PlxuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5vcGVuKDxkaXY+Rm9vPC9kaXY+KSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggY2xvc2UnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLmNsb3NlKCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncmVkdWNlcicsICgpID0+IHtcblxuICAgIGl0KCdjYW4gc2V0IGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBvcGVuIHBvcHVwJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgY29tcG9uZW50OiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBjbG9zZSBwb3B1cCcsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNvbXBvbmVudDogPGRpdj5Gb288L2Rpdj4sXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgcG9wdXAgPSBzaGFsbG93KDxQb3B1cD48ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+PC9Qb3B1cD4pXG4gICAgICBleHBlY3QocG9wdXAuaXMoJ2Rpdi5yZWZyYW1lLXBvcHVwJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgY2hpbGQgPSBwb3B1cC5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoY2hpbGQuaXMoJ2Rpdi5mb28nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBwYW5lbCA9IHBvcHVwLmNoaWxkQXQoMSkuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHBhbmVsLmlzKCdkaXYucmVmcmFtZS1wb3B1cC1wYW5lbCcpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBwYW5lbC5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoaXRlbS5pcygnZGl2LnJlZnJhbWUtcG9wdXAtcGFuZWwtaXRlbScpKS50by5iZS50cnVlXG5cbiAgICB9KVxuXG4gICAgaXQoJ3JlbmRlcnMgb3BlbiB3aXRoIGEgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBjb21wb25lbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+XG4gICAgICBjb25zdCBwb3B1cCA9IHNoYWxsb3coPFBvcHVwIGNvbXBvbmVudD17IGNvbXBvbmVudCB9IG9wZW49eyB0cnVlIH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG4gICAgICBjb25zdCBwYW5lbENvbXBvbmVudCA9IHBvcHVwLmNoaWxkQXQoMCkuY2hpbGRBdCgwKS5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChwYW5lbENvbXBvbmVudC5pcygnZGl2LmZvbycpKS50by5iZS50cnVlXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbGxzIG9uQ2xlYXInLCAoZG9uZSkgPT4ge1xuXG4gICAgICBjb25zdCBvbkNsZWFyID0gc3B5KClcblxuICAgICAgY29uc3QgcG9wdXAgPSBzaGFsbG93KDxQb3B1cCBvcGVuPXsgdHJ1ZSB9IG9uQ2xlYXI9eyBvbkNsZWFyIH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG5cbiAgICAgIHBvcHVwLnNldFByb3BzKHsgb3BlbjogZmFsc2UgfSlcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV4cGVjdChvbkNsZWFyLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcbiAgICAgICAgZG9uZSgpXG4gICAgICB9LCA1MDApXG5cbiAgICB9KVxuXG4gIH0pXG5cbn0pXG4iXX0=