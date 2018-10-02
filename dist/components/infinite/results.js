'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failure = exports.NotFound = exports.Empty = exports.Timeout = exports.Delayed = exports.Appending = exports.Loader = undefined;

var _loader = require('../loader');

var _loader2 = _interopRequireDefault(_loader);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Loader = _loader2.default;
var Appending = exports.Appending = function Appending() {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-infinite-loader' },
    _react2.default.createElement(
      'div',
      { className: 'ui active inverted dimmer' },
      _react2.default.createElement('div', { className: 'ui small loader' })
    )
  );
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTG9hZGVyIiwiQXBwZW5kaW5nIiwiRGVsYXllZCIsIm1lc3NhZ2UiLCJ0ZXh0IiwiVGltZW91dCIsImljb24iLCJ0aXRsZSIsIkVtcHR5IiwiTm90Rm91bmQiLCJGYWlsdXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUZPQSxNO0FBSUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQ3ZCO0FBQUE7QUFBQSxNQUFLLFdBQVUseUJBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLDJCQUFmO0FBQ0UsNkNBQUssV0FBVSxpQkFBZjtBQURGO0FBREYsR0FEdUI7QUFBQSxDQUFsQjs7QUFRQSxJQUFNQyw0QkFBVSxTQUFWQSxPQUFVLEdBQU07O0FBRTNCLE1BQU1DLFVBQVU7QUFDZEMsVUFBTTtBQURRLEdBQWhCOztBQUlBLFNBQU8sOEJBQUMsaUJBQUQsRUFBY0QsT0FBZCxDQUFQO0FBRUQsQ0FSTTs7QUFVQSxJQUFNRSw0QkFBVSxTQUFWQSxPQUFVLEdBQU07O0FBRTNCLE1BQU1GLFVBQVU7QUFDZEcsVUFBTSxlQURRO0FBRWRDLFdBQU8sd0JBRk87QUFHZEgsVUFBTTtBQUhRLEdBQWhCOztBQU1BLFNBQU8sOEJBQUMsaUJBQUQsRUFBY0QsT0FBZCxDQUFQO0FBRUQsQ0FWTTs7QUFZQSxJQUFNSyx3QkFBUSxTQUFSQSxLQUFRLEdBQU07O0FBRXpCLE1BQU1MLFVBQVU7QUFDZEcsVUFBTSxPQURRO0FBRWRDLFdBQU8sWUFGTztBQUdkSCxVQUFNO0FBSFEsR0FBaEI7O0FBTUEsU0FBTyw4QkFBQyxpQkFBRCxFQUFjRCxPQUFkLENBQVA7QUFFRCxDQVZNOztBQVlBLElBQU1NLDhCQUFXLFNBQVhBLFFBQVcsR0FBTTs7QUFFNUIsTUFBTU4sVUFBVTtBQUNkRyxVQUFNLE9BRFE7QUFFZEMsV0FBTyxrQkFGTztBQUdkSCxVQUFNO0FBSFEsR0FBaEI7O0FBTUEsU0FBTyw4QkFBQyxpQkFBRCxFQUFjRCxPQUFkLENBQVA7QUFFRCxDQVZNOztBQVlBLElBQU1PLDRCQUFVLFNBQVZBLE9BQVUsR0FBTTs7QUFFM0IsTUFBTVAsVUFBVTtBQUNkRyxVQUFNLHVCQURRO0FBRWRDLFdBQU8sd0JBRk87QUFHZEgsVUFBTTtBQUhRLEdBQWhCOztBQU1BLFNBQU8sOEJBQUMsaUJBQUQsRUFBY0QsT0FBZCxDQUFQO0FBRUQsQ0FWTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXInXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9tZXNzYWdlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQXBwZW5kaW5nID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtaW5maW5pdGUtbG9hZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBhY3RpdmUgaW52ZXJ0ZWQgZGltbWVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHNtYWxsIGxvYWRlclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IERlbGF5ZWQgPSAoKSA9PiB7XG5cbiAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICB0ZXh0OiAnVGhpcyBpcyB0YWtpbmcgbG9uZ2VyIHRoYW4gd2UgZXhwZWN0ZWQuLi4nXG4gIH1cblxuICByZXR1cm4gPE1lc3NhZ2UgeyAuLi5tZXNzYWdlIH0gLz5cblxufVxuXG5leHBvcnQgY29uc3QgVGltZW91dCA9ICgpID0+IHtcblxuICBjb25zdCBtZXNzYWdlID0ge1xuICAgIGljb246ICdob3VyZ2xhc3MtZW5kJyxcbiAgICB0aXRsZTogJ1lvdXIgcmVxdWVzdCB0aW1lZCBvdXQnLFxuICAgIHRleHQ6ICdJdCB0b29rIHRvbyBsb25nIHRvIGNvbXBsZXRlIHlvdXIgcmVxdWVzdCdcbiAgfVxuXG4gIHJldHVybiA8TWVzc2FnZSB7IC4uLm1lc3NhZ2UgfSAvPlxuXG59XG5cbmV4cG9ydCBjb25zdCBFbXB0eSA9ICgpID0+IHtcblxuICBjb25zdCBtZXNzYWdlID0ge1xuICAgIGljb246ICd0aW1lcycsXG4gICAgdGl0bGU6ICdObyByZWNvcmRzJyxcbiAgICB0ZXh0OiAnVGhlcmUgYXJlIG5vIHJlY29yZHMnXG4gIH1cblxuICByZXR1cm4gPE1lc3NhZ2UgeyAuLi5tZXNzYWdlIH0gLz5cblxufVxuXG5leHBvcnQgY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG5cbiAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICBpY29uOiAndGltZXMnLFxuICAgIHRpdGxlOiAnTm8gUmVzdWx0cyBGb3VuZCcsXG4gICAgdGV4dDogJ05vIHJlY29yZHMgbWF0Y2hlZCB5b3VyIHF1ZXJ5J1xuICB9XG5cbiAgcmV0dXJuIDxNZXNzYWdlIHsgLi4ubWVzc2FnZSB9IC8+XG5cbn1cblxuZXhwb3J0IGNvbnN0IEZhaWx1cmUgPSAoKSA9PiB7XG5cbiAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUgJyxcbiAgICB0aXRsZTogJ1VuYWJsZSB0byBsb2FkIHJlY29yZHMnLFxuICAgIHRleHQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggZmV0Y2hpbmcgeW91ciBkYXRhJ1xuICB9XG5cbiAgcmV0dXJuIDxNZXNzYWdlIHsgLi4ubWVzc2FnZSB9IC8+XG5cbn1cbiJdfQ==