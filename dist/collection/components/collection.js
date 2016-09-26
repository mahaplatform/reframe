'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _cards = require('./cards');

var _cards2 = _interopRequireDefault(_cards);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _export = require('./export');

var _export2 = _interopRequireDefault(_export);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var card = _props.card;
      var empty = _props.empty;
      var filters = _props.filters;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;
      var _props2 = this.props;
      var onFilterRecords = _props2.onFilterRecords;
      var onSortRecords = _props2.onSortRecords;
      var onSelect = _props2.onSelect;
      var onToggleFilters = _props2.onToggleFilters;
      var onChangeLayout = _props2.onChangeLayout;
      var onSelectAll = _props2.onSelectAll;
      var onExportRecords = _props2.onExportRecords;
      var onReloadRecords = _props2.onReloadRecords;
      var onExecuteBatchAction = _props2.onExecuteBatchAction;
      var _props$state = this.props.state;
      var columns = _props$state.columns;
      var records = _props$state.records;
      var params = _props$state.params;
      var status = _props$state.status;
      var expanded = _props$state.expanded;
      var layout = _props$state.layout;
      var exporting = _props$state.exporting;
      var batchAction = _props$state.batchAction;
      var selected = _props$state.selected;
      var selectAll = _props$state.selectAll;

      if (status) {
        var classes = expanded ? ['collection', 'expanded'] : ['collection'];
        return _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          function () {
            if (filters) {
              return _react2.default.createElement(_filters2.default, { id: id,
                filters: filters,
                onFilterRecords: onFilterRecords });
            }
          }(),
          _react2.default.createElement(
            'div',
            { className: 'collection-main' },
            _react2.default.createElement(_toolbar2.default, { id: id,
              columns: columns,
              layout: layout,
              filters: filters,
              selectAll: selectAll,
              card: card,
              batchActions: batchActions,
              onToggleFilters: onToggleFilters,
              onChangeLayout: onChangeLayout,
              onSelectAll: onSelectAll,
              onExportRecords: onExportRecords,
              onReloadRecords: onReloadRecords,
              onExecuteBatchAction: onExecuteBatchAction }),
            _react2.default.createElement(
              'div',
              { className: 'collection-data' },
              function () {
                if (layout == 'card') {
                  var _React$createElement;

                  return _react2.default.createElement(_cards2.default, (_React$createElement = { id: id,
                    card: card,
                    selected: selected,
                    records: records
                  }, _defineProperty(_React$createElement, 'selected', selected), _defineProperty(_React$createElement, 'recordActions', recordActions), _defineProperty(_React$createElement, 'batchActions', batchActions), _defineProperty(_React$createElement, 'onSelect', onSelect), _React$createElement));
                } else {
                  return _react2.default.createElement(_table2.default, { id: id,
                    empty: empty,
                    params: params,
                    columns: columns,
                    records: records,
                    selected: selected,
                    status: status,
                    recordActions: recordActions,
                    batchActions: batchActions,
                    onSortRecords: onSortRecords,
                    onSelect: onSelect });
                }
              }()
            ),
            batchAction ? batchAction({ ids: selected }) : null,
            exporting ? _react2.default.createElement(_export2.default, null) : null
          )
        );
      } else {
        return _react2.default.createElement('div', { className: 'ui active centered inline loader' });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleLoadColumns();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.state.status != this.props.state.status) {
        if (_lodash2.default.includes(['columns_loaded', 'reload_records'], this.props.state.status)) {
          this._handleLoadRecords();
        }
      }
    }
  }, {
    key: '_handleLoadColumns',
    value: function _handleLoadColumns() {
      var _props3 = this.props;
      var id = _props3.id;
      var columns = _props3.columns;
      var onSetColumns = _props3.onSetColumns;
      var onFetchColumns = _props3.onFetchColumns;

      if (_lodash2.default.isArray(columns)) {
        onSetColumns(id, columns);
      } else if (_lodash2.default.isString(columns)) {
        onFetchColumns(id, columns);
      }
    }
  }, {
    key: '_handleLoadRecords',
    value: function _handleLoadRecords() {
      var _props4 = this.props;
      var id = _props4.id;
      var records = _props4.records;
      var state = _props4.state;
      var onSetRecords = _props4.onSetRecords;
      var onFetchRecords = _props4.onFetchRecords;

      if (_lodash2.default.isArray(records)) {
        onSetRecords(id, records);
      } else if (_lodash2.default.isString(records)) {
        onFetchRecords(id, records, _extends({}, state.params.filter, {
          sort: (state.params.sort.order == 'desc' ? '-' : '') + state.params.sort.key
        }));
      }
    }
  }]);

  return Collection;
}(_react2.default.Component);

Collection.propTypes = {
  id: _react2.default.PropTypes.string,
  filters: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  columns: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]).isRequired,
  records: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]).isRequired,
  sort: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string,
    order: _react2.default.PropTypes.string
  }),
  card: _react2.default.PropTypes.object,
  layout: _react2.default.PropTypes.oneOf(['table', 'card']),
  expanded: _react2.default.PropTypes.bool,
  empty: _react2.default.PropTypes.string,
  entity: _react2.default.PropTypes.string,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  onFetchColumns: _react2.default.PropTypes.func,
  onSetColumns: _react2.default.PropTypes.func,
  onFetchRecords: _react2.default.PropTypes.func,
  onSetRecords: _react2.default.PropTypes.func,
  onFilterRecords: _react2.default.PropTypes.func,
  onSortRecords: _react2.default.PropTypes.func,
  onSelect: _react2.default.PropTypes.func,
  onToggleFilters: _react2.default.PropTypes.func,
  onChangeLayout: _react2.default.PropTypes.func,
  onSelectAll: _react2.default.PropTypes.func,
  onExportRecords: _react2.default.PropTypes.func,
  onReloadRecords: _react2.default.PropTypes.func,
  onExecuteBatchAction: _react2.default.PropTypes.func,
  state: _react2.default.PropTypes.shape({
    records: _react2.default.PropTypes.string,
    params: _react2.default.PropTypes.object,
    status: _react2.default.PropTypes.string,
    expanded: _react2.default.PropTypes.bool,
    layout: _react2.default.PropTypes.string,
    exporting: _react2.default.PropTypes.bool,
    batchAction: _react2.default.PropTypes.string,
    selected: _react2.default.PropTypes.array
  })
};


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    state: state.reframe[props.id]
  };
};

var mapDispatchToProps = {
  onFetchColumns: actions.fetchColumns,
  onSetColumns: actions.setColumns,
  onFetchRecords: actions.fetchRecords,
  onSetRecords: actions.setRecords,
  onSelect: actions.select,
  onFilterRecords: actions.filterRecords,
  onSortRecords: actions.sortRecords,
  onToggleFilters: actions.toggleFilters,
  onChangeLayout: actions.changeLayout,
  onSelectAll: actions.selectAll,
  onExportRecords: actions.exportRecords,
  onReloadRecords: actions.reloadRecords,
  onExecuteBatchAction: actions.executeBatchAction
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Collection);