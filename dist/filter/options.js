'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          format = _props.format,
          multiple = _props.multiple,
          options = _props.options,
          results = _props.results;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filter-body' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filter-results' },
          options.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              { key: 'filter_' + index, className: 'reframe-filter-item', onClick: _this2._handleChoose.bind(_this2, option.value, option.text, option.token) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-label' },
                _react2.default.createElement(_format2.default, _extends({}, option.record, { format: format, value: option.text }))
              ),
              option.description && _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-description' },
                option.description
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-icon' },
                _this2._checked(name, multiple, results, option) ? _react2.default.createElement('i', { className: 'green check icon' }) : null
              )
            );
          })
        )
      );
    }
  }, {
    key: '_checked',
    value: function _checked(name, multiple, results, option) {
      if (multiple) {
        return results[name] && _lodash2.default.find(results[name], { key: option.value });
      } else {
        return results[name] && results[name].key == option.value;
      }
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(key, value, token) {
      var _props2 = this.props,
          name = _props2.name,
          multiple = _props2.multiple,
          results = _props2.results,
          onUpdate = _props2.onUpdate;

      var values = null;
      if (multiple) {
        values = results[name] || [];
        values = _lodash2.default.find(values, { key: key }) ? _lodash2.default.filter(values, function (item) {
          return item.key !== key;
        }) : [].concat(_toConsumableArray(values), [{ key: key, value: token || value }]);
      } else {
        if (!results[name] || results[name].key !== key) {
          values = { key: key, value: token || value };
        }
      }
      onUpdate(name, values);
    }
  }]);

  return Options;
}(_react2.default.Component);

var Dynamic = function (_React$Component2) {
  _inherits(Dynamic, _React$Component2);

  function Dynamic() {
    _classCallCheck(this, Dynamic);

    return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).apply(this, arguments));
  }

  _createClass(Dynamic, [{
    key: 'render',
    value: function render() {
      var records = this.props.records;

      return records ? _react2.default.createElement(Options, this._getOptions()) : null;
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props3 = this.props,
          format = _props3.format,
          multiple = _props3.multiple,
          name = _props3.name,
          records = _props3.records,
          results = _props3.results,
          text = _props3.text,
          value = _props3.value,
          status = _props3.status,
          onUpdate = _props3.onUpdate;

      var options = records.map(function (record) {
        return { value: _lodash2.default.get(record, value), text: _lodash2.default.get(record, text), record: record };
      });
      return {
        name: name,
        format: format,
        multiple: multiple,
        options: options,
        results: results,
        status: status,
        onUpdate: onUpdate
      };
    }
  }]);

  return Dynamic;
}(_react2.default.Component);

var Container = function (_React$Component3) {
  _inherits(Container, _React$Component3);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this4 = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this4._handleLookup = _lodash2.default.throttle(props.onLookup, 500);
    return _this4;
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          label = _props4.label,
          query = _props4.query;

      if (endpoint) {
        return _react2.default.createElement(
          'div',
          { className: 'reframe-filter-search' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filter-search-form ui form' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filter-search-input' },
              _react2.default.createElement('i', { className: 'search icon' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Find a ' + label + '...', onChange: this._handleType.bind(this), ref: 'results', value: query }),
              query.length > 0 && _react2.default.createElement('i', { className: 'remove circle icon', onClick: this._handleAbort.bind(this) })
            )
          ),
          _react2.default.createElement(_infinite2.default, this._getInfinite())
        );
      } else {
        return _react2.default.createElement(Options, this.props);
      }
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this5 = this;

      var _props5 = this.props,
          endpoint = _props5.endpoint,
          sort = _props5.sort,
          q = _props5.q;

      return {
        endpoint: endpoint,
        filter: { q: q },
        layout: function layout(props) {
          return _react2.default.createElement(Dynamic, _extends({}, _this5.props, props));
        },
        sort: sort
      };
    }
  }, {
    key: '_handleType',
    value: function _handleType(event) {
      this.props.onType(event.target.value);
      this._handleLookup(event.target.value);
    }
  }, {
    key: '_handleAbort',
    value: function _handleAbort() {
      this.props.onAbort();
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;