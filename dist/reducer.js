'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _reducer = require('./card/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./collection/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = require('./container/reducer');

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = require('./controls/filefield/reducer');

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = require('./form/reducer');

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = require('./tabs/reducer');

var _reducer12 = _interopRequireDefault(_reducer11);

var _reducer13 = require('./controls/tablefield/reducer');

var _reducer14 = _interopRequireDefault(_reducer13);

var _reducer15 = require('./tasks/reducer');

var _reducer16 = _interopRequireDefault(_reducer15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reducer = function Reducer(applicationReducers) {

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];


    var reducers = _extends({
      card: _reducer2.default,
      collection: _reducer4.default,
      container: _reducer6.default,
      filefield: _reducer8.default,
      form: _reducer10.default,
      tabs: _reducer12.default,
      tablefield: _reducer14.default,
      tasks: _reducer16.default
    }, applicationReducers);

    var identifier = null;

    switch (action.type) {

      case actionTypes.ADD_COMPONENT:

        identifier = action.cid || action.namespace;

        return _extends({}, state, _defineProperty({}, identifier, reducers[action.namespace](undefined, action)));

      case actionTypes.REMOVE_COMPONENT:

        identifier = action.cid || action.namespace;

        return _lodash2.default.omit(state, identifier);

      default:

        var namespace = action.type.split("/")[0];

        if (reducers[namespace]) {

          identifier = action.cid || namespace;

          return _extends({}, state, _defineProperty({}, identifier, reducers[namespace](state[identifier], action)));
        } else {

          return state;
        }

    }
  };
};

exports.default = Reducer;