'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header/header.js');

var _header2 = _interopRequireDefault(_header);

var _table = require('./table/table.js');

var _table2 = _interopRequireDefault(_table);

var _cards = require('./card/cards.js');

var _cards2 = _interopRequireDefault(_cards);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));

    _this.state = {
      visible: _lodash2.default.map(_lodash2.default.filter(_lodash2.default.each(props.columns, function (column, index) {
        column.index = index;
        return column;
      }), { visible: true }), 'index'),
      view: props.views ? _lodash2.default.first(props.views) : 'table',
      checkAll: false,
      checked: []
    };
    _this.listeners = [];
    return _this;
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var shouldShowHeader = !(_lodash2.default.isEmpty(this.props.batchActions) && _lodash2.default.isEmpty(this.props.collectionActions) && _lodash2.default.isEmpty(this.props.views));
      var ActiveView = this.state.view === 'table' ? _table2.default : _cards2.default;
      return _react2.default.createElement(
        'div',
        { className: 'collection' },
        shouldShowHeader ? _react2.default.createElement(_header2.default, _extends({}, this.props, this.state)) : '',
        _react2.default.createElement(ActiveView, _extends({}, this.props, this.state, this.context, {
          onChooseColumn: this.onChooseColumn.bind(this),
          onResetColumns: this.onResetColumns.bind(this)
        })),
        function () {
          if (_this2.props.status === 'LOADING') {
            return null; // <div className="ui active centered inline loader"></div>
          } else if (_this2.props.status === 'ERROR') {
            return _react2.default.createElement(
              'div',
              { className: 'ui red segment' },
              _react2.default.createElement('i', { className: 'warning circle icon' }),
              ' Error loading records'
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.loadVisibility(function (vis) {
        if (vis) {
          _this3.setState({ visible: vis });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.saveVisibility();
    }
  }, {
    key: 'onChooseColumn',
    value: function onChooseColumn(key, visible) {
      if (visible) {
        this.setState({ visible: _lodash2.default.union(this.state.visible, [key]) });
        this.saveVisibility(_lodash2.default.union(this.state.visible, [key]));
      } else {
        this.setState({ visible: _lodash2.default.difference(this.state.visible, [key]) });
        this.saveVisibility(_lodash2.default.difference(this.state.visible, [key]));
      }
    }
  }, {
    key: 'onResetColumns',
    value: function onResetColumns() {
      // Reset to default visibility options
      this.setState({
        visible: _lodash2.default.map(_lodash2.default.filter(_lodash2.default.each(this.props.columns, function (column, index) {
          column.index = index;
          return column;
        }), { visible: true }), 'index')
      });
      // Erase stored visibility state
      this.clearVisibility();
    }
  }, {
    key: 'handleSetView',
    value: function handleSetView(view) {
      this.setState({ view: view });
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(id, check) {
      var checked = this.state.checked;
      if (check) {
        checked.push(id);
      } else {
        checked = _lodash2.default.without(checked, id);
        this.setState({ checkAll: false });
      }
      this.setState({ checked: checked });
    }
  }, {
    key: 'handleCheckAll',
    value: function handleCheckAll(checkAll) {
      var checked = [];
      if (checkAll) {
        for (var i in this.props.records) {
          var record = this.props.records[i];
          checked.push(record.id);
        }
      }
      this.setState({ checked: checked, checkAll: checkAll });
    }
  }, {
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility(visible) {
      this.setState({ visible: visible });
    }
  }, {
    key: 'saveVisibility',
    value: function saveVisibility(data) {
      if (this.props.saveVisibility) {
        _localforage2.default.setItem('collections.' + this.props.id + '.visibility', data || this.state.visible);
      }
    }
  }, {
    key: 'loadVisibility',
    value: function loadVisibility(cb) {
      if (this.props.saveVisibility) {
        _localforage2.default.getItem('collections.' + this.props.id + '.visibility', function (err, val) {
          err ? cb(null) : cb(val);
        });
      }
    }
  }, {
    key: 'clearVisibility',
    value: function clearVisibility() {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? _lodash2.default.noop : arguments[0];

      _localforage2.default.removeItem('collections.' + this.props.id + '.visibility', cb);
    }

    //
    // --- STATIC HELPER METHODS ---
    //

  }], [{
    key: 'purgeVisibility',
    value: function purgeVisibility() {
      _localforage2.default.keys(function (err, keys) {
        if (err) {
          throw err;
        }
        (0, _lodash2.default)(keys).filter(RegExp.prototype.test.bind(/^collections.*visibility$/i)).forEach(function (k) {
          return _localforage2.default.removeItem(k);
        });
        console.log("Purged cahced table visibility settings");
      });
    }
  }]);

  return Collection;
}(_react2.default.Component);

Collection.propTypes = {
  id: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string.isRequired,
    label: _react2.default.PropTypes.string.isRequired,
    primary: _react2.default.PropTypes.bool,
    visible: _react2.default.PropTypes.bool,
    cell: _react2.default.PropTypes.component
  })).isRequired,
  filters: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
  empty: _react2.default.PropTypes.string.isRequired,
  rowClass: _react2.default.PropTypes.func,
  records: _react2.default.PropTypes.array,
  views: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  card: _react2.default.PropTypes.component,
  recordCount: _react2.default.PropTypes.number,
  entity: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  sort: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string,
    order: _react2.default.PropTypes.oneOf(['ascending', 'descending'])
  }).isRequired,
  saveVisibility: _react2.default.PropTypes.bool,
  collectionActions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string.isRequired,
    handler: _react2.default.PropTypes.element,
    confirm: _react2.default.PropTypes.bool
  })])),
  batchActions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string.isRequired,
    handler: _react2.default.PropTypes.element,
    confirm: _react2.default.PropTypes.bool
  })])),
  recordActions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string.isRequired,
    handler: _react2.default.PropTypes.element,
    confirm: _react2.default.PropTypes.bool
  })]))
};
Collection.defaultProps = {
  componentId: Symbol(),
  onSetView: _lodash2.default.noop,
  onToggleVisibility: _lodash2.default.noop,
  onCheck: _lodash2.default.noop,
  onCheckAll: _lodash2.default.noop,
  onClickColumnHeader: _lodash2.default.noop,
  onClickColumnChooser: _lodash2.default.noop,
  onFilterChange: _lodash2.default.noop,
  onShowFilters: _lodash2.default.noop,
  onHideFilters: _lodash2.default.noop,
  sort: { key: '', order: 'desc' },
  empty: "No records found.",
  rowClass: null,
  entity: 'record',
  recordCount: null,
  filters: [],
  filterValues: {},
  showFilters: false,
  saveVisibility: false
};
exports.default = Collection;