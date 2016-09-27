'use strict';

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action_types = require('../action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../reducer');
jest.unmock('lodash');

describe('collection reducer', function () {

  it('set records', function () {
    var state = {
      records: []
    };
    var action = {
      type: actionTypes.SET_RECORDS,
      records: [{ id: 1, title: "One" }]
    };
    var expected = {
      records: [{ id: 1, title: "One" }]
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('appends records', function () {
    var state = {
      records: [{ id: 1, title: "One" }]
    };
    var action = {
      type: actionTypes.APPEND_RECORDS,
      records: [{ id: 2, title: "Two" }]
    };
    var expected = {
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }]
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('toggles filter', function () {
    var state = {
      expanded: false
    };
    var action = {
      type: actionTypes.TOGGLE_FILTERS
    };
    var expected = {
      expanded: true
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('changes layout', function () {
    var state = {
      layout: 'table'
    };
    var action = {
      type: actionTypes.CHANGE_LAYOUT,
      layout: 'card'
    };
    var expected = {
      layout: 'card'
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('selects all records if at least one record is deselected', function () {
    var state = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1]
    };
    var action = {
      type: actionTypes.SELECT_ALL
    };
    var expected = {
      selectAll: true,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1, 2]
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('deselects all records if all records are selected', function () {
    var state = {
      selectAll: true,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1, 2]
    };
    var action = {
      type: actionTypes.SELECT_ALL
    };
    var expected = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: []
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('selects a record if the record is deselected', function () {
    var state = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: []
    };
    var action = {
      type: actionTypes.SELECT,
      id: 1
    };
    var expected = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1]
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('deselects a record if the record is selected', function () {
    var state = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1]
    };
    var action = {
      type: actionTypes.SELECT,
      id: 1
    };
    var expected = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: []
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('sets selectAll to true if all records are selected', function () {
    var state = {
      selectAll: false,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1]
    };
    var action = {
      type: actionTypes.SELECT,
      id: 2
    };
    var expected = {
      selectAll: true,
      records: [{ id: 1, title: "One" }, { id: 2, title: "Two" }],
      selected: [1, 2]
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('sets the sort order to a new column ascending', function () {
    var state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    };
    var action = {
      type: actionTypes.SORT_RECORDS,
      key: 'name'
    };
    var expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'name',
          order: 'asc'
        }
      }
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('toggles the sort order to a column from ascending to descending', function () {
    var state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'asc'
        }
      }
    };
    var action = {
      type: actionTypes.SORT_RECORDS,
      key: 'created_at'
    };
    var expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('toggles the sort order to a column from descending to ascending', function () {
    var state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    };
    var action = {
      type: actionTypes.SORT_RECORDS,
      key: 'created_at'
    };
    var expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'asc'
        }
      }
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });
});