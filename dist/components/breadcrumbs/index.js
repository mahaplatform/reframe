'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _breadcrumb = require('./breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    var _this = _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call(this, props));

    _this.state = {
      errors: _this._validateProps(props)
    };
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      if (!_lodash2.default.isEmpty(this.state.errors)) {
        console.warn(this.state.errors);
        return _react2.default.createElement(
          'div',
          null,
          'Unable to load component'
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'breadcrumbs' },
        _react2.default.createElement(
          'div',
          { className: 'ui breadcrumb' },
          this.props.breadcrumbs.map(function (item, index) {
            return _react2.default.createElement(_breadcrumb2.default, _extends({ key: 'breadcrumb_' + index
            }, item));
          })
        )
      );
    }
  }, {
    key: '_validateProps',
    value: function _validateProps(props) {
      var errors = [];
      if (!props.breadcrumbs) {
        errors.push('You must specify a breadcrumbs property');
      }
      return errors;
    }
  }]);

  return Breadcrumbs;
}(_react2.default.Component);

Breadcrumbs.propTypes = {
  breadcrumbs: _react2.default.PropTypes.array.isRequired
};
exports.default = Breadcrumbs;