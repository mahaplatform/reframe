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

  it('set sections', function () {
    var state = {
      status: 'initialized',
      sections: []
    };
    var sections = [{
      fields: [{ code: 'first_name', label: 'First Name', type: 'textfield' }]
    }];
    var action = {
      type: actionTypes.SET_SECTIONS,
      sections: sections
    };
    var expected = {
      status: 'configured',
      sections: sections,
      data: {}
    };
    expect((0, _reducer2.default)(state, action)).toEqual(expected);
  });

  // it('set sections default data', () => {
  //   let state = {
  //     status: 'initialized',
  //     sections: []
  //   }
  //   let sections = [
  //     {
  //       fields: [
  //         { code: 'first_name', label: 'First Name', type: 'textfield', defaultValue: 'Greg' }
  //       ]
  //     }
  //   ]
  //   let action = {
  //     type: actionTypes.SET_SECTIONS,
  //     sections
  //   }
  //   let expected = {
  //     status: 'configured',
  //     sections,
  //     data: {
  //       first_name: 'Greg'
  //     }
  //   }
  //   expect(reducer(state, action)).toEqual(expected)
  // })
});