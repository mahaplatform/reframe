'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failure = exports.NotFound = exports.Empty = exports.Timeout = exports.Delayed = exports.Loader = undefined;

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Loader = _loader2.default;
var Delayed = exports.Delayed = function Delayed() {

  var message = {
    text: 'This is taking longer than we expected...'
  };

  return _react2.default.createElement(_message2.default, message);
};

var Timeout = exports.Timeout = function Timeout() {

  var message = {
    icon: 'hourglass-end',
    title: 'Your request timed out',
    text: 'It took too long to complete your request'
    // button: {
    //   label: 'Try Again',
    //   handler: () => this._handleFetch.bind(this, 0)
    // }
  };

  return _react2.default.createElement(_message2.default, message);
};

var Empty = exports.Empty = function Empty() {

  var message = {
    icon: 'times',
    title: 'No records',
    text: 'There are no records'
  };

  return _react2.default.createElement(_message2.default, message);
};

var NotFound = exports.NotFound = function NotFound() {

  var message = {
    icon: 'times',
    title: 'No Results Found',
    text: 'No records matched your query'
  };

  return _react2.default.createElement(_message2.default, message);
};

var Failure = exports.Failure = function Failure() {

  var message = {
    icon: 'exclamation-triangle ',
    title: 'Unable to load records',
    text: 'There was a problem with fetching your data'
  };

  return _react2.default.createElement(_message2.default, message);
};