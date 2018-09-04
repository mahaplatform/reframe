'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Saved = function (_React$Component) {
  (0, _inherits3.default)(Saved, _React$Component);

  function Saved() {
    (0, _classCallCheck3.default)(this, Saved);
    return (0, _possibleConstructorReturn3.default)(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).apply(this, arguments));
  }

  (0, _createClass3.default)(Saved, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var saved = [{ name: 'Saved Filter 1', results: {} }];
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            'Saved Filters'
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          saved.map(function (filter, index) {
            return _react2.default.createElement(
              'div',
              { key: 'filter_' + index, className: 'reframe-filters-item', onClick: _this2._handleLoadFilter.bind(_this2, filter) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-title' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-filter' }),
                filter.name
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-icon' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
              )
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-item', onClick: this._handleNewFilter.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-title' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-plus' }),
              'New Filter'
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-icon' },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          )
        )
      );
    }
  }, {
    key: '_getOverview',
    value: function _getOverview() {
      return this.props;
    }
  }, {
    key: '_handleLoadFilter',
    value: function _handleLoadFilter(filter) {
      this.props.onSet(filter.results);
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleNewFilter',
    value: function _handleNewFilter() {
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Saved;
}(_react2.default.Component);

Saved.propTypes = {};
exports.default = Saved;