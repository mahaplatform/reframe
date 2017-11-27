'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resumablejs = require('resumablejs');

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preview = require('./preview');

var _preview2 = _interopRequireDefault(_preview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileField = function (_React$Component) {
  _inherits(FileField, _React$Component);

  function FileField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FileField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileField.__proto__ || Object.getPrototypeOf(FileField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previews: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FileField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          button = _props.button,
          files = _props.files,
          multiple = _props.multiple,
          multiplePrompt = _props.multiplePrompt,
          prompt = _props.prompt,
          status = _props.status,
          tabIndex = _props.tabIndex;

      var classes = ['reframe-filefield', status];
      return _react2.default.createElement(
        'div',
        { className: classes.join(' '), tabIndex: tabIndex },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-tokens' },
          files.map(function (file, index) {
            return _react2.default.createElement(_preview2.default, _extends({ key: 'filefield_' + index }, _this2._getFile(file, index)));
          })
        ),
        (files.length === 0 || multiple === true) && _react2.default.createElement(
          'div',
          { ref: function ref(node) {
              return _this2.button = node;
            } },
          button ? button : _react2.default.createElement(
            'div',
            { className: 'ui browse button' },
            files.length === 0 ? prompt : multiplePrompt
          )
        )
      );
    }
  }, {
    key: '_getFile',
    value: function _getFile(file, index) {
      return {
        file: file,
        preview: this.state.previews[file.uniqueIdentifier],
        onRemove: this._handleRemoveFile.bind(this, index)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          endpoint = _props2.endpoint,
          defaultValue = _props2.defaultValue,
          token = _props2.token,
          onLoadFiles = _props2.onLoadFiles,
          onSetReady = _props2.onSetReady;

      if (!defaultValue) return onSetReady();
      var ids = !_lodash2.default.isArray(defaultValue) ? [defaultValue] : defaultValue;
      if (ids.length === 0) return onSetReady();
      onLoadFiles(endpoint, token, ids);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          files = _props3.files,
          multiple = _props3.multiple,
          status = _props3.status,
          value = _props3.value,
          onChange = _props3.onChange,
          onReady = _props3.onReady;

      if (status !== prevProps.status) {
        if (prevProps.status === 'pending') {
          onReady();
          this._initializeResumable();
        }
      }
      if (!_lodash2.default.isEqual(value, prevProps.value)) onChange(value);
      if (files.length > prevProps.files.length) {
        if (files.filter(function (file) {
          return file.status === 'added';
        }).length > 0) {
          this._handleUploadBegin();
        }
      } else if (files.length < prevProps.files.length && !multiple) {
        this._initializeResumable();
      }
    }
  }, {
    key: '_initializeResumable',
    value: function _initializeResumable() {
      var _props4 = this.props,
          action = _props4.action,
          files = _props4.files,
          multiple = _props4.multiple,
          status = _props4.status,
          token = _props4.token;

      if (status !== 'ready') return;
      this.resumable = new _resumablejs2.default({
        target: action,
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
      if (multiple || !multiple && files.length === 0) {
        this.resumable.assignBrowse(this.button);
        this.resumable.assignDrop(this.button);
      }
    }
  }, {
    key: '_handleFileAdded',
    value: function _handleFileAdded(file) {
      var fileReader = new FileReader();
      this.props.onAddFile(file.uniqueIdentifier, file.file.name, file.file.size, file.file.type, file.chunks.length);
      if (!file.file.type.match(/image/)) return;
      fileReader.readAsDataURL(file.file);
      fileReader.onload = this._handleImagePreview.bind(this, file.file.uniqueIdentifier);
    }
  }, {
    key: '_handleImagePreview',
    value: function _handleImagePreview(uid, event) {
      this.setState({
        previews: _extends({}, this.state.previews, _defineProperty({}, uid, event.target.result))
      });
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
      this.props.onBusy();
    }
  }, {
    key: '_handleRemoveFile',
    value: function _handleRemoveFile(index) {
      var file = this.props.files[index];
      this.props.onRemoveFile(index);
      if (!file.uniqueIdentifier) return;
      var resumableFile = this.resumable.getFromUniqueIdentifier(file.uniqueIdentifier);
      this.resumable.removeFile(resumableFile);
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
  action: _propTypes2.default.string,
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
  button: _propTypes2.default.element,
  disabled: _propTypes2.default.bool,
  endpoint: _propTypes2.default.string,
  files: _propTypes2.default.array,
  multiple: _propTypes2.default.bool,
  multiplePrompt: _propTypes2.default.string,
  prompt: _propTypes2.default.string,
  status: _propTypes2.default.string,
  token: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.array]),
  onAddFile: _propTypes2.default.func,
  onCache: _propTypes2.default.func,
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
  multiplePrompt: 'Choose Another File',
  prompt: 'Choose File',
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSet: function onSet() {}
};
exports.default = FileField;