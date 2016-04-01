'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeaheadResultList = exports.TypeaheadDefaultResult = exports.TypeaheadEmptyResult = exports.TypeaheadResultLoader = exports.TypeaheadInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typeahead = function (_React$Component) {
  _inherits(Typeahead, _React$Component);

  function Typeahead(props) {
    _classCallCheck(this, Typeahead);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Typeahead).call(this, props));

    _this.state = {
      results: [],
      searchValue: '',
      isLoadingResults: false,
      focused: false,
      resultCursor: -1,
      queryCounter: 0,
      errorLoadingResults: false
    };

    _this.inputChangeHandler = _lodash2.default.throttle(_this.onInputChange.bind(_this), _this.props.requestThrottle, { leading: false });

    _this.api = new _api2.default(props.client);
    return _this;
  }

  _createClass(Typeahead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'typeahead' },
        _react2.default.createElement(TypeaheadInput, _extends({}, this.attachInputCallbacks(), { value: this.state.searchValue })),
        function () {
          if (_this2.state.isLoadingResults && _lodash2.default.isEmpty(_this2.state.results)) {
            return _react2.default.createElement(TypeaheadResultLoader, null);
          } else if (_this2.state.results.length > 0) {
            return _react2.default.createElement(TypeaheadResultList, { results: _this2.state.results, onChooseResult: _this2.props.onChooseResult });
          } else if (_this2.state.searchValue.length >= 1) {
            return _react2.default.createElement(TypeaheadEmptyResult, null);
          } else {
            // Show nothing
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'attachInputCallbacks',
    value: function attachInputCallbacks() {
      var _this3 = this;

      return {
        onFocus: function onFocus() {
          _this3.setState({ focused: true });
        },
        onBlur: function onBlur() {
          _this3.setState({ focused: false });
        },
        onChange: function onChange(event) {
          _this3.setState({ searchValue: event.target.value, isLoadingResults: true });
          _this3.inputChangeHandler();
        }
      };
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange() {
      var _this4 = this;

      var searchValue = this.state.searchValue;


      if (_lodash2.default.isEmpty(searchValue)) {
        this.setState({
          queryCounter: this.state.queryCounter + 1,
          isLoadingResults: false,
          errorLoadingResults: false,
          results: []
        });
        return;
      }

      var queryId = this.state.queryCounter + 1;
      this.setState({ queryCounter: queryId, errorLoadingResults: false });
      this.api.loadJSON(this.props.endpoint + '?' + this.props.query + '=' + encodeURIComponent(searchValue)).then(function (response) {
        // Tracking the queryId ensures only the latest result is processed, in case multiple
        // requests arrive out of order.
        if (_this4.state.queryCounter == queryId) {
          _this4.setState({ results: response[_this4.props.resultField] || [], isLoadingResults: false });
        }
      }).catch(function (error) {
        return _this4.setState({ errorLoadingResults: true });
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({
        queryCounter: this.state.queryCounter + 1,
        isLoadingResults: false,
        errorLoadingResults: false,
        results: [],
        searchValue: ''
      });
    }
  }]);

  return Typeahead;
}(_react2.default.Component);

Typeahead.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  endpoint: _react2.default.PropTypes.string,
  query: _react2.default.PropTypes.string,
  resultField: _react2.default.PropTypes.string,
  client: _react2.default.PropTypes.function,
  requestThrottle: _react2.default.PropTypes.number
};
Typeahead.defaultProps = {
  onChange: _lodash2.default.noop,
  onChooseResult: _lodash2.default.noop,
  query: 'q',
  resultField: 'results',
  requestThrottle: 500
};
exports.default = Typeahead;
var TypeaheadInput = exports.TypeaheadInput = function TypeaheadInput(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ui input' },
    _react2.default.createElement('input', { type: 'text', value: props.value, onChange: props.onChange, placeholder: props.placeholder })
  );
};

var TypeaheadResultLoader = exports.TypeaheadResultLoader = function TypeaheadResultLoader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ui typeahead results' },
    _react2.default.createElement(
      'div',
      { className: 'ui text loader' },
      'Loading'
    )
  );
};

var TypeaheadEmptyResult = exports.TypeaheadEmptyResult = function TypeaheadEmptyResult(props) {
  return _react2.default.createElement(
    'div',
    { className: 'ui typeahead results' },
    _react2.default.createElement(
      'div',
      { className: 'ui centered text' },
      'No Results'
    )
  );
};

var TypeaheadDefaultResult = exports.TypeaheadDefaultResult = function TypeaheadDefaultResult(_ref) {
  var _ref$onClick = _ref.onClick;
  var onClick = _ref$onClick === undefined ? _lodash2.default.noop : _ref$onClick;
  var result = _ref.result;

  return _react2.default.createElement(
    'div',
    { className: 'ui typeahead result item', onClick: _lodash2.default.partial(onClick, result) },
    _react2.default.createElement(
      'div',
      { className: 'title' },
      result.title || result.name || result.first_name ? result.first_name + ' ' + result.last_name : null || result.label || result.id
    ),
    _react2.default.createElement(
      'div',
      { className: 'description' },
      result.description || result.details
    )
  );
};

var TypeaheadResultList = exports.TypeaheadResultList = function (_React$Component2) {
  _inherits(TypeaheadResultList, _React$Component2);

  function TypeaheadResultList() {
    _classCallCheck(this, TypeaheadResultList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TypeaheadResultList).apply(this, arguments));
  }

  _createClass(TypeaheadResultList, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var results = _props.results;
      var itemComponent = _props.itemComponent;
      var onChooseResult = _props.onChooseResult;

      return _react2.default.createElement(
        'div',
        { className: 'ui typeahead results' },
        _lodash2.default.map(results, function (result) {
          return _react2.default.createElement(itemComponent, { result: result, onClick: onChooseResult });
        })
      );
    }
  }]);

  return TypeaheadResultList;
}(_react2.default.Component);

TypeaheadResultList.propTypes = {
  results: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
  itemComponent: _react2.default.PropTypes.element,
  onChooseResult: _react2.default.PropTypes.func
};
TypeaheadResultList.defaultProps = {
  results: [],
  itemComponent: TypeaheadDefaultResult,
  onChooseResult: _lodash2.default.noop
};