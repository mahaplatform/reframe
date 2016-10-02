'use strict';

var _reducer = require('../reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action_types = require('../action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../reducer');

describe('tabs reducer', function () {

  it('it sets the defaults', function () {
    var state = undefined;
    var action = {
      type: ''
    };
    var expected = {
      active: 0
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  it('it changes the tab', function () {
    var state = {
      active: 0
    };
    var action = {
      type: actionTypes.CHANGE_TAB,
      index: 1
    };
    var expected = {
      active: 1
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });
});