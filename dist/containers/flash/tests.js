'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _flash = require('./flash');

var _flash2 = _interopRequireDefault(_flash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('flash component', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)(actions.set('success', 'good job')).to.eql(expected);
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
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set flash message', function () {

      var state = {
        message: null,
        style: null
      };

      var action = {
        type: 'SET',
        style: 'success',
        message: 'good job'
      };

      var expected = {
        style: 'success',
        message: 'good job'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can clear flash message', function () {

      var state = {
        style: 'success',
        message: 'good job'
      };

      var action = {
        type: 'CLEAR'
      };

      var expected = {
        message: null,
        style: null
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var config = {
        message: null,
        style: null,
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(
        _flash2.default,
        config,
        _react2.default.createElement(
          'div',
          null,
          'child'
        )
      ));
      (0, _chai.expect)(flash.is('div.reframe-flash')).to.be.true;
      (0, _chai.expect)(flash.children.length).to.be.equal(1);

      var child = flash.childAt(0);
      (0, _chai.expect)(child.is('div')).to.be.truthy;
      (0, _chai.expect)(child.text()).to.equal('child');
    });

    it('renders with flash', function () {

      var config = {
        message: 'good job',
        style: 'success',
        onSet: function onSet() {},
        onClear: function onClear() {}
      };

      var flash = (0, _enzyme.shallow)(_react2.default.createElement(_flash2.default, config));

      var transitionGroup = flash.childAt(0);
      var popup = transitionGroup.childAt(0);
      (0, _chai.expect)(popup.is('div.reframe-flash-popup.success')).to.be.true;

      var panel = popup.childAt(0);
      (0, _chai.expect)(panel.is('div.reframe-flash-popup-panel')).to.be.true;

      var icon = panel.childAt(0);
      (0, _chai.expect)(icon.is('div.reframe-flash-popup-icon')).to.be.true;
      (0, _chai.expect)(icon.childAt(0).is('i.fa.fa-check-circle')).to.be.true;

      var message = panel.childAt(1);
      (0, _chai.expect)(message.is('div.reframe-flash-popup-message')).to.be.true;

      var paragraph = message.childAt(0);
      (0, _chai.expect)(paragraph.is('p')).to.be.truthy;
      (0, _chai.expect)(paragraph.text()).to.equal('good job');
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJzdHlsZSIsIm1lc3NhZ2UiLCJzZXQiLCJ0byIsImVxbCIsImNsZWFyIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJjb25maWciLCJvblNldCIsIm9uQ2xlYXIiLCJmbGFzaCIsImlzIiwiYmUiLCJ0cnVlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJlcXVhbCIsImNoaWxkIiwiY2hpbGRBdCIsInRydXRoeSIsInRleHQiLCJ0cmFuc2l0aW9uR3JvdXAiLCJwb3B1cCIsInBhbmVsIiwiaWNvbiIsInBhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7O0FBRUFDLFNBQVMsaUJBQVQsRUFBNEIsWUFBTTs7QUFFaENBLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyxrQkFBSCxFQUF1QixZQUFNOztBQUUzQixVQUFNQyxXQUFXO0FBQ2ZDLGNBQU0sS0FEUztBQUVmQyxlQUFPLFNBRlE7QUFHZkMsaUJBQVM7QUFITSxPQUFqQjs7QUFNQSx3QkFBT04sUUFBUU8sR0FBUixDQUFZLFNBQVosRUFBdUIsVUFBdkIsQ0FBUCxFQUEyQ0MsRUFBM0MsQ0FBOENDLEdBQTlDLENBQWtETixRQUFsRDtBQUVELEtBVkQ7O0FBWUFELE9BQUcsb0JBQUgsRUFBeUIsWUFBTTs7QUFFN0IsVUFBTUMsV0FBVztBQUNmQyxjQUFNO0FBRFMsT0FBakI7O0FBSUEsd0JBQU9KLFFBQVFVLEtBQVIsRUFBUCxFQUF3QkYsRUFBeEIsQ0FBMkJDLEdBQTNCLENBQStCTixRQUEvQjtBQUVELEtBUkQ7QUFVRCxHQXhCRDs7QUEwQkFGLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNOztBQUVoQyxVQUFNQyxXQUFXO0FBQ2ZHLGlC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QXJELENBQXdEQyxJQUF4RDs7QUFFQSxVQUFNVyxPQUFPRCxNQUFNTCxPQUFOLENBQWMsQ0FBZCxDQUFiO0FBQ0Esd0JBQU9NLEtBQUtiLEVBQUwsQ0FBUSw4QkFBUixDQUFQLEVBQWdEVixFQUFoRCxDQUFtRFcsRUFBbkQsQ0FBc0RDLElBQXREO0FBQ0Esd0JBQU9XLEtBQUtOLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUCxFQUFoQixDQUFtQixzQkFBbkIsQ0FBUCxFQUFtRFYsRUFBbkQsQ0FBc0RXLEVBQXRELENBQXlEQyxJQUF6RDs7QUFFQSxVQUFNZCxVQUFVd0IsTUFBTUwsT0FBTixDQUFjLENBQWQsQ0FBaEI7QUFDQSx3QkFBT25CLFFBQVFZLEVBQVIsQ0FBVyxpQ0FBWCxDQUFQLEVBQXNEVixFQUF0RCxDQUF5RFcsRUFBekQsQ0FBNERDLElBQTVEOztBQUVBLFVBQU1ZLFlBQVkxQixRQUFRbUIsT0FBUixDQUFnQixDQUFoQixDQUFsQjtBQUNBLHdCQUFPTyxVQUFVZCxFQUFWLENBQWEsR0FBYixDQUFQLEVBQTBCVixFQUExQixDQUE2QlcsRUFBN0IsQ0FBZ0NPLE1BQWhDO0FBQ0Esd0JBQU9NLFVBQVVMLElBQVYsRUFBUCxFQUF5Qm5CLEVBQXpCLENBQTRCZSxLQUE1QixDQUFrQyxVQUFsQztBQUdELEtBaENEO0FBa0NELEdBeEREO0FBMERELENBL0lEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IEZsYXNoIGZyb20gJy4vZmxhc2gnXG5cbmRlc2NyaWJlKCdmbGFzaCBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIHNldCcsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICBzdHlsZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiAnZ29vZCBqb2InXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLnNldCgnc3VjY2VzcycsICdnb29kIGpvYicpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCBjbGVhcicsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdDTEVBUidcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuY2xlYXIoKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZWR1Y2VyJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBzZXQgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIHN0eWxlOiBudWxsXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBzZXQgZmxhc2ggbWVzc2FnZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgIHN0eWxlOiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ1NFVCcsXG4gICAgICAgIHN0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdnb29kIGpvYidcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHN0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdnb29kIGpvYidcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGNsZWFyIGZsYXNoIG1lc3NhZ2UnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBzdHlsZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiAnZ29vZCBqb2InXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0NMRUFSJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgnY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgaXQoJ3JlbmRlcnMgd2l0aCBhIGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgIG9uU2V0OiAoKSA9PiB7fSxcbiAgICAgICAgb25DbGVhcjogKCkgPT4ge31cbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxhc2ggPSBzaGFsbG93KFxuICAgICAgICA8Rmxhc2ggey4uLmNvbmZpZ30+PGRpdj5jaGlsZDwvZGl2PjwvRmxhc2g+XG4gICAgICApXG4gICAgICBleHBlY3QoZmxhc2guaXMoJ2Rpdi5yZWZyYW1lLWZsYXNoJykpLnRvLmJlLnRydWVcbiAgICAgIGV4cGVjdChmbGFzaC5jaGlsZHJlbi5sZW5ndGgpLnRvLmJlLmVxdWFsKDEpXG5cbiAgICAgIGNvbnN0IGNoaWxkID0gZmxhc2guY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGNoaWxkLmlzKCdkaXYnKSkudG8uYmUudHJ1dGh5XG4gICAgICBleHBlY3QoY2hpbGQudGV4dCgpKS50by5lcXVhbCgnY2hpbGQnKVxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGZsYXNoJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIG1lc3NhZ2U6ICdnb29kIGpvYicsXG4gICAgICAgIHN0eWxlOiAnc3VjY2VzcycsXG4gICAgICAgIG9uU2V0OiAoKSA9PiB7fSxcbiAgICAgICAgb25DbGVhcjogKCkgPT4ge31cbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxhc2ggPSBzaGFsbG93KFxuICAgICAgICA8Rmxhc2ggey4uLmNvbmZpZ30gLz5cbiAgICAgIClcblxuICAgICAgY29uc3QgdHJhbnNpdGlvbkdyb3VwID0gZmxhc2guY2hpbGRBdCgwKVxuICAgICAgY29uc3QgcG9wdXAgPSB0cmFuc2l0aW9uR3JvdXAuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHBvcHVwLmlzKCdkaXYucmVmcmFtZS1mbGFzaC1wb3B1cC5zdWNjZXNzJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgcGFuZWwgPSBwb3B1cC5jaGlsZEF0KDApXG4gICAgICBleHBlY3QocGFuZWwuaXMoJ2Rpdi5yZWZyYW1lLWZsYXNoLXBvcHVwLXBhbmVsJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgaWNvbiA9IHBhbmVsLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChpY29uLmlzKCdkaXYucmVmcmFtZS1mbGFzaC1wb3B1cC1pY29uJykpLnRvLmJlLnRydWVcbiAgICAgIGV4cGVjdChpY29uLmNoaWxkQXQoMCkuaXMoJ2kuZmEuZmEtY2hlY2stY2lyY2xlJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgbWVzc2FnZSA9IHBhbmVsLmNoaWxkQXQoMSlcbiAgICAgIGV4cGVjdChtZXNzYWdlLmlzKCdkaXYucmVmcmFtZS1mbGFzaC1wb3B1cC1tZXNzYWdlJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgcGFyYWdyYXBoID0gbWVzc2FnZS5jaGlsZEF0KDApXG4gICAgICBleHBlY3QocGFyYWdyYXBoLmlzKCdwJykpLnRvLmJlLnRydXRoeVxuICAgICAgZXhwZWN0KHBhcmFncmFwaC50ZXh0KCkpLnRvLmVxdWFsKCdnb29kIGpvYicpXG5cblxuICAgIH0pXG5cbiAgfSlcblxufSlcbiJdfQ==