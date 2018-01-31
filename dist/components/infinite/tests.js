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