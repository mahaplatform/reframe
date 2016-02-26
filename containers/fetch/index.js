'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNINITIALIZED = 'uninitialized';
var AWAITING = 'awaiting';
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

    var propsPromises = (0, _lodash2.default)(_this.props).omit(['className', 'endpoint', 'client', 'element', 'endpointOptions', 'children']).mapValues(function (p) {
      return (0, _when2.default)(p);
    }).value();

    var endpointPromise = _this.api.loadJSON(_this.props.endpoint, _this.props.endpointOptions);
    var propsPromiseObject = _keys2.default.all(propsPromises);

    var attributesPromise = _when2.default.all([endpointPromise, propsPromiseObject]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var endpointData = _ref2[0];
      var propsData = _ref2[1];
      return _this.setState({ status: READY, endpointData: endpointData, propsData: propsData });
    }).catch(function (e) {
      return _this.setState({ status: ERROR, message: e });
    }).finally(_lodash2.default.noop);
    return _this;
  }

  _createClass(FetchContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var finalProps = {};

      if (this.state.endpointData) {

        _lodash2.default.assign(finalProps, this.state.propsData);

        if (this.props.single) {
          if (this.props.flatten) {
            _lodash2.default.assign(finalProps, _lodash2.default.toPairs(this.state.endpointData).map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2);

              var key = _ref4[0];
              var val = _ref4[1];
              return _this2.props.mapper(val, key);
            }).fromPairs().value());
          } else {
            _lodash2.default.assign(finalProps, _defineProperty({}, this.props.injectAs, _lodash2.default.toPairs(this.state.endpointData).map(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2);

              var key = _ref6[0];
              var val = _ref6[1];
              return _this2.props.mapper(val, key);
            }).fromPairs().value()));
          }
        } else {
          _lodash2.default.assign(finalProps, _defineProperty({}, this.props.injectAs, _lodash2.default.map(this.state.endpointData, this.props.mapper)));
        }
      }

      var mappedChildren = [];

      if (!this.props.blocking || this.state.status === READY) {
        mappedChildren = _react2.default.Children.map(this.props.children, function (c) {
          return _react2.default.cloneElement(c, finalProps);
        });
      }

      var className = this.props.className;
      return _react2.default.createElement.apply(_react2.default, [this.props.element, { className: className }].concat(_toConsumableArray(mappedChildren)));
    }
  }]);

  return FetchContainer;
}(_react2.default.Component);

//export {PresentState, LoadingState, EmptyState, ErrorState} from 'snax/containers/loading'


FetchContainer.propTypes = {
  endpoint: _react2.default.PropTypes.string.isRequired,
  endpointOptions: _react2.default.PropTypes.object.isRequired,
  blocking: _react2.default.PropTypes.bool,
  single: _react2.default.PropTypes.bool,
  mapper: _react2.default.PropTypes.func,
  transformer: _react2.default.PropTypes.func,
  element: _react2.default.PropTypes.string,
  flatten: _react2.default.PropTypes.bool,
  injectAs: _react2.default.PropTypes.string
};
FetchContainer.defaultProps = {
  endpointOptions: {},
  single: false,
  blocking: false,
  mapper: _lodash2.default.identity,
  transformer: _lodash2.default.identity,
  element: 'div',
  client: undefined, // Causes API to use default client
  flatten: false,
  injectAs: 'data'
};
exports.default = FetchContainer;