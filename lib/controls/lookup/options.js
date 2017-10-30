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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _searchbox = require('../../components/searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../../components/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          format = _props.format,
          options = _props.options,
          selected = _props.selected,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-panel-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'result_' + index, className: 'reframe-lookup-panel-result', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(
              'div',
              { className: 'reframe-lookup-panel-result-label' },
              _react2.default.createElement(_format2.default, _extends({}, option, { format: format, value: _lodash2.default.get(option, text) }))
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-lookup-panel-result-icon' },
              index === selected ? _react2.default.createElement('i', { className: 'green check icon' }) : null
            )
          );
        })
      );
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(chosen) {
      var _props2 = this.props,
          onChoose = _props2.onChoose,
          onChange = _props2.onChange,
          value = _props2.value;

      onChoose(chosen);
      onChange(_lodash2.default.get(chosen, value));
    }
  }]);

  return Options;
}(_react2.default.Component);

Options.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  options: _propTypes2.default.array,
  selected: _propTypes2.default.number,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};

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
          selected = _props3.selected,
          records = _props3.records,
          text = _props3.text,
          value = _props3.value,
          onChoose = _props3.onChoose,
          onChange = _props3.onChange;

      return {
        format: format,
        selected: selected,
        options: records,
        text: text,
        value: value,
        onChoose: onChoose,
        onChange: onChange
      };
    }
  }]);

  return Dynamic;
}(_react2.default.Component);

Dynamic.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  records: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  selected: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};

var Container = function (_React$Component3) {
  _inherits(Container, _React$Component3);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          label = _props4.label,
          form = _props4.form,
          search = _props4.search;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-panel' },
        search && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-search' },
          _react2.default.createElement(_searchbox2.default, this._getSearchbox())
        ),
        endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite()),
        !endpoint && _react2.default.createElement(Options, this._getStaticOptions()),
        form && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-add' },
          _react2.default.createElement(
            'div',
            { className: 'ui fluid red button', onClick: this._handleAdd.bind(this) },
            'Add ',
            label
          )
        )
      );
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props5 = this.props,
          label = _props5.label,
          onQuery = _props5.onQuery;

      return {
        prompt: 'Find a ' + label,
        onChange: onQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this5 = this;

      var _props6 = this.props,
          cacheKey = _props6.cacheKey,
          endpoint = _props6.endpoint,
          q = _props6.q,
          sort = _props6.sort,
          text = _props6.text,
          value = _props6.value;

      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: { q: q },
        layout: function layout(props) {
          return _react2.default.createElement(Dynamic, _extends({}, _this5.props, props));
        },
        sort: sort,
        text: text,
        value: value
      };
    }
  }, {
    key: '_handleAdd',
    value: function _handleAdd() {
      this.props.onShowForm();
    }
  }, {
    key: '_getStaticOptions',
    value: function _getStaticOptions() {
      var _props7 = this.props,
          options = _props7.options,
          q = _props7.q;

      return _extends({}, this.props, {
        options: options.filter(function (options) {
          return q === null || options.text.search(q) >= 0;
        })
      });
    }
  }]);

  return Container;
}(_react2.default.Component);

Container.contextTypes = {
  modal: _propTypes2.default.object
};
Container.propTypes = {
  cacheKey: _propTypes2.default.string,
  endpoint: _propTypes2.default.string,
  form: _propTypes2.default.object,
  label: _propTypes2.default.string,
  options: _propTypes2.default.array,
  q: _propTypes2.default.string,
  search: _propTypes2.default.bool,
  sort: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onQuery: _propTypes2.default.func,
  onShowForm: _propTypes2.default.func
};
exports.default = Container;