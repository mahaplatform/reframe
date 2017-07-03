"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Failure = exports.Empty = exports.Timeout = exports.Delayed = exports.Loading = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = exports.Loading = function Loading(props) {
  return _react2.default.createElement(
    "div",
    { className: "reframe-loader" },
    _react2.default.createElement(
      "div",
      { className: "ui active inverted dimmer" },
      _react2.default.createElement(
        "div",
        { className: "ui large text loader" },
        "Loading"
      )
    )
  );
};

var Delayed = exports.Delayed = function Delayed(props) {
  return _react2.default.createElement(
    "div",
    { className: "reframe-message" },
    _react2.default.createElement(
      "div",
      { className: "reframe-message-panel" },
      _react2.default.createElement(
        "h2",
        null,
        _react2.default.createElement("i", { className: "circular hourglass half icon" })
      ),
      _react2.default.createElement(
        "h3",
        null,
        "The network is a bit slow"
      ),
      _react2.default.createElement(
        "p",
        null,
        "This is taking longer than we expected..."
      )
    )
  );
};

var Timeout = exports.Timeout = function Timeout(props) {
  return _react2.default.createElement(
    "div",
    { className: "reframe-message" },
    _react2.default.createElement(
      "div",
      { className: "reframe-message-panel" },
      _react2.default.createElement(
        "h2",
        null,
        _react2.default.createElement("i", { className: "circular hourglass end icon" })
      ),
      _react2.default.createElement(
        "h3",
        null,
        "Your request timed out"
      ),
      _react2.default.createElement(
        "p",
        null,
        "It took too long to complete your request"
      ),
      _react2.default.createElement(
        "div",
        { className: "ui basic button", onClick: undefined._handleFetch.bind(undefined, 0) },
        "Try again"
      )
    )
  );
};

var Empty = exports.Empty = function Empty(props) {
  return _react2.default.createElement(
    "div",
    { className: "reframe-message" },
    _react2.default.createElement(
      "div",
      { className: "reframe-message-panel" },
      _react2.default.createElement(
        "h2",
        null,
        _react2.default.createElement("i", { className: "circular remove icon" })
      ),
      _react2.default.createElement(
        "h3",
        null,
        "No Results Found"
      ),
      _react2.default.createElement(
        "p",
        null,
        "No records matched your query"
      )
    )
  );
};

var Failure = exports.Failure = function Failure(props) {
  return _react2.default.createElement(
    "div",
    { className: "reframe-message" },
    _react2.default.createElement(
      "div",
      { className: "reframe-message-panel" },
      _react2.default.createElement("i", { className: "warning sign icon" }),
      _react2.default.createElement(
        "h2",
        null,
        "Unable to load",
        _react2.default.createElement("br", null),
        " records"
      )
    )
  );
};