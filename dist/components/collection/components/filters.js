'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('../../form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filters = function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'collection-filter' },
        _react2.default.createElement(_form2.default, this._getForm())
      );
    }
  }, {
    key: '_getForm',
    value: function _getForm() {
      var filters = this.props.filters;

      return {
        onChange: this._handleFilterRecords.bind(this),
        style: 'basic',
        sections: filters,
        buttons: null
      };
    }
  }, {
    key: '_handleFilterRecords',
    value: function _handleFilterRecords(data) {
      this.props.onFilterRecords(data);
    }
  }]);

  return Filters;
}(_react2.default.Component);

Filters.propTypes = {
  filters: _react2.default.PropTypes.array,
  onFilterRecords: _react2.default.PropTypes.func
};
exports.default = Filters;