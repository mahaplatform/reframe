'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _resumablejs = require('resumablejs');

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _config = require('../../utils/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileField = function (_React$Component) {
  _inherits(FileField, _React$Component);

  function FileField(props) {
    _classCallCheck(this, FileField);

    var _this = _possibleConstructorReturn(this, (FileField.__proto__ || Object.getPrototypeOf(FileField)).call(this, props));

    _this.r = new _resumablejs2.default({
      target: _config2.default.get('api.host') + '/admin/uploads/chunks',
      withCredentials: true,
      maxFiles: 1
    });
    return _this;
  }

  _createClass(FileField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var status = this.props.state.status;

      var classes = ['filefield', status];
      return _react2.default.createElement(
        'div',
        { className: classes.join(" ") },
        _react2.default.createElement(
          'div',
          { ref: 'browse', className: 'ui browse button' },
          'Choose File...'
        ),
        function () {
          if (status == 'added' || status == 'uploading') {
            return _react2.default.createElement(
              'div',
              { className: 'ui segments' },
              _react2.default.createElement(
                'div',
                { className: 'ui segment' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui progress', ref: 'progress' },
                  _react2.default.createElement('div', { className: 'bar' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'label' },
                    'Uploading...'
                  )
                )
              )
            );
          } else if (status == 'processing') {
            return _react2.default.createElement(
              'div',
              { className: 'ui segments' },
              _react2.default.createElement(
                'div',
                { className: 'ui segment' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui active inverted dimmer' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui text loader' },
                    'Processing...'
                  )
                )
              )
            );
          } else if (status == 'success') {
            var _ret = function () {
              var _props$state$file = _this2.props.state.file;
              var content_type = _props$state$file.content_type;
              var file_name = _props$state$file.file_name;
              var file_size = _props$state$file.file_size;
              var url = _props$state$file.url;

              return {
                v: _react2.default.createElement(
                  'div',
                  { className: 'ui segments' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui icon top right pointing dropdown mini button', onClick: _this2._handleRemoveFile.bind(_this2) },
                    _react2.default.createElement('i', { className: 'x icon' })
                  ),
                  function () {
                    if (content_type.search('image') >= 0) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'ui segment image' },
                        _react2.default.createElement('img', { src: url })
                      );
                    }
                  }(),
                  _react2.default.createElement(
                    'div',
                    { className: 'ui secondary segment' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      file_name
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      (0, _bytes2.default)(file_size, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase()
                    )
                  )
                )
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          } else if (status == 'failure') {
            return _react2.default.createElement(
              'div',
              { className: 'ui card' },
              _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Fail!'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'extra content' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui fluid red button', onClick: _this2._handleRemoveFile.bind(_this2) },
                  _react2.default.createElement('i', { className: 'x icon' }),
                  'Remove'
                )
              )
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleSetup();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props$state = this.props.state;
      var uploadedChunks = _props$state.uploadedChunks;
      var totalChunks = _props$state.totalChunks;

      if (prevProps.state.status != this.props.state.status) {
        if (this.props.state.status == 'added') {
          this._handleUploadBegin();
        }
      }
      if (prevProps.state.uploadedChunks != this.props.state.uploadedChunks) {
        var percent = Math.min(100, Math.ceil(uploadedChunks / totalChunks * 100));
        $(this.refs.progress).progress({
          percent: percent
        });
      }
    }
  }, {
    key: '_handleSetup',
    value: function _handleSetup(file) {
      this.r.assignBrowse(this.refs.browse);
      this.r.on('fileAdded', this._handleFileAdded.bind(this));
      this.r.on('fileProgress', this._handleUploadProgress.bind(this));
      this.r.on('fileSuccess', this._handleUploadSuccess.bind(this));
      this.r.on('error', this._handleUploadFailure.bind(this));
    }
  }, {
    key: '_handleFileAdded',
    value: function _handleFileAdded(file) {
      var _props = this.props;
      var id = _props.id;
      var onAddFile = _props.onAddFile;

      onAddFile(id, file.chunks.length);
    }
  }, {
    key: '_handleUploadBegin',
    value: function _handleUploadBegin() {
      var _props2 = this.props;
      var id = _props2.id;
      var onUploadBegin = _props2.onUploadBegin;

      this.r.upload();
      onUploadBegin(id);
    }
  }, {
    key: '_handleUploadProgress',
    value: function _handleUploadProgress(file) {
      var _props3 = this.props;
      var id = _props3.id;
      var onUploadProgress = _props3.onUploadProgress;

      onUploadProgress(id);
    }
  }, {
    key: '_handleUploadFailure',
    value: function _handleUploadFailure(file, message) {
      var _props4 = this.props;
      var id = _props4.id;
      var onUploadFailure = _props4.onUploadFailure;

      onUploadFailure(id, message);
    }
  }, {
    key: '_handleUploadSuccess',
    value: function _handleUploadSuccess(file, response) {
      var _props5 = this.props;
      var id = _props5.id;
      var onUploadSuccess = _props5.onUploadSuccess;
      var onUploadProcess = _props5.onUploadProcess;

      var upload = JSON.parse(response);
      if (upload.status == 'completed') {
        onUploadSuccess(id, upload);
      } else {
        onUploadProcess(id, upload.id);
      }
    }
  }, {
    key: '_handleChangeFile',
    value: function _handleChangeFile(file) {
      var _props6 = this.props;
      var id = _props6.id;
      var onChangeFile = _props6.onChangeFile;

      onChangeFile(id);
    }
  }, {
    key: '_handleRemoveFile',
    value: function _handleRemoveFile(file) {
      var _props7 = this.props;
      var id = _props7.id;
      var onRemoveFile = _props7.onRemoveFile;

      onRemoveFile(id);
    }
  }]);

  return FileField;
}(_react2.default.Component);

FileField.propTypes = {
  id: _react2.default.PropTypes.string,
  state: _react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.string
  }),
  onAddFile: _react2.default.PropTypes.func,
  onUploadBegin: _react2.default.PropTypes.func,
  onUploadProgress: _react2.default.PropTypes.func,
  onUploadProcess: _react2.default.PropTypes.func,
  onUploadSuccess: _react2.default.PropTypes.func,
  onUploadFailure: _react2.default.PropTypes.func,
  onRemoveFile: _react2.default.PropTypes.func,
  onChangeFile: _react2.default.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    state: state[props.id]
  };
};

var mapDispatchToProps = {
  onAddFile: actions.addFile,
  onUploadBegin: actions.uploadBegin,
  onUploadProgress: actions.uploadProgress,
  onUploadProcess: actions.uploadProcess,
  onUploadFailure: actions.uploadFailure,
  onUploadSuccess: actions.uploadSuccess,
  onRemoveFile: actions.removeFile,
  onChangeFile: actions.changeFile
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FileField);