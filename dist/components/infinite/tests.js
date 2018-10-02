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

var _infinite = require('./infinite');

var _infinite2 = _interopRequireDefault(_infinite);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('infinite component', function () {

  describe('actions', function () {

    it('can dispatch fetchDelay', function () {

      var expected = {
        type: 'FETCH_DELAY'
      };

      (0, _chai.expect)(actions.fetchDelay()).to.eql(expected);
    });

    it('can dispatch fetchTimeout', function () {

      var expected = {
        type: 'FETCH_TIMEOUT'
      };

      (0, _chai.expect)(actions.fetchTimeout()).to.eql(expected);
    });
  });

  describe('reducer', function () {

    it('can set default state', function () {

      var expected = {
        all: null,
        records: null,
        request_id: null,
        status: 'pending',
        total: null
      };

      (0, _chai.expect)((0, _reducer2.default)(undefined, '')).to.eql(expected);
    });

    it('can fetchRequest', function () {

      var state = {};

      var action = {
        type: 'FETCH_REQUEST',
        request_id: '4gik'
      };

      var expected = {
        request_id: '4gik',
        status: 'loading'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchSuccess with mismatched request_ids', function () {

      var state = {
        request_id: 'ab12'
      };

      var action = {
        type: 'FETCH_SUCCESS',
        request_id: '4gik'
      };

      var expected = {
        request_id: 'ab12'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchSuccess with non loading status', function () {

      var state = {
        status: 'loaded'
      };

      var action = {
        type: 'FETCH_SUCCESS'
      };

      var expected = {
        status: 'loaded'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchSuccess with first page of data', function () {

      var state = {
        status: 'loading',
        request_id: 'd4gf',
        records: []
      };

      var action = {
        type: 'FETCH_SUCCESS',
        request_id: 'd4gf',
        result: {
          data: [{ foo: 1 }],
          pagination: {
            all: 5,
            skip: 0,
            total: 3
          }
        }
      };

      var expected = {
        all: 5,
        records: [{ foo: 1 }],
        request_id: null,
        status: 'loaded',
        total: 3
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchSuccess with second page of data', function () {

      var state = {
        all: 5,
        records: [{ foo: 1 }],
        request_id: 's7h5',
        status: 'loading',
        total: 3
      };

      var action = {
        type: 'FETCH_SUCCESS',
        request_id: 's7h5',
        result: {
          data: [{ foo: 2 }],
          pagination: {
            all: 5,
            skip: 1,
            total: 3
          }
        }
      };

      var expected = {
        all: 5,
        records: [{ foo: 1 }, { foo: 2 }],
        request_id: null,
        status: 'loaded',
        total: 3
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchSuccess with last page of data', function () {

      var state = {
        all: 5,
        records: [{ foo: 1 }, { foo: 2 }],
        request_id: 'b1g5',
        status: 'loading',
        total: 3
      };

      var action = {
        type: 'FETCH_SUCCESS',
        request_id: 'b1g5',
        result: {
          data: [{ foo: 3 }],
          pagination: {
            all: 5,
            skip: 2,
            total: 3
          }
        }
      };

      var expected = {
        all: 5,
        records: [{ foo: 1 }, { foo: 2 }, { foo: 3 }],
        request_id: null,
        status: 'completed',
        total: 3
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchFailure', function () {

      var state = {};

      var action = {
        type: 'FETCH_FAILURE'
      };

      var expected = {
        status: 'failed'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchDelay', function () {

      var state = {};

      var action = {
        type: 'FETCH_DELAY'
      };

      var expected = {
        status: 'delayed'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });

    it('can fetchTimeout', function () {

      var state = {};

      var action = {
        type: 'FETCH_TIMEOUT'
      };

      var expected = {
        status: 'timeout'
      };

      (0, _chai.expect)((0, _reducer2.default)(state, action)).to.eql(expected);
    });
  });

  describe('component', function () {

    it('renders with a default state', function () {

      var infinite = (0, _enzyme.shallow)(_react2.default.createElement(_infinite2.default, null));
      (0, _chai.expect)(infinite.is('div.reframe-infinite')).to.be.true;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc2NyaWJlIiwiaXQiLCJleHBlY3RlZCIsInR5cGUiLCJmZXRjaERlbGF5IiwidG8iLCJlcWwiLCJmZXRjaFRpbWVvdXQiLCJhbGwiLCJyZWNvcmRzIiwicmVxdWVzdF9pZCIsInN0YXR1cyIsInRvdGFsIiwidW5kZWZpbmVkIiwic3RhdGUiLCJhY3Rpb24iLCJyZXN1bHQiLCJkYXRhIiwiZm9vIiwicGFnaW5hdGlvbiIsInNraXAiLCJpbmZpbml0ZSIsImlzIiwiYmUiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUMsU0FBUyxvQkFBVCxFQUErQixZQUFNOztBQUVuQ0EsV0FBUyxTQUFULEVBQW9CLFlBQU07O0FBRXhCQyxPQUFHLHlCQUFILEVBQThCLFlBQU07O0FBRWxDLFVBQU1DLFdBQVc7QUFDZkMsY0FBTTtBQURTLE9BQWpCOztBQUlBLHdCQUFPSixRQUFRSyxVQUFSLEVBQVAsRUFBNkJDLEVBQTdCLENBQWdDQyxHQUFoQyxDQUFvQ0osUUFBcEM7QUFFRCxLQVJEOztBQVVBRCxPQUFHLDJCQUFILEVBQWdDLFlBQU07O0FBRXBDLFVBQU1DLFdBQVc7QUFDZkMsY0FBTTtBQURTLE9BQWpCOztBQUlBLHdCQUFPSixRQUFRUSxZQUFSLEVBQVAsRUFBK0JGLEVBQS9CLENBQWtDQyxHQUFsQyxDQUFzQ0osUUFBdEM7QUFFRCxLQVJEO0FBVUQsR0F0QkQ7O0FBd0JBRixXQUFTLFNBQVQsRUFBb0IsWUFBTTs7QUFFeEJDLE9BQUcsdUJBQUgsRUFBNEIsWUFBTTs7QUFFaEMsVUFBTUMsV0FBVztBQUNmTSxhQUFLLElBRFU7QUFFZkMsaUJBQVMsSUFGTTtBQUdmQyxvQkFBWSxJQUhHO0FBSWZDLGdCQUFRLFNBSk87QUFLZkMsZUFBTztBQUxRLE9BQWpCOztBQVFBLHdCQUFPLHVCQUFRQyxTQUFS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QUFPLHVCQUFRRyxLQUFSLEVBQWVDLE1BQWYsQ0FBUCxFQUErQlYsRUFBL0IsQ0FBa0NDLEdBQWxDLENBQXNDSixRQUF0QztBQUVELEtBZEQ7O0FBZ0JBRCxPQUFHLGdCQUFILEVBQXFCLFlBQU07O0FBRXpCLFVBQU1hLFFBQVEsRUFBZDs7QUFFQSxVQUFNQyxTQUFTO0FBQ2JaLGNBQU07QUFETyxPQUFmOztBQUlBLFVBQU1ELFdBQVc7QUFDZlMsZ0JBQVE7QUFETyxPQUFqQjs7QUFJQSx3QkFBTyx1QkFBUUcsS0FBUixFQUFlQyxNQUFmLENBQVAsRUFBK0JWLEVBQS9CLENBQWtDQyxHQUFsQyxDQUFzQ0osUUFBdEM7QUFFRCxLQWREOztBQWdCQUQsT0FBRyxrQkFBSCxFQUF1QixZQUFNOztBQUUzQixVQUFNYSxRQUFRLEVBQWQ7O0FBRUEsVUFBTUMsU0FBUztBQUNiWixjQUFNO0FBRE8sT0FBZjs7QUFJQSxVQUFNRCxXQUFXO0FBQ2ZTLGdCQUFRO0FBRE8sT0FBakI7O0FBSUEsd0JBQU8sdUJBQVFHLEtBQVIsRUFBZUMsTUFBZixDQUFQLEVBQStCVixFQUEvQixDQUFrQ0MsR0FBbEMsQ0FBc0NKLFFBQXRDO0FBRUQsS0FkRDtBQWdCRCxHQWxQRDs7QUFvUEFGLFdBQVMsV0FBVCxFQUFzQixZQUFNOztBQUUxQkMsT0FBRyw4QkFBSCxFQUFtQyxZQUFNOztBQUV2QyxVQUFNb0IsV0FBVyxxQkFBUSw4QkFBQyxrQkFBRCxPQUFSLENBQWpCO0FBQ0Esd0JBQU9BLFNBQVNDLEVBQVQsQ0FBWSxzQkFBWixDQUFQLEVBQTRDakIsRUFBNUMsQ0FBK0NrQixFQUEvQyxDQUFrREMsSUFBbEQ7QUFFRCxLQUxEO0FBT0QsR0FURDtBQVdELENBelJEIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSdcbmltcG9ydCB7IHNweSB9IGZyb20gJ3Npbm9uJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgSW5maW5pdGUgZnJvbSAnLi9pbmZpbml0ZSdcblxuZGVzY3JpYmUoJ2luZmluaXRlIGNvbXBvbmVudCcsICgpID0+IHtcblxuICBkZXNjcmliZSgnYWN0aW9ucycsICgpID0+IHtcblxuICAgIGl0KCdjYW4gZGlzcGF0Y2ggZmV0Y2hEZWxheScsICgpID0+IHtcblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHR5cGU6ICdGRVRDSF9ERUxBWSdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuZmV0Y2hEZWxheSgpKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBkaXNwYXRjaCBmZXRjaFRpbWVvdXQnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICB0eXBlOiAnRkVUQ0hfVElNRU9VVCdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KGFjdGlvbnMuZmV0Y2hUaW1lb3V0KCkpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgfSlcblxuICBkZXNjcmliZSgncmVkdWNlcicsICgpID0+IHtcblxuICAgIGl0KCdjYW4gc2V0IGRlZmF1bHQgc3RhdGUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBhbGw6IG51bGwsXG4gICAgICAgIHJlY29yZHM6IG51bGwsXG4gICAgICAgIHJlcXVlc3RfaWQ6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgICB0b3RhbDogbnVsbFxuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcih1bmRlZmluZWQsICcnKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZmV0Y2hSZXF1ZXN0JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHt9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0ZFVENIX1JFUVVFU1QnLFxuICAgICAgICByZXF1ZXN0X2lkOiAnNGdpaydcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHJlcXVlc3RfaWQ6ICc0Z2lrJyxcbiAgICAgICAgc3RhdHVzOiAnbG9hZGluZydcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGZldGNoU3VjY2VzcyB3aXRoIG1pc21hdGNoZWQgcmVxdWVzdF9pZHMnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICByZXF1ZXN0X2lkOiAnYWIxMidcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnRkVUQ0hfU1VDQ0VTUycsXG4gICAgICAgIHJlcXVlc3RfaWQ6ICc0Z2lrJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgcmVxdWVzdF9pZDogJ2FiMTInXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmZXRjaFN1Y2Nlc3Mgd2l0aCBub24gbG9hZGluZyBzdGF0dXMnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0ZFVENIX1NVQ0NFU1MnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmZXRjaFN1Y2Nlc3Mgd2l0aCBmaXJzdCBwYWdlIG9mIGRhdGEnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcbiAgICAgICAgcmVxdWVzdF9pZDogJ2Q0Z2YnLFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgcmVxdWVzdF9pZDogJ2Q0Z2YnLFxuICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7IGZvbzogMSB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBhbGw6IDUsXG4gICAgICAgICAgICBza2lwOiAwLFxuICAgICAgICAgICAgdG90YWw6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGFsbDogNSxcbiAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgIHsgZm9vOiAxIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVxdWVzdF9pZDogbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnbG9hZGVkJyxcbiAgICAgICAgdG90YWw6IDNcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGZldGNoU3VjY2VzcyB3aXRoIHNlY29uZCBwYWdlIG9mIGRhdGEnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBhbGw6IDUsXG4gICAgICAgIHJlY29yZHM6IFtcbiAgICAgICAgICB7IGZvbzogMSB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVlc3RfaWQ6ICdzN2g1JyxcbiAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXG4gICAgICAgIHRvdGFsOiAzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0ZFVENIX1NVQ0NFU1MnLFxuICAgICAgICByZXF1ZXN0X2lkOiAnczdoNScsXG4gICAgICAgIHJlc3VsdDoge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHsgZm9vOiAyIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGFsbDogNSxcbiAgICAgICAgICAgIHNraXA6IDEsXG4gICAgICAgICAgICB0b3RhbDogM1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgYWxsOiA1LFxuICAgICAgICByZWNvcmRzOiBbXG4gICAgICAgICAgeyBmb286IDEgfSxcbiAgICAgICAgICB7IGZvbzogMiB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVlc3RfaWQ6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ2xvYWRlZCcsXG4gICAgICAgIHRvdGFsOiAzXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmZXRjaFN1Y2Nlc3Mgd2l0aCBsYXN0IHBhZ2Ugb2YgZGF0YScsICgpID0+IHtcblxuICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGFsbDogNSxcbiAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgIHsgZm9vOiAxIH0sXG4gICAgICAgICAgeyBmb286IDIgfVxuICAgICAgICBdLFxuICAgICAgICByZXF1ZXN0X2lkOiAnYjFnNScsXG4gICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxuICAgICAgICB0b3RhbDogM1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICAgIHR5cGU6ICdGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgcmVxdWVzdF9pZDogJ2IxZzUnLFxuICAgICAgICByZXN1bHQ6IHtcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7IGZvbzogMyB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBhbGw6IDUsXG4gICAgICAgICAgICBza2lwOiAyLFxuICAgICAgICAgICAgdG90YWw6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIGFsbDogNSxcbiAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgIHsgZm9vOiAxIH0sXG4gICAgICAgICAgeyBmb286IDIgfSxcbiAgICAgICAgICB7IGZvbzogMyB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVlc3RfaWQ6IG51bGwsXG4gICAgICAgIHN0YXR1czogJ2NvbXBsZXRlZCcsXG4gICAgICAgIHRvdGFsOiAzXG4gICAgICB9XG5cbiAgICAgIGV4cGVjdChyZWR1Y2VyKHN0YXRlLCBhY3Rpb24pKS50by5lcWwoZXhwZWN0ZWQpXG5cbiAgICB9KVxuXG4gICAgaXQoJ2NhbiBmZXRjaEZhaWx1cmUnLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge31cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnRkVUQ0hfRkFJTFVSRSdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgIHN0YXR1czogJ2ZhaWxlZCdcbiAgICAgIH1cblxuICAgICAgZXhwZWN0KHJlZHVjZXIoc3RhdGUsIGFjdGlvbikpLnRvLmVxbChleHBlY3RlZClcblxuICAgIH0pXG5cbiAgICBpdCgnY2FuIGZldGNoRGVsYXknLCAoKSA9PiB7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0ge31cblxuICAgICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgICB0eXBlOiAnRkVUQ0hfREVMQVknXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBzdGF0dXM6ICdkZWxheWVkJ1xuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gZmV0Y2hUaW1lb3V0JywgKCkgPT4ge1xuXG4gICAgICBjb25zdCBzdGF0ZSA9IHt9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogJ0ZFVENIX1RJTUVPVVQnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBzdGF0dXM6ICd0aW1lb3V0J1xuICAgICAgfVxuXG4gICAgICBleHBlY3QocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSkudG8uZXFsKGV4cGVjdGVkKVxuXG4gICAgfSlcblxuICB9KVxuXG4gIGRlc2NyaWJlKCdjb21wb25lbnQnLCAoKSA9PiB7XG5cbiAgICBpdCgncmVuZGVycyB3aXRoIGEgZGVmYXVsdCBzdGF0ZScsICgpID0+IHtcblxuICAgICAgY29uc3QgaW5maW5pdGUgPSBzaGFsbG93KDxJbmZpbml0ZSAvPilcbiAgICAgIGV4cGVjdChpbmZpbml0ZS5pcygnZGl2LnJlZnJhbWUtaW5maW5pdGUnKSkudG8uYmUudHJ1ZVxuXG4gICAgfSlcblxuICB9KVxuXG59KVxuIl19