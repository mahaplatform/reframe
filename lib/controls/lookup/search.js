'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
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
      this.context.modal.pop();
    }
  }]);

  return Search;
}(_react2.default.Component);

// since we sent this component up to the modal, we need this to communicate
// back with the parent


Search.contextTypes = {
  modal: _propTypes2.default.object
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