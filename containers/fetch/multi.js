'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _keys = require('when/keys');

var _keys2 = _interopRequireDefault(_keys);

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _error = require('../../ui/messages/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNINITIALIZED = 'uninitialized';
var AWAITING = 'awaiting';
var SYNCING = 'syncing';
var READY = 'ready';
var ERROR = 'error';

var FetchContainer = function (_React$Component) {
  _inherits(FetchContainer, _React$Component);

  function FetchContainer(props) {
    _classCallCheck(this, FetchContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FetchContainer).call(this, props));

    _this.state = {
      status: AWAITING,
      endpointData: null,
      propsData: null,
      message: null
    };

    _this.api = new _api2.default(_this.props.client);

    _this.makeRequest();
    return _this;
  }

  _createClass(FetchContainer, [{
    key: 'makeRequest',
    value: function makeRequest() {
      var _this2 = this;

      var _props = this.props;
      var endpoints = _props.endpoints;
      var allowFailures = _props.allowFailures;

      var propsPromises = (0, _lodash2.default)(this.props).omit(['className', 'endpoints', 'client', 'element', 'children']).mapValues(function (p) {
        return (0, _when2.default)(p);
      }).value();

      var endpointPromises = _lodash2.default.mapValues(endpoints, function (e) {
        return _this2.api.loadJSON(_lodash2.default.get(e, 'url', e), _lodash2.default.get(e, 'options', {}));
      });
      var propsPromiseObject = void 0;
      if (allowFailures) {
        propsPromiseObject = _keys2.default.settle(_lodash2.default.merge(propsPromises, endpointPromises));
      } else {
        propsPromiseObject = _keys2.default.all(_lodash2.default.merge(propsPromises, endpointPromises));
      }

      propsPromiseObject.then(function (propsData) {
        return _this2.setState({ status: READY, propsData: propsData });
      }).catch(function (e) {
        return _this2.setState({ status: ERROR, message: e });
      }).finally(_lodash2.default.noop);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.status === ERROR) {
        return this.props.errorComponent || _react2.default.createElement(_error2.default, { message: 'There was a problem loading the data needed to show this page.' });
      }
      var finalProps = _lodash2.default.assign({}, this.state.propsData);
      var mappedChildren = [];

      if (!this.props.blocking || this.state.status === READY) {
        mappedChildren = _react2.default.Children.map(this.props.children, function (c) {
          return _react2.default.cloneElement(c, finalProps);
        });
      }

      var className = this.props.className;
      return _react2.default.createElement.apply(_react2.default, [this.props.element, { className: className }].concat(_toConsumableArray(mappedChildren)));
    }
  }, {
    key: 'sync',
    value: function sync() {
      this.makeRequest();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        container: {
          sync: this.sync.bind(this)
        }
      };
    }
  }]);

  return FetchContainer;
}(_react2.default.Component);

FetchContainer.propTypes = {
  endpoints: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  blocking: _react.PropTypes.bool,
  element: _react.PropTypes.string,
  flatten: _react.PropTypes.bool,
  allowFailures: _react.PropTypes.bool,
  errorComponent: _react.PropTypes.node
};
FetchContainer.defaultProps = {
  single: false,
  blocking: true,
  element: 'div',
  client: undefined, // Causes API to use default client
  flatten: false,
  allowFailures: false,
  errorComponent: null
};
FetchContainer.childContextTypes = {
  container: _react2.default.PropTypes.object
};
exports.default = FetchContainer;