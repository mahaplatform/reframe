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

var _header = require('./header/header.js');

var _header2 = _interopRequireDefault(_header);

var _table = require('./table/table.js');

var _table2 = _interopRequireDefault(_table);

var _cards = require('./card/cards.js');

var _cards2 = _interopRequireDefault(_cards);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, props));

    _this.state = {
      visible: _lodash2.default.map(_lodash2.default.filter(_lodash2.default.each(props.columns, function (column, index) {
        column.index = index;return column;
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
        _react2.default.createElement(ActiveView, _extends({}, this.props, this.state, this.context)),
        function () {
          if (_this2.props.status === 'LOADING') {
            return _react2.default.createElement('div', { className: 'ui active centered inline loader' });
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

      var selfTrigger = function selfTrigger(fn) {
        var self = _this3;
        return _lodash2.default.wrap(fn, function (ffn) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (_lodash2.default.isArray(args[0])) {
            args[0][0] === self.props.componentId ? ffn.bind(self).apply(undefined, _toConsumableArray(_lodash2.default.drop(args[0], 1))) : _lodash2.default.noop;
          } else {
            args[0] === self.props.componentId ? ffn.bind(self).apply(undefined, _toConsumableArray(_lodash2.default.drop(args, 1))) : _lodash2.default.noop;
          }
        });
      };

      //this.listeners.push(actionListener.addActionListener(CollectionActions.SET_VIEW, selfTrigger(this.handleSetView)))
      //this.listeners.push(actionListener.addActionListener(CollectionActions.TOGGLE_VISIBILITY, selfTrigger(this.handleToggleVisibility)))
      //this.listeners.push(actionListener.addActionListener(CollectionActions.CHECK, selfTrigger(this.handleCheck)))
      //this.listeners.push(actionListener.addActionListener(CollectionActions.CHECK_ALL, selfTrigger(this.handleCheckAll)))
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //_.each(this.listeners, actionListener.removeActionListener.bind(actionListener))
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
  }]);

  return Collection;
}(_react2.default.Component);

Collection.propTypes = {
  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string.isRequired,
    label: _react2.default.PropTypes.string.isRequired,
    primary: _react2.default.PropTypes.bool,
    visible: _react2.default.PropTypes.bool,
    cell: _react2.default.PropTypes.component
  })).isRequired,
  empty: _react2.default.PropTypes.string.isRequired,
  records: _react2.default.PropTypes.array,
  views: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  card: _react2.default.PropTypes.component,
  sort: _react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string,
    order: _react2.default.PropTypes.oneOf(['ascending', 'descending'])
  }).isRequired,
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
  onClickColumnChooser: _lodash2.default.noop
};
exports.default = Collection;