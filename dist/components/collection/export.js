'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _sortable_list = require('../sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Export = function (_React$Component) {
  (0, _inherits3.default)(Export, _React$Component);

  function Export() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Export);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Export.__proto__ || Object.getPrototypeOf(Export)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Export, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-tasks-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-title' },
            'Export Results'
          ),
          _react2.default.createElement('div', { className: 'reframe-collection-tasks-panel-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-body' },
          _react2.default.createElement(_sortable_list2.default, this._getSortableList())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-footer' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-footer-item' },
            _react2.default.createElement(
              'div',
              { className: 'ui fluid red button', onClick: this._handleDownload.bind(this, 'csv') },
              'Download CSV'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-footer-item' },
            _react2.default.createElement(
              'div',
              { className: 'ui fluid red button', onClick: this._handleDownload.bind(this, 'xlsx') },
              'Download XLSX'
            )
          )
        )
      );
    }
  }, {
    key: '_getSortableList',
    value: function _getSortableList() {
      var _this2 = this;

      var defaultValue = this.props.defaultValue;

      return {
        defaultValue: defaultValue,
        onUpdate: function onUpdate(items) {
          return _this2.setState({ items: items });
        }
      };
    }
  }, {
    key: '_handleDownload',
    value: function _handleDownload(extension) {
      var items = this.state.items;
      var _props = this.props,
          endpoint = _props.endpoint,
          entity = _props.entity,
          filter = _props.filter,
          sort = _props.sort,
          token = _props.token;

      var query = {
        $filter: filter,
        $sort: sort,
        $select: items.filter(function (item) {
          return item.checked;
        }).reduce(function (select, item) {
          return (0, _extends4.default)({}, select, (0, _defineProperty3.default)({}, item.label, item.key));
        }, {})
      };
      var entities = (0, _pluralize2.default)(entity);
      var enclosure = encodeURIComponent('"');
      var url = endpoint + '.' + extension + '?enclosure=' + enclosure + '&filename=' + entities + '&token=' + token + '&download=true&' + _qs2.default.stringify(query);
      window.location.href = url;
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Export;
}(_react2.default.Component);

exports.default = Export;