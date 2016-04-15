'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _resumablejs = require('resumablejs');

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _sequence = require('when/sequence');

var _sequence2 = _interopRequireDefault(_sequence);

var _pipeline = require('when/pipeline');

var _pipeline2 = _interopRequireDefault(_pipeline);

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _random = require('../utils/random');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('when/monitor/console');

var FileField = function (_React$Component) {
  _inherits(FileField, _React$Component);

  function FileField(props) {
    _classCallCheck(this, FileField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileField).call(this, props));

    _this.state = {
      focused: false,
      validated: false,
      isValid: null,
      filesFailed: [],
      multi: {
        files: [],
        status: 'WAITING',
        filesComplete: []
      },
      preview: props.defaultValue,
      uploadInProgress: false,
      uploadComplete: false,
      uploadProcessing: false,
      uploadFailed: false,
      fileExists: !!props.defaultValue
    };

    _this.constructResumable(props);

    _this.api = new _api2.default();

    _this.isResumableSupported = _this.r.support;

    // Return an asset ID if the field is already filled
    _this.rPromise = (0, _when2.default)(_this.props.defaultValue);

    return _this;
  }

  _createClass(FileField, [{
    key: 'constructResumable',
    value: function constructResumable(props) {
      this.r = new _resumablejs2.default({
        target: _config2.default.get('api.pathPrefix') + props.target,
        query: props.query,
        withCredentials: true,
        maxFiles: props.mode === 'single' ? 1 : props.maxFiles
      });

      this.r.on('fileAdded', this.onFileAdded.bind(this));
      this.r.on('fileProgress', this.onFileProgress.bind(this));
      this.r.on('fileError', this.onFileError.bind(this));
      this.r.on('fileSuccess', this.onFileSuccess.bind(this));
      this.r.on('fileRetry', this.onFileRetry.bind(this));

      this.r.on('complete', this.onComplete.bind(this));
      this.r.on('pause', this.onPause.bind(this));
      this.r.on('cancel', this.onCancel.bind(this));
      this.r.on('error', this.onError.bind(this));
    }
  }, {
    key: 'mountResumable',
    value: function mountResumable() {
      this.r.assignBrowse(this.refs.browseButton);

      if (this.props.mode === 'multi') {
        this.r.assignDrop(this.refs.dropzone);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var allFilesFailed = this.r.files.length > 0 && this.state.filesFailed.length === this.r.files.length;

      if (this.props.mode === 'single') {
        if (allFilesFailed || this.state.uploadFailed) {
          // Show failure state
          return _react2.default.createElement(
            'div',
            { ref: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'ui small header' },
              'Uploading failed.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui red labeled icon button', onClick: this.retry.bind(this) },
              _react2.default.createElement('i', { className: 'refresh icon' }),
              'Retry'
            ),
            _react2.default.createElement(
              'div',
              { ref: 'reBrowseButton', className: 'ui green labeled icon button' },
              _react2.default.createElement('i', { className: 'folder icon' }),
              'Choose Files...'
            )
          );
        }
        if (this.state.uploadInProgress || this.state.uploadProcessing) {
          // Show progress state
          return _react2.default.createElement(
            'div',
            { ref: 'wrapper' },
            _react2.default.createElement(FileProgress, { progress: this.getOverallProgress() })
          );
        }
        if (this.state.uploadComplete) {
          // Show finished state
          return _react2.default.createElement(
            'div',
            { className: 'filefield-preview', ref: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'ui card' },
              _react2.default.createElement(
                'div',
                { className: 'image' },
                _react2.default.createElement(FilePreview, { id: this.state.preview, assetPath: this.props.assetPath })
              ),
              _react2.default.createElement(
                'div',
                { className: 'extra content' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui two buttons' },
                  _react2.default.createElement(
                    'div',
                    { ref: 'browseButton', className: 'ui green button' },
                    _react2.default.createElement('i', { className: 'folder icon' }),
                    'Change'
                  ),
                  _react2.default.createElement(
                    'div',
                    { ref: 'clearButton', className: 'ui red button', onClick: this.clearFiles.bind(this) },
                    _react2.default.createElement('i', { className: 'x icon' }),
                    ' Remove'
                  )
                )
              )
            )
          );
        }
        if (this.state.fileExists) {
          // Show preview when a defaultValue is set
          return _react2.default.createElement(
            'div',
            { className: 'filefield-preview', ref: 'wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'ui card' },
              _react2.default.createElement(
                'div',
                { className: 'image' },
                _react2.default.createElement(FilePreview, { id: this.state.preview, assetPath: this.props.assetPath })
              ),
              _react2.default.createElement(
                'div',
                { className: 'extra content' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui two buttons' },
                  _react2.default.createElement(
                    'div',
                    { ref: 'browseButton', className: 'ui green button' },
                    _react2.default.createElement('i', { className: 'folder icon' }),
                    ' Change'
                  ),
                  _react2.default.createElement(
                    'div',
                    { ref: 'clearButton', className: 'ui red button', onClick: this.clearFiles.bind(this) },
                    _react2.default.createElement('i', { className: 'x icon' }),
                    ' Remove'
                  )
                )
              )
            )
          );
        } else {
          // Show an empty chooser
          return _react2.default.createElement(
            'div',
            { ref: 'wrapper' },
            _react2.default.createElement(
              'div',
              { ref: 'browseButton', className: 'ui green labeled icon button' },
              _react2.default.createElement('i', { className: 'folder icon' }),
              'Choose File...'
            )
          );
        }
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'ui relaxed stacking grid', ref: 'wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'column admin-sidebar' },
            _react2.default.createElement(
              'div',
              { ref: 'dropzone', className: 'ui basic segment' },
              _react2.default.createElement(
                'h3',
                { className: 'ui center aligned icon header' },
                _react2.default.createElement('i', { className: 'download icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'content' },
                  'Drop Files Here'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui horizontal divider' },
              'OR'
            ),
            _react2.default.createElement(
              'div',
              { ref: 'browseButton', className: 'ui large fluid blue labeled icon button' },
              _react2.default.createElement('i', { className: 'folder icon' }),
              'Add Files'
            )
          ),
          _react2.default.createElement('div', { className: 'vertical divider' }),
          _react2.default.createElement(
            'div',
            { className: 'eleven wide column' },
            _react2.default.createElement(
              'div',
              { className: 'ui segment', ref: 'fileTable' },
              this.r.files.map(function (file) {
                var progressClass = 'ui progress';
                if (_lodash2.default.includes(_this2.state.filesFailed, file.uniqueIdentifier)) {
                  progressClass += ' error';
                }
                return _react2.default.createElement(
                  'div',
                  { className: progressClass, id: file.uniqueIdentifier, key: file.uniqueIdentifier },
                  _react2.default.createElement('div', { className: 'bar' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'label' },
                    file.fileName
                  )
                );
              })
            )
          )
        );
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mountResumable();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'clearFiles',
    value: function clearFiles() {
      var _this3 = this;

      while (this.r.files.length > 1) {
        r.files[0].cancel();
      }
      this.rPromise = (0, _when2.default)(null);
      delete this.r;
      this.constructResumable(this.props);
      _lodash2.default.defer(function () {
        return _this3.mountResumable();
      });
      this.setState({ filesFailed: [], uploadComplete: false, uploadInProgress: false, uploadFailed: false, fileExists: false, preview: null });
      this.forceUpdate();
    }
  }, {
    key: 'clearAndChoose',
    value: function clearAndChoose() {
      this.clearFiles();
    }
  }, {
    key: 'retry',
    value: function retry() {
      _lodash2.default.forEach(this.r.files, function (f) {
        return f.retry();
      });
      this.setState({ filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false });
    }
  }, {
    key: 'beginUpload',
    value: function beginUpload() {
      var _this4 = this;

      // Start the upload only if some files have been added
      if (_lodash2.default.isEmpty(this.r.files)) {
        this.rPromise = (0, _when2.default)(null);
        return;
      }
      var single = this.props.mode === 'single';
      this.setState({ filesFailed: [], uploadInProgress: true, uploadComplete: false, uploadFailed: false });
      var uploadPromise = function uploadPromise() {
        return _when2.default.promise(function (resolve, reject) {
          var fileResults = [];
          _this4.r.on('complete', function () {
            return resolve(fileResults);
          });
          _this4.r.on('error', reject);
          _this4.r.on('fileSuccess', function (_file, r) {
            _logger2.default.log(_file, r);
            var resp = JSON.parse(r);
            var assetId = _lodash2.default.get(resp, 'asset_id', null) || _lodash2.default.get(resp, 'id', null);
            fileResults.push(assetId);
          });
          _this4.r.upload();
        }).tap(function () {
          return _this4.setState({ uploadInProgress: false, uploadProcessing: true });
        }).tap(_logger2.default.log.bind(_logger2.default));
      };

      var processPromise = function processPromise(ids) {
        _logger2.default.log("Processing...", ids);
        return (0, _sequence2.default)(_lodash2.default.map(ids, function (i) {
          return function () {
            return _this4.api.patch(_this4.props.assetPath + '/' + i + '/process');
          };
        })).then(function () {
          return ids;
        });
      };

      this.rPromise = (0, _pipeline2.default)([uploadPromise, processPromise]).tap(function (ids) {
        return _logger2.default.log("Uploading and Processing complete", ids);
      }).tap(function (ids) {
        return _this4.setState({ preview: _lodash2.default.first(ids) });
      }).then(function (assetIds) {
        if (single) {
          return assetIds[0];
        } else {
          return assetIds;
        }
      }).tap(function () {
        return _this4.setState({ uploadProcessing: false, uploadComplete: true });
      }).tap(function () {
        return _this4.mountResumable();
      }).tap(_logger2.default.log.bind(_logger2.default)).catch(function (failure) {
        _this4.setState({ uploadProcessing: false, uploadComplete: false, uploadInProgress: false, uploadFailed: true });
        _logger2.default.error(failure);
      });
    }
  }, {
    key: 'getOverallProgress',
    value: function getOverallProgress() {
      return this.r.progress();
    }
  }, {
    key: 'onFileAdded',
    value: function onFileAdded(_file) {
      this.forceUpdate();
      if (this.props.mode === 'single' && this.props.eager) {
        this.beginUpload();
      }
    }
  }, {
    key: 'onFileSuccess',
    value: function onFileSuccess(file, serverResponse) {
      _logger2.default.log(file, serverResponse);
    }
  }, {
    key: 'onFileError',
    value: function onFileError(file, serverResponse) {
      _logger2.default.log(file, serverResponse);
      var newFailures = this.state.filesFailed.concat([file.uniqueIdentifier]);
      this.setState({
        filesFailed: newFailures
      });

      if (newFailures.length === this.r.files.length) {
        this.r.assignBrowse(this.refs.reBrowseButton);
      }
    }
  }, {
    key: 'onFileProgress',
    value: function onFileProgress(file) {
      _logger2.default.log(file.fileName, file.progress());
      $(this.refs.fileTable).find('#' + file.uniqueIdentifier).progress({ percent: Math.floor(file.progress() * 100) });
      if (this.state.uploadInProgress) {
        $(this.refs.wrapper).find(".file.progress").progress({
          percent: Math.ceil(this.getOverallProgress() * 100)
        });
      }
      this.forceUpdate();
    }
  }, {
    key: 'onFileRetry',
    value: function onFileRetry(_file) {
      //this.forceUpdate()
    }
  }, {
    key: 'onComplete',
    value: function onComplete() {
      this.setState({
        multi: {
          status: 'COMPLETE'
        }
      });
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      this.setState({
        multi: {
          status: 'PAUSED'
        }
      });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.setState({
        multi: {
          status: 'CANCELLED'
        }
      });
    }
  }, {
    key: 'onError',
    value: function onError(message, file) {
      this.setState({
        multi: {
          status: 'FAILED'
        }
      });
    }

    // Ripped straight outta Resumable

  }, {
    key: 'formatSize',
    value: function formatSize(size) {
      if (size < 1024) {
        return size + ' bytes';
      } else if (size < 1024 * 1024) {
        return (size / 1024.0).toFixed(0) + ' KB';
      } else if (size < 1024 * 1024 * 1024) {
        return (size / 1024.0 / 1024.0).toFixed(1) + ' MB';
      } else {
        return (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' GB';
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      // Only begin the upload here if there is no upload in progress and an upload has not already completed
      if (!this.state.fileExists && !this.state.uploadInProgress && !this.state.uploadComplete) {
        this.beginUpload();
      }
      return this.rPromise;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (value !== null) {
        this.setState({ preview: value, fileExists: true });
        this.rPromise = (0, _when2.default)(value);
      }
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return FileField;
}(_react2.default.Component);

FileField.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  query: _react2.default.PropTypes.object,
  mode: _react2.default.PropTypes.oneOf('single', 'multi'),
  target: _react2.default.PropTypes.string,
  eager: _react2.default.PropTypes.bool
};
FileField.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  query: {},
  mode: 'single',
  target: _config2.default.get('app.paths.asset_chunks', '/admin/assets/chunks'),
  assetPath: _config2.default.get('app.paths.assets', '/admin/assets'),
  eager: true
};
exports.default = FileField;


var FileProgress = function FileProgress(_ref2) {
  var progress = _ref2.progress;

  if (progress == 1) {
    return _react2.default.createElement(
      'div',
      { className: 'filefield-preview' },
      _react2.default.createElement(
        'div',
        { className: 'ui card' },
        _react2.default.createElement(
          'div',
          { className: 'image loader' },
          _react2.default.createElement(
            'div',
            { className: 'ui active inverted dimmer' },
            _react2.default.createElement(
              'div',
              { className: 'ui text loader' },
              'Processing'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'extra content' },
          _react2.default.createElement(
            'div',
            { className: 'ui two buttons' },
            _react2.default.createElement(
              'div',
              { className: 'ui disabled green button' },
              _react2.default.createElement('i', { className: 'folder icon' }),
              ' Change'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui disabled red button' },
              _react2.default.createElement('i', { className: 'x icon' }),
              ' Remove'
            )
          )
        )
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'filefield-uploading' },
      _react2.default.createElement(
        'div',
        { className: 'ui segment' },
        _react2.default.createElement(
          'div',
          { className: 'ui file progress' },
          _react2.default.createElement('div', { className: 'bar' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'label' },
          'Uploading'
        )
      )
    );
  }
};

var FilePreview = function (_React$Component2) {
  _inherits(FilePreview, _React$Component2);

  function FilePreview() {
    _classCallCheck(this, FilePreview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FilePreview).apply(this, arguments));
  }

  _createClass(FilePreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var assetPath = _props.assetPath;
      var id = _props.id;
      var _props$size = _props.size;
      var size = _props$size === undefined ? 'medium' : _props$size;

      var url = _config2.default.get('api.pathPrefix') + (assetPath + '/' + id + '/preview');
      if (id) {
        return _react2.default.createElement('img', { src: url, alt: 'Image Preview' });
      } else {
        return null;
      }
    }
  }]);

  return FilePreview;
}(_react2.default.Component);