'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _resumablejs = require('resumablejs');

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileField = function (_React$Component) {
  _inherits(FileField, _React$Component);

  function FileField() {
    _classCallCheck(this, FileField);

    return _possibleConstructorReturn(this, (FileField.__proto__ || Object.getPrototypeOf(FileField)).apply(this, arguments));
  }

  _createClass(FileField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          files = _props.files,
          multiple = _props.multiple,
          prompt = _props.prompt,
          status = _props.status;

      var classes = ['filefield', status];
      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        files.map(function (file, index) {
          return _react2.default.createElement(
            'div',
            { key: 'filefield_' + index, className: 'reframe-filefield-token' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filefield-details' },
              _lodash2.default.includes(['added'], file.status) && _react2.default.createElement('div', { className: 'ui small progress' }),
              file.status === 'uploading' && _react2.default.createElement(
                'div',
                { className: 'reframe-filefield-progress' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui green progress' },
                  _react2.default.createElement('div', { className: 'bar', style: { width: file.progress + '%' } })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  file.fileName,
                  ' (',
                  (0, _bytes2.default)(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase(),
                  ')'
                )
              ),
              file.status === 'success' && _react2.default.createElement(
                'div',
                { className: 'reframe-filefield-preview' },
                _react2.default.createElement('img', { src: '/imagecache/fit=cover&w=300&h=300' + file.asset.path, title: file.asset.original_file_name }),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-filefield-preview-caption' },
                  _react2.default.createElement(
                    'p',
                    null,
                    file.fileName,
                    ' (',
                    (0, _bytes2.default)(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase(),
                    ')'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-filefield-remove' },
              _react2.default.createElement('i', { className: 'remove circle icon', onClick: _this2._handleRemoveFile.bind(_this2, file.uniqueIdentifier) })
            )
          );
        }),
        (files.length === 0 || multiple === true) && _react2.default.createElement(
          'div',
          { ref: function ref(node) {
              return _this2.button = node;
            }, className: 'ui browse button' },
          prompt
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onLoadFiles = _props2.onLoadFiles,
          onSetReady = _props2.onSetReady;

      if (defaultValue) {
        var ids = !_lodash2.default.isArray(defaultValue) ? [defaultValue] : defaultValue;
        onLoadFiles('/api/admin/team/assets', ids);
      } else {
        onSetReady();
      }
      this._initializeResumable();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          files = _props3.files,
          status = _props3.status,
          onReady = _props3.onReady;

      if (status !== prevProps.status && prevProps.status === 'pending') {
        onReady();
      }
      if (files.length > prevProps.files.length) {
        if (files.filter(function (file) {
          return file.status === 'added';
        }).length > 0) {
          this._handleUploadBegin();
        }
      } else if (files.length < prevProps.files.length) {
        this._initializeResumable();
      }
    }
  }, {
    key: '_handleReady',
    value: function _handleReady() {
      this.props.onReady();
      this._initializeResumable();
    }
  }, {
    key: '_initializeResumable',
    value: function _initializeResumable() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          multiple = _props4.multiple,
          token = _props4.token;

      this.resumable = new _resumablejs2.default({
        target: endpoint,
        chunkSize: 1024 * 128,
        maxFiles: multiple ? undefined : 1,
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      this.resumable.on('fileAdded', this._handleFileAdded.bind(this));
      this.resumable.on('fileProgress', this._handleUploadProgress.bind(this));
      this.resumable.on('fileSuccess', this._handleUploadSuccess.bind(this));
      this.resumable.on('error', this._handleUploadFailure.bind(this));
      this.resumable.on('complete', this._handleUploadComplete.bind(this));
      this.resumable.assignBrowse(this.button);
    }
  }, {
    key: '_handleFileAdded',
    value: function _handleFileAdded(file) {
      this.props.onAddFile(file.uniqueIdentifier, file.file.name, file.file.size, file.file.type, file.chunks.length);
    }
  }, {
    key: '_handleUploadBegin',
    value: function _handleUploadBegin() {
      this.resumable.upload();
      this.props.onUploadBegin();
      this.props.onBusy();
    }
  }, {
    key: '_handleUploadProgress',
    value: function _handleUploadProgress(file) {
      this.props.onUploadProgress(file.file.uniqueIdentifier, file.progress());
    }
  }, {
    key: '_handleUploadFailure',
    value: function _handleUploadFailure(file, message) {
      this.props.onUploadFailure(message);
      this.props.onBusy();
    }
  }, {
    key: '_handleUploadSuccess',
    value: function _handleUploadSuccess(file, message) {
      var asset = JSON.parse(message);
      this.props.onUploadSuccess(file.file.uniqueIdentifier, asset);
      this.props.onChange(asset.data.id);
      this.props.onBusy();
    }
  }, {
    key: '_handleRemoveFile',
    value: function _handleRemoveFile(uniqueIdentifier) {
      var file = this.resumable.getFromUniqueIdentifier(uniqueIdentifier);
      this.resumable.removeFile(file);
      this.props.onRemoveFile(uniqueIdentifier);
    }
  }, {
    key: '_handleUploadComplete',
    value: function _handleUploadComplete() {
      this.props.onUploadComplete();
    }
  }]);

  return FileField;
}(_react2.default.Component);

FileField.propTypes = {
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
  disabled: _propTypes2.default.bool,
  endpoint: _propTypes2.default.string,
  files: _propTypes2.default.array,
  multiple: _propTypes2.default.bool,
  prompt: _propTypes2.default.string,
  status: _propTypes2.default.string,
  token: _propTypes2.default.string,
  onAddFile: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChangeFile: _propTypes2.default.func,
  onLoadFiles: _propTypes2.default.func,
  onUploadBegin: _propTypes2.default.func,
  onUploadComplete: _propTypes2.default.func,
  onUploadProgress: _propTypes2.default.func,
  onUploadProcess: _propTypes2.default.func,
  onUploadSuccess: _propTypes2.default.func,
  onUploadFailure: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onRemoveFile: _propTypes2.default.func,
  onSetReady: _propTypes2.default.func
};
FileField.defaultProps = {
  defaultValue: null,
  disabled: false,
  multiple: false,
  prompt: 'Choose File(s)',
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSet: function onSet() {}
};
exports.default = FileField;