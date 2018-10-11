'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(_options2.default, this.props)
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var label = this.props.label;

      return {
        title: 'Choose ' + label,
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }]
      };
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onEnd();
      this.context.form.pop();
    }
  }]);
  return Search;
}(_react2.default.Component);

// since we sent this component up to the modal, we need this to communicate
// back with the parent


Search.contextTypes = {
  form: _propTypes2.default.object
};
Search.propTypes = {
  label: _propTypes2.default.string,
  selected: _propTypes2.default.number,
  onCancel: _propTypes2.default.func,
  onEnd: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state, props) {
  return {
    q: state.reframe.lookup[props.cid].q
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Search);