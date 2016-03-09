'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _history = require('../../utils/history');

var _history2 = _interopRequireDefault(_history);

var _config = require('../../utils/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNINITIALIZED = 'uninitialized';
var AWAITING = 'awaiting';
var READY = 'ready';
var ERROR = 'error';

var InfiniteContainer = function (_React$Component) {
  _inherits(InfiniteContainer, _React$Component);

  function InfiniteContainer(props) {
    _classCallCheck(this, InfiniteContainer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteContainer).call(this, props));

    _this.state = {
      status: AWAITING,
      endpointData: [],
      propsData: null,
      message: null,
      nextPage: null,
      isAtEnd: false,
      totalRecords: 0
    };

    _this.api = new _api2.default(props.client || undefined);

    _this.onTerminate = _lodash2.default.once(function () {
      _this.forceUpdate();
      props.onTerminate();
    });
    return _this;
  }

  _createClass(InfiniteContainer, [{
    key: 'makeRequest',
    value: function makeRequest(location) {
      var _this2 = this;

      if (this.state.isAtEnd) {
        return this.onTerminate();
      }

      this.setState({
        status: AWAITING
      });

      var propsPromises = (0, _lodash2.default)(_extends({}, this.props)).omit(['className', 'endpoint', 'client', 'element', 'endpointOptions', 'children', 'getNextPageUrl', 'mapper', 'transformer', 'single', 'flatten', 'documentSelector', 'bottomThreshold', 'blocking', 'propsData', 'endpointData', 'nextPage']).mapValues(function (p) {
        return (0, _when2.default)(p);
      }).value();

      var query = _history2.default.createLocation(location).query;

      var endpointPromise = this.api.loadJSON(location, _extends({}, query, this.props.endpointOptions)).tap(function (e) {
        return _logger2.default.log(e);
      });
      var propsPromiseObject = _keys2.default.all(propsPromises).tap(function (e) {
        return _logger2.default.log(e);
      });

      _when2.default.all([endpointPromise, propsPromiseObject]).tap(function (r) {
        return _logger2.default.log(r);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var endpointData = _ref2[0];
        var propsData = _ref2[1];

        var nextPage = _this2.props.getNextPageUrl(endpointData);
        if (nextPage) {
          _this2.setState({
            status: READY,
            endpointData: [].concat(_toConsumableArray(_this2.state.endpointData), _toConsumableArray(endpointData.records)),
            totalRecords: endpointData.total_records,
            propsData: propsData,
            nextPage: nextPage
          });
        } else {
          _this2.setState({
            status: READY,
            endpointData: [].concat(_toConsumableArray(_this2.state.endpointData), _toConsumableArray(endpointData.records)),
            totalRecords: endpointData.total_records,
            propsData: propsData,
            nextPage: nextPage,
            isAtEnd: true
          });
        }
      }).catch(function (e) {
        return _this2.setState({ status: ERROR, message: e });
      }).finally(_lodash2.default.noop);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollListener = _lodash2.default.bind(this.handleScroll, this);
      window.addEventListener('scroll', this.scrollListener);
      this.hitBottomFn = _lodash2.default.debounce(_lodash2.default.bind(this.hitBottom, this), 1000);
      this.makeRequest(this.props.endpoint);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var windowHeight = window.innerHeight;
      var documentHeight = parseInt(getComputedStyle(document.getElementById(this.props.documentSelector)).height.split('px')[0]);
      var topOfView = window.pageYOffset;
      var bottomOfView = topOfView + windowHeight;
      var distanceFromBottom = documentHeight - bottomOfView;

      //console.log(windowHeight, documentHeight, topOfView, bottomOfView, distanceFromBottom)

      // There's a dirty trick where the browser thinks it's below the bottom while the page is loading.
      // The distanceFromBottom > 0 stops the trigger.
      if (distanceFromBottom < (this.props.bottomThreshold || 100) && this.state.status !== AWAITING) {
        _lodash2.default.defer(this.hitBottomFn.bind(this));
      }
    }
  }, {
    key: 'hitBottom',
    value: function hitBottom() {
      this.makeRequest(this.state.nextPage);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var finalProps = {
        status: this.state.status,
        isAtEnd: this.state.isAtEnd,
        totalRecords: this.state.totalRecords
      };

      if (this.state.endpointData) {

        _lodash2.default.assign(finalProps, this.state.propsData);

        if (this.props.single) {
          if (this.props.flatten) {
            _lodash2.default.assign(finalProps, _lodash2.default.toPairs(this.state.endpointData).map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2);

              var key = _ref4[0];
              var val = _ref4[1];
              return _this3.props.mapper(val, key);
            }).fromPairs().value());
          } else {
            _lodash2.default.assign(finalProps, _defineProperty({}, this.props.injectAs, _lodash2.default.toPairs(this.state.endpointData).map(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2);

              var key = _ref6[0];
              var val = _ref6[1];
              return _this3.props.mapper(val, key);
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
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        status: AWAITING,
        endpointData: [],
        propsData: null,
        message: null,
        nextPage: null,
        isAtEnd: false
      });
      this.makeRequest(this.props.endpoint);
    }
  }]);

  return InfiniteContainer;
}(_react2.default.Component);

//export {PresentState, LoadingState, EmptyState, ErrorState} from 'snax/containers/loading'


InfiniteContainer.propTypes = {
  endpoint: _react2.default.PropTypes.string.isRequired,
  endpointOptions: _react2.default.PropTypes.object.isRequired,
  blocking: _react2.default.PropTypes.bool,
  single: _react2.default.PropTypes.bool,
  mapper: _react2.default.PropTypes.func,
  transformer: _react2.default.PropTypes.func,
  element: _react2.default.PropTypes.string,
  flatten: _react2.default.PropTypes.bool,
  injectAs: _react2.default.PropTypes.string,
  getNextPageUrl: _react2.default.PropTypes.function,
  documentSelector: _react2.default.PropTypes.string,
  bottomThreshold: _react2.default.PropTypes.number
};
InfiniteContainer.defaultProps = {
  endpointOptions: {},
  single: false,
  blocking: false,
  mapper: _lodash2.default.identity,
  transformer: _lodash2.default.identity,
  element: 'div',
  client: undefined, // Causes API to use default client
  flatten: false,
  injectAs: 'data',
  getNextPageUrl: function getNextPageUrl(_ref7) {
    var links = _ref7.links;
    return links.next || null;
  },
  documentSelector: 'app-container',
  bottomThreshold: 300,
  onTerminate: _lodash2.default.noop
};
exports.default = InfiniteContainer;