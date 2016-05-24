'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _loading = require('snax/lib/containers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _validated = require('./validated');

var _validated2 = _interopRequireDefault(_validated);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _keys = require('when/keys');

var _keys2 = _interopRequireDefault(_keys);

var _sequence = require('when/sequence');

var _sequence2 = _interopRequireDefault(_sequence);

var _random = require('../utils/random');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isAsync = function isAsync(f) {
  return f.async || _lodash2.default.has(f, 'endpoint') && f.async !== false;
};

var OmniForm = function (_React$Component) {
  _inherits(OmniForm, _React$Component);

  function OmniForm(props) {
    _classCallCheck(this, OmniForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OmniForm).call(this, props));

    _this.state = {
      loading: false,
      submitting: false,
      error: false,
      errors: [],
      message: null,
      pendingData: {},
      asyncFieldOptions: {}
    };
    _this.api = new _api2.default();
    _this.id = _this.props.id || (0, _random.uid)();
    return _this;
  }

  _createClass(OmniForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_validated2.default, _extends({ ref: 'innerForm' }, this.applyProps(), this.attachCallbacks()));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ loading: true });
      var initPromise = (0, _sequence2.default)([this.loadFieldOptions.bind(this), this.loadEndpointData.bind(this)]);
      initPromise.then(function () {
        return _this2.forceUpdate();
      }).catch(function (e) {
        return _this2.showLoadError(e);
      }).finally(function () {
        return _this2.setState({ loading: false });
      });
    }
  }, {
    key: 'loadEndpointData',
    value: function loadEndpointData() {
      var _this3 = this;

      if (!this.props.endpoint) return (0, _when2.default)({});
      return this.api.loadJSON(this.props.endpoint).then(function (data) {
        return _this3.fill(data);
      });
    }
  }, {
    key: 'loadFieldOptions',
    value: function loadFieldOptions() {
      var _this4 = this;

      return this.getAsyncFields().tap(console.log.bind(console)).then(function (opts) {
        return _this4.setState({ asyncFieldOptions: opts });
      });
    }
  }, {
    key: 'showLoadError',
    value: function showLoadError(e) {
      console.error(e);
      this.setState({
        error: true,
        message: {
          messageType: 'error',
          messageTitle: 'There was a problem loading this form.',
          message: "Some data required to display this form could not be loaded right now."
        }
      });
    }
  }, {
    key: 'attachCallbacks',
    value: function attachCallbacks() {
      var self = this;
      return {
        onSubmit: function onSubmit(data) {
          if (self.props.action) {
            self.setState({ submitting: true, pendingData: _lodash2.default.cloneDeep(data) });
            self.api[self.props.method](self.props.action, data).then(function (response) {
              return self.handleAPIResponse(response);
            }).then(function (response) {
              return self.doRedirect(response);
            }).catch(function (errResponse) {
              return self.handleAPIError(errResponse);
            }).finally(function () {
              return self.setState({ submitting: false, pendingData: {} });
            });
          } else {
            self.handleSubmitSuccess(data);
            self.doRedirect();
          }
        },
        onFieldChange: function onFieldChange() {
          var _self$props;

          (_self$props = self.props).onFieldChange.apply(_self$props, arguments);
        }
      };
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      return _extends({
        loading: this.state.loading || this.state.submitting,
        externalErrors: this.state.errors,
        sections: this.mapSections()
      }, this.state.message, _lodash2.default.omit(this.props, ['mode', 'action', 'endpoint', 'onSubmit', 'onFieldChange']));
    }
  }, {
    key: 'handleAPIResponse',
    value: function handleAPIResponse(response) {
      this.handleSubmitSuccess(this.state.pendingData);
      return response;
    }
  }, {
    key: 'handleAPIError',
    value: function handleAPIError(errResponse) {
      var code = errResponse.status.code;
      var _errResponse$entity = errResponse.entity;
      var errors = _errResponse$entity.errors;
      var message = _errResponse$entity.message;

      var formMessage = void 0;
      switch (code) {
        case 422:
          formMessage = {
            messageType: 'warning',
            messageTitle: 'There were problems with your input.',
            message: message
          };
          this.setState({ error: true, errors: errors, message: formMessage });
          break;

        default:
          formMessage = {
            messageType: 'error',
            messageTitle: 'There was an error while processing your submission.',
            message: message
          };
          this.setState({ error: true, message: formMessage });
      }

      this.props.onError({ code: code, errors: errors, message: message });
    }
  }, {
    key: 'handleSubmitSuccess',
    value: function handleSubmitSuccess(data) {
      this.props.onSubmit(data);
      if (this.context.container) {
        _lodash2.default.invoke(this.context.container, 'sync');
      }
    }
  }, {
    key: 'doRedirect',
    value: function doRedirect(response) {
      if (this.props.redirect && this.context.history) {
        var compiled = _lodash2.default.template(this.props.redirect, { interpolate: /#{([\s\S]+?)}/g });
        var redirect = compiled(response.entity);
        this.context.history.push(redirect);
      }
    }
  }, {
    key: 'mapSections',
    value: function mapSections() {
      var asyncProps = this.state.asyncFieldOptions;
      var transformFields = function transformFields(_ref) {
        var fields = _ref.fields;

        return _lodash2.default.map(fields, function (f) {
          if (f.fields) return _extends({ fields: transformFields(f) }, f);
          if (!isAsync(f)) return f;
          f.options = asyncProps[f.code];
          return f;
        });
      };
      return _lodash2.default.map(this.props.sections, transformFields);
    }
  }, {
    key: 'fill',
    value: function fill(data) {
      this.refs.innerForm.fill(data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.refs.innerForm.onClear(this.id);
    }
  }, {
    key: 'submit',
    value: function submit() {
      this.refs.innerForm.doSubmit(this.id);
    }
  }, {
    key: 'getAsyncFields',
    value: function getAsyncFields(fields) {
      var _this5 = this;

      // Look for fields that are marked Async
      var asyncFieldsPromises = (0, _lodash2.default)(this.props.sections).chain().map('fields').flatten().map(function (f) {
        return f.fields || f;
      }).flatten().filter(isAsync).transform(function (acc, f) {
        acc[f.code] = _this5.api.loadJSON(f.endpoint).then(function (response) {
          var records = response.records || response;
          return _lodash2.default.map(records, function (r) {
            return { key: _lodash2.default.get(r, f.value), value: _lodash2.default.get(r, f.text) };
          });
        });
      }, {}).value();

      return _keys2.default.all(asyncFieldsPromises);
    }
  }]);

  return OmniForm;
}(_react2.default.Component);

OmniForm.propTypes = {
  endpoint: _react2.default.PropTypes.string,
  action: _react2.default.PropTypes.string.constructor,
  method: _react2.default.PropTypes.oneOf('post', 'put', 'patch', 'get'),
  redirect: _react2.default.PropTypes.string
};
OmniForm.defaultProps = {
  method: 'get',
  onSubmit: _lodash2.default.noop,
  onFieldChange: _lodash2.default.noop,
  onError: _lodash2.default.noop,
  onValidationFail: _lodash2.default.noop,
  redirect: null
};
OmniForm.contextTypes = {
  history: _react2.default.PropTypes.object,
  container: _react2.default.PropTypes.object
};
exports.default = OmniForm;