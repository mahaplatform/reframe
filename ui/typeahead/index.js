'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeaheadResultLoader = exports.TypeaheadResultList = exports.TypeaheadEmptyResult = exports.TypeaheadDefaultResult = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('./core');

Object.defineProperty(exports, 'TypeaheadDefaultResult', {
  enumerable: true,
  get: function get() {
    return _core.TypeaheadDefaultResult;
  }
});
Object.defineProperty(exports, 'TypeaheadEmptyResult', {
  enumerable: true,
  get: function get() {
    return _core.TypeaheadEmptyResult;
  }
});
Object.defineProperty(exports, 'TypeaheadResultList', {
  enumerable: true,
  get: function get() {
    return _core.TypeaheadResultList;
  }
});
Object.defineProperty(exports, 'TypeaheadResultLoader', {
  enumerable: true,
  get: function get() {
    return _core.TypeaheadResultLoader;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core2 = _interopRequireDefault(_core);

var _selectable = require('./selectable');

var _selectable2 = _interopRequireDefault(_selectable);

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolymorphicTypeahead = function (_React$Component) {
  _inherits(PolymorphicTypeahead, _React$Component);

  function PolymorphicTypeahead() {
    _classCallCheck(this, PolymorphicTypeahead);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PolymorphicTypeahead).apply(this, arguments));
  }

  _createClass(PolymorphicTypeahead, [{
    key: 'render',
    value: function render() {
      if (this.props.selectable) {
        return _react2.default.createElement(_selectable2.default, _extends({ ref: 't' }, this.props));
      } else if (this.props.categories) {
        return _react2.default.createElement(_category2.default, _extends({ ref: 't' }, this.props));
      } else {
        return _react2.default.createElement(_core2.default, _extends({ ref: 't' }, this.props));
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.t.clear();
    }
  }, {
    key: 'hideResults',
    value: function hideResults() {
      this.refs.t.hideResults();
    }
  }]);

  return PolymorphicTypeahead;
}(_react2.default.Component);

exports.default = PolymorphicTypeahead;