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

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('search component', function () {

  describe('actions', function () {

    it('can dispatch type', function () {

      var expected = {
        type: 'QUERY',
        q: 'foo'
      };

      (0, _chai.expect)(actions.query('foo')).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        q: ''
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can query', function () {

      var state = {
        q: ''
      };

      var action = {
        type: 'QUERY',
        q: 'foo'
      };

      var expected = {
        q: 'foo'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('search component', function () {

    it('renders with a static state', function () {

      var search = (0, _enzyme.shallow)(_react2.default.createElement(_search2.default, null));
      (0, _chai.expect)(search.is('Options')).to.be.true;
    });

    it('renders with a dynamic state', function () {

      var context = {
        store: {}
      };

      var search = (0, _enzyme.shallow)(_react2.default.createElement(_search2.default, { endpoint: '/a/b/c' }));
      (0, _chai.expect)(search.is('div.reframe-search')).to.be.true;

      var header = search.childAt(0);
      (0, _chai.expect)(header.is('div.reframe-search-header')).to.be.true;

      var body = search.childAt(1);
      (0, _chai.expect)(body.is('div.reframe-search-body')).to.be.true;
    });
  });

  describe('dynamic component', function () {

    it('does not render without records', function () {

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, null));
      (0, _chai.expect)(dynamic.type()).to.be.null;
    });

    it('does renders options without records', function () {

      var records = [{ id: 1, name: 'foo' }];

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, { records: records }));
      (0, _chai.expect)(dynamic.is('Options')).to.be.true;
    });
  });

  describe('options component', function () {

    it('does not render without records', function () {

      var dynamic = (0, _enzyme.shallow)(_react2.default.createElement(_dynamic2.default, null));
      (0, _chai.expect)(dynamic.type()).to.be.null;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJxIiwicXVlcnkiLCJ0byIsImVxbCIsInVuZGVmaW5lZCIsInN0YXRlIiwiYWN0aW9uIiwic2VhcmNoIiwiaXMiLCJiZSIsInRydWUiLCJjb250ZXh0Iiwic3RvcmUiLCJoZWFkZXIiLCJjaGlsZEF0IiwiYm9keSIsImR5bmFtaWMiLCJudWxsIiwicmVjb3JkcyIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxPOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBQyxTQUFTLGtCQUFULEVBQTZCLFlBQU07O0FBRWpDQSxXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsbUJBQUgsRUFBd0IsWUFBTTs7QUFFNUIsVUFBTUMsV0FBVztBQUNmQyxjQUFNLE9BRFM7QUFFZkMsV0FBRztBQUZZLE9BQWpCOztBQUtBLHdCQUFPTCxRQUFRTSxLQUFSLENBQWMsS0FBZCxDQUFQLEVBQTZCQyxFQUE3QixDQUFnQ0MsR0FBaEMsQ0FBb0NMLFFBQXBDO0FBRUQsS0FURDtBQVdELEdBYkQ7O0FBZUFGLFdBQVMsU0FBVCxFQUFvQixZQUFNOztBQUV4QkMsT0FBRyx1QkFBSCxFQUE0QixZQUFNOztBQUVoQyxVQUFNQyxXQUFXO0FBQ2ZFLFdBQUc7QUFEWSxPQUFqQjs7QUFJQSx3QkFBTyx1QkFBUUksU0FBUixFQUFtQixFQUFuQixDQUFQLEVBQStCRixFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FSRDs7QUFVQUQsT0FBRyxXQUFILEVBQWdCLFlBQU07O0FBRXBCLFVBQU1RLFFBQVE7QUFDWkwsV0FBRztBQURTLE9BQWQ7O0FBSUEsVUFBTU0sU0FBUztBQUNiUCxjQUFNLE9BRE87QUFFYkMsV0FBRztBQUZVLE9BQWY7O0FBS0EsVUFBTUYsV0FBVztBQUNmRSxXQUFHO0FBRFksT0FBakI7O0FBSUEsd0JBQU8sdUJBQVFLLEtBQVIsRUFBZUMsTUFBZixDQUFQLEVBQStCSixFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FqQkQ7QUFtQkQsR0EvQkQ7O0FBaUNBRixXQUFTLGtCQUFULEVBQTZCLFlBQU07O0FBRWpDQyxPQUFHLDZCQUFILEVBQWtDLFlBQU07O0FBRXRDLFVBQU1VLFNBQVMscUJBQVEsOEJBQUMsZ0JBQUQsT0FBUixDQUFmO0FBQ0Esd0JBQU9BLE9BQU9DLEVBQVAsQ0FBVSxTQUFWLENBQVAsRUFBNkJOLEVBQTdCLENBQWdDTyxFQUFoQyxDQUFtQ0MsSUFBbkM7QUFFRCxLQUxEOztBQU9BYixPQUFHLDhCQUFILEVBQW1DLFlBQU07O0FBRXZDLFVBQU1jLFVBQVU7QUFDZEMsZUFBTztBQURPLE9BQWhCOztBQUlBLFVBQU1MLFNBQVMscUJBQVEsOEJBQUMsZ0JBQUQsSUFBUSxVQUFTLFFBQWpCLEdBQVIsQ0FBZjtBQUNBLHdCQUFPQSxPQUFPQyxFQUFQLENBQVUsb0JBQVYsQ0FBUCxFQUF3Q04sRUFBeEMsQ0FBMkNPLEVBQTNDLENBQThDQyxJQUE5Qzs7QUFFQSxVQUFNRyxTQUFTTixPQUFPTyxPQUFQLENBQWUsQ0FBZixDQUFmO0FBQ0Esd0JBQU9ELE9BQU9MLEVBQVAsQ0FBVSwyQkFBVixDQUFQLEVBQStDTixFQUEvQyxDQUFrRE8sRUFBbEQsQ0FBcURDLElBQXJEOztBQUVBLFVBQU1LLE9BQU9SLE9BQU9PLE9BQVAsQ0FBZSxDQUFmLENBQWI7QUFDQSx3QkFBT0MsS0FBS1AsRUFBTCxDQUFRLHlCQUFSLENBQVAsRUFBMkNOLEVBQTNDLENBQThDTyxFQUE5QyxDQUFpREMsSUFBakQ7QUFFRCxLQWZEO0FBaUJELEdBMUJEOztBQTRCQWQsV0FBUyxtQkFBVCxFQUE4QixZQUFNOztBQUVsQ0MsT0FBRyxpQ0FBSCxFQUFzQyxZQUFNOztBQUUxQyxVQUFNbUIsVUFBVSxxQkFBUSw4QkFBQyxpQkFBRCxPQUFSLENBQWhCO0FBQ0Esd0JBQU9BLFFBQVFqQixJQUFSLEVBQVAsRUFBdUJHLEVBQXZCLENBQTBCTyxFQUExQixDQUE2QlEsSUFBN0I7QUFFRCxLQUxEOztBQU9BcEIsT0FBRyxzQ0FBSCxFQUEyQyxZQUFNOztBQUUvQyxVQUFNcUIsVUFBVSxDQUNkLEVBQUVDLElBQUksQ0FBTixFQUFTQyxNQUFNLEtBQWYsRUFEYyxDQUFoQjs7QUFJQSxVQUFNSixVQUFVLHFCQUFRLDhCQUFDLGlCQUFELElBQVMsU0FBVUUsT0FBbkIsR0FBUixDQUFoQjtBQUNBLHdCQUFPRixRQUFRUixFQUFSLENBQVcsU0FBWCxDQUFQLEVBQThCTixFQUE5QixDQUFpQ08sRUFBakMsQ0FBb0NDLElBQXBDO0FBRUQsS0FURDtBQVdELEdBcEJEOztBQXNCQWQsV0FBUyxtQkFBVCxFQUE4QixZQUFNOztBQUVsQ0MsT0FBRyxpQ0FBSCxFQUFzQyxZQUFNOztBQUUxQyxVQUFNbUIsVUFBVSxxQkFBUSw4QkFBQyxpQkFBRCxPQUFSLENBQWhCO0FBQ0Esd0JBQU9BLFFBQVFqQixJQUFSLEVBQVAsRUFBdUJHLEVBQXZCLENBQTBCTyxFQUExQixDQUE2QlEsSUFBN0I7QUFFRCxLQUxEO0FBT0QsR0FURDtBQVdELENBL0dEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCB7IHNweSB9IGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJ1xuaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9keW5hbWljJ1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuXG5kZXNjcmliZSgnc2VhcmNoIGNvbXBvbmVudCcsICgpID0+IHtcblxuICBkZXNjcmliZSgnYWN0aW9ucycsICgpID0+IHtcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggdHlwZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdRVUVSWScsXG4gICAgICAgIHE6ICdmb28nXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChhY3Rpb25zLnF1ZXJ5KCdmb28nKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdyZWR1Y2VyJywgKCkgPT4ge1xuXG4gICAgaXQoJ2NhbiBzZXQgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHE6ICcnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHVuZGVmaW5lZCwgJycpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBxdWVyeScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIHE6ICcnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ1FVRVJZJyxcbiAgICAgICAgcTogJ2ZvbydcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHE6ICdmb28nXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3NlYXJjaCBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgc3RhdGljIHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzZWFyY2ggPSBzaGFsbG93KDxTZWFyY2ggLz4pXG4gICAgICBleHBlY3Qoc2VhcmNoLmlzKCdPcHRpb25zJykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZHluYW1pYyBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgc3RvcmU6IHt9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlYXJjaCA9IHNoYWxsb3coPFNlYXJjaCBlbmRwb2ludD1cIi9hL2IvY1wiIC8+KVxuICAgICAgZXhwZWN0KHNlYXJjaC5pcygnZGl2LnJlZnJhbWUtc2VhcmNoJykpLnRvLmJlLnRydWVcblxuICAgICAgY29uc3QgaGVhZGVyID0gc2VhcmNoLmNoaWxkQXQoMClcbiAgICAgIGV4cGVjdChoZWFkZXIuaXMoJ2Rpdi5yZWZyYW1lLXNlYXJjaC1oZWFkZXInKSkudG8uYmUudHJ1ZVxuXG4gICAgICBjb25zdCBib2R5ID0gc2VhcmNoLmNoaWxkQXQoMSlcbiAgICAgIGV4cGVjdChib2R5LmlzKCdkaXYucmVmcmFtZS1zZWFyY2gtYm9keScpKS50by5iZS50cnVlXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2R5bmFtaWMgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgaXQoJ2RvZXMgbm90IHJlbmRlciB3aXRob3V0IHJlY29yZHMnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGR5bmFtaWMgPSBzaGFsbG93KDxEeW5hbWljIC8+KVxuICAgICAgZXhwZWN0KGR5bmFtaWMudHlwZSgpKS50by5iZS5udWxsXG5cbiAgICB9KVxuXG4gICAgaXQoJ2RvZXMgcmVuZGVycyBvcHRpb25zIHdpdGhvdXQgcmVjb3JkcycsICgpID0+IHtcblxuICAgICAgY29uc3QgcmVjb3JkcyA9IFtcbiAgICAgICAgeyBpZDogMSwgbmFtZTogJ2ZvbycgfVxuICAgICAgXVxuXG4gICAgICBjb25zdCBkeW5hbWljID0gc2hhbGxvdyg8RHluYW1pYyByZWNvcmRzPXsgcmVjb3JkcyB9IC8+KVxuICAgICAgZXhwZWN0KGR5bmFtaWMuaXMoJ09wdGlvbnMnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdvcHRpb25zIGNvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdkb2VzIG5vdCByZW5kZXIgd2l0aG91dCByZWNvcmRzJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBkeW5hbWljID0gc2hhbGxvdyg8RHluYW1pYyAvPilcbiAgICAgIGV4cGVjdChkeW5hbWljLnR5cGUoKSkudG8uYmUubnVsbFxuXG4gICAgfSlcbiAgICBcbiAgfSlcblxufSlcbiJdfQ==