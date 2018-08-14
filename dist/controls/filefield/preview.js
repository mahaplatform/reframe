'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _image_file_token = require('./image_file_token');

var _image_file_token2 = _interopRequireDefault(_image_file_token);

var _plain_file_token = require('./plain_file_token');

var _plain_file_token2 = _interopRequireDefault(_plain_file_token);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: 'render',
    value: function render() {

      var dpis = [1, 2];

      var file = this.props.file;


      var content_type = file.contentType || file.asset.content_type;

      var isImage = content_type.split('/')[0] === 'image';

      var type = isImage ? 'image' : 'plain';

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filefield-token ' + type },
        file.status === 'added' && _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-progress' },
          _react2.default.createElement(
            'div',
            { className: 'ui green progress' },
            _react2.default.createElement('div', { className: 'bar', style: { width: 0 } })
          )
        ),
        file.status === 'uploading' && _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-progress' },
          _react2.default.createElement(
            'div',
            { className: 'ui green progress' },
            _react2.default.createElement(
              'div',
              { className: 'bar', style: { width: file.progress + '%' } },
              _react2.default.createElement(
                'div',
                { className: 'progress' },
                file.progress,
                '%'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-remove', onClick: this._handleRemove.bind(this) },
          isImage ? _react2.default.createElement('i', { className: 'fa fa-fw fa-times-circle' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-times' })
        ),
        isImage ? _react2.default.createElement(_image_file_token2.default, this._getImageFile()) : _react2.default.createElement(_plain_file_token2.default, this._getPlainFile())
      );
    }
  }, {
    key: '_getImageFile',
    value: function _getImageFile() {
      var _props = this.props,
          file = _props.file,
          preview = _props.preview;

      return {
        file: file.asset,
        preview: preview
      };
    }
  }, {
    key: '_getPlainFile',
    value: function _getPlainFile() {
      var file = this.props.file;

      var file_name = file.fileName || file.asset.file_name;
      var file_size = file.fileSize || file.asset.file_size;
      return {
        file_name: file_name,
        file_size: file_size
      };
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove() {
      this.props.onRemove();
    }
  }]);

  return Preview;
}(_react2.default.Component);

Preview.propTypes = {
  file: _propTypes2.default.object,
  preview: _propTypes2.default.string,
  onRemove: _propTypes2.default.func
};
exports.default = Preview;