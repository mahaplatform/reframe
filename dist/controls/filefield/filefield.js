'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var FileField = function (_React$Component) {
  (0, _inherits3.default)(FileField, _React$Component);

  function FileField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FileField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FileField.__proto__ || Object.getPrototypeOf(FileField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previews: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FileField, [{
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
            return _react2.default.createElement(_preview2.default, (0, _extends4.default)({ key: 'filefield_' + index }, _this2._getFile(file, index)));
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
        permanentErrors: [204, 400, 404, 409, 415, 500, 501],
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
        previews: (0, _extends4.default)({}, this.state.previews, (0, _defineProperty3.default)({}, uid, event.target.result))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRmlsZUZpZWxkIiwic3RhdGUiLCJwcmV2aWV3cyIsInByb3BzIiwiYnV0dG9uIiwiZmlsZXMiLCJtdWx0aXBsZSIsIm11bHRpcGxlUHJvbXB0IiwicHJvbXB0Iiwic3RhdHVzIiwidGFiSW5kZXgiLCJjbGFzc2VzIiwiam9pbiIsIm1hcCIsImZpbGUiLCJpbmRleCIsIl9nZXRGaWxlIiwibGVuZ3RoIiwibm9kZSIsInByZXZpZXciLCJ1bmlxdWVJZGVudGlmaWVyIiwib25SZW1vdmUiLCJfaGFuZGxlUmVtb3ZlRmlsZSIsImJpbmQiLCJlbmRwb2ludCIsImRlZmF1bHRWYWx1ZSIsInRva2VuIiwib25Mb2FkRmlsZXMiLCJvblNldFJlYWR5IiwiaWRzIiwiXyIsImlzQXJyYXkiLCJwcmV2UHJvcHMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25SZWFkeSIsIl9pbml0aWFsaXplUmVzdW1hYmxlIiwiaXNFcXVhbCIsImZpbHRlciIsIl9oYW5kbGVVcGxvYWRCZWdpbiIsImFjdGlvbiIsInJlc3VtYWJsZSIsIlJlc3VtYWJsZSIsInRhcmdldCIsImNodW5rU2l6ZSIsInBlcm1hbmVudEVycm9ycyIsIm1heEZpbGVzIiwidW5kZWZpbmVkIiwiaGVhZGVycyIsIm9uIiwiX2hhbmRsZUZpbGVBZGRlZCIsIl9oYW5kbGVVcGxvYWRQcm9ncmVzcyIsIl9oYW5kbGVVcGxvYWRTdWNjZXNzIiwiX2hhbmRsZVVwbG9hZEZhaWx1cmUiLCJfaGFuZGxlVXBsb2FkQ29tcGxldGUiLCJhc3NpZ25Ccm93c2UiLCJhc3NpZ25Ecm9wIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbkFkZEZpbGUiLCJuYW1lIiwic2l6ZSIsInR5cGUiLCJjaHVua3MiLCJtYXRjaCIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJfaGFuZGxlSW1hZ2VQcmV2aWV3IiwidWlkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInVwbG9hZCIsIm9uVXBsb2FkQmVnaW4iLCJvbkJ1c3kiLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3MiLCJtZXNzYWdlIiwib25VcGxvYWRGYWlsdXJlIiwiYXNzZXQiLCJKU09OIiwicGFyc2UiLCJvblVwbG9hZFN1Y2Nlc3MiLCJvblJlbW92ZUZpbGUiLCJyZXN1bWFibGVGaWxlIiwiZ2V0RnJvbVVuaXF1ZUlkZW50aWZpZXIiLCJyZW1vdmVGaWxlIiwib25VcGxvYWRDb21wbGV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJib29sIiwiZnVuYyIsIm9uQ2FjaGUiLCJvbkNoYW5nZUZpbGUiLCJvblVwbG9hZFByb2Nlc3MiLCJkZWZhdWx0UHJvcHMiLCJvblNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs7OzBNQW9ESkMsSyxHQUFRO0FBQ05DLGdCQUFVO0FBREosSzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxtQkFDdUUsS0FBS0MsS0FENUU7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxLQURULFVBQ1NBLEtBRFQ7QUFBQSxVQUNnQkMsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLGNBRDFCLFVBQzBCQSxjQUQxQjtBQUFBLFVBQzBDQyxNQUQxQyxVQUMwQ0EsTUFEMUM7QUFBQSxVQUNrREMsTUFEbEQsVUFDa0RBLE1BRGxEO0FBQUEsVUFDMERDLFFBRDFELFVBQzBEQSxRQUQxRDs7QUFFUCxVQUFJQyxVQUFVLENBQUMsbUJBQUQsRUFBc0JGLE1BQXRCLENBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdFLFFBQVFDLElBQVIsQ0FBYSxHQUFiLENBQWhCLEVBQW1DLFVBQVdGLFFBQTlDO0FB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LG1CQUFNLENBQUUsQ0FURztBQVVwQnFFLFNBQU8saUJBQU0sQ0FBRTtBQVZLLEM7a0JBc0pUeEcsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3VtYWJsZSBmcm9tICdyZXN1bWFibGVqcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgRmlsZUZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5hcnJheVxuICAgIF0pLFxuICAgIGJ1dHRvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpbGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpcGxlUHJvbXB0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb21wdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9rZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5hcnJheVxuICAgIF0pLFxuICAgIG9uQWRkRmlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYWNoZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlRmlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Mb2FkRmlsZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBsb2FkQmVnaW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBsb2FkQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBsb2FkUHJvY2VzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGxvYWRTdWNjZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblVwbG9hZEZhaWx1cmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQnVzeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZW1vdmVGaWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldFJlYWR5OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICBtdWx0aXBsZVByb21wdDogJ0Nob29zZSBBbm90aGVyIEZpbGUnLFxuICAgIHByb21wdDogJ0Nob29zZSBGaWxlJyxcbiAgICB0YWJJbmRleDogMCxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJlYWR5OiAoKSA9PiB7fSxcbiAgICBvblNldDogKCkgPT4ge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHByZXZpZXdzOiB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnV0dG9uLCBmaWxlcywgbXVsdGlwbGUsIG11bHRpcGxlUHJvbXB0LCBwcm9tcHQsIHN0YXR1cywgdGFiSW5kZXggfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgY2xhc3NlcyA9IFsncmVmcmFtZS1maWxlZmllbGQnLCBzdGF0dXNdXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gdGFiSW5kZXg9eyB0YWJJbmRleCB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsZWZpZWxkLXRva2Vuc1wiPlxuICAgICAgICAgIHsgZmlsZXMubWFwKChmaWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByZXZpZXcga2V5PXtgZmlsZWZpZWxkXyR7aW5kZXh9YH0geyAuLi50aGlzLl9nZXRGaWxlKGZpbGUsIGluZGV4KSB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IChmaWxlcy5sZW5ndGggPT09IDAgfHwgbXVsdGlwbGUgPT09IHRydWUpICYmXG4gICAgICAgICAgPGRpdiByZWY9eyAobm9kZSkgPT4gdGhpcy5idXR0b24gPSBub2RlIH0+XG4gICAgICAgICAgICB7IGJ1dHRvbiA/IGJ1dHRvbiA6XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYnJvd3NlIGJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIHsgZmlsZXMubGVuZ3RoID09PSAwID8gcHJvbXB0IDogIG11bHRpcGxlUHJvbXB0IH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRGaWxlKGZpbGUsIGluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGUsXG4gICAgICBwcmV2aWV3OiB0aGlzLnN0YXRlLnByZXZpZXdzW2ZpbGUudW5pcXVlSWRlbnRpZmllcl0sXG4gICAgICBvblJlbW92ZTogdGhpcy5faGFuZGxlUmVtb3ZlRmlsZS5iaW5kKHRoaXMsIGluZGV4KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZW5kcG9pbnQsIGRlZmF1bHRWYWx1ZSwgdG9rZW4sIG9uTG9hZEZpbGVzLCBvblNldFJlYWR5IH0gPSB0aGlzLnByb3BzXG4gICAgaWYoIWRlZmF1bHRWYWx1ZSkgcmV0dXJuIG9uU2V0UmVhZHkoKVxuICAgIGNvbnN0IGlkcyA9ICFfLmlzQXJyYXkoZGVmYXVsdFZhbHVlKSA/IFtkZWZhdWx0VmFsdWVdIDogZGVmYXVsdFZhbHVlXG4gICAgaWYoaWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG9uU2V0UmVhZHkoKVxuICAgIG9uTG9hZEZpbGVzKGVuZHBvaW50LCB0b2tlbiwgaWRzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgZmlsZXMsIG11bHRpcGxlLCBzdGF0dXMsIHZhbHVlLCBvbkNoYW5nZSwgb25SZWFkeSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHN0YXR1cyAhPT0gcHJldlByb3BzLnN0YXR1cykge1xuICAgICAgaWYocHJldlByb3BzLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgIG9uUmVhZHkoKVxuICAgICAgICB0aGlzLl9pbml0aWFsaXplUmVzdW1hYmxlKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIV8uaXNFcXVhbCh2YWx1ZSwgcHJldlByb3BzLnZhbHVlKSkgb25DaGFuZ2UodmFsdWUpXG4gICAgaWYoZmlsZXMubGVuZ3RoID4gcHJldlByb3BzLmZpbGVzLmxlbmd0aCkge1xuICAgICAgaWYoZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09ICdhZGRlZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVXBsb2FkQmVnaW4oKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihmaWxlcy5sZW5ndGggPCBwcmV2UHJvcHMuZmlsZXMubGVuZ3RoICYmICFtdWx0aXBsZSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVJlc3VtYWJsZSgpXG4gICAgfVxuXG4gIH1cblxuICBfaW5pdGlhbGl6ZVJlc3VtYWJsZSgpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgZmlsZXMsIG11bHRpcGxlLCBzdGF0dXMsIHRva2VuIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoc3RhdHVzICE9PSAncmVhZHknKSByZXR1cm5cbiAgICB0aGlzLnJlc3VtYWJsZSA9IG5ldyBSZXN1bWFibGUoe1xuICAgICAgdGFyZ2V0OiBhY3Rpb24sXG4gICAgICBjaHVua1NpemU6IDEwMjQgKiAxMjgsXG4gICAgICBwZXJtYW5lbnRFcnJvcnM6IFsyMDQsIDQwMCwgNDA0LCA0MDksIDQxNSwgNTAwLCA1MDFdLFxuICAgICAgbWF4RmlsZXM6IG11bHRpcGxlID8gdW5kZWZpbmVkIDogMSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5yZXN1bWFibGUub24oJ2ZpbGVBZGRlZCcsIHRoaXMuX2hhbmRsZUZpbGVBZGRlZC5iaW5kKHRoaXMpKVxuICAgIHRoaXMucmVzdW1hYmxlLm9uKCdmaWxlUHJvZ3Jlc3MnLCB0aGlzLl9oYW5kbGVVcGxvYWRQcm9ncmVzcy5iaW5kKHRoaXMpKVxuICAgIHRoaXMucmVzdW1hYmxlLm9uKCdmaWxlU3VjY2VzcycsIHRoaXMuX2hhbmRsZVVwbG9hZFN1Y2Nlc3MuYmluZCh0aGlzKSlcbiAgICB0aGlzLnJlc3VtYWJsZS5vbignZXJyb3InLCB0aGlzLl9oYW5kbGVVcGxvYWRGYWlsdXJlLmJpbmQodGhpcykpXG4gICAgdGhpcy5yZXN1bWFibGUub24oJ2NvbXBsZXRlJywgdGhpcy5faGFuZGxlVXBsb2FkQ29tcGxldGUuYmluZCh0aGlzKSlcbiAgICBpZihtdWx0aXBsZSB8fCAoIW11bHRpcGxlICYmIGZpbGVzLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRoaXMucmVzdW1hYmxlLmFzc2lnbkJyb3dzZSh0aGlzLmJ1dHRvbilcbiAgICAgIHRoaXMucmVzdW1hYmxlLmFzc2lnbkRyb3AodGhpcy5idXR0b24pXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUZpbGVBZGRlZChmaWxlKSB7XG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB0aGlzLnByb3BzLm9uQWRkRmlsZShmaWxlLnVuaXF1ZUlkZW50aWZpZXIsIGZpbGUuZmlsZS5uYW1lLCBmaWxlLmZpbGUuc2l6ZSwgZmlsZS5maWxlLnR5cGUsIGZpbGUuY2h1bmtzLmxlbmd0aClcbiAgICBpZighZmlsZS5maWxlLnR5cGUubWF0Y2goL2ltYWdlLykpIHJldHVyblxuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLmZpbGUpXG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSB0aGlzLl9oYW5kbGVJbWFnZVByZXZpZXcuYmluZCh0aGlzLCBmaWxlLmZpbGUudW5pcXVlSWRlbnRpZmllcilcbiAgfVxuXG4gIF9oYW5kbGVJbWFnZVByZXZpZXcodWlkLCBldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlld3M6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5wcmV2aWV3cyxcbiAgICAgICAgW3VpZF06IGV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZVVwbG9hZEJlZ2luKCkge1xuICAgIHRoaXMucmVzdW1hYmxlLnVwbG9hZCgpXG4gICAgdGhpcy5wcm9wcy5vblVwbG9hZEJlZ2luKClcbiAgICB0aGlzLnByb3BzLm9uQnVzeSgpXG4gIH1cblxuICBfaGFuZGxlVXBsb2FkUHJvZ3Jlc3MoZmlsZSkge1xuICAgIHRoaXMucHJvcHMub25VcGxvYWRQcm9ncmVzcyhmaWxlLmZpbGUudW5pcXVlSWRlbnRpZmllciwgZmlsZS5wcm9ncmVzcygpKVxuICB9XG5cbiAgX2hhbmRsZVVwbG9hZEZhaWx1cmUoZmlsZSwgbWVzc2FnZSkge1xuICAgIHRoaXMucHJvcHMub25VcGxvYWRGYWlsdXJlKG1lc3NhZ2UpXG4gICAgdGhpcy5wcm9wcy5vbkJ1c3koKVxuICB9XG5cbiAgX2hhbmRsZVVwbG9hZFN1Y2Nlc3MoZmlsZSwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGFzc2V0ID0gSlNPTi5wYXJzZShtZXNzYWdlKVxuICAgIHRoaXMucHJvcHMub25VcGxvYWRTdWNjZXNzKGZpbGUuZmlsZS51bmlxdWVJZGVudGlmaWVyLCBhc3NldClcbiAgICB0aGlzLnByb3BzLm9uQnVzeSgpXG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlRmlsZShpbmRleCkge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLnByb3BzLmZpbGVzW2luZGV4XVxuICAgIHRoaXMucHJvcHMub25SZW1vdmVGaWxlKGluZGV4KVxuICAgIGlmKCFmaWxlLnVuaXF1ZUlkZW50aWZpZXIpIHJldHVyblxuICAgIGNvbnN0IHJlc3VtYWJsZUZpbGUgPSB0aGlzLnJlc3VtYWJsZS5nZXRGcm9tVW5pcXVlSWRlbnRpZmllcihmaWxlLnVuaXF1ZUlkZW50aWZpZXIpXG4gICAgdGhpcy5yZXN1bWFibGUucmVtb3ZlRmlsZShyZXN1bWFibGVGaWxlKVxuICB9XG5cbiAgX2hhbmRsZVVwbG9hZENvbXBsZXRlKCkge1xuICAgIHRoaXMucHJvcHMub25VcGxvYWRDb21wbGV0ZSgpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlRmllbGRcbiJdfQ==