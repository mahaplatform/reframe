'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function Index(namespace) {
  var identifier = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  return function (WrappedComponent) {
    var Component = function (_React$Component) {
      _inherits(Component, _React$Component);

      function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
      }

      _createClass(Component, [{
        key: 'render',
        value: function render() {
          if (this.props.initialized) {
            return _react2.default.createElement(WrappedComponent, this.props);
          } else {
            return _react2.default.createElement('div', null);
          }
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this._handleInitialize();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._handleTerminate();
        }
      }, {
        key: '_handleInitialize',
        value: function _handleInitialize() {
          if (identifier) {
            var id = _lodash2.default.get(this.props, identifier);
            this.props.onAddComponent(namespace, id);
          } else {
            this.props.onAddComponent(namespace);
          }
        }
      }, {
        key: '_handleTerminate',
        value: function _handleTerminate() {
          if (identifier) {
            var id = _lodash2.default.get(this.props, identifier);
            this.props.onRemoveComponent(namespace, id);
          } else {
            this.props.onRemoveComponent(namespace);
          }
        }
      }]);

      return Component;
    }(_react2.default.Component);

    var mapStateToProps = function mapStateToProps(state, props) {
      if (identifier) {
        var id = _lodash2.default.get(props, identifier);
        return {
          initialized: state[id] !== undefined
        };
      } else {
        return {
          initialized: state[namespace] !== undefined
        };
      }
    };

    var mapDispatchToProps = {
      onAddComponent: actions.addComponent,
      onRemoveComponent: actions.removeComponent
    };

    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component);
  };
};

exports.default = Index;