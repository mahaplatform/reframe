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

var _toggle_list = require('./toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('toggle_list component', function () {

  describe('actions', function () {

    it('can dispatch set', function () {

      var expected = {
        type: 'SET',
        ids: [1, 2, 3]
      };

      (0, _chai.expect)(actions.set([1, 2, 3])).to.eql(expected);
    });

    it('can dispatch toggle', function () {

      var expected = {
        type: 'TOGGLE',
        id: 1
      };

      (0, _chai.expect)(actions.toggle(1)).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        chosen: []
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can set chosen', function () {

      var state = {
        chosen: []
      };

      var action = {
        type: 'SET',
        ids: [1, 2, 3]
      };

      var expected = {
        chosen: [1, 2, 3]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can add value', function () {

      var state = {
        chosen: [1, 2]
      };

      var action = {
        type: 'TOGGLE',
        id: 3
      };

      var expected = {
        chosen: [1, 2, 3]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can remove value', function () {

      var state = {
        chosen: [1, 2, 3]
      };

      var action = {
        type: 'TOGGLE',
        id: 3
      };

      var expected = {
        chosen: [1, 2]
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var toggle_list = (0, _enzyme.shallow)(_react2.default.createElement(_toggle_list2.default, null));
      (0, _chai.expect)(toggle_list.is('div.reframe-toggle-list')).to.be.true;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJpZHMiLCJzZXQiLCJ0byIsImVxbCIsImlkIiwidG9nZ2xlIiwiY2hvc2VuIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJ0b2dnbGVfbGlzdCIsImlzIiwiYmUiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyx1QkFBVCxFQUFrQyxZQUFNOztBQUV0Q0EsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLGtCQUFILEVBQXVCLFlBQU07O0FBRTNCLFVBQU1DLFdBQVc7QUFDZkMsY0FBTSxLQURTO0FBRWZDLGFBQUssQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7QUFGVSxPQUFqQjs7QUFLQSx3QkFBT0wsUUFBUU0sR0FBUixDQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVosQ0FBUCxFQUE2QkMsRUFBN0IsQ0FBZ0NDLEdBQWhDLENBQW9DTCxRQUFwQztBQUVELEtBVEQ7O0FBV0FELE9BQUcscUJBQUgsRUFBMEIsWUFBTTs7QUFFOUIsVUFBTUMsV0FBVztBQUNmQyxjQUFNLFFBRFM7QUFFZkssWUFBSTtBQUZXLE9BQWpCOztBQUtBLHdCQUFPVCxRQUFRVSxNQUFSLENBQWUsQ0FBZixDQUFQLEVBQTBCSCxFQUExQixDQUE2QkMsR0FBN0IsQ0FBaUNMLFFBQWpDO0FBRUQsS0FURDtBQVdELEdBeEJEOztBQTBCQUYsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLHVCQUFILEVBQTRCLFlBQU07O0FBRWhDLFVBQU1DLFdBQVc7QUFDZlEsZ0JBQVE7QUFETyxPQUFqQjs7QUFJQSx3QkFBTyx1QkFBUUMsU0FBUixFQUFtQixFQUFuQixDQUFQLEVBQStCTCxFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FSRDs7QUFVQUQsT0FBRyxnQkFBSCxFQUFxQixZQUFNOztBQUV6QixVQUFNVyxRQUFRO0FBQ1pGLGdCQUFRO0FBREksT0FBZDs7QUFJQSxVQUFNRyxTQUFTO0FBQ2JWLGNBQU0sS0FETztBQUViQyxhQUFLLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBRlEsT0FBZjs7QUFLQSxVQUFNRixXQUFXO0FBQ2ZRLGdCQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBRE8sT0FBakI7O0FBSUEsd0JBQU8sdUJBQVFFLEtBQVIsRUFBZUMsTUFBZixDQUFQLEVBQStCUCxFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FqQkQ7O0FBbUJBRCxPQUFHLGVBQUgsRUFBb0IsWUFBTTs7QUFFeEIsVUFBTVcsUUFBUTtBQUNaRixnQkFBUSxDQUFDLENBQUQsRUFBRyxDQUFIO0FBREksT0FBZDs7QUFJQSxVQUFNRyxTQUFTO0FBQ2JWLGNBQU0sUUFETztBQUViSyxZQUFJO0FBRlMsT0FBZjs7QUFLQSxVQUFNTixXQUFXO0FBQ2ZRLGdCQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBRE8sT0FBakI7O0FBSUEsd0JBQU8sdUJBQVFFLEtBQVIsRUFBZUMsTUFBZixDQUFQLEVBQStCUCxFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NMLFFBQXRDO0FBRUQsS0FqQkQ7O0FBbUJBRCxPQUFHLGtCQUFILEVBQXVCLFlBQU07O0FBRTNCLFVBQU1XLFFBQVE7QUFDWkYsZ0JBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7QUFESSxPQUFkOztBQUlBLFVBQU1HLFNBQVM7QUFDYlYsY0FBTSxRQURPO0FBRWJLLFlBQUk7QUFGUyxPQUFmOztBQUtBLFVBQU1OLFdBQVc7QUFDZlEsZ0JBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBSDtBQURPLE9BQWpCOztBQUlBLHdCQUFPLHVCQUFRRSxLQUFSLEVBQWVDLE1BQWYsQ0FBUCxFQUErQlAsRUFBL0IsQ0FBa0NDLEdBQWxDLENBQXNDTCxRQUF0QztBQUVELEtBakJEO0FBbUJELEdBckVEOztBQXVFQUYsV0FBUyxXQUFULEVBQXNCLFlBQU07O0FBRTFCQyxPQUFHLDhCQUFILEVBQW1DLFlBQU07O0FBRXZDLFVBQU1hLGNBQWMscUJBQVEsOEJBQUMscUJBQUQsT0FBUixDQUFwQjtBQUNBLHdCQUFPQSxZQUFZQyxFQUFaLENBQWUseUJBQWYsQ0FBUCxFQUFrRFQsRUFBbEQsQ0FBcURVLEVBQXJELENBQXdEQyxJQUF4RDtBQUVELEtBTEQ7QUFPRCxHQVREO0FBV0QsQ0E5R0QiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgeyBzaGFsbG93IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IHsgc3B5IH0gZnJvbSAnc2lub24nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBUb2dnbGVMaXN0IGZyb20gJy4vdG9nZ2xlX2xpc3QnXG5cbmRlc2NyaWJlKCd0b2dnbGVfbGlzdCBjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgZGVzY3JpYmUoJ2FjdGlvbnMnLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIGRpc3BhdGNoIHNldCcsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdTRVQnLFxuICAgICAgICBpZHM6IFsxLDIsM11cbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuc2V0KFsxLDIsM10pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCB0b2dnbGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICAgICAgaWQ6IDFcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMudG9nZ2xlKDEpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ3JlZHVjZXInLCAoKSA9PiB7XG5cbiAgICBpdCgnY2FuIHNldCBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgY2hvc2VuOiBbXVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcih1bmRlZmluZWQsICcnKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gc2V0IGNob3NlbicsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNob3NlbjogW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnU0VUJyxcbiAgICAgICAgaWRzOiBbMSwyLDNdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjaG9zZW46IFsxLDIsM11cbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGFkZCB2YWx1ZScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGNob3NlbjogWzEsMl1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnVE9HR0xFJyxcbiAgICAgICAgaWQ6IDNcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGNob3NlbjogWzEsMiwzXVxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gcmVtb3ZlIHZhbHVlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgY2hvc2VuOiBbMSwyLDNdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgICAgIGlkOiAzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBjaG9zZW46IFsxLDJdXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ2NvbXBvbmVudCcsICgpID0+IHtcblxuICAgIGl0KCdyZW5kZXJzIHdpdGggYSBkZWZhdWx0IHN0YXRlJywgKCkgPT4ge1xuXG4gICAgICBjb25zdCB0b2dnbGVfbGlzdCA9IHNoYWxsb3coPFRvZ2dsZUxpc3QgLz4pXG4gICAgICBleHBlY3QodG9nZ2xlX2xpc3QuaXMoJ2Rpdi5yZWZyYW1lLXRvZ2dsZS1saXN0JykpLnRvLmJlLnRydWVcblxuICAgIH0pXG5cbiAgfSlcblxufSlcbiJdfQ==