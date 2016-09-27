'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var batchActions = _props.batchActions;
      var records = _props.records;
      var columns = _props.columns;
      var card = _props.card;
      var layout = _props.layout;
      var filters = _props.filters;
      var selectAll = _props.selectAll;

      return _react2.default.createElement(
        'div',
        { className: 'collection-toolbar' },
        function () {
          if (batchActions) {
            return _react2.default.createElement(
              'div',
              { className: 'collection-batch-actions' },
              _react2.default.createElement('input', { type: 'checkbox', checked: selectAll, onChange: _this2._handleSelectAll.bind(_this2) }),
              _react2.default.createElement(
                'div',
                { className: 'ui dropdown selection', ref: 'batchActions' },
                _react2.default.createElement('i', { className: 'dropdown icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'default text' },
                  'With Selected'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'menu' },
                  batchActions.map(function (action, index) {
                    return _react2.default.createElement(
                      'div',
                      { key: 'action_' + index, className: 'item', 'data-value': index },
                      action.label
                    );
                  })
                )
              )
            );
          }
        }(),
        _react2.default.createElement(
          'div',
          { className: 'collection-layouts' },
          _react2.default.createElement(
            'div',
            { className: 'ui icon compact menu' },
            function () {
              if (filters) {
                return _react2.default.createElement(
                  'a',
                  { className: 'popup icon item', 'data-content': 'Filter Records', onClick: _this2._handleToggleFilters.bind(_this2) },
                  _react2.default.createElement('i', { className: 'fa fa-filter icon' })
                );
              }
            }(),
            _react2.default.createElement(
              'a',
              { className: 'popup icon item', 'data-content': 'Export Records', onClick: this._handleExportRecords.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-download icon' })
            ),
            _react2.default.createElement(
              'a',
              { className: 'popup icon item', 'data-content': 'Reload Records', onClick: this._handleReloadRecords.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-refresh icon' })
            )
          ),
          function () {
            if (columns && card) {
              return _react2.default.createElement(
                'div',
                { className: 'ui icon compact menu' },
                _react2.default.createElement(
                  'a',
                  { className: 'popup icon item ' + (layout == 'table' ? 'active' : ''), 'data-content': 'View as Table', onClick: _this2._handleChangeLayout.bind(_this2, 'table') },
                  _react2.default.createElement('i', { className: 'fa fa-list icon' })
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'popup icon item ' + (layout == 'card' ? 'active' : ''), 'data-content': 'View as Cards', onClick: _this2._handleChangeLayout.bind(_this2, 'card') },
                  _react2.default.createElement('i', { className: 'fa fa-th icon' })
                )
              );
            }
          }()
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.batchActions).dropdown({
        onChange: this._handleExecuteBatchAction.bind(this)
      });
    }
  }, {
    key: '_handleToggleFilters',
    value: function _handleToggleFilters() {
      var _props2 = this.props;
      var id = _props2.id;
      var onToggleFilters = _props2.onToggleFilters;

      onToggleFilters(id);
    }
  }, {
    key: '_handleChangeLayout',
    value: function _handleChangeLayout(layout) {
      var _props3 = this.props;
      var id = _props3.id;
      var onChangeLayout = _props3.onChangeLayout;

      onChangeLayout(id, layout);
    }
  }, {
    key: '_handleSelectAll',
    value: function _handleSelectAll() {
      var _props4 = this.props;
      var id = _props4.id;
      var onSelectAll = _props4.onSelectAll;

      onSelectAll(id);
    }
  }, {
    key: '_handleExecuteBatchAction',
    value: function _handleExecuteBatchAction(index) {
      var _props5 = this.props;
      var id = _props5.id;
      var batchActions = _props5.batchActions;
      var onExecuteBatchAction = _props5.onExecuteBatchAction;

      var batchAction = batchActions[index];
      onExecuteBatchAction(id, batchAction.component);
    }
  }, {
    key: '_handleReloadRecords',
    value: function _handleReloadRecords() {
      var _props6 = this.props;
      var id = _props6.id;
      var onReloadRecords = _props6.onReloadRecords;

      onReloadRecords(id);
    }
  }, {
    key: '_handleExportRecords',
    value: function _handleExportRecords() {
      var _props7 = this.props;
      var id = _props7.id;
      var onExportRecords = _props7.onExportRecords;

      onExportRecords(id);
    }
  }]);

  return Toolbar;
}(_react2.default.Component);

Toolbar.propTypes = {
  id: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.array,
  records: _react2.default.PropTypes.array,
  card: _react2.default.PropTypes.object,
  layout: _react2.default.PropTypes.string,
  filters: _react2.default.PropTypes.array,
  selectAll: _react2.default.PropTypes.bool,
  batchActions: _react2.default.PropTypes.array,
  onToggleFilters: _react2.default.PropTypes.func,
  onChangeLayout: _react2.default.PropTypes.func,
  onSelectAll: _react2.default.PropTypes.func,
  onExportRecords: _react2.default.PropTypes.func,
  onReloadRecords: _react2.default.PropTypes.func,
  onExecuteBatchAction: _react2.default.PropTypes.func
};
exports.default = Toolbar;