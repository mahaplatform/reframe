'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _reactRedux = require('react-redux');

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _daterange = require('./daterange');

var _daterange2 = _interopRequireDefault(_daterange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          fields = _props.fields;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filter' },
        _react2.default.createElement(_fields2.default, this._getFields()),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { transitionName: 'stack', component: this._firstChild, transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
          active !== null && fields[active].type === 'select' && _react2.default.createElement(_select2.default, this._getSelect()),
          active !== null && fields[active].type === 'daterange' && _react2.default.createElement(_daterange2.default, this._getDateRange())
        )
      );
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onRestart();
    }
  }, {
    key: '_getFields',
    value: function _getFields() {
      return {
        fields: this.props.fields,
        results: this.props.results,
        onChoose: this.props.onChoose,
        onResetAll: this.props.onResetAll
      };
    }
  }, {
    key: '_getSelect',
    value: function _getSelect() {
      return _extends({}, this.props.fields[this.props.active], {
        q: this.props.q,
        query: this.props.query,
        results: this.props.results,
        onBack: this.props.onBack,
        onAbort: this.props.onAbort,
        onType: this.props.onType,
        onLookup: this.props.onLookup,
        onUpdate: this.props.onUpdate,
        onReset: this.props.onReset
      });
    }
  }, {
    key: '_getDateRange',
    value: function _getDateRange() {
      return _extends({}, this.props.fields[this.props.active], {
        q: this.props.q,
        query: this.props.query,
        results: this.props.results,
        onBack: this.props.onBack,
        onAbort: this.props.onAbort,
        onType: this.props.onType,
        onLookup: this.props.onLookup,
        onUpdate: this.props.onUpdate,
        onReset: this.props.onReset
      });
    }
  }, {
    key: '_firstChild',
    value: function _firstChild(props) {
      var childrenArray = _react2.default.Children.toArray(props.children);
      return childrenArray[0] || null;
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  fields: _propTypes2.default.array,
  path: _propTypes2.default.array,
  state: _propTypes2.default.string
};


var mapStateToProps = function mapStateToProps(state) {
  return state.reframe.filter;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Panel);