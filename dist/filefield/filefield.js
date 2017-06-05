'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _resumablejs = require('resumablejs');

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Image from 'admin/components/image'


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
                  { className: 'ui green progress', ref: 'filefield_' + file.uniqueIdentifier + '_progress' },
                  _react2.default.createElement('div', { className: 'bar' })
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
          { ref: 'browseButton', className: 'ui browse button' },
          prompt
        )
      );
    }
    // <Image src={ file.asset.path } title={ file.asset.original_file_name } transforms={{ fit: 'cover', w: 300, h: 300 }} />

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          cid = _props2.cid,
          defaultValue = _props2.defaultValue,
          onLoadFiles = _props2.onLoadFiles;

      if (defaultValue) {
        var ids = !_lodash2.default.isArray(defaultValue) ? [defaultValue] : defaultValue;
        onLoadFiles(cid, ids);
      }
      this._initializeResumable();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var files = this.props.files;

      if (files.length > prevProps.files.length) {
        this._handleUploadBegin();
      } else if (files.length < prevProps.files.length) {
        this._initializeResumable();
      }
      files.map(function (file, index) {
        if (!prevProps.files[index] || prevProps.files[index].progress < file.progress) {
          $(_this3.refs['filefield_' + file.uniqueIdentifier + '_progress']).progress({
            percent: file.progress
          });
        }
      });
    }
  }, {
    key: '_initializeResumable',
    value: function _initializeResumable() {
      var _props3 = this.props,
          endpoint = _props3.endpoint,
          multiple = _props3.multiple,
          team = _props3.team,
          token = _props3.token;

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
      this.resumable.assignBrowse(this.refs.browseButton);
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
    }
  }, {
    key: '_handleUploadSuccess',
    value: function _handleUploadSuccess(file, message) {
      var asset = JSON.parse(message);
      this.props.onUploadSuccess(file.file.uniqueIdentifier, asset);
      this.props.onChange(asset.data.id);
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
  endpoint: _react2.default.PropTypes.string,
  files: _react2.default.PropTypes.array,
  multiple: _react2.default.PropTypes.bool,
  prompt: _react2.default.PropTypes.string,
  status: _react2.default.PropTypes.string,
  token: _react2.default.PropTypes.string,
  onAddFile: _react2.default.PropTypes.func,
  onUploadBegin: _react2.default.PropTypes.func,
  onUploadProgress: _react2.default.PropTypes.func,
  onUploadProcess: _react2.default.PropTypes.func,
  onUploadSuccess: _react2.default.PropTypes.func,
  onUploadFailure: _react2.default.PropTypes.func,
  onRemoveFile: _react2.default.PropTypes.func,
  onChangeFile: _react2.default.PropTypes.func
};
FileField.defaultProps = {
  prompt: 'Choose File(s)',
  multiple: false
};
exports.default = FileField;