'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeaheadResultList = exports.TypeaheadDefaultResult = exports.TypeaheadEmptyResult = exports.TypeaheadResultLoader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _query = require('../../utils/query');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      errorLoadingResults: false,
      showResults: false
    };

    _this.inputChangeHandler = _lodash2.default.throttle(_this.onInputChange.bind(_this), _this.props.requestThrottle, { leading: false });

    _this.api = new _api2.default(props.client);
    return _this;
  }

  _createClass(Typeahead, [{
    key: 'render',
    value: function render() {
      var _state = this.state;
      var results = _state.results;
      var searchValue = _state.searchValue;
      var isLoadingResults = _state.isLoadingResults;
      var showResults = _state.showResults;
      var _props = this.props;
      var placeholder = _props.placeholder;
      var itemComponent = _props.itemComponent;
      var onChooseResult = _props.onChooseResult;


      var classes = ['typeahead'];
      classes.push(true ? 'top' : 'bottom');
      if (showResults && results.length > 0) {
        classes.push('active');
      }

      var ListComponent = this.props.listComponent || TypeaheadResultList;

      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        _react2.default.createElement(
          'div',
          { className: 'ui input' },
          _react2.default.createElement('input', _extends({ type: 'text',
            ref: 'input',
            value: searchValue
          }, this.attachInputCallbacks(), {
            placeholder: placeholder }))
        ),
        function () {
          if (isLoadingResults && _lodash2.default.isEmpty(results)) {
            return _react2.default.createElement(TypeaheadResultLoader, null);
          } else if (showResults && !_lodash2.default.isEmpty(results)) {
            return _react2.default.createElement(ListComponent, { results: results, onChooseResult: onChooseResult,
              itemComponent: itemComponent });
          } else if (showResults && searchValue.length >= 1) {
            return _react2.default.createElement(TypeaheadEmptyResult, null);
          } else {
            // Show nothing
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var component = this;
      this.closeListener = function (e) {
        if (e.target !== component.refs.input) {
          component.hideResults();
        }
      };
      document.addEventListener('click', this.closeListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closeListener);
    }
  }, {
    key: 'attachInputCallbacks',
    value: function attachInputCallbacks() {
      var _this2 = this;

      return {
        onFocus: function onFocus() {
          _this2.setState({ focused: true, showResults: true });
        },
        onBlur: function onBlur() {
          // this.setState({ focused: false })
        },
        onChange: function onChange(event) {
          _this2.setState({ searchValue: event.target.value, isLoadingResults: true });
          _this2.inputChangeHandler();
        }
      };
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange() {
      var _this3 = this;

      var _state2 = this.state;
      var searchValue = _state2.searchValue;
      var queryCounter = _state2.queryCounter;
      var _props2 = this.props;
      var endpoint = _props2.endpoint;
      var query = _props2.query;
      var extraQueries = _props2.extraQueries;
      var resultField = _props2.resultField;


      if (_lodash2.default.isEmpty(searchValue)) {
        this.setState({
          queryCounter: this.state.queryCounter + 1,
          isLoadingResults: false,
          errorLoadingResults: false,
          showResults: false,
          results: []
        });
        return;
      }

      var requestQueryString = (0, _query.objectToQueryString)(_extends({}, extraQueries, _defineProperty({}, query, searchValue)));
      var queryId = queryCounter + 1;

      this.setState({ queryCounter: queryId, errorLoadingResults: false });

      this.api.loadJSON(endpoint + requestQueryString).then(function (response) {
        // Tracking the queryId ensures only the latest result is processed, in case multiple
        // requests arrive out of order.
        if (_this3.state.queryCounter == queryId) {
          var newResults = resultField ? response[resultField] : response;
          _this3.setState({ results: newResults || [], isLoadingResults: false, showResults: true });
        }
      }).catch(function (error) {
        return _this3.setState({ errorLoadingResults: true, showResults: true });
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
        searchValue: '',
        showResults: false
      });
    }
  }, {
    key: 'hideResults',
    value: function hideResults() {
      this.setState({
        showResults: false
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
  extraQueries: _react2.default.PropTypes.object,
  resultField: _react2.default.PropTypes.string,
  client: _react2.default.PropTypes.function,
  requestThrottle: _react2.default.PropTypes.number,
  itemComponent: _react2.default.PropTypes.element,
  listComponent: _react2.default.PropTypes.element
};
Typeahead.defaultProps = {
  onChange: _lodash2.default.noop,
  onChooseResult: _lodash2.default.noop,
  query: 'q',
  extraQueries: {},
  resultField: 'results',
  requestThrottle: 500,
  listComponent: TypeaheadResultList
};
exports.default = Typeahead;
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
      { className: 'empty' },
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
    { className: 'item', onClick: onClick },
    _react2.default.createElement(
      'div',
      { className: 'title' },
      result.title || result.name || (result.first_name ? result.first_name + ' ' + result.last_name : null) || result.label || result.id
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
      var _props3 = this.props;
      var results = _props3.results;
      var itemComponent = _props3.itemComponent;
      var onChooseResult = _props3.onChooseResult;

      var clickHandler = function clickHandler(r, e) {
        e.preventDefault();
        e.stopPropagation();
        onChooseResult(r);
      };
      return _react2.default.createElement(
        'div',
        { className: 'ui typeahead results' },
        _lodash2.default.map(results, function (result) {
          return _react2.default.createElement(itemComponent, { result: result, onClick: _lodash2.default.partial(clickHandler, result) });
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