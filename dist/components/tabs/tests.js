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

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('tabs component', function () {

  describe('actions', function () {

    it('can dispatch choose', function () {

      var expected = {
        type: 'CHOOSE',
        index: 0
      };

      (0, _chai.expect)(actions.choose(0)).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        chosen: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can choose tab', function () {

      var state = {};

      var action = {
        type: 'CHOOSE',
        index: 0
      };

      var expected = {
        chosen: 0
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, null));
      (0, _chai.expect)(tabs.is('div.reframe-tabs')).to.be.true;

      var header = tabs.childAt(0);
      (0, _chai.expect)(header.is('div.reframe-tabs-header')).to.be.true;

      var items = header.childAt(0);
      (0, _chai.expect)(items.is('div.reframe-tabs-items')).to.be.true;

      var body = tabs.childAt(1);
      (0, _chai.expect)(body.is('div.reframe-tabs-body')).to.be.true;
    });

    it('renders with header content', function () {

      var header = _react2.default.createElement('div', { className: 'foo' });

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { header: header }));
      var headerContentWrapper = tabs.childAt(0).childAt(0);
      (0, _chai.expect)(headerContentWrapper.is('div.reframe-tabs-header-content')).to.be.true;

      var headerContent = headerContentWrapper.childAt(0);
      (0, _chai.expect)(headerContent.is('div.foo')).to.be.true;
    });

    it('renders with items', function () {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items }));
      var headerItemsWrapper = tabs.childAt(0).childAt(0);
      (0, _chai.expect)(headerItemsWrapper.is('div.reframe-tabs-items')).to.be.true;
      (0, _chai.expect)(headerItemsWrapper.children().length).to.equal(2);

      var headerItem1 = headerItemsWrapper.childAt(0);
      (0, _chai.expect)(headerItem1.is('div.reframe-tabs-item')).to.be.true;

      var headerItem2 = headerItemsWrapper.childAt(1);
      (0, _chai.expect)(headerItem2.is('div.reframe-tabs-item')).to.be.true;

      var tabsWrapper = tabs.childAt(1);
      (0, _chai.expect)(tabsWrapper.is('div.reframe-tabs-body')).to.be.true;
      (0, _chai.expect)(tabsWrapper.children().length).to.equal(2);

      var tab1 = tabsWrapper.childAt(0);
      (0, _chai.expect)(tab1.is('div.reframe-tab')).to.be.true;

      var tab2 = tabsWrapper.childAt(0);
      (0, _chai.expect)(tab2.is('div.reframe-tab')).to.be.true;
    });

    it('renders with active item', function () {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];

      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items, chosen: 0 }));
      var headerItem1 = tabs.childAt(0).childAt(0).childAt(0);
      (0, _chai.expect)(headerItem1.is('div.active')).to.be.true;

      var headerItem2 = tabs.childAt(0).childAt(0).childAt(1);
      (0, _chai.expect)(headerItem2.is('div.active')).to.be.false;

      var tab1 = tabs.childAt(1).childAt(0);
      (0, _chai.expect)(tab1.is('div.active')).to.be.true;

      var tab2 = tabs.childAt(1).childAt(1);
      (0, _chai.expect)(tab2.is('div.active')).to.be.false;
    });

    it('handles onChoose', function (done) {

      var items = [{ label: 'One', component: _react2.default.createElement('div', { className: 'foo' }) }, { label: 'Two', component: _react2.default.createElement('div', { className: 'bar' }) }];
      var onChoose = (0, _sinon.spy)();
      var tabs = (0, _enzyme.shallow)(_react2.default.createElement(_tabs2.default, { items: items, onChoose: onChoose }));
      tabs.childAt(0).childAt(0).childAt(0).simulate('click');
      setTimeout(function () {
        (0, _chai.expect)(onChoose.calledOnce).to.be.true;
        done();
      }, 20);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJpbmRleCIsImNob29zZSIsInRvIiwiZXFsIiwiY2hvc2VuIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJ0YWJzIiwiaXMiLCJiZSIsInRydWUiLCJoZWFkZXIiLCJjaGlsZEF0IiwiaXRlbXMiLCJib2R5IiwiaGVhZGVyQ29udGVudFdyYXBwZXIiLCJoZWFkZXJDb250ZW50IiwibGFiZWwiLCJjb21wb25lbnQiLCJoZWFkZXJJdGVtc1dyYXBwZXIiLCJjaGlsZHJlbiIsImxlbmd0aCIsImVxdWFsIiwiaGVhZGVySXRlbTEiLCJoZWFkZXJJdGVtMiIsInRhYnNXcmFwcGVyIiwidGFiMSIsInRhYjIiLCJmYWxzZSIsImRvbmUiLCJvbkNob29zZSIsInNpbXVsYXRlIiwic2V0VGltZW91dCIsImNhbGxlZE9uY2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUVBQyxTQUFTLGdCQUFULEVBQTJCLFlBQU07O0FBRS9CQSxXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcscUJBQUgsRUFBMEIsWUFBTTs7QUFFOUIsVUFBTUMsV0FBVztBQUNmQyxjQUFNLFFBRFM7QUFFZkMsZUFBTztBQUZRLE9BQWpCOztBQUtBLHdCQUFPTCxRQUFRTSxNQUFSLENBQWUsQ0FBZixDQUFQLEVBQTBCQyxFQUExQixDQUE2QkMsR0FBN0IsQ0FBaUNMLFFBQWpDO0FBRUQsS0FURDtBQVdELEdBYkQ7O0FBZUFGLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNOztBQUVoQyxVQUFNQyxXQUFXO0FBQ2ZNLGdCQUFRO0FBRE8sT0FBakI7O0FBSUEsd0JBQU8sdUJBQVFDLFNBQVIsRUFBbUIsRUFBbkIsQ0FBUCxFQUEr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OEJBQUMsY0FBRCxJQUFNLE9BQVFNLEtBQWQsRUFBc0IsVUFBV2lCLFFBQWpDLEdBQVIsQ0FBYjtBQUNBdkIsV0FBS0ssT0FBTCxDQUFhLENBQWIsRUFBZ0JBLE9BQWhCLENBQXdCLENBQXhCLEVBQTJCQSxPQUEzQixDQUFtQyxDQUFuQyxFQUFzQ21CLFFBQXRDLENBQStDLE9BQS9DO0FBQ0FDLGlCQUFXLFlBQU07QUFDZiwwQkFBT0YsU0FBU0csVUFBaEIsRUFBNEJoQyxFQUE1QixDQUErQlEsRUFBL0IsQ0FBa0NDLElBQWxDO0FBQ0FtQjtBQUNELE9BSEQsRUFHRyxFQUhIO0FBTUQsS0FmRDtBQWlCRCxHQXBHRDtBQXNHRCxDQXRKRCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSdcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgeyBzcHkgfSBmcm9tICdzaW5vbidcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi90YWJzJ1xuXG5kZXNjcmliZSgndGFicyBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIGNob29zZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdDSE9PU0UnLFxuICAgICAgICBpbmRleDogMFxuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5jaG9vc2UoMCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncmVkdWNlcicsICgpID0+IHtcblxuICAgIGl0KCdjYW4gc2V0IGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjaG9zZW46IG51bGxcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIodW5kZWZpbmVkLCAnJykpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGNob29zZSB0YWInLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge31cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQ0hPT1NFJyxcbiAgICAgICAgaW5kZXg6IDBcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNob3NlbjogMFxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgdGFicyA9IHNoYWxsb3coPFRhYnMgLz4pXG4gICAgICBleHBlY3QodGFicy5pcygnZGl2LnJlZnJhbWUtdGFicycpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHRhYnMuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGhlYWRlci5pcygnZGl2LnJlZnJhbWUtdGFicy1oZWFkZXInKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBpdGVtcyA9IGhlYWRlci5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoaXRlbXMuaXMoJ2Rpdi5yZWZyYW1lLXRhYnMtaXRlbXMnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBib2R5ID0gdGFicy5jaGlsZEF0KDEpXG4gICAgICBleHBlY3QoYm9keS5pcygnZGl2LnJlZnJhbWUtdGFicy1ib2R5JykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGhlYWRlciBjb250ZW50JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBoZWFkZXIgPSA8ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+XG5cbiAgICAgIGNvbnN0IHRhYnMgPSBzaGFsbG93KDxUYWJzIGhlYWRlcj17IGhlYWRlciB9IC8+KVxuICAgICAgY29uc3QgaGVhZGVyQ29udGVudFdyYXBwZXIgPSB0YWJzLmNoaWxkQXQoMCkuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGhlYWRlckNvbnRlbnRXcmFwcGVyLmlzKCdkaXYucmVmcmFtZS10YWJzLWhlYWRlci1jb250ZW50JykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgaGVhZGVyQ29udGVudCA9IGhlYWRlckNvbnRlbnRXcmFwcGVyLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChoZWFkZXJDb250ZW50LmlzKCdkaXYuZm9vJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGl0ZW1zJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgeyBsYWJlbDogJ09uZScsIGNvbXBvbmVudDogPGRpdiBjbGFzc05hbWU9XCJmb29cIiAvPiB9LFxuICAgICAgICB7IGxhYmVsOiAnVHdvJywgY29tcG9uZW50OiA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIC8+IH1cbiAgICAgIF1cblxuICAgICAgY29uc3QgdGFicyA9IHNoYWxsb3coPFRhYnMgaXRlbXM9eyBpdGVtcyB9IC8+KVxuICAgICAgY29uc3QgaGVhZGVySXRlbXNXcmFwcGVyID0gdGFicy5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChoZWFkZXJJdGVtc1dyYXBwZXIuaXMoJ2Rpdi5yZWZyYW1lLXRhYnMtaXRlbXMnKSkudG8uYmUudHJ1ZVxuICAgICAgZXhwZWN0KGhlYWRlckl0ZW1zV3JhcHBlci5jaGlsZHJlbigpLmxlbmd0aCkudG8uZXF1YWwoMilcblxuICAgICAgY29uc3QgaGVhZGVySXRlbTEgPSBoZWFkZXJJdGVtc1dyYXBwZXIuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGhlYWRlckl0ZW0xLmlzKCdkaXYucmVmcmFtZS10YWJzLWl0ZW0nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBoZWFkZXJJdGVtMiA9IGhlYWRlckl0ZW1zV3JhcHBlci5jaGlsZEF0KDEpXG4gICAgICBleHBlY3QoaGVhZGVySXRlbTIuaXMoJ2Rpdi5yZWZyYW1lLXRhYnMtaXRlbScpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IHRhYnNXcmFwcGVyID0gdGFicy5jaGlsZEF0KDEpXG4gICAgICBleHBlY3QodGFic1dyYXBwZXIuaXMoJ2Rpdi5yZWZyYW1lLXRhYnMtYm9keScpKS50by5iZS50cnVlXG4gICAgICBleHBlY3QodGFic1dyYXBwZXIuY2hpbGRyZW4oKS5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cbiAgICAgIGNvbnN0IHRhYjEgPSB0YWJzV3JhcHBlci5jaGlsZEF0KDApXG4gICAgICBleHBlY3QodGFiMS5pcygnZGl2LnJlZnJhbWUtdGFiJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgdGFiMiA9IHRhYnNXcmFwcGVyLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdCh0YWIyLmlzKCdkaXYucmVmcmFtZS10YWInKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYWN0aXZlIGl0ZW0nLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICB7IGxhYmVsOiAnT25lJywgY29tcG9uZW50OiA8ZGl2IGNsYXNzTmFtZT1cImZvb1wiIC8+IH0sXG4gICAgICAgIHsgbGFiZWw6ICdUd28nLCBjb21wb25lbnQ6IDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgLz4gfVxuICAgICAgXVxuXG4gICAgICBjb25zdCB0YWJzID0gc2hhbGxvdyg8VGFicyBpdGVtcz17IGl0ZW1zIH0gY2hvc2VuPXsgMCB9IC8+KVxuICAgICAgY29uc3QgaGVhZGVySXRlbTEgPSB0YWJzLmNoaWxkQXQoMCkuY2hpbGRBdCgwKS5jaGlsZEF0KDApXG4gICAgICBleHBlY3QoaGVhZGVySXRlbTEuaXMoJ2Rpdi5hY3RpdmUnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBoZWFkZXJJdGVtMiA9IHRhYnMuY2hpbGRBdCgwKS5jaGlsZEF0KDApLmNoaWxkQXQoMSlcbiAgICAgIGV4cGVjdChoZWFkZXJJdGVtMi5pcygnZGl2LmFjdGl2ZScpKS50by5iZS5mYWxzZVxuXG4gICAgICBjb25zdCB0YWIxID0gdGFicy5jaGlsZEF0KDEpLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdCh0YWIxLmlzKCdkaXYuYWN0aXZlJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgdGFiMiA9IHRhYnMuY2hpbGRBdCgxKS5jaGlsZEF0KDEpXG4gICAgICBleHBlY3QodGFiMi5pcygnZGl2LmFjdGl2ZScpKS50by5iZS5mYWxzZVxuXG4gICAgfSlcblxuICAgIGl0KCdoYW5kbGVzIG9uQ2hvb3NlJywgKGRvbmUpID0+IHtcblxuICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIHsgbGFiZWw6ICdPbmUnLCBjb21wb25lbnQ6IDxkaXYgY2xhc3NOYW1lPVwiZm9vXCIgLz4gfSxcbiAgICAgICAgeyBsYWJlbDogJ1R3bycsIGNvbXBvbmVudDogPGRpdiBjbGFzc05hbWU9XCJiYXJcIiAvPiB9XG4gICAgICBdXG4gICAgICBjb25zdCBvbkNob29zZSA9IHNweSgpXG4gICAgICBjb25zdCB0YWJzID0gc2hhbGxvdyg8VGFicyBpdGVtcz17IGl0ZW1zIH0gb25DaG9vc2U9eyBvbkNob29zZSB9IC8+KVxuICAgICAgdGFicy5jaGlsZEF0KDApLmNoaWxkQXQoMCkuY2hpbGRBdCgwKS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV4cGVjdChvbkNob29zZS5jYWxsZWRPbmNlKS50by5iZS50cnVlXG4gICAgICAgIGRvbmUoKVxuICAgICAgfSwgMjApXG5cblxuICAgIH0pXG5cbiAgfSlcblxufSlcbiJdfQ==