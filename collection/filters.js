'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _omni = require('../form/omni');

var _omni2 = _interopRequireDefault(_omni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionFilters = function (_React$Component) {
  _inherits(CollectionFilters, _React$Component);

  function CollectionFilters() {
    _classCallCheck(this, CollectionFilters);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionFilters).apply(this, arguments));
  }

  _createClass(CollectionFilters, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: { visibility: this.props.visibility, display: this.props.display } },
        _react2.default.createElement(_omni2.default, {
          ref: 'filter_form',
          id: 'collection_filter_form',
          style: { marginBottom: 12 },
          sections: [{ fields: this.props.fields }],
          onFieldChange: _.debounce(function () {
            return _this2.refs.filter_form.submit();
          }, 300),
          onSubmit: this.props.onFilter,
          buttons: null
        })
      );
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.filter_form.clear("collection_filter_form");
      this.props.onClear();
    }
  }, {
    key: 'fill',
    value: function fill(data) {
      this.refs.filter_form.fill(data);
    }
  }]);

  return CollectionFilters;
}(_react2.default.Component);

CollectionFilters.defaultProps = {
  onClear: function onClear() {},
  onFilter: function onFilter() {}
};
exports.default = CollectionFilters;