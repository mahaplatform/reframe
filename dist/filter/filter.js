'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fields = _props.fields,
          results = _props.results;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filter-tokens' },
          fields.map(function (field) {
            if (results[field.name]) {
              if (_lodash2.default.isArray(results[field.name])) {
                return results[field.name].map(function (filter, index) {
                  return _react2.default.createElement(
                    'span',
                    { key: 'filter_' + index, className: 'ui small basic button' },
                    _react2.default.createElement(
                      'span',
                      { className: 'label', onClick: _this2._handleOpen.bind(_this2) },
                      filter.value
                    ),
                    _react2.default.createElement('i', { className: 'remove icon', onClick: _this2._handleRemove.bind(_this2, field.name, index) })
                  );
                });
              } else if (_lodash2.default.isObject(results[field.name])) {
                return _react2.default.createElement(
                  'span',
                  { key: 'filter_remove', className: 'ui small basic button' },
                  _react2.default.createElement(
                    'span',
                    { className: 'label', onClick: _this2._handleOpen.bind(_this2) },
                    results[field.name].value
                  ),
                  _react2.default.createElement('i', { className: 'remove icon', onClick: _this2._handleRemove.bind(_this2, field.name) })
                );
              }
            }
          }),
          fields && _react2.default.createElement(
            'a',
            { onClick: this._handleOpen.bind(this), className: 'ui small basic add button' },
            _react2.default.createElement('i', { className: 'plus icon' }),
            'Add Filter'
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._loadFilters();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var results = this.props.results;

      if (results !== prevProps.results) {
        this._handleChange();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onResetAll();
    }
  }, {
    key: '_loadFilters',
    value: function _loadFilters() {
      var _props2 = this.props,
          fields = _props2.fields,
          filters = _props2.filters,
          onLoad = _props2.onLoad,
          onSet = _props2.onSet;

      if (fields && filters) {
        fields.map(function (field) {
          if (filters[field.name]) {
            if (field.endpoint) {
              onLoad(field.name, field.endpoint, field.value, field.text, filters[field.name]);
            } else {
              onSet(field.name, filters[field.name]);
            }
          }
        });
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _this3 = this;

      var _props3 = this.props,
          results = _props3.results,
          onChange = _props3.onChange;

      var filters = Object.keys(results).reduce(function (filters, key) {
        return _extends({}, filters, _defineProperty({}, key, _this3._getValue(key)));
      }, {});
      onChange(filters);
    }
  }, {
    key: '_getValue',
    value: function _getValue(key) {
      var _props4 = this.props,
          results = _props4.results,
          fields = _props4.fields;

      var field = _lodash2.default.find(fields, { name: key });
      var value = results[key];
      if (field.type === 'daterange') return { $dr: value.key };
      if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
          return item.key;
        }) };
      return { $eq: value.key };
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(key) {
      this._handleOpen();
      this.props.onChoose(key);
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen() {
      this.context.tray.open(_react2.default.createElement(_panel2.default, this.props));
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(key, index) {
      this.props.onRemove(key, index);
    }
  }]);

  return Filter;
}(_react2.default.Component);

Filter.contextTypes = {
  tray: _propTypes2.default.object
};
Filter.propTypes = {
  active: _propTypes2.default.number,
  fields: _propTypes2.default.array,
  filters: _propTypes2.default.object,
  params: _propTypes2.default.object,
  q: _propTypes2.default.string,
  query: _propTypes2.default.string,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onLoad: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onResetAll: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
Filter.defaultProps = {
  onChange: function onChange() {}
};
exports.default = Filter;