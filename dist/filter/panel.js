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
          _reactTransitionGroup.TransitionGroup,
          null,
          active !== null && fields[active] && fields[active].type === 'select' && _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { classNames: 'stack', timeout: 500, mountOnEnter: true, unmountOnExit: true },
            _react2.default.createElement(_select2.default, this._getSelect())
          ),
          active !== null && fields[active] && fields[active].type === 'daterange' && _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { classNames: 'stack', timeout: 500, mountOnEnter: true, unmountOnExit: true },
            _react2.default.createElement(_daterange2.default, this._getDateRange())
          )
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
      var _props2 = this.props,
          fields = _props2.fields,
          results = _props2.results,
          onChoose = _props2.onChoose,
          onResetAll = _props2.onResetAll;

      return {
        fields: fields,
        results: results,
        onChoose: onChoose,
        onResetAll: onResetAll
      };
    }
  }, {
    key: '_getSelect',
    value: function _getSelect() {
      var _props3 = this.props,
          active = _props3.active,
          fields = _props3.fields,
          q = _props3.q,
          results = _props3.results,
          onBack = _props3.onBack,
          onChoose = _props3.onChoose,
          onReset = _props3.onReset,
          onUpdate = _props3.onUpdate;

      return _extends({}, fields[active], {
        q: q,
        results: results,
        onBack: onBack,
        onChoose: onChoose,
        onReset: onReset,
        onUpdate: onUpdate
      });
    }
  }, {
    key: '_getDateRange',
    value: function _getDateRange() {
      var _props4 = this.props,
          active = _props4.active,
          fields = _props4.fields,
          q = _props4.q,
          results = _props4.results,
          onBack = _props4.onBack,
          onChoose = _props4.onChoose,
          onReset = _props4.onReset,
          onUpdate = _props4.onUpdate;

      return _extends({}, fields[active], {
        q: q,
        results: results,
        onBack: onBack,
        onChoose: onChoose,
        onReset: onReset,
        onUpdate: onUpdate
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
  active: _propTypes2.default.number,
  fields: _propTypes2.default.array,
  path: _propTypes2.default.array,
  q: _propTypes2.default.string,
  results: _propTypes2.default.object,
  state: _propTypes2.default.string,
  onBack: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  onResetAll: _propTypes2.default.func,
  onRestart: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(state) {
  return state.reframe.filter;
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Panel);