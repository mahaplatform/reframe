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

var _searchbox = require('./searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('searchbox component', function () {

  describe('actions', function () {

    it('can dispatch type', function () {

      var expected = {
        type: 'TYPE',
        q: 'foo'
      };

      (0, _chai.expect)(actions.type('foo')).to.eql(expected);
    });

    it('can dispatch abort', function () {

      var expected = {
        type: 'ABORT'
      };

      (0, _chai.expect)(actions.abort()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can type', function () {

      var state = {
        q: ''
      };

      var action = {
        type: 'TYPE',
        q: 'foo'
      };

      var expected = {
        q: 'foo'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can abort', function () {

      var state = {
        q: 'foo'
      };

      var action = {
        type: 'ABORT'
      };

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, null));
      (0, _chai.expect)(searchbox.is('div.reframe-searchbox')).to.be.true;
      (0, _chai.expect)(searchbox.children().length).to.equal(2);

      var searchboxSearchIconWrapper = searchbox.childAt(0);
      (0, _chai.expect)(searchboxSearchIconWrapper.is('div.reframe-searchbox-icon')).to.be.true;

      var searchboxSearchIcon = searchboxSearchIconWrapper.childAt(0);
      (0, _chai.expect)(searchboxSearchIcon.is('i.search.icon')).to.be.true;

      var searchboxInputWrapper = searchbox.childAt(1);
      (0, _chai.expect)(searchboxInputWrapper.is('div.reframe-searchbox-input')).to.be.true;

      var searchboxInput = searchboxInputWrapper.childAt(0);
      (0, _chai.expect)(searchboxInput.is('div.ui.input')).to.be.true;

      var input = searchboxInput.childAt(0);
      (0, _chai.expect)(input.is('input[type="text"]')).to.be.true;
    });

    it('renders with a remove icon', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { q: 'foo' }));
      var searchboxRemoveIconWrapper = searchbox.childAt(2);
      (0, _chai.expect)(searchboxRemoveIconWrapper.is('div.reframe-searchbox-icon')).to.be.true;

      var searchboxRemoveIcon = searchboxRemoveIconWrapper.childAt(0);
      (0, _chai.expect)(searchboxRemoveIcon.is('i.remove.circle.icon')).to.be.true;
    });

    it('renders with value', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { q: 'foo' }));
      (0, _chai.expect)(searchbox.childAt(1).childAt(0).childAt(0).prop('value')).to.equal('foo');
    });

    it('renders with custom prompt', function () {

      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { prompt: 'foo' }));
      (0, _chai.expect)(searchbox.childAt(1).childAt(0).childAt(0).prop('placeholder')).to.equal('foo');
    });

    it('handles onAbort', function () {

      var onAbort = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onAbort: onAbort, q: 'foo' }));
      searchbox.childAt(2).simulate('click');
      (0, _chai.expect)(onAbort.calledOnce).to.be.true;
    });

    it('handles onType', function () {

      var onType = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onType: onType }));
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } });
      (0, _chai.expect)(onType.calledOnce).to.be.true;
      (0, _chai.expect)(onType.calledWith('foo')).to.be.true;
    });

    it('handles onChange', function () {

      var onChange = (0, _sinon.spy)();
      var searchbox = (0, _enzyme.shallow)(_react2.default.createElement(_searchbox2.default, { onChange: onChange }));
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } });
      (0, _chai.expect)(onChange.calledOnce).to.be.true;
      (0, _chai.expect)(onChange.calledWith('foo')).to.be.true;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJxIiwidG8iLCJlcWwiLCJhYm9ydCIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwic2VhcmNoYm94IiwiaXMiLCJiZSIsInRydWUiLCJjaGlsZHJlbiIsImxlbmd0aCIsImVxdWFsIiwic2VhcmNoYm94U2VhcmNoSWNvbldyYXBwZXIiLCJjaGlsZEF0Iiwic2VhcmNoYm94U2VhcmNoSWNvbiIsInNlYXJjaGJveElucHV0V3JhcHBlciIsInNlYXJjaGJveElucHV0IiwiaW5wdXQiLCJzZWFyY2hib3hSZW1vdmVJY29uV3JhcHBlciIsInNlYXJjaGJveFJlbW92ZUljb24iLCJwcm9wIiwib25BYm9ydCIsInNpbXVsYXRlIiwiY2FsbGVkT25jZSIsIm9uVHlwZSIsInRhcmdldCIsInZhbHVlIiwiY2FsbGVkV2l0aCIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyxxQkFBVCxFQUFnQyxZQUFNOztBQUVwQ0EsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLG1CQUFILEVBQXdCLFlBQU07O0FBRTVCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTSxNQURTO0FBRWZDLFdBQUc7QUFGWSxPQUFqQjs7QUFLQSx3QkFBT0wsUUFBUUksSUFBUixDQUFhLEtBQWIsQ0FBUCxFQUE0QkUsRUFBNUIsQ0FBK0JDLEdBQS9CLENBQW1DSixRQUFuQztBQUVELEtBVEQ7O0FBV0FELE9BQUcsb0JBQUgsRUFBeUIsWUFBTTs7QUFFN0IsVUFBTUMsV0FBVztBQUNmQyxjQUFNO0FBRFMsT0FBakI7O0FBSUEsd0JBQU9KLFFBQVFRLEtBQVIsRUFBUCxFQUF3QkYsRUFBeEIsQ0FBMkJDLEdBQTNCLENBQStCSixRQUEvQjtBQUVELEtB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ekM7QUFFRCxLQVJEO0FBVUQsR0EvRUQ7QUFpRkQsQ0EvSkQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IHsgc3B5IH0gZnJvbSAnc2lub24nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBTZWFyY2hib3ggZnJvbSAnLi9zZWFyY2hib3gnXG5cbmRlc2NyaWJlKCdzZWFyY2hib3ggY29tcG9uZW50JywgKCkgPT4ge1xuXG4gIGRlc2NyaWJlKCdhY3Rpb25zJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCB0eXBlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgdHlwZTogJ1RZUEUnLFxuICAgICAgICBxOiAnZm9vJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QoYWN0aW9ucy50eXBlKCdmb28nKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggYWJvcnQnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnQUJPUlQnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLmFib3J0KCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncmVkdWNlcicsICgpID0+IHtcblxuICAgIGl0KCdjYW4gc2V0IGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBxOiAnJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcih1bmRlZmluZWQsICcnKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gdHlwZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHE6ICcnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ1RZUEUnLFxuICAgICAgICBxOiAnZm9vJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgcTogJ2ZvbydcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGFib3J0JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgcTogJ2ZvbydcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnQUJPUlQnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBxOiAnJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc2VhcmNoYm94ID0gc2hhbGxvdyg8U2VhcmNoYm94IC8+KVxuICAgICAgZXhwZWN0KHNlYXJjaGJveC5pcygnZGl2LnJlZnJhbWUtc2VhcmNoYm94JykpLnRvLmJlLnRydWVcbiAgICAgIGV4cGVjdChzZWFyY2hib3guY2hpbGRyZW4oKS5sZW5ndGgpLnRvLmVxdWFsKDIpXG5cbiAgICAgIGNvbnN0IHNlYXJjaGJveFNlYXJjaEljb25XcmFwcGVyID0gc2VhcmNoYm94LmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChzZWFyY2hib3hTZWFyY2hJY29uV3JhcHBlci5pcygnZGl2LnJlZnJhbWUtc2VhcmNoYm94LWljb24nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBzZWFyY2hib3hTZWFyY2hJY29uID0gc2VhcmNoYm94U2VhcmNoSWNvbldyYXBwZXIuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHNlYXJjaGJveFNlYXJjaEljb24uaXMoJ2kuc2VhcmNoLmljb24nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBzZWFyY2hib3hJbnB1dFdyYXBwZXIgPSBzZWFyY2hib3guY2hpbGRBdCgxKVxuICAgICAgZXhwZWN0KHNlYXJjaGJveElucHV0V3JhcHBlci5pcygnZGl2LnJlZnJhbWUtc2VhcmNoYm94LWlucHV0JykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3Qgc2VhcmNoYm94SW5wdXQgPSBzZWFyY2hib3hJbnB1dFdyYXBwZXIuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHNlYXJjaGJveElucHV0LmlzKCdkaXYudWkuaW5wdXQnKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBpbnB1dCA9IHNlYXJjaGJveElucHV0LmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChpbnB1dC5pcygnaW5wdXRbdHlwZT1cInRleHRcIl0nKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSByZW1vdmUgaWNvbicsICgpID0+IHtcblxuICAgICAgY29uc3Qgc2VhcmNoYm94ID0gc2hhbGxvdyg8U2VhcmNoYm94IHE9XCJmb29cIiAvPilcbiAgICAgIGNvbnN0IHNlYXJjaGJveFJlbW92ZUljb25XcmFwcGVyID0gc2VhcmNoYm94LmNoaWxkQXQoMilcbiAgICAgIGV4cGVjdChzZWFyY2hib3hSZW1vdmVJY29uV3JhcHBlci5pcygnZGl2LnJlZnJhbWUtc2VhcmNoYm94LWljb24nKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBzZWFyY2hib3hSZW1vdmVJY29uID0gc2VhcmNoYm94UmVtb3ZlSWNvbldyYXBwZXIuY2hpbGRBdCgwKVxuICAgICAgZXhwZWN0KHNlYXJjaGJveFJlbW92ZUljb24uaXMoJ2kucmVtb3ZlLmNpcmNsZS5pY29uJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIHZhbHVlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzZWFyY2hib3ggPSBzaGFsbG93KDxTZWFyY2hib3ggcT1cImZvb1wiIC8+KVxuICAgICAgZXhwZWN0KHNlYXJjaGJveC5jaGlsZEF0KDEpLmNoaWxkQXQoMCkuY2hpbGRBdCgwKS5wcm9wKCd2YWx1ZScpKS50by5lcXVhbCgnZm9vJylcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGN1c3RvbSBwcm9tcHQnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHNlYXJjaGJveCA9IHNoYWxsb3coPFNlYXJjaGJveCBwcm9tcHQ9XCJmb29cIiAvPilcbiAgICAgIGV4cGVjdChzZWFyY2hib3guY2hpbGRBdCgxKS5jaGlsZEF0KDApLmNoaWxkQXQoMCkucHJvcCgncGxhY2Vob2xkZXInKSkudG8uZXF1YWwoJ2ZvbycpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2hhbmRsZXMgb25BYm9ydCcsICgpID0+IHtcblxuICAgICAgY29uc3Qgb25BYm9ydCA9IHNweSgpXG4gICAgICBjb25zdCBzZWFyY2hib3ggPSBzaGFsbG93KDxTZWFyY2hib3ggb25BYm9ydD17IG9uQWJvcnQgfSBxPVwiZm9vXCIgLz4pXG4gICAgICBzZWFyY2hib3guY2hpbGRBdCgyKS5zaW11bGF0ZSgnY2xpY2snKVxuICAgICAgZXhwZWN0KG9uQWJvcnQuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdoYW5kbGVzIG9uVHlwZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgb25UeXBlID0gc3B5KClcbiAgICAgIGNvbnN0IHNlYXJjaGJveCA9IHNoYWxsb3coPFNlYXJjaGJveCBvblR5cGU9eyBvblR5cGUgfSAvPilcbiAgICAgIHNlYXJjaGJveC5jaGlsZEF0KDEpLmNoaWxkQXQoMCkuY2hpbGRBdCgwKS5zaW11bGF0ZSgnY2hhbmdlJywgeyB0YXJnZXQ6IHsgdmFsdWU6ICdmb28nIH0gfSlcbiAgICAgIGV4cGVjdChvblR5cGUuY2FsbGVkT25jZSkudG8uYmUudHJ1ZVxuICAgICAgZXhwZWN0KG9uVHlwZS5jYWxsZWRXaXRoKCdmb28nKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICAgIGl0KCdoYW5kbGVzIG9uQ2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBvbkNoYW5nZSA9IHNweSgpXG4gICAgICBjb25zdCBzZWFyY2hib3ggPSBzaGFsbG93KDxTZWFyY2hib3ggb25DaGFuZ2U9eyBvbkNoYW5nZSB9IC8+KVxuICAgICAgc2VhcmNoYm94LmNoaWxkQXQoMSkuY2hpbGRBdCgwKS5jaGlsZEF0KDApLnNpbXVsYXRlKCdjaGFuZ2UnLCB7IHRhcmdldDogeyB2YWx1ZTogJ2ZvbycgfSB9KVxuICAgICAgZXhwZWN0KG9uQ2hhbmdlLmNhbGxlZE9uY2UpLnRvLmJlLnRydWVcbiAgICAgIGV4cGVjdChvbkNoYW5nZS5jYWxsZWRXaXRoKCdmb28nKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICB9KVxuXG59KVxuIl19