'use strict';

require('jsdom-global/register');

var _enzyme = require('enzyme');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _colorfield = require('./colorfield');

var _colorfield2 = _interopRequireDefault(_colorfield);

var _chai = require('chai');

var _sinon = require('sinon');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('collection', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        color: 'red'
      };

      (0, _chai.expect)(actions.set('red')).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        color: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set color', function () {

      var state = {
        color: null
      };

      var action = {
        type: 'SET',
        color: 'red'
      };

      var expected = {
        color: 'red'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, null));
      (0, _chai.expect)(colorfield.is('div.reframe-colorfield')).to.be.true;
      (0, _chai.expect)(colorfield.children().length).to.equal(10);
      (0, _chai.expect)(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#DB2828');
      (0, _chai.expect)(colorfield.childAt(1).node.props.style.backgroundColor).to.equal('#F2711C');
      (0, _chai.expect)(colorfield.childAt(2).node.props.style.backgroundColor).to.equal('#FBBD08');
      (0, _chai.expect)(colorfield.childAt(3).node.props.style.backgroundColor).to.equal('#B5CC18');
      (0, _chai.expect)(colorfield.childAt(4).node.props.style.backgroundColor).to.equal('#21BA45');
      (0, _chai.expect)(colorfield.childAt(5).node.props.style.backgroundColor).to.equal('#00B5AD');
      (0, _chai.expect)(colorfield.childAt(6).node.props.style.backgroundColor).to.equal('#2185D0');
      (0, _chai.expect)(colorfield.childAt(7).node.props.style.backgroundColor).to.equal('#6435C9');
      (0, _chai.expect)(colorfield.childAt(8).node.props.style.backgroundColor).to.equal('#A333C8');
      (0, _chai.expect)(colorfield.childAt(9).node.props.style.backgroundColor).to.equal('#E03997');

      var color = colorfield.childAt(0);
      (0, _chai.expect)(color.is('div.reframe-color'));
    });

    it('renders with a custom colors', function () {

      var colors = [{ name: 'red', value: '#990000' }];

      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { colors: colors }));
      (0, _chai.expect)(colorfield.is('div.reframe-colorfield')).to.be.true;
      (0, _chai.expect)(colorfield.children().length).to.equal(1);
      (0, _chai.expect)(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#990000');
    });

    it('renders with selected color', function () {

      var color = 'red';
      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { color: color }));
      var red = colorfield.childAt(0);
      var icon = red.childAt(0);
      (0, _chai.expect)(icon.is('i.check.icon')).to.be.true;

      var orange = colorfield.childAt(1);
      (0, _chai.expect)(orange.children().length).to.equal(0);
    });

    it('handles click', function () {

      var onSet = (0, _sinon.spy)();
      var colorfield = (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { onSet: onSet }));

      var orange = colorfield.childAt(1);
      orange.simulate('click');
      (0, _chai.expect)(onSet.getCall(0).args[0]).to.equal('orange');
    });

    it('calls onSet', function () {

      var onSet = (0, _sinon.spy)();
      (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { defaultValue: 'red', onSet: onSet }), { lifecycleExperimental: true });
      (0, _chai.expect)(onSet.calledOnce).to.be.true;
    });

    it('calls onReady', function () {

      var onReady = (0, _sinon.spy)();
      (0, _enzyme.shallow)(_react2.default.createElement(_colorfield2.default, { onReady: onReady }), { lifecycleExperimental: true });
      (0, _chai.expect)(onReady.calledOnce).to.be.true;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJjb2xvciIsInNldCIsInRvIiwiZXFsIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJjb2xvcmZpZWxkIiwiaXMiLCJiZSIsInRydWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImVxdWFsIiwiY2hpbGRBdCIsIm5vZGUiLCJwcm9wcyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwibmFtZSIsInZhbHVlIiwicmVkIiwiaWNvbiIsIm9yYW5nZSIsIm9uU2V0Iiwic2ltdWxhdGUiLCJnZXRDYWxsIiwiYXJncyIsImxpZmVjeWNsZUV4cGVyaW1lbnRhbCIsImNhbGxlZE9uY2UiLCJvblJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyxZQUFULEVBQXVCLFlBQU07O0FBRTNCQSxXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsa0JBQUgsRUFBdUIsWUFBTTs7QUFFM0IsVUFBTUMsV0FBVztBQUNmQyxjQUFNLEtBRFM7QUFFZkMsZUFBTztBQUZRLE9BQWpCOztBQUtBLHdCQUFPTCxRQUFRTSxHQUFSLENBQVksS0FBWixDQUFQLEVBQTJCQyxFQUEzQixDQUE4QkMsR0FBOUIsQ0FBa0NMLFFBQWxDO0FBRUQsS0FURDtBQVdELEdBYkQ7O0FBZUFGLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNOztBQUVoQyxVQUFNQyxXQUFXO0FBQ2ZFLGVBQU87QUFEUSxPQUFqQjs7QUFJQSx3QkFBTyx1QkFBUUksU0FBUixFQUFtQixFQUFuQixDQUFQLEVBQStCRixFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FSRDs7QUFVQUQsT0FB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QXBDLENBQTBDLENBQTFDO0FBRUQsS0FYRDs7QUFhQWhCLE9BQUcsZUFBSCxFQUFvQixZQUFNOztBQUV4QixVQUFNNEIsUUFBUSxpQkFBZDtBQUNBLFVBQU1sQixhQUFhLHFCQUFRLDhCQUFDLG9CQUFELElBQVksT0FBUWtCLEtBQXBCLEdBQVIsQ0FBbkI7O0FBRUEsVUFBTUQsU0FBU2pCLFdBQVdPLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBZjtBQUNBVSxhQUFPRSxRQUFQLENBQWdCLE9BQWhCO0FBQ0Esd0JBQU9ELE1BQU1FLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxJQUFqQixDQUFzQixDQUF0QixDQUFQLEVBQWlDMUIsRUFBakMsQ0FBb0NXLEtBQXBDLENBQTBDLFFBQTFDO0FBQ0QsS0FSRDs7QUFVQWhCLE9BQUcsYUFBSCxFQUFrQixZQUFNOztBQUV0QixVQUFNNEIsUUFBUSxpQkFBZDtBQUNBLDJCQUFRLDhCQUFDLG9CQUFELElBQVksY0FBYSxLQUF6QixFQUErQixPQUFRQSxLQUF2QyxHQUFSLEVBQTJELEVBQUVJLHVCQUF1QixJQUF6QixFQUEzRDtBQUNBLHdCQUFPSixNQUFNSyxVQUFiLEVBQXlCNUIsRUFBekIsQ0FBNEJPLEVBQTVCLENBQStCQyxJQUEvQjtBQUVELEtBTkQ7O0FBUUFiLE9BQUcsZUFBSCxFQUFvQixZQUFNOztBQUV4QixVQUFNa0MsVUFBVSxpQkFBaEI7QUFDQSwyQkFBUSw4QkFBQyxvQkFBRCxJQUFZLFNBQVVBLE9BQXRCLEdBQVIsRUFBNEMsRUFBRUYsdUJBQXVCLElBQXpCLEVBQTVDO0FBQ0Esd0JBQU9FLFFBQVFELFVBQWYsRUFBMkI1QixFQUEzQixDQUE4Qk8sRUFBOUIsQ0FBaUNDLElBQWpDO0FBRUQsS0FORDtBQVFELEdBM0VEO0FBNkVELENBL0hEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2pzZG9tLWdsb2JhbC9yZWdpc3RlcidcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBDb2xvcmZpZWxkIGZyb20gJy4vY29sb3JmaWVsZCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgeyBzcHkgfSBmcm9tICdzaW5vbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZGVzY3JpYmUoJ2NvbGxlY3Rpb24nLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIHNldCcsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuc2V0KCdyZWQnKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZWR1Y2VyJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBzZXQgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNvbG9yOiBudWxsXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBzZXQgY29sb3InLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBjb2xvcjogbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgY29sb3JmaWVsZCA9IHNoYWxsb3coPENvbG9yZmllbGQgLz4pXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5pcygnZGl2LnJlZnJhbWUtY29sb3JmaWVsZCcpKS50by5iZS50cnVlXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZHJlbigpLmxlbmd0aCkudG8uZXF1YWwoMTApXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDApLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0RCMjgyOCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDEpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0YyNzExQycpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDIpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0ZCQkQwOCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDMpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0I1Q0MxOCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDQpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnIzIxQkE0NScpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDUpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnIzAwQjVBRCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDYpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnIzIxODVEMCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDcpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnIzY0MzVDOScpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDgpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0EzMzNDOCcpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDkpLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnI0UwMzk5NycpXG5cbiAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JmaWVsZC5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoY29sb3IuaXMoJ2Rpdi5yZWZyYW1lLWNvbG9yJykpXG5cbiAgICB9KVxuXG4gICAgaXQoJ3JlbmRlcnMgd2l0aCBhIGN1c3RvbSBjb2xvcnMnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICAgeyBuYW1lOiAncmVkJywgdmFsdWU6ICcjOTkwMDAwJyB9XG4gICAgICBdXG5cbiAgICAgIGNvbnN0IGNvbG9yZmllbGQgPSBzaGFsbG93KDxDb2xvcmZpZWxkIGNvbG9ycz17IGNvbG9ycyB9IC8+KVxuICAgICAgZXhwZWN0KGNvbG9yZmllbGQuaXMoJ2Rpdi5yZWZyYW1lLWNvbG9yZmllbGQnKSkudG8uYmUudHJ1ZVxuICAgICAgZXhwZWN0KGNvbG9yZmllbGQuY2hpbGRyZW4oKS5sZW5ndGgpLnRvLmVxdWFsKDEpXG4gICAgICBleHBlY3QoY29sb3JmaWVsZC5jaGlsZEF0KDApLm5vZGUucHJvcHMuc3R5bGUuYmFja2dyb3VuZENvbG9yKS50by5lcXVhbCgnIzk5MDAwMCcpXG5cbiAgICB9KVxuXG4gICAgaXQoJ3JlbmRlcnMgd2l0aCBzZWxlY3RlZCBjb2xvcicsICgpID0+IHtcblxuICAgICAgY29uc3QgY29sb3IgPSAncmVkJ1xuICAgICAgY29uc3QgY29sb3JmaWVsZCA9IHNoYWxsb3coPENvbG9yZmllbGQgY29sb3I9eyBjb2xvciB9IC8+KVxuICAgICAgY29uc3QgcmVkID0gY29sb3JmaWVsZC5jaGlsZEF0KDApXG4gICAgICBjb25zdCBpY29uID0gcmVkLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChpY29uLmlzKCdpLmNoZWNrLmljb24nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBvcmFuZ2UgPSBjb2xvcmZpZWxkLmNoaWxkQXQoMSlcbiAgICAgIGV4cGVjdChvcmFuZ2UuY2hpbGRyZW4oKS5sZW5ndGgpLnRvLmVxdWFsKDApXG5cbiAgICB9KVxuXG4gICAgaXQoJ2hhbmRsZXMgY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9uU2V0ID0gc3B5KClcbiAgICAgIGNvbnN0IGNvbG9yZmllbGQgPSBzaGFsbG93KDxDb2xvcmZpZWxkIG9uU2V0PXsgb25TZXQgfSAvPilcblxuICAgICAgY29uc3Qgb3JhbmdlID0gY29sb3JmaWVsZC5jaGlsZEF0KDEpXG4gICAgICBvcmFuZ2Uuc2ltdWxhdGUoJ2NsaWNrJylcbiAgICAgIGV4cGVjdChvblNldC5nZXRDYWxsKDApLmFyZ3NbMF0pLnRvLmVxdWFsKCdvcmFuZ2UnKVxuICAgIH0pXG5cbiAgICBpdCgnY2FsbHMgb25TZXQnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9uU2V0ID0gc3B5KClcbiAgICAgIHNoYWxsb3coPENvbG9yZmllbGQgZGVmYXVsdFZhbHVlPVwicmVkXCIgb25TZXQ9eyBvblNldCB9IC8+LCB7IGxpZmVjeWNsZUV4cGVyaW1lbnRhbDogdHJ1ZSB9KVxuICAgICAgZXhwZWN0KG9uU2V0LmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgnY2FsbHMgb25SZWFkeScsICgpID0+IHtcblxuICAgICAgY29uc3Qgb25SZWFkeSA9IHNweSgpXG4gICAgICBzaGFsbG93KDxDb2xvcmZpZWxkIG9uUmVhZHk9eyBvblJlYWR5IH0gLz4sIHsgbGlmZWN5Y2xlRXhwZXJpbWVudGFsOiB0cnVlIH0pXG4gICAgICBleHBlY3Qob25SZWFkeS5jYWxsZWRPbmNlKS50by5iZS50cnVlXG5cbiAgICB9KVxuXG4gIH0pXG5cbn0pXG4iXX0=