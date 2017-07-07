'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

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
      var _this2 = this;

      var _props = this.props,
          chosen = _props.chosen,
          label = _props.label,
          query = _props.query,
          token = _props.token,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-cancel', onClick: this._handleCancel.bind(this) },
            'Cancel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-proceed', onClick: this._handleSave.bind(this) },
            'Save'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-search' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-search-form' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-search-input' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui input' },
                  _react2.default.createElement('input', { type: 'text', placeholder: 'Find a ' + label + '...', onChange: this._handleType.bind(this), value: query, ref: 'query' })
                ),
                query.length > 0 && _react2.default.createElement('i', { className: 'remove circle icon', onClick: this._handleResetSearch.bind(this) })
              ),
              token && chosen.length > 0 && _react2.default.createElement(
                'div',
                { className: 'reframe-search-chosen', ref: 'chosen' },
                chosen.map(function (item, index) {
                  return _react2.default.createElement(
                    'span',
                    { key: 'chosen_' + index, onClick: _this2._handleTokenClick.bind(_this2, item[token]) },
                    item[token]
                  );
                })
              )
            ),
            _react2.default.createElement(_infinite2.default, this._getInfinite())
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleLoad();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var chosen = this.props.chosen;

      if (prevProps.chosen.length !== chosen.length && chosen.length > 0) {
        this.refs.chosen.scrollTop = this.refs.chosen.scrollHeight;
      }
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _props2 = this.props,
          query = _props2.query,
          sort = _props2.sort,
          lookupEndpoint = _props2.lookupEndpoint;

      var filter = { q: query };
      return {
        empty: this._getEmpty(),
        endpoint: lookupEndpoint,
        filter: filter,
        sort: sort,
        layout: this._getLayout(),
        loading: this._getLoading()
      };
    }
  }, {
    key: '_getEmpty',
    value: function _getEmpty() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-empty' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-empty-message' },
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
      );
    }
  }, {
    key: '_getLoading',
    value: function _getLoading() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-loader' },
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
      );
    }
  }, {
    key: '_getLayout',
    value: function _getLayout() {
      var _this3 = this;

      var _props3 = this.props,
          chosen = _props3.chosen,
          component = _props3.component;

      return function (_ref) {
        var records = _ref.records;
        return _react2.default.createElement(
          'div',
          { className: 'reframe-search-results' },
          records.map(function (record, index) {
            var checked = _lodash2.default.findIndex(chosen, { id: record.id }) >= 0;
            return _react2.default.createElement(
              'div',
              { key: 'record' + index, className: 'reframe-search-result', onClick: _this3._handleToggle.bind(_this3, record) },
              _lodash2.default.isFunction(component) ? _react2.default.createElement(component, record) : component,
              _react2.default.createElement(
                'div',
                { className: 'reframe-search-result-toggle' },
                checked && _react2.default.createElement('i', { className: 'icon green check' })
              )
            );
          })
        );
      };
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.context.modal.close();
    }
  }, {
    key: '_handleTokenClick',
    value: function _handleTokenClick(q) {
      this.props.onType(q);
    }
  }, {
    key: '_handleType',
    value: function _handleType(event) {
      this.props.onType(event.target.value);
    }
  }, {
    key: '_handleResetSearch',
    value: function _handleResetSearch() {
      this.props.onType('');
    }
  }, {
    key: '_handleLoad',
    value: function _handleLoad() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var _props4 = this.props,
          loadEndpoint = _props4.loadEndpoint,
          onLoad = _props4.onLoad;

      onLoad(loadEndpoint);
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle(record) {
      var onToggle = this.props.onToggle;

      onToggle(record);
    }
  }, {
    key: '_handleSave',
    value: function _handleSave() {
      var _props5 = this.props,
          ids = _props5.ids,
          saveEndpoint = _props5.saveEndpoint,
          onSave = _props5.onSave;

      var onSuccess = this.context.modal.close;
      var onFailure = function onFailure() {};
      onSave(saveEndpoint, ids, onSuccess, onFailure);
    }
  }]);

  return ToggleList;
}(_react2.default.Component);

ToggleList.contextTypes = {
  modal: _propTypes2.default.object
};
ToggleList.PropTypes = {
  chosen: _propTypes2.default.array,
  component: _propTypes2.default.func,
  label: _propTypes2.default.string,
  loadEndpoint: _propTypes2.default.string,
  lookupEndpoint: _propTypes2.default.string,
  query: _propTypes2.default.string,
  saveEndpoint: _propTypes2.default.string,
  sort: _propTypes2.default.string,
  status: _propTypes2.default.string,
  title: _propTypes2.default.string,
  token: _propTypes2.default.string,
  onLoad: _propTypes2.default.func,
  onLookup: _propTypes2.default.func,
  onSave: _propTypes2.default.func
};
exports.default = ToggleList;