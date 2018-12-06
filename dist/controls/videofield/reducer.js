'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = exports.INITIAL_STATE = {
  link_id: null,
  src: null,
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return _extends({}, state, {
        link_id: action.link_id,
        src: action.src
      });

    case 'REMOVE':
      return _extends({}, state, {
        link_id: null,
        src: null,
        status: 'pending'
      });

    case 'FETCH_LINK_REQUEST':
      return _extends({}, state, {
        link_id: null,
        src: null,
        status: 'loading'
      });

    case 'FETCH_LINK_SUCCESS':
      return _extends({}, state, {
        link_id: action.result.data.id,
        src: action.result.data.video_url,
        status: 'success'
      });

    case 'FETCH_LINK_FAILURE':
      return _extends({}, state, {
        status: 'failure'
      });

    default:
      return state;
  }
};

exports.default = reducer;