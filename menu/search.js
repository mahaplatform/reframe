'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _typeahead = require('../ui/typeahead');

var _typeahead2 = _interopRequireDefault(_typeahead);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

    _this.endpoint = props.endpoint || _config2.default.get('menu.search.p', '/search');
    _this.resultField = props.resultField || _config2.default.get('menu.search.resultField', 'results');
    _this.query = props.query || _config2.default.get('menu.search.queryParam', 'q');
    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui transparent search item' },
        _react2.default.createElement('i', { className: 'search icon' }),
        _react2.default.createElement(_typeahead2.default, {
          ref: 'input',
          categories: true,
          endpoint: this.endpoint,
          query: this.query,
          resultField: this.resultField,
          placeholder: this.props.placeholder,
          onChooseResult: this.chooseResult.bind(this),
          itemComponent: this.props.itemComponent,
          clearOnBlur: true
        })
      );
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.input.clear();
    }
  }, {
    key: 'chooseResult',
    value: function chooseResult(result, type) {
      _logger2.default.log(type, result);
      var route = _lodash2.default.get(this.props.routes, type, null);
      if (route) {
        this.context.history.push(_lodash2.default.template(route, { interpolate: _config2.default.get('menu.search.urlInterpolate', _lodash2.default.templateSettings.interpolate) })(result));
      }
      this.refs.input.clear();
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  endpoint: _react2.default.PropTypes.string,
  resultField: _react2.default.PropTypes.string,
  query: _react2.default.PropTypes.string,
  itemComponent: _react2.default.PropTypes.element,
  placeholder: _react2.default.PropTypes.string
};
Search.defaultProps = {
  placeholder: 'Search'
};
Search.contextTypes = {
  history: _react2.default.PropTypes.object
};
exports.default = Search;