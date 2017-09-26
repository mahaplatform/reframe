'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collection = require('../collection');

var _collection2 = _interopRequireDefault(_collection);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleList = function (_React$Component) {
  _inherits(ToggleList, _React$Component);

  function ToggleList() {
    _classCallCheck(this, ToggleList);

    return _possibleConstructorReturn(this, (ToggleList.__proto__ || Object.getPrototypeOf(ToggleList)).apply(this, arguments));
  }

  _createClass(ToggleList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-toggle-list' },
        _react2.default.createElement(_collection2.default, this._getCollection())
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onSet = _props.onSet;

      if (defaultValue) onSet(defaultValue);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          chosen = _props2.chosen,
          onChange = _props2.onChange;

      if (prevProps.chosen.length !== chosen.length) onChange(chosen);
    }
  }, {
    key: '_getCollection',
    value: function _getCollection() {
      var _props3 = this.props,
          filters = _props3.filters,
          sort = _props3.sort,
          endpoint = _props3.endpoint;

      return {
        endpoint: endpoint,
        filters: filters,
        layout: this._getLayout(),
        sort: sort
      };
    }
  }, {
    key: '_getLayout',
    value: function _getLayout() {
      var _this2 = this;

      var _props4 = this.props,
          chosen = _props4.chosen,
          component = _props4.component;

      return function (_ref) {
        var records = _ref.records;
        return _react2.default.createElement(
          'div',
          { className: 'reframe-search-results' },
          records.map(function (record, index) {
            return _react2.default.createElement(
              'div',
              { key: 'record_' + index, className: 'reframe-search-result', onClick: _this2._handleToggle.bind(_this2, record.id) },
              _lodash2.default.isFunction(component) ? _react2.default.createElement(component, record) : component,
              _react2.default.createElement(
                'div',
                { className: 'reframe-search-result-toggle' },
                _lodash2.default.includes(chosen, record.id) && _react2.default.createElement('i', { className: 'icon green check' })
              )
            );
          })
        );
      };
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle(id) {
      this.props.onToggle(id);
    }
  }]);

  return ToggleList;
}(_react2.default.Component);

ToggleList.propTypes = {
  chosen: _propTypes2.default.array,
  component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.number),
  endpoint: _propTypes2.default.string,
  filters: _propTypes2.default.array,
  sort: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onSet: _propTypes2.default.func,
  onToggle: _propTypes2.default.func
};
ToggleList.defaultProps = {
  filters: []
};
exports.default = ToggleList;