'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _message = require('../../components/message');

var _message2 = _interopRequireDefault(_message);

var _loader = require('../../components/loader');

var _loader2 = _interopRequireDefault(_loader);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Picker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this._handleBack = _this._handleBack.bind(_this), _this._handleDone = _this._handleDone.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Picker, [{
    key: 'render',
    value: function render() {
      var status = this.props.status;

      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(
          'div',
          { className: 'reframe-videofield-picker' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-videofield-picker-header' },
            _react2.default.createElement('input', this._getInput())
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-videofield-picker-body' },
            status === 'pending' && _react2.default.createElement(_message2.default, this._getPendingMessage()),
            status === 'loading' && _react2.default.createElement(_loader2.default, null),
            status === 'success' && _react2.default.createElement(
              'div',
              { className: 'reframe-videofield-player' },
              _react2.default.createElement('iframe', this._getIframe())
            ),
            status === 'failure' && _react2.default.createElement(_message2.default, this._getFailureMessage())
          )
        )
      );
    }
  }, {
    key: '_getPendingMessage',
    value: function _getPendingMessage() {
      return {
        icon: 'play',
        title: 'Paste URL',
        text: 'Paste the url of a video to preiew its contents'
      };
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      return {
        title: 'Choose Video',
        leftItems: [{ icon: 'chevron-left', handler: this._handleBack }],
        rightItems: [{ label: 'Done', handler: this._handleDone }]
      };
    }
  }, {
    key: '_getIframe',
    value: function _getIframe() {
      var src = this.props.src;

      return {
        src: src,
        frameBorder: 0,
        allowFullScreen: true
      };
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      return {
        type: 'text',
        placeholder: 'Paste a YouTube or Vimeo URL',
        onChange: this._handleChange.bind(this)
      };
    }
  }, {
    key: '_getFailureMessage',
    value: function _getFailureMessage() {
      return {
        icon: 'remove',
        title: 'Unable to load',
        text: 'We were unable to load your url and play the video'
      };
    }
  }, {
    key: '_handleBack',
    value: function _handleBack() {
      this.context.form.pop();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(e) {
      this.props.onCreateLink(e.target.value);
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.context.form.pop();
    }
  }]);

  return Picker;
}(_react2.default.Component);

Picker.contextTypes = {
  form: _propTypes2.default.object
};
Picker.propTypes = {
  src: _propTypes2.default.string,
  status: _propTypes2.default.string,
  onCreateLink: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    src: state.reframe.videofield[props.cid].src,
    status: state.reframe.videofield[props.cid].status
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Picker);