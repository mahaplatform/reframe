'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _batch_actions = require('./batch_actions.js');

var _batch_actions2 = _interopRequireDefault(_batch_actions);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _filters = require('../filters');

var _filters2 = _interopRequireDefault(_filters);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

    _this.state = {
      showFilters: props.showFilters
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'collection-header' },
        _react2.default.createElement(
          'div',
          { className: 'ui menu' },
          this.renderRecordCount(),
          function () {
            if (_this2.props.batchActions && !_lodash2.default.isEmpty(_this2.props.batchActions)) {
              return _react2.default.createElement(_batch_actions2.default, _this2.props);
            }
          }(),
          _react2.default.createElement(
            'div',
            { className: 'right menu' },
            _lodash2.default.map(this.getCollectionActions(), function (action, index) {
              var classes = ['icon'];
              classes.push(action.icon);
              return _react2.default.createElement(
                'a',
                { key: 'collection_action_' + index, 'data-content': action.tip, className: 'item', onClick: action.handler },
                _react2.default.createElement('i', { className: classes.join(' ') })
              );
            })
          ),
          function () {
            if (_this2.props.views && _this2.props.views.length > 1) {
              var viewOptions = [];
              if (_lodash2.default.includes(_this2.props.views, 'table')) {
                viewOptions.push(_react2.default.createElement(
                  'a',
                  { 'data-content': 'View as Table', className: _this2.props.view == 'table' ? 'popup icon item active' : 'popup icon item', onClick: _this2.handleView.bind(_this2, 'table') },
                  _react2.default.createElement('i', { className: 'fa fa-list icon' })
                ));
              }
              if (_lodash2.default.includes(_this2.props.views, 'card')) {
                viewOptions.push(_react2.default.createElement(
                  'a',
                  { 'data-content': 'View as Cards', className: _this2.props.view == 'card' ? 'popup icon item active' : 'popup icon item', onClick: _this2.handleView.bind(_this2, 'card') },
                  _react2.default.createElement('i', { className: 'fa fa-th icon' })
                ));
              }
              return _react2.default.createElement(
                'div',
                { className: 'ui icon compact menu collection-header-views' },
                viewOptions.map(function (opt) {
                  return opt;
                })
              );
            }
          }()
        ),
        this.renderFilters()
      );
    }
  }, {
    key: 'getCollectionActions',
    value: function getCollectionActions() {
      // Merge in an action to show filters if filters are specified
      if (!_lodash2.default.isEmpty(this.props.filters)) {
        return [{ key: 'filter', icon: 'filter', label: 'Filter', handler: this.toggleFilters.bind(this) }].concat(_toConsumableArray(this.props.collectionActions));
      } else {
        return this.props.collectionActions;
      }
    }
  }, {
    key: 'renderRecordCount',
    value: function renderRecordCount() {
      var _props = this.props;
      var status = _props.status;
      var recordCount = _props.recordCount;
      var entity = _props.entity;


      if (status === 'SYNCING' || status === 'LOADING') {
        return _react2.default.createElement('div', { className: 'borderless item' });
      }
      if (recordCount !== null) {
        var inflection = undefined;
        if (_lodash2.default.isArray(entity)) {
          inflection = recordCount !== 1 ? entity[1] : entity[0];
        } else {
          inflection = recordCount !== 1 ? _pluralize2.default.plural(entity) : _pluralize2.default.singular(entity);
        }
        return _react2.default.createElement(
          'div',
          { className: 'borderless item' },
          _react2.default.createElement(
            'h4',
            { className: 'ui grey header' },
            recordCount,
            ' ',
            inflection
          )
        );
      }
    }
  }, {
    key: 'toggleFilters',
    value: function toggleFilters() {
      if (this.state.showFilters) {
        this.hideFilters();
      } else {
        this.showFilters();
      }
    }
  }, {
    key: 'showFilters',
    value: function showFilters() {
      this.setState({ showFilters: true });
      this.props.onShowFilters();
    }
  }, {
    key: 'hideFilters',
    value: function hideFilters() {
      this.setState({ showFilters: false });
      this.props.onHideFilters();
    }
  }, {
    key: 'clearFilters',
    value: function clearFilters() {
      //this.refs.filter_form.onClear("collection_filter_form")
      this.handleFilter({});
    }
  }, {
    key: 'renderFilters',
    value: function renderFilters() {
      var shouldShow = this.state.showFilters && this.props.filters && true;
      var visibility = shouldShow ? 'visible' : 'collapse';
      var display = shouldShow ? 'block' : 'none';
      return _react2.default.createElement(_filters2.default, {
        ref: 'filter_form',
        visibility: visibility,
        display: display,
        fields: this.getFilterFields(),
        onClear: this.clearFilters.bind(this),
        onFilter: this.handleFilter.bind(this) });
    }
  }, {
    key: 'getFilterFields',
    value: function getFilterFields() {
      return (0, _lodash2.default)(this.props.filters).chunk(2).map(function (fields) {
        if (fields.length > 1) {
          return { type: 'fields', fields: fields };
        } else {
          return _lodash2.default.head(fields);
        }
      }).value();
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(filterData) {
      var compactedFilters = _lodash2.default.omitBy(filterData, _lodash2.default.isNull);
      this.props.onFilterChange(compactedFilters);
    }
  }, {
    key: 'handleView',
    value: function handleView(type) {
      this.props.onSetView(type);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refs.filter_form.fill(this.props.filterValues);
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.defaultProps = {
  onSetView: _lodash2.default.noop
};
exports.default = Header;