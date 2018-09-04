'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  error: null,
  result: null,
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'REQUEST_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'submitting'
      });

    case 'REQUEST_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'failure',
        error: action.result.error.message
      });

    case 'REQUEST_SUCCESS':
      return (0, _extends3.default)({}, state, {
        result: action.result.data,
        status: 'success'
      });

    default:
      return state;
  }
};

exports.default = reducer;