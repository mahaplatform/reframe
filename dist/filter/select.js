'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'filter-panel' },
        _react2.default.createElement(
          'div',
          { className: 'filter-header' },
          _react2.default.createElement(
            'div',
            { className: 'filter-header-back', onClick: this._handleBack.bind(this) },
            _react2.default.createElement('i', { className: 'chevron left icon' }),
            'Back'
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter-header-title' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter-header-next', onClick: this._handleDone.bind(this) },
            'Done'
          )
        ),
        _react2.default.createElement(_options2.default, this.props),
        _react2.default.createElement(
          'div',
          { className: 'filter-footer', onClick: this._handleReset.bind(this) },
          'Reset ',
          label
        )
      );
    }
  }, {
    key: '_handleBack',
    value: function _handleBack() {
      this.props.onBack();
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.context.tray.close();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      this.props.onReset(this.props.name);
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.contextTypes = {
  tray: _propTypes2.default.object
};
Select.propTypes = {
  endpoint: _propTypes2.default.string,
  sort: _propTypes2.default.object
};
Select.defaultProps = {
  sort: {
    key: 'created_at',
    order: 'desc'
  }
};
exports.default = Select;