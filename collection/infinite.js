'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _infinite = require('../containers/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _random = require('../utils/random');

var _filter_context = require('../utils/filter_context');

var _filter_context2 = _interopRequireDefault(_filter_context);

var _filter_context_helper = require('../utils/filter_context_helper');

var _filter_context_helper2 = _interopRequireDefault(_filter_context_helper);

var _exportModal = require('./export-modal');

var _exportModal2 = _interopRequireDefault(_exportModal);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteCollection = function (_React$Component) {
  _inherits(InfiniteCollection, _React$Component);

  function InfiniteCollection(props) {
    _classCallCheck(this, InfiniteCollection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteCollection).call(this, props));

    _this.state = {
      view: 'table',
      sort: props.sort || { key: 'id', order: 'asc' },
      filters: {},
      showFilters: false,
      showExporter: false
    };
    _this.id = props.id || (0, _random.uid)();
    return _this;
  }

  _createClass(InfiniteCollection, [{
    key: 'render',
    value: function render() {
      var exportUrlPrefix = _config2.default.get('collections.exporter.urlPrefix', '');
      var modalOptions = {
        onCancel: this.closeExporter.bind(this),
        fields: this.props.columns,
        exportUrl: this.props.exportUrl || (exportUrlPrefix + '/' + this.props.endpoint).replace(/([^:])\/+/gi, '$1/')
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _infinite2.default,
          _extends({ ref: 'container' }, this.getContainerOptions()),
          _react2.default.createElement(LoadingCollection, this.getCollectionProps())
        ),
        this.state.showExporter ? _react2.default.createElement(_exportModal2.default, modalOptions) : null
      );
    }
  }, {
    key: 'getContainerOptions',
    value: function getContainerOptions() {
      return {
        endpoint: this.props.endpoint,
        endpointOptions: this.getQuery(),
        client: this.props.client,
        injectAs: "records"
      };
    }
  }, {
    key: 'getCollectionProps',
    value: function getCollectionProps() {
      return _extends({}, this.props, this.getCallbacks(), {
        id: this.id,
        saveVisibility: !!this.props.id, // Only save visibility when an ID is set manually
        collectionActions: [{ key: 'refresh', icon: 'refresh', label: 'Refresh', handler: this.refresh.bind(this) }, { key: 'export', icon: 'download', label: 'Export', handler: this.openExporter.bind(this) }].concat(_toConsumableArray(this.props.collectionActions)),
        recordActions: this.getRecordActions(),
        sort: this.state.sort,
        filterValues: this.state.filters,
        showFilters: this.state.showFilters
      });
    }
  }, {
    key: 'getCallbacks',
    value: function getCallbacks() {
      var _this2 = this;

      return {
        onClickColumnHeader: function onClickColumnHeader(col) {
          if (col === _this2.state.sort.key) {
            var order = _this2.state.sort.order === 'asc' ? 'desc' : 'asc';
            var key = _this2.state.sort.key;
            _this2.setState({ sort: { key: key, order: order } });
          } else {
            var _order = 'asc';
            var _key = col;
            _this2.setState({ sort: { key: _key, order: _order } });
          }
          _lodash2.default.defer(function () {
            return _this2.refs.container.reset();
          });
        },
        onFilterChange: function onFilterChange(filters) {
          _this2.setState({ filters: filters });
          _lodash2.default.defer(function () {
            return _this2.refs.container.reset();
          });
        },
        onShowFilters: function onShowFilters() {
          return _this2.setState({ showFilters: true });
        },
        onHideFilters: function onHideFilters() {
          return _this2.setState({ showFilters: false });
        }
      };
    }
  }, {
    key: 'getRecordActions',
    value: function getRecordActions() {
      var _this3 = this;

      return _lodash2.default.map(this.props.recordActions, function (action) {
        if (action.redirect) {
          return _extends({}, action, {
            handler: function handler(id, data) {
              return _this3.context.history.push(_lodash2.default.template(action.redirect)(data));
            }
          });
        } else {
          return action;
        }
      });
    }
  }, {
    key: 'getQuery',
    value: function getQuery() {
      var sort = _defineProperty({}, this.state.sort.key, this.state.sort.order);
      var query = this.state.filters;
      var parameters = _filter_context_helper2.default.toQueryParams(new _filter_context2.default({ sort: sort, query: query }));
      return parameters;
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var _this4 = this;

      _lodash2.default.defer(function () {
        return _this4.refs.container.reset();
      });
    }
  }, {
    key: 'openExporter',
    value: function openExporter() {
      this.setState({ showExporter: true });
    }
  }, {
    key: 'closeExporter',
    value: function closeExporter() {
      this.setState({ showExporter: false });
    }
  }]);

  return InfiniteCollection;
}(_react2.default.Component);

InfiniteCollection.contextTypes = {
  store: _react2.default.PropTypes.object,
  history: _react2.default.PropTypes.object
};
InfiniteCollection.defaultProps = {
  client: null,
  collectionActions: [],
  autoActions: true
};
exports.default = InfiniteCollection;


var LoadingCollection = function LoadingCollection(props) {
  var statusMappings = {
    'awaiting': 'SYNCING'
  };
  var tableStatus = _lodash2.default.get(statusMappings, props.status, 'READY');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, _extends({}, props, { recordCount: props.totalRecords || 0, status: tableStatus })),
    _react2.default.createElement(
      'div',
      { className: 'ui basic segment' },
      !props.isAtEnd && !_lodash2.default.isEmpty(props.records) ? _react2.default.createElement('div', { className: 'ui active centered inline loader' }) : null
    )
  );
};