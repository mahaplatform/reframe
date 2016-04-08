'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryResultList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryTypeahead = function (_React$Component) {
  _inherits(CategoryTypeahead, _React$Component);

  function CategoryTypeahead(props) {
    _classCallCheck(this, CategoryTypeahead);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryTypeahead).call(this, props));
  }

  _createClass(CategoryTypeahead, [{
    key: 'render',
    value: function render() {
      var ListComponent = this.props.listComponent || CategoryResultList;
      return _react2.default.createElement(_core2.default, _extends({}, this.props, {
        ref: 'typeahead',
        listComponent: ListComponent,
        resultField: null }));
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.typeahead.clear();
    }
  }, {
    key: 'hideResults',
    value: function hideResults() {
      this.refs.typeahead.hideResults();
    }
  }]);

  return CategoryTypeahead;
}(_react2.default.Component);

CategoryTypeahead.defaultProps = {
  onChooseResult: _lodash2.default.noop,
  itemComponent: _core.TypeaheadDefaultResult,
  listComponent: CategoryResultList
};
exports.default = CategoryTypeahead;

var CategoryResultList = exports.CategoryResultList = function (_React$Component2) {
  _inherits(CategoryResultList, _React$Component2);

  function CategoryResultList() {
    _classCallCheck(this, CategoryResultList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryResultList).apply(this, arguments));
  }

  _createClass(CategoryResultList, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var results = _props.results;
      var itemComponent = _props.itemComponent;
      var onChooseResult = _props.onChooseResult;

      var clickHandler = function clickHandler(r, t, e) {
        e.preventDefault();
        e.stopPropagation();
        onChooseResult(r, t);
      };
      return _react2.default.createElement(
        'div',
        { className: 'ui typeahead results' },
        _lodash2.default.flatMap(results, function (group, name) {
          return [_react2.default.createElement(
            'div',
            { className: 'category divider' },
            name
          )].concat(_toConsumableArray(_lodash2.default.map(group, function (item) {
            return _react2.default.createElement(itemComponent, { type: name, result: item, onClick: _lodash2.default.partial(clickHandler, item, name) });
          })));
        })
      );
    }
  }]);

  return CategoryResultList;
}(_react2.default.Component);

CategoryResultList.propTypes = {
  results: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
  itemComponent: _react2.default.PropTypes.element,
  onChooseResult: _react2.default.PropTypes.func
};
CategoryResultList.defaultProps = {
  results: [],
  itemComponent: _core.TypeaheadDefaultResult,
  onChooseResult: _lodash2.default.noop
};