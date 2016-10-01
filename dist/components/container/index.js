'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../../store');

var _store2 = _interopRequireDefault(_store);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function Index(mapEndpointsToProps) {

  return function wrapWithConnect(WrappedComponent) {
    var Container = function (_React$Component) {
      _inherits(Container, _React$Component);

      function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
      }

      _createClass(Container, [{
        key: 'render',
        value: function render() {
          var _props$state = this.props.state;
          var status = _props$state.status;
          var data = _props$state.data;

          if (status == 'loading') {
            return _react2.default.createElement(
              'div',
              null,
              'Loading...'
            );
          } else if (status == 'error') {
            return _react2.default.createElement(
              'div',
              null,
              'Unable to load resources'
            );
          } else if (status == 'loaded') {
            return _react2.default.createElement(WrappedComponent, _extends({}, this.props, data));
          } else {
            return null;
          }
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          var resources = mapEndpointsToProps(this.props);
          _lodash2.default.forOwn(resources, function (endpoint, prop) {
            _this2.props.onFetchResource(prop, endpoint);
          });
        }
      }]);

      return Container;
    }(_react2.default.Component);

    var mapStateToProps = function mapStateToProps(state, props) {
      return { state: state };
    };

    var mapDispatchToProps = {
      onFetchResource: actions.fetchResource
    };

    Container = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

    var Root = function (_React$Component2) {
      _inherits(Root, _React$Component2);

      function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
      }

      _createClass(Root, [{
        key: 'render',
        value: function render() {
          var store = (0, _store2.default)(_reducer2.default);
          return _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(Container, this.props)
          );
        }
      }]);

      return Root;
    }(_react2.default.Component);

    return Root;
  };
};

exports.default = Index;