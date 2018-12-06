'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttons = require('../../components/buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoField = function (_React$Component) {
  _inherits(VideoField, _React$Component);

  function VideoField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoField.__proto__ || Object.getPrototypeOf(VideoField)).call.apply(_ref, [this].concat(args))), _this), _this._handlePicker = _this._handlePicker.bind(_this), _this._handleRemove = _this._handleRemove.bind(_this), _this._handleSet = _this._handleSet.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoField, [{
    key: 'render',
    value: function render() {
      var src = this.props.src;

      if (!src) return _react2.default.createElement(_button2.default, this._getNewButton());
      return _react2.default.createElement(
        'div',
        { className: 'reframe-videofield' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-videofield-player' },
          _react2.default.createElement('iframe', this._getIframe())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-videofield-footer' },
          _react2.default.createElement(_buttons2.default, this._getEditButtons())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady,
          onFetchLink = _props.onFetchLink;

      if (defaultValue) onFetchLink(defaultValue);
      if (onReady) onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          link_id = _props2.link_id,
          onChange = _props2.onChange;

      if (link_id !== prevProps.link_id) {
        onChange(link_id);
      }
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
    key: '_getPicker',
    value: function _getPicker() {
      var _props3 = this.props,
          cid = _props3.cid,
          onCreateLink = _props3.onCreateLink;

      return {
        cid: cid,
        onCreateLink: onCreateLink
      };
    }
  }, {
    key: '_getEditButtons',
    value: function _getEditButtons() {
      return {
        buttons: [{
          label: 'Remove',
          color: 'red',
          handler: this._handleRemove
        }, {
          label: 'Change',
          color: 'green',
          handler: this._handlePicker
        }]
      };
    }
  }, {
    key: '_getNewButton',
    value: function _getNewButton() {
      return {
        className: 'ui blue button',
        label: 'Embed Video',
        handler: this._handlePicker
      };
    }
  }, {
    key: '_handlePicker',
    value: function _handlePicker() {
      this.context.form.push(_react2.default.createElement(_picker2.default, this._getPicker()));
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove() {
      this.props.onRemove();
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(src) {
      this.props.onSet(src);
    }
  }]);

  return VideoField;
}(_react2.default.Component);

VideoField.contextTypes = {
  form: _propTypes2.default.object
};
VideoField.propTypes = {
  defaultValue: _propTypes2.default.number,
  src: _propTypes2.default.string,
  link_id: _propTypes2.default.number,
  onFetchLink: _propTypes2.default.func,
  onCreateLink: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
exports.default = VideoField;