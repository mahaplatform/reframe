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
        items: null,
        open: false
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
        items: null,
        open: false
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

      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { open: true, items: items }));
      var list = tasks.childAt(1).childAt(0);
      (0, _chai.expect)(list.children().length).to.equal(3);

      var foo = list.childAt(0);
      (0, _chai.expect)(foo.prop('label')).to.equal('Foo');

      var bar = list.childAt(1);
      (0, _chai.expect)(bar.prop('label')).to.equal('Bar');

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

      var tasks = (0, _enzyme.shallow)(_react2.default.createElement(_tasks2.default, { open: true, onClear: onClear }), { lifecycleExperimental: true });

      tasks.setProps({ open: false });

      setTimeout(function () {
        (0, _chai.expect)(onClear.calledOnce).to.be.true;
        done();
      }, 500);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJpdGVtcyIsIm9wZW4iLCJ0byIsImVxbCIsImNsb3NlIiwiY2xlYXIiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsImFjdGlvbiIsImZvbyIsImJhciIsImJheiIsInRhc2tzIiwiaXMiLCJiZSIsInRydWUiLCJjaGlsZCIsImNoaWxkQXQiLCJvdmVybGF5IiwibGlzdCIsImNhbmNlbCIsInRleHQiLCJlcXVhbCIsImxhYmVsIiwiaGFuZGxlciIsImNoaWxkcmVuIiwibGVuZ3RoIiwicHJvcCIsIm9uQ2xvc2UiLCJzaW11bGF0ZSIsImNhbGxlZE9uY2UiLCJmaW5kIiwiZG9uZSIsIm9uQ2xlYXIiLCJsaWZlY3ljbGVFeHBlcmltZW50YWwiLCJzZXRQcm9wcyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUVBQyxTQUFTLGlCQUFULEVBQTRCLFlBQU07O0FBRWhDQSxXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsbUJBQUgsRUFBd0IsWUFBTTs7QUFFNUIsVUFBTUMsV0FBVztBQUNmQyxjQUFNLE1BRFM7QUFFZkMsZUFBTztBQUZRLE9BQWpCOztBQUtBLHdCQUFPTCxRQUFRTSxJQUFSLENBQWEsRUFBYixDQUFQLEVBQXlCQyxFQUF6QixDQUE0QkMsR0FBNUIsQ0FBZ0NMLFFBQWhDO0FBRUQsS0FURDs7QUFXQUQsT0FBRyxvQkFBSCxFQUF5QixZQUFNOztBQUU3QixVQUFNQyxXQUFXO0FBQ2ZDLGNBQU07QUFEUyxPQUFqQjs7QUFJQSx3QkFBT0osUUFBUVMsS0FBUixFQUFQLEVBQXdCRixFQUF4QixDQUEyQkMsR0FBM0IsQ0FBK0JMLFFBQS9CO0FBRUQsS0FSRDs7QUFVQUQsT0FBRyxvQkFBSCxFQUF5QixZQUFNOztBQUU3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QWY7QUFDQVgsYUFBT1MsUUFBUCxDQUFnQixPQUFoQjtBQUNBLHdCQUFPRCxRQUFRRSxVQUFmLEVBQTJCNUIsRUFBM0IsQ0FBOEJZLEVBQTlCLENBQWlDQyxJQUFqQztBQUVELEtBUkQ7O0FBVUFsQixPQUFHLGVBQUgsRUFBb0IsVUFBQ21DLElBQUQsRUFBVTs7QUFFNUIsVUFBTUMsVUFBVSxpQkFBaEI7O0FBRUEsVUFBTXJCLFFBQVEscUJBQVEsOEJBQUMsZUFBRCxJQUFPLE1BQU8sSUFBZCxFQUFxQixTQUFVcUIsT0FBL0IsR0FBUixFQUFxRCxFQUFFQyx1QkFBdUIsSUFBekIsRUFBckQsQ0FBZDs7QUFFQXRCLFlBQU11QixRQUFOLENBQWUsRUFBRWxDLE1BQU0sS0FBUixFQUFmOztBQUVBbUMsaUJBQVcsWUFBTTtBQUNmLDBCQUFPSCxRQUFRSCxVQUFmLEVBQTJCNUIsRUFBM0IsQ0FBOEJZLEVBQTlCLENBQWlDQyxJQUFqQztBQUNBaUI7QUFDRCxPQUhELEVBR0csR0FISDtBQUtELEtBYkQ7QUFlRCxHQWhGRDtBQWtGRCxDQWxORCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSdcbmltcG9ydCB7IHNoYWxsb3cgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgeyBzcHkgfSBmcm9tICdzaW5vbidcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IFRhc2tzIGZyb20gJy4vdGFza3MnXG5cbmRlc2NyaWJlKCd0YXNrcyBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIG9wZW4nLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnT1BFTicsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5vcGVuKFtdKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggY2xvc2UnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnQ0xPU0UnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLmNsb3NlKCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIGNsZWFyJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ0NMRUFSJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy5jbGVhcigpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3JlZHVjZXInLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIHNldCBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBvcGVuIHRhc2tzJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHt9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ09QRU4nLFxuICAgICAgICBpdGVtczpbXG4gICAgICAgICAgeyBmb286ICcxJyB9LFxuICAgICAgICAgIHsgYmFyOiAnMicgfSxcbiAgICAgICAgICB7IGJhejogJzMnIH1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IGZvbzogJzEnIH0sXG4gICAgICAgICAgeyBiYXI6ICcyJyB9LFxuICAgICAgICAgIHsgYmF6OiAnMycgfVxuICAgICAgICBdLFxuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBjbG9zZSB0YXNrcycsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBmb286ICcxJyB9LFxuICAgICAgICAgIHsgYmFyOiAnMicgfSxcbiAgICAgICAgICB7IGJhejogJzMnIH1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdDTE9TRSdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyBmb286ICcxJyB9LFxuICAgICAgICAgIHsgYmFyOiAnMicgfSxcbiAgICAgICAgICB7IGJhejogJzMnIH1cbiAgICAgICAgXSxcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGNsZWFyIHRhc2tzJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IGZvbzogJzEnIH0sXG4gICAgICAgICAgeyBiYXI6ICcyJyB9LFxuICAgICAgICAgIHsgYmF6OiAnMycgfVxuICAgICAgICBdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0NMRUFSJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2NvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCB0YXNrcyA9IHNoYWxsb3coPFRhc2tzPjxkaXYgY2xhc3NOYW1lPVwiZm9vXCIgLz48L1Rhc2tzPilcbiAgICAgIGV4cGVjdCh0YXNrcy5pcygnZGl2LnJlZnJhbWUtdGFza3MnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHRhc2tzLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChjaGlsZC5pcygnZGl2LmZvbycpKS50by5iZS50cnVlXG5cbiAgICAgIGNvbnN0IG92ZXJsYXkgPSB0YXNrcy5jaGlsZEF0KDEpLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChvdmVybGF5LmlzKCdkaXYucmVmcmFtZS10YXNrcy1vdmVybGF5JykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgbGlzdCA9IHRhc2tzLmNoaWxkQXQoMikuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KGxpc3QuaXMoJ2Rpdi5yZWZyYW1lLXRhc2tzLWxpc3QnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBjYW5jZWwgPSBsaXN0LmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChjYW5jZWwuaXMoJ2Rpdi5yZWZyYW1lLXRhc2tzLWNhbmNlbCcpKS50by5iZS50cnVlXG4gICAgICBleHBlY3QoY2FuY2VsLnRleHQoKSkudG8uZXF1YWwoJ0NhbmNlbCcpXG5cbiAgICB9KVxuXG4gICAgaXQoJ3JlbmRlciBhIGxpc3Qgb2YgaXRlbXMnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICB7IGxhYmVsOiAnRm9vJywgaGFuZGxlcjogKCkgPT4ge30gfSxcbiAgICAgICAgeyBsYWJlbDogJ0JhcicsIGhhbmRsZXI6ICgpID0+IHt9IH1cbiAgICAgIF1cblxuICAgICAgY29uc3QgdGFza3MgPSBzaGFsbG93KDxUYXNrcyBvcGVuPXsgdHJ1ZSB9IGl0ZW1zPXsgaXRlbXMgfSAvPilcbiAgICAgIGNvbnN0IGxpc3QgPSB0YXNrcy5jaGlsZEF0KDEpLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChsaXN0LmNoaWxkcmVuKCkubGVuZ3RoKS50by5lcXVhbCgzKVxuXG4gICAgICBjb25zdCBmb28gPSBsaXN0LmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChmb28ucHJvcCgnbGFiZWwnKSkudG8uZXF1YWwoJ0ZvbycpXG5cbiAgICAgIGNvbnN0IGJhciA9IGxpc3QuY2hpbGRBdCgxKVxuICAgICAgZXhwZWN0KGJhci5wcm9wKCdsYWJlbCcpKS50by5lcXVhbCgnQmFyJylcblxuICAgICAgY29uc3QgY2FuY2VsID0gbGlzdC5jaGlsZEF0KDIpXG4gICAgICBleHBlY3QoY2FuY2VsLmlzKCdkaXYucmVmcmFtZS10YXNrcy1jYW5jZWwnKSkudG8uYmUudHJ1ZVxuICAgICAgZXhwZWN0KGNhbmNlbC50ZXh0KCkpLnRvLmVxdWFsKCdDYW5jZWwnKVxuXG4gICAgfSlcblxuICAgIGl0KCdoYW5kbGVzIG9uQ2xvc2Ugb24gY2xpY2tlZCBvdmVybGF5JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBvbkNsb3NlID0gc3B5KClcbiAgICAgIGNvbnN0IHRhc2tzID0gc2hhbGxvdyg8VGFza3Mgb25DbG9zZT17IG9uQ2xvc2UgfSAvPilcbiAgICAgIGNvbnN0IG92ZXJsYXkgPSB0YXNrcy5jaGlsZEF0KDApLmNoaWxkQXQoMClcbiAgICAgIG92ZXJsYXkuc2ltdWxhdGUoJ2NsaWNrJylcbiAgICAgIGV4cGVjdChvbkNsb3NlLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgnaGFuZGxlcyBvbkNsb3NlIG9uIGNsaWNrZWQgY2FuY2VsJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBvbkNsb3NlID0gc3B5KClcbiAgICAgIGNvbnN0IHRhc2tzID0gc2hhbGxvdyg8VGFza3Mgb25DbG9zZT17IG9uQ2xvc2UgfSAvPilcbiAgICAgIGNvbnN0IGNhbmNlbCA9IHRhc2tzLmZpbmQoJ2Rpdi5yZWZyYW1lLXRhc2tzLWNhbmNlbCcpXG4gICAgICBjYW5jZWwuc2ltdWxhdGUoJ2NsaWNrJylcbiAgICAgIGV4cGVjdChvbkNsb3NlLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgnY2FsbHMgb25DbGVhcicsIChkb25lKSA9PiB7XG5cbiAgICAgIGNvbnN0IG9uQ2xlYXIgPSBzcHkoKVxuXG4gICAgICBjb25zdCB0YXNrcyA9IHNoYWxsb3coPFRhc2tzIG9wZW49eyB0cnVlIH0gb25DbGVhcj17IG9uQ2xlYXIgfSAvPiwgeyBsaWZlY3ljbGVFeHBlcmltZW50YWw6IHRydWUgfSlcblxuICAgICAgdGFza3Muc2V0UHJvcHMoeyBvcGVuOiBmYWxzZSB9KVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXhwZWN0KG9uQ2xlYXIuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuICAgICAgICBkb25lKClcbiAgICAgIH0sIDUwMClcblxuICAgIH0pXG5cbiAgfSlcblxufSlcbiJdfQ==