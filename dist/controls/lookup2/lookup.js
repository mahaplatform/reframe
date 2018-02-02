'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_React$Component) {
  _inherits(Lookup, _React$Component);

  function Lookup() {
    _classCallCheck(this, Lookup);

    return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  _createClass(Lookup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selected = _props.selected,
          tabIndex = _props.tabIndex,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: this._getClass(), tabIndex: tabIndex },
        _react2.default.createElement(
          'div',
          { className: 'reframe-lookup2-items', onClick: this._handleBegin.bind(this) },
          selected.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'reframe-lookup2-item', key: 'selected_' + index },
              _react2.default.createElement(
                'div',
                { className: 'reframe-lookup2-item-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup2-item-token' },
                  _react2.default.createElement(
                    'div',
                    { className: 'reframe-lookup2-token' },
                    _lodash2.default.get(item, text)
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup2-item-remove', onClick: _this2._handleRemove.bind(_this2, index) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-times-circle' })
                )
              )
            );
          })
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var multiple = this.props.multiple;

      var classes = ['reframe-lookup2-field'];
      if (multiple) classes.push('multiple');
      return classes.join(' ');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          endpoint = _props2.endpoint,
          onFetch = _props2.onFetch,
          onReady = _props2.onReady;

      if (defaultValue) onFetch(endpoint, { $ids: defaultValue });
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var form = this.context.form;
      var _props3 = this.props,
          active = _props3.active,
          selected = _props3.selected,
          onChange = _props3.onChange;

      if (!prevProps.active && active) form.push(_react2.default.createElement(_search2.default, this._getSearch()));
      if (prevProps.active && !active) form.pop();
      if (!_lodash2.default.isEqual(selected, prevProps.selected)) this._handleChange();
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          format = _props4.format,
          label = _props4.label,
          multiple = _props4.multiple,
          selected = _props4.selected,
          text = _props4.text;

      return {
        endpoint: endpoint,
        format: format,
        label: label,
        multiple: multiple,
        selected: selected,
        text: text,
        onCancel: this._handleEnd.bind(this),
        onDone: this._handleEnd.bind(this),
        onSelect: this._handleSelect.bind(this)
      };
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd() {
      this.props.onEnd();
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(index, e) {
      e.stopPropagation();
      this.props.onRemove(index);
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(items) {
      var _props5 = this.props,
          onEnd = _props5.onEnd,
          onSelect = _props5.onSelect;

      onSelect(items);
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _props6 = this.props,
          selected = _props6.selected,
          onChange = _props6.onChange;

      return onChange(selected.map(function (item) {
        return _lodash2.default.get(item, 'id');
      }));
    }
  }]);

  return Lookup;
}(_react2.default.Component);

Lookup.contextTypes = {
  form: _propTypes2.default.object
};
Lookup.propTypes = {
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  selected: _propTypes2.default.array,
  text: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  value: _propTypes2.default.string,
  onFetch: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};
Lookup.defaultProps = {
  label: 'Record',
  multiple: false
};
exports.default = Lookup;