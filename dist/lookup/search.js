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

var _form = require('../form');

var _form2 = _interopRequireDefault(_form);

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          results = _props.results,
          status = _props.status,
          selected = _props.selected,
          text = _props.text,
          form = _props.form,
          format = _props.format;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-cancel', onClick: this._handleCancel.bind(this) },
            _react2.default.createElement('i', { className: 'chevron left icon' }),
            'Cancel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            'Choose ',
            label
          ),
          _react2.default.createElement('div', { className: 'reframe-modal-panel-header-proceed' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-lookup-panel-search' },
            _react2.default.createElement(
              'div',
              { className: 'ui form' },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Find a ' + label + '...', onChange: this._handleType.bind(this), ref: 'query' })
            )
          ),
          status === 'loading' && _react2.default.createElement(
            'div',
            { className: 'reframe-lookup-panel-loader' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-loader' },
              _react2.default.createElement(
                'div',
                { className: 'ui active inverted dimmer' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui large text loader' },
                  'Loading'
                )
              )
            )
          ),
          status === 'success' && results.length === 0 && _react2.default.createElement(
            'div',
            { className: 'reframe-lookup-panel-empty' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-lookup-panel-empty-message' },
              _react2.default.createElement(
                'h2',
                null,
                _react2.default.createElement('i', { className: 'circular remove icon' })
              ),
              _react2.default.createElement(
                'h3',
                null,
                'No Results Found'
              ),
              _react2.default.createElement(
                'p',
                null,
                'No ',
                label,
                ' match your query'
              )
            )
          ),
          status === 'success' && results.length > 0 && _react2.default.createElement(
            'div',
            { className: 'reframe-lookup-panel-results' },
            results.map(function (result, index) {
              var value = _lodash2.default.get(result, text);
              return _react2.default.createElement(
                'div',
                { key: 'result_' + index, className: 'reframe-lookup-panel-result', onClick: _this2._handleChoose.bind(_this2, index) },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup-panel-result-label' },
                  _react2.default.createElement(_format2.default, _extends({}, result, { format: format, value: value }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup-panel-result-icon' },
                  index === selected ? _react2.default.createElement('i', { className: 'green check icon' }) : null
                )
              );
            })
          ),
          form && _react2.default.createElement(
            'div',
            { className: 'reframe-lookup-panel-add' },
            _react2.default.createElement(
              'div',
              { className: 'ui fluid blue button', onClick: this._handleAdd.bind(this) },
              'Add ',
              label
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          sort = _props2.sort,
          endpoint = _props2.endpoint,
          onLookup = _props2.onLookup;

      var refs = this.refs;
      this._handleLookup = _lodash2.default.throttle(onLookup.bind(this), 500);
      setTimeout(function () {
        return refs.query.focus();
      }, 500);
      var query = { $filter: { q: '' }, $sort: sort };
      onLookup(query, endpoint);
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handleType',
    value: function _handleType(event) {
      var _props3 = this.props,
          sort = _props3.sort,
          endpoint = _props3.endpoint;

      var q = event.target.value;
      var params = { $filter: { q: q }, $sort: sort };
      this.props.onType(q);
      this._handleLookup(params, endpoint);
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var chosen = this.props.chosen;

      var value = _lodash2.default.get(chosen, this.props.value);
      this.props.onChoose(index);
      this.props.onChange(value);
    }
  }, {
    key: '_handleAdd',
    value: function _handleAdd() {
      this.context.modal.push(_react2.default.createElement(_form2.default, this._getForm()));
    }
  }, {
    key: '_getForm',
    value: function _getForm() {
      var _this3 = this;

      return _extends({}, this.props.form, {
        onCancel: this.context.modal.pop,
        onSuccess: function onSuccess(chosen) {
          _this3.props.onChoose(0);
          _this3.props.onChange(value);
          _this3.context.modal.pop();
        }
      });
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;