'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _api = require('../../utils/api');

var _api2 = _interopRequireDefault(_api);

var _states = require('./states');

var _states2 = _interopRequireDefault(_states);

var _countries = require('./countries');

var _countries2 = _interopRequireDefault(_countries);

var _timezones = require('./timezones');

var _timezones2 = _interopRequireDefault(_timezones);

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

var DynamicControl = function (_React$Component) {
  _inherits(DynamicControl, _React$Component);

  function DynamicControl(props) {
    _classCallCheck(this, DynamicControl);

    var _this = _possibleConstructorReturn(this, (DynamicControl.__proto__ || Object.getPrototypeOf(DynamicControl)).call(this, props));

    _this.state = {
      status: UNINITIALIZED
    };
    return _this;
  }

  _createClass(DynamicControl, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var datasource = this.props.datasource;

      var controlProps = _.omit(this.props, ['datasource']);
      var finalProps = _extends({}, controlProps, {
        status: this.state.status
      });
      if (datasource) {
        (function () {
          var source = _.isString(datasource) ? datasource : datasource.source;
          var key = datasource.key ? datasource.key : null;
          var value = datasource.value ? datasource.value : null;
          if (source == 'countries') {
            key = key || 'abbreviation';
            value = value || 'name';
            finalProps.options = _.map(_this2.getCountries(), function (country) {
              return { key: country[key], value: country[value] };
            });
          } else if (source == 'states') {
            key = key || 'abbreviation';
            value = value || 'name';
            finalProps.options = _.map(_this2.getStates(), function (state) {
              return { key: state[key], value: state[value] };
            });
          } else if (source == 'timezones') {
            key = key || 'offset';
            value = value || 'name';
            finalProps.options = _.map(_this2.getTimezones(), function (timezone) {
              return { key: timezone[key], value: timezone[value] };
            });
          }
        })();
      }
      var mappedChildren = [];
      mappedChildren = _react2.default.Children.map(this.props.children, function (c) {
        return _react2.default.cloneElement(c, finalProps);
      });
      return _react2.default.createElement.apply(_react2.default, ['div', {}].concat(_toConsumableArray(mappedChildren)));
    }
  }, {
    key: 'getCountries',
    value: function getCountries() {
      return _.map(_countries2.default, function (country) {
        return { abbreviation: country[0], name: country[1] };
      });
    }
  }, {
    key: 'getStates',
    value: function getStates() {
      return _.map(_states2.default, function (state) {
        return { abbreviation: state[0], name: state[1] };
      });
    }
  }, {
    key: 'getTimezones',
    value: function getTimezones() {
      return _.map(_timezones2.default, function (timezone) {
        return { offset: timezone[0], name: timezone[1] };
      });
    }
  }]);

  return DynamicControl;
}(_react2.default.Component);

DynamicControl.propTypes = {
  datasource: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    source: _react2.default.PropTypes.string,
    key: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string
  })])
};
DynamicControl.defaultProps = {
  datasource: null
};
exports.default = DynamicControl;