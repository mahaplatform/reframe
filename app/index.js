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

var _appActions = require('./appActions');

var _appActions2 = _interopRequireDefault(_appActions);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _appReducer = require('./appReducer');

var _appReducer2 = _interopRequireDefault(_appReducer);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = function (_React$Component) {
  _inherits(Application, _React$Component);

  function Application(props) {
    _classCallCheck(this, Application);

    var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, props));

    _this.store = (0, _redux.createStore)(_appReducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return _this;
  }

  _createClass(Application, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        session: this.buildSessionObject(),
        config: _lodash2.default.merge(_config2.default.get('*'), this.store.getState().config),
        user: this.store.getState().user
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _store$getState = this.store.getState();

      var status = _store$getState.status;

      switch (status) {
        case "LOADING":
          return _react2.default.createElement(
            'div',
            { className: 'session' },
            _react2.default.createElement(
              'div',
              { className: 'ui active inverted dimmer' },
              _react2.default.createElement(
                'div',
                { className: 'ui text loader' },
                'Loading'
              )
            )
          );
        case "READY":
          return _react2.default.createElement(
            'div',
            { className: 'session' },
            _react2.default.createElement(ApplicationMessages, { store: this.store }),
            this.props.children
          );
        default:
          return _react2.default.createElement(
            'div',
            { className: 'session' },
            _react2.default.createElement(
              'div',
              { className: 'error' },
              'There was a problem loading critical application data.'
            )
          );
      }
    }
  }, {
    key: 'buildSessionObject',
    value: function buildSessionObject() {
      var store = this.store;
      var props = this.props;
      return _extends({}, store.getState().session, {
        user: store.getState().user,
        showMessage: function showMessage(message) {
          var type = arguments.length <= 1 || arguments[1] === undefined ? 'info' : arguments[1];

          _lodash2.default.defer(function () {
            return store.dispatch(_appActions2.default.showFlashMessage(message, type));
          });
        },
        sync: function sync() {
          store.dispatch(_appActions2.default.loadSession(props.endpoint));
        }
      });
    }
  }, {
    key: 'handleHistoryTransition',
    value: function handleHistoryTransition() {
      this.store.dispatch(_appActions2.default.clearFlashMessages());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.store.subscribe(this.onStoreUpdate.bind(this));
      this.store.dispatch(_appActions2.default.loadSession(this.props.endpoint));
      this.unlistenToHistory = this.context.history.listen(_lodash2.default.throttle(this.handleHistoryTransition.bind(this), 200));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlistenToHistory();
    }
  }, {
    key: 'onStoreUpdate',
    value: function onStoreUpdate() {
      this.forceUpdate();
    }
  }], [{
    key: 'mapStateToMessageProps',
    value: function mapStateToMessageProps(state) {
      return {
        messages: state.messages
      };
    }
  }, {
    key: 'mapDispatchToMessageProps',
    value: function mapDispatchToMessageProps(dispatch, ownProps) {
      return {
        onClose: function onClose(id) {
          dispatch(_appActions2.default.clearFlashMessages());
        }
      };
    }
  }]);

  return Application;
}(_react2.default.Component);

Application.contextTypes = {
  history: _react2.default.PropTypes.object
};
Application.childContextTypes = {
  session: _react2.default.PropTypes.object,
  config: _react2.default.PropTypes.object,
  user: _react2.default.PropTypes.object
};


var ApplicationMessages = (0, _reactRedux.connect)(Application.mapStateToMessageProps, Application.mapDispatchToMessageProps)(_messages2.default);

exports.default = Application;