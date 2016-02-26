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

var _config = require('../utils/config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilePreview = function (_React$Component) {
  _inherits(FilePreview, _React$Component);

  function FilePreview() {
    _classCallCheck(this, FilePreview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FilePreview).apply(this, arguments));
  }

  _createClass(FilePreview, [{
    key: 'render',
    value: function render() {
      var url = _config2.default.get('api') + ('/admin/assets/' + this.props.id + '/preview');
      if (this.props.id) {
        return _react2.default.createElement('img', { style: { marginBottom: 8 }, src: url, alt: 'Image Preview', className: 'ui tiny rounded image' });
      } else {
        return null;
      }
    }
  }]);

  return FilePreview;
}(_react2.default.Component);

var FileField = function (_React$Component2) {
  _inherits(FileField, _React$Component2);

  function FileField(props) {
    _classCallCheck(this, FileField);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(FileField).call(this, props));

    _this2.state = {
      focused: false,
      validated: false,
      isValid: null,
      filesFailed: [],
      multi: {
        files: [],
        status: 'WAITING',
        filesComplete: []
      },
      preview: props.defaultValue
    };

    _this2.r = new _resumablejs2.default({
      target: _config2.default.get('api') + props.target,
      query: props.query,
      withCredentials: true,
      maxFiles: props.mode === 'single' ? 1 : props.maxFiles
    });

    _this2.isResumableSupported = _this2.r.support;

    _this2.r.on('fileAdded', _this2.onFileAdded.bind(_this2));
    _this2.r.on('fileProgress', _this2.onFileProgress.bind(_this2));
    _this2.r.on('fileError', _this2.onFileError.bind(_this2));
    _this2.r.on('fileSuccess', _this2.onFileSuccess.bind(_this2));
    _this2.r.on('fileRetry', _this2.onFileRetry.bind(_this2));

    _this2.r.on('complete', _this2.onComplete.bind(_this2));
    _this2.r.on('pause', _this2.onPause.bind(_this2));
    _this2.r.on('cancel', _this2.onCancel.bind(_this2));
    _this2.r.on('error', _this2.onError.bind(_this2));
    return _this2;
  }

  _createClass(FileField, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.mode === 'single') {
        if (this.r.files.length > 0) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { ref: 'browseButton', className: 'ui green labeled icon button', onClick: this.clearFiles() },
              _react2.default.createElement('i', { className: 'folder icon' }),
              this.r.files[0].fileName,
              ' (',
              this.formatSize(this.r.files[0].size),
              ')'
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(FilePreview, { id: this.state.preview }),
            _react2.default.createElement(
              'div',
              { ref: 'browseButton', className: 'ui blue labeled icon button' },
              _react2.default.createElement('i', { className: 'folder icon' }),
              'Add File'
            )
          );
        }
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'ui relaxed stacking grid' },
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
                if (_.includes(_this3.state.filesFailed, file.uniqueIdentifier)) {
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
      this.r.assignBrowse(this.refs.browseButton);

      if (this.props.mode === 'multi') {
        this.r.assignDrop(this.refs.dropzone);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'clearFiles',
    value: function clearFiles() {
      while (this.r.files.length > 1) {
        r.files[0].cancel();
      }
    }
  }, {
    key: 'beginUpload',
    value: function beginUpload() {
      var _this4 = this;

      var single = this.props.mode === 'single';
      this.rPromise = _when2.default.promise(function (resolve, reject) {
        var fileResults = [];
        _this4.r.on('complete', function () {
          return resolve(fileResults);
        });
        _this4.r.on('error', reject);
        _this4.r.on('fileSuccess', function (_file, r) {
          _logger2.default.log(_file, r);
          var resp = JSON.parse(r);
          var assetId = _.get(resp, 'asset_id', null) || _.get(resp, 'id', null);
          fileResults.push(assetId);
        });
        _this4.r.upload();
      }).then(function (assetIds) {
        if (single) {
          return assetIds[0];
        } else {
          return assetIds;
        }
      }).tap(_logger2.default.log.bind(_logger2.default)).catch(function (failure) {
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
      this.setState({
        filesFailed: this.state.filesFailed.concat([file.uniqueIdentifier])
      });
    }
  }, {
    key: 'onFileProgress',
    value: function onFileProgress(file) {
      _logger2.default.log(file.fileName, file.progress());
      $(this.refs.fileTable).find('#' + file.uniqueIdentifier).progress({ percent: Math.floor(file.progress() * 100) });
      //this.forceUpdate()
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
      this.beginUpload();
      return this.rPromise;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ preview: value });
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
  target: _react2.default.PropTypes.string
};
FileField.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  query: {},
  mode: 'single',
  target: '/admin/chunks'
};
exports.default = FileField;