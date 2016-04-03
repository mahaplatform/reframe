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

var _loading = require('snax/lib/containers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _filter_context = require('../utils/filter_context');

var _filter_context2 = _interopRequireDefault(_filter_context);

var _filter_context_helper = require('../utils/filter_context_helper');

var _filter_context_helper2 = _interopRequireDefault(_filter_context_helper);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchCollection = function (_React$Component) {
  _inherits(FetchCollection, _React$Component);

  function FetchCollection(props) {
    _classCallCheck(this, FetchCollection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FetchCollection).call(this, props));

    _this.state = {
      asyncStatus: 'AWAITING',
      dataPromise: (0, _when2.default)([]) || props.promise,
      resolvedData: undefined
    };

    _this.client = _this.props.client || new _api2.default();
    return _this;
  }

  _createClass(FetchCollection, [{
    key: 'buildRequest',
    value: function buildRequest() {
      if (this.props.promise) {
        return this.props.promise;
      } else {
        var sort = _defineProperty({}, this.props.sort.key, this.props.sort.order);
        var parameters = _filter_context_helper2.default.toQueryParams(new _filter_context2.default({ sort: sort }));
        return this.client.loadJSON(this.props.endpoint, _extends({}, this.props.options, parameters)).tap(function (response) {
          return _logger2.default.info(response);
        }).then(function (response) {
          return response.records;
        });
      }
    }
  }, {
    key: 'collectionProps',
    value: function collectionProps() {
      return _lodash2.default.omit(this.props, ['endpoint', 'promise', 'options']);
    }
  }, {
    key: 'render',
    value: function render() {
      var isLoading = this.state.asyncStatus === 'LOADING' || this.state.asyncStatus === 'UPDATING';
      var isError = this.state.asyncStatus === 'ERROR';
      return _react2.default.createElement(
        _loading2.default,
        { content: this.state.resolvedData, isLoading: isLoading, isError: isError },
        _react2.default.createElement(
          _loading.LoadingState,
          null,
          _react2.default.createElement(_index2.default, _extends({ records: [] }, this.collectionProps(), { status: 'LOADING' }))
        ),
        _react2.default.createElement(
          _loading.EmptyState,
          null,
          _react2.default.createElement(_index2.default, _extends({ records: [] }, this.collectionProps()))
        ),
        _react2.default.createElement(
          _loading.PresentState,
          null,
          _react2.default.createElement(_index2.default, _extends({ records: this.state.resolvedData }, this.collectionProps(), { status: this.state.asyncStatus === 'UPDATING' ? 'LOADING' : null }))
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.buildRequest().then(function (data) {
        return _this2.setState({ resolvedData: data, asyncStatus: 'COMPLETE' });
      }).catch(function (error) {
        _logger2.default.error(error);
        _this2.setState({ asyncStatus: 'ERROR', resolvedData: null });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var dataPromise = this.buildRequest().then(function (data) {
        return _this3.setState({ resolvedData: data, asyncStatus: 'COMPLETE' });
      }).catch(function (error) {
        return _this3.setState({ asyncStatus: 'ERROR', resolvedData: null });
      });
      this.setState({ asyncStatus: 'UPDATING', dataPromise: dataPromise });
    }
  }]);

  return FetchCollection;
}(_react2.default.Component);

FetchCollection.propTypes = {
  endpoint: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.object,
  promise: _react2.default.PropTypes.object,
  empty: _react2.default.PropTypes.string,
  client: _react2.default.PropTypes.object
};
FetchCollection.defaultProps = {
  client: null
};
exports.default = FetchCollection;