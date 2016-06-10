'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorState = exports.LoadingState = exports.EmptyState = exports.PresentState = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _present = require('../../ui/states/present');

var _present2 = _interopRequireDefault(_present);

var _empty = require('../../ui/states/empty');

var _empty2 = _interopRequireDefault(_empty);

var _loading = require('../../ui/states/loading');

var _loading2 = _interopRequireDefault(_loading);

var _error = require('../../ui/states/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotEmpty = _lodash2.default.negate(_lodash2.default.isEmpty);

var LoadingContainer = _react2.default.createClass({
  displayName: 'LoadingContainer',
  render: function render() {
    var emptyChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _empty2.default.prototype;
    }).first();
    var fullChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _present2.default.prototype;
    }).first();
    var loadingChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _loading2.default.prototype;
    }).first();
    var errorChild = (0, _lodash2.default)(_react2.default.Children.toArray(this.props.children)).filter(function (child) {
      return child.type.prototype == _error2.default.prototype;
    }).first();

    var isLoading = (isNotEmpty(loadingChild) || this.props.useLoader) && (this.props.loading || _lodash2.default.isUndefined(this.props.content));
    var isError = this.props.error || _lodash2.default.isError(this.props.content);

    // If none of the special components are in the children, do simple blocking behavior
    if (_lodash2.default.every([emptyChild, fullChild, loadingChild, errorChild], _lodash2.default.isEmpty)) {
      if (isLoading) {
        return _react2.default.createElement(_loading2.default, null);
      } else {
        return this.props.children;
      }
    }

    var isEmpty = undefined;

    if (_lodash2.default.isBoolean(this.props.content)) {
      isEmpty = !this.props.content;
    } else {
      isEmpty = _lodash2.default.isEmpty(this.props.content);
    }

    if (isError) {
      return errorChild || _react2.default.createElement(_error2.default, null);
    } else if (isEmpty) {
      if (isLoading) {
        return loadingChild || _react2.default.createElement(_loading2.default, null);
      } else {
        return emptyChild;
      }
    } else if (isLoading) {
      return loadingChild || _react2.default.createElement(_loading2.default, null);
    } else {
      return fullChild;
    }
  }
});

LoadingContainer.defaultProps = {
  useLoader: false
};

var PresentState = exports.PresentState = _present2.default;
var EmptyState = exports.EmptyState = _empty2.default;
var LoadingState = exports.LoadingState = _loading2.default;
var ErrorState = exports.ErrorState = _error2.default;

exports.default = LoadingContainer;