'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = exports.Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this._handleLookup = _lodash2.default.throttle(function (value) {
      _this.props.onLookup(value);
    }, 500);
    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          focused = _props.focused,
          results = _props.results,
          query = _props.query;

      return _react2.default.createElement(
        'div',
        { className: focused ? 'chrome-search-panel focused' : 'chrome-search-panel' },
        _react2.default.createElement(
          'div',
          { className: 'chrome-search-bar' },
          _react2.default.createElement(
            'div',
            { className: 'chrome-search-form' },
            _react2.default.createElement(
              'div',
              { className: 'chrome-search-input' },
              _react2.default.createElement('i', { className: 'search icon' }),
              _react2.default.createElement(
                'div',
                { className: 'ui input' },
                _react2.default.createElement('input', { type: 'text', placeholder: 'Search', ref: 'query', onChange: this._handleType.bind(this), onFocus: this._handleFocus.bind(this), onBlur: this._handleBlur.bind(this), value: query })
              ),
              query.length > 0 && _react2.default.createElement('i', { className: 'remove circle icon', onClick: this._handleResetSearch.bind(this) })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'chrome-search-cancel', onClick: this._handleAbortSearch.bind(this) },
            'Cancel'
          )
        ),
        !results && _react2.default.createElement(
          'div',
          { className: 'chrome-search-landing' },
          _react2.default.createElement(
            'div',
            { className: 'chrome-search-landing-message' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'circular search icon' })
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Search for anything'
            )
          )
        ),
        results && _lodash2.default.isEmpty(results) && _react2.default.createElement(
          'div',
          { className: 'chrome-search-landing' },
          _react2.default.createElement(
            'div',
            { className: 'chrome-search-landing-message' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'circular remove icon' })
            ),
            _react2.default.createElement(
              'h3',
              null,
              'No results matched your query'
            )
          )
        ),
        results && !_lodash2.default.isEmpty(results) && _react2.default.createElement(
          'div',
          { className: 'chrome-search-results' },
          Object.keys(results).map(function (model, modelIndex) {
            if (results[model].length) {
              return _react2.default.createElement(
                'div',
                { key: 'model_' + modelIndex, className: 'chrome-search-section' },
                _react2.default.createElement(
                  'div',
                  { className: 'chrome-search-model' },
                  model
                ),
                results[model].map(function (result, index) {
                  return _react2.default.createElement(
                    'div',
                    { key: 'result_' + modelIndex + '_' + index, className: 'chrome-search-result', onClick: _this2._handleCompleteSearch.bind(_this2, model, index) },
                    _react2.default.createElement(
                      'p',
                      null,
                      _react2.default.createElement(
                        'strong',
                        null,
                        result.text
                      ),
                      _react2.default.createElement('br', null),
                      result.subtext
                    )
                  );
                })
              );
            }
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var query = this.refs.query;
      window.setTimeout(function () {
        query.focus();
      }, 600);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var choice = this.props.choice;

      if (prevProps.choice !== choice) {
        this.context.history.push({ pathname: choice.route, state: 'static' });
        this.context.modal.pop();
      }
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus() {
      this.props.onFocusSearch();
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur() {
      var onAbortSearch = this.props.onAbortSearch;

      window.setTimeout(function () {
        onAbortSearch();
      }, 250);
    }
  }, {
    key: '_handleResetSearch',
    value: function _handleResetSearch() {
      this.props.onResetSearch();
    }
  }, {
    key: '_handleAbortSearch',
    value: function _handleAbortSearch() {
      this.context.modal.pop();
    }
  }, {
    key: '_handleType',
    value: function _handleType(event) {
      var q = event.target.value;
      this.props.onType(q);
      this._handleLookup(q);
    }
  }, {
    key: '_handleCompleteSearch',
    value: function _handleCompleteSearch(model, index) {
      this.props.onCompleteSearch(model, index);
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.contextTypes = {
  modal: _propTypes2.default.object,
  history: _propTypes2.default.object
};
Search.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  choice: _propTypes2.default.number,
  focused: _propTypes2.default.bool,
  query: _propTypes2.default.string,
  results: _propTypes2.default.object,
  onResetSearch: _propTypes2.default.func.isRequired,
  onAbortSearch: _propTypes2.default.func.isRequired,
  onCompleteSearch: _propTypes2.default.func.isRequired,
  onLookup: _propTypes2.default.func.isRequired
};
exports.default = Search;