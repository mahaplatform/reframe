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

var _table_reducer = require('./reducers/table_reducer');

var _table_reducer2 = _interopRequireDefault(_table_reducer);

var _table_actions = require('./actions/table_actions');

var _table_actions2 = _interopRequireDefault(_table_actions);

var _random = require('../utils/random');

var _redux = require('redux');

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createDefaultStore(id) {
  return (0, _redux.createStore)((0, _redux.combineReducers)({
    tables: _table_reducer2.default
  }));
}

var SuperCollection = function (_React$Component) {
  _inherits(SuperCollection, _React$Component);

  function SuperCollection(props) {
    _classCallCheck(this, SuperCollection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SuperCollection).call(this, props));

    _this.store = _this.context.store || createDefaultStore(id);
    return _this;
  }

  _createClass(SuperCollection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        InfiniteContainer,
        { endpoint: '/api/data', client: this.props.client, injectAs: 'records' },
        _react2.default.createElement(_index2.default, _extends({}, this.props, this.getCallbacks(), this.getSort()))
      );
    }
  }, {
    key: 'getCallbacks',
    value: function getCallbacks() {
      var _this2 = this;

      return {
        onClickColumnHeader: function onClickColumnHeader(col) {
          _this2.store.dispatch(_table_actions2.default.setReverse(_this2.props.id, col));
        },
        onClickColumnChooser: function onClickColumnChooser() {
          _this2.store.dispatch(_table_actions2.default.showColumnChooser(_this2.props.id));
        }
      };
    }
  }, {
    key: 'getSort',
    value: function getSort() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unlisten = store.subscribe(this.forceUpdate.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }]);

  return SuperCollection;
}(_react2.default.Component);

SuperCollection.contextTypes = {
  store: _react2.default.PropTypes.object
};
SuperCollection.defaultProps = {
  id: (0, _random.uid)(),
  client: new _api2.default()
};
exports.default = SuperCollection;