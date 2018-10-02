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

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('modal component', function () {

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

    it('can open modal', function () {

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

    it('can close modal', function () {

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

      var modal = (0, _enzyme.shallow)(_react2.default.createElement(
        _modal2.default,
        null,
        _react2.default.createElement('div', { className: 'foo' })
      ));
      (0, _chai.expect)(modal.is('div.reframe-modal')).to.be.true;

      var child = modal.childAt(0);
      (0, _chai.expect)(child.is('div.foo')).to.be.true;

      var overlay = modal.childAt(1).childAt(0);
      (0, _chai.expect)(overlay.is('div.reframe-modal-overlay')).to.be.true;

      var window = modal.childAt(2).childAt(0);
      (0, _chai.expect)(window.is('div.reframe-modal-window')).to.be.true;
    });
  });

  it('renders open with a component', function () {

    var component = _react2.default.createElement('div', { className: 'foo' });

    var modal = (0, _enzyme.shallow)(_react2.default.createElement(_modal2.default, { component: component, open: true }), { lifecycleExperimental: true });

    var panelComponent = modal.childAt(1).childAt(0).childAt(0);
    (0, _chai.expect)(panelComponent.is('div.foo')).to.be.true;
  });

  it('handles close on clicked overlay', function () {

    var onClose = (0, _sinon.spy)();

    var modal = (0, _enzyme.shallow)(_react2.default.createElement(_modal2.default, { onClose: onClose }));

    var overlay = modal.childAt(0).childAt(0);
    overlay.simulate('click');
    (0, _chai.expect)(onClose.calledOnce).to.be.true;
  });

  it('calls onClear', function (done) {

    var onClear = (0, _sinon.spy)();

    var modal = (0, _enzyme.shallow)(_react2.default.createElement(_modal2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

    modal.setProps({ open: false });

    setTimeout(function () {
      (0, _chai.expect)(onClear.calledOnce).to.be.true;
      done();
    }, 500);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJjb21wb25lbnQiLCJvcGVuIiwidG8iLCJlcWwiLCJjbG9zZSIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwibW9kYWwiLCJpcyIsImJlIiwidHJ1ZSIsImNoaWxkIiwiY2hpbGRBdCIsIm92ZXJsYXkiLCJ3aW5kb3ciLCJsaWZlY3ljbGVFeHBlcmltZW50YWwiLCJwYW5lbENvbXBvbmVudCIsIm9uQ2xvc2UiLCJzaW11bGF0ZSIsImNhbGxlZE9uY2UiLCJkb25lIiwib25DbGVhciIsInNldFByb3BzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUFDLFNBQVMsaUJBQVQsRUFBNEIsWUFBTTs7QUFFaENBLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyxtQkFBSCxFQUF3QixZQUFNOztBQUU1QixVQUFNQyxXQUFXO0FBQ2ZDLGNBQU0sTUFEUztBQUVmQyxtQkFBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkksT0FBakI7O0FBS0Esd0JBQU9MLFFBQVFNLElBQVIsQ0FBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWIsQ0FBUCxFQUFxQ0MsRUFBckMsQ0FBd0NDLEdBQXhDLENBQTRDTCxRQUE1QztBQUVELEtBVEQ7O0FBV0FELE9BQUcsb0JBQUgsRUFBeUIsWUFBTTs7QUFFN0IsVUFBTUMsV0FBVztBQUNmQyxjQUFNO0FBRFMsT0FBakI7O0FBSUEsd0JBQU9KLFFBQVFTLEtBQVIsRUFBUCxFQUF3QkYsRUFBeEIsQ0FBMkJDLEdBQTNCLENBQStCTCxRQUEvQjtBQUVELEtBUkQ7QUFVRCxHQXZCRDs7QUF5QkFGLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNOztB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LEtBQUcsa0NBQUgsRUFBdUMsWUFBTTs7QUFFM0MsUUFBTXFCLFVBQVUsaUJBQWhCOztBQUVBLFFBQU1WLFFBQVEscUJBQVEsOEJBQUMsZUFBRCxJQUFPLFNBQVVVLE9BQWpCLEdBQVIsQ0FBZDs7QUFFQSxRQUFNSixVQUFVTixNQUFNSyxPQUFOLENBQWMsQ0FBZCxFQUFpQkEsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBaEI7QUFDQUMsWUFBUUssUUFBUixDQUFpQixPQUFqQjtBQUNBLHNCQUFPRCxRQUFRRSxVQUFmLEVBQTJCbEIsRUFBM0IsQ0FBOEJRLEVBQTlCLENBQWlDQyxJQUFqQztBQUVELEdBVkQ7O0FBWUFkLEtBQUcsZUFBSCxFQUFvQixVQUFDd0IsSUFBRCxFQUFVOztBQUU1QixRQUFNQyxVQUFVLGlCQUFoQjs7QUFFQSxRQUFNZCxRQUFRLHFCQUFRLDhCQUFDLGVBQUQsSUFBTyxNQUFPLElBQWQsRUFBcUIsU0FBVWMsT0FBL0IsR0FBUixFQUFxRCxFQUFFTix1QkFBdUIsSUFBekIsRUFBckQsQ0FBZDs7QUFFQVIsVUFBTWUsUUFBTixDQUFlLEVBQUV0QixNQUFNLEtBQVIsRUFBZjs7QUFFQXVCLGVBQVcsWUFBTTtBQUNmLHdCQUFPRixRQUFRRixVQUFmLEVBQTJCbEIsRUFBM0IsQ0FBOEJRLEVBQTlCLENBQWlDQyxJQUFqQztBQUNBVTtBQUNELEtBSEQsRUFHRyxHQUhIO0FBS0QsR0FiRDtBQWVELENBNUlEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCB7IHNweSB9IGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCdcblxuZGVzY3JpYmUoJ21vZGFsIGNvbXBvbmVudCcsICgpID0+IHtcblxuICBkZXNjcmliZSgnYWN0aW9ucycsICgpID0+IHtcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggb3BlbicsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdPUEVOJyxcbiAgICAgICAgY29tcG9uZW50OiA8ZGl2PkZvbzwvZGl2PlxuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5vcGVuKDxkaXY+Rm9vPC9kaXY+KSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggY2xvc2UnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLmNsb3NlKCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncmVkdWNlcicsICgpID0+IHtcblxuICAgIGl0KCdjYW4gc2V0IGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBvcGVuIG1vZGFsJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgY29tcG9uZW50OiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBjbG9zZSBtb2RhbCcsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNvbXBvbmVudDogPGRpdj5Gb288L2Rpdj4sXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjb21wb25lbnQ6IDxkaXY+Rm9vPC9kaXY+LFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgbW9kYWwgPSBzaGFsbG93KDxNb2RhbD48ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+PC9Nb2RhbD4pXG4gICAgICBleHBlY3QobW9kYWwuaXMoJ2Rpdi5yZWZyYW1lLW1vZGFsJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgY2hpbGQgPSBtb2RhbC5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoY2hpbGQuaXMoJ2Rpdi5mb28nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBvdmVybGF5ID0gbW9kYWwuY2hpbGRBdCgxKS5jaGlsZEF0KDApXG4gICAgICBleHBlY3Qob3ZlcmxheS5pcygnZGl2LnJlZnJhbWUtbW9kYWwtb3ZlcmxheScpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IHdpbmRvdyA9IG1vZGFsLmNoaWxkQXQoMikuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHdpbmRvdy5pcygnZGl2LnJlZnJhbWUtbW9kYWwtd2luZG93JykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgfSlcblxuICBpdCgncmVuZGVycyBvcGVuIHdpdGggYSBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+XG5cbiAgICBjb25zdCBtb2RhbCA9IHNoYWxsb3coPE1vZGFsIGNvbXBvbmVudD17IGNvbXBvbmVudCB9IG9wZW49eyB0cnVlIH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG5cbiAgICBjb25zdCBwYW5lbENvbXBvbmVudCA9IG1vZGFsLmNoaWxkQXQoMSkuY2hpbGRBdCgwKS5jaGlsZEF0KDApXG4gICAgZXhwZWN0KHBhbmVsQ29tcG9uZW50LmlzKCdkaXYuZm9vJykpLnRvLmJlLnRydWVcblxuICB9KVxuXG4gIGl0KCdoYW5kbGVzIGNsb3NlIG9uIGNsaWNrZWQgb3ZlcmxheScsICgpID0+IHtcblxuICAgIGNvbnN0IG9uQ2xvc2UgPSBzcHkoKVxuXG4gICAgY29uc3QgbW9kYWwgPSBzaGFsbG93KDxNb2RhbCBvbkNsb3NlPXsgb25DbG9zZSB9IC8+KVxuXG4gICAgY29uc3Qgb3ZlcmxheSA9IG1vZGFsLmNoaWxkQXQoMCkuY2hpbGRBdCgwKVxuICAgIG92ZXJsYXkuc2ltdWxhdGUoJ2NsaWNrJylcbiAgICBleHBlY3Qob25DbG9zZS5jYWxsZWRPbmNlKS50by5iZS50cnVlXG5cbiAgfSlcblxuICBpdCgnY2FsbHMgb25DbGVhcicsIChkb25lKSA9PiB7XG5cbiAgICBjb25zdCBvbkNsZWFyID0gc3B5KClcblxuICAgIGNvbnN0IG1vZGFsID0gc2hhbGxvdyg8TW9kYWwgb3Blbj17IHRydWUgfSBvbkNsZWFyPXsgb25DbGVhciB9IC8+LCB7IGxpZmVjeWNsZUV4cGVyaW1lbnRhbDogdHJ1ZSB9KVxuXG4gICAgbW9kYWwuc2V0UHJvcHMoeyBvcGVuOiBmYWxzZSB9KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBleHBlY3Qob25DbGVhci5jYWxsZWRPbmNlKS50by5iZS50cnVlXG4gICAgICBkb25lKClcbiAgICB9LCA1MDApXG5cbiAgfSlcblxufSlcbiJdfQ==