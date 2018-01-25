'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal_panel = require('../modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this._debouncedSubmit = _lodash2.default.debounce(_this._handleSubmit.bind(_this), 2500, { leading: true }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          after = _props.after,
          before = _props.before,
          config = _props.config,
          instructions = _props.instructions,
          status = _props.status;

      var configuring = _lodash2.default.includes(['pending', 'loading_sections', 'sections_loaded', 'loading_data'], status);
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(
          'div',
          { className: 'reframe-form' },
          (before || instructions) && _react2.default.createElement(
            'div',
            { className: 'reframe-form-header' },
            before && _react2.default.createElement(
              'div',
              { className: 'reframe-form-before' },
              before
            ),
            instructions && _react2.default.createElement(
              'div',
              { className: 'instructions' },
              instructions
            )
          ),
          _react2.default.createElement(
            'div',
            { className: this._getFormClasses() },
            !configuring && config.map(function (section, index) {
              return _react2.default.createElement(_section2.default, _extends({ key: 'section_' + index }, _this2._getSection(config, section, index)));
            })
          ),
          after && _react2.default.createElement(
            'div',
            { className: 'reframe-form-footer' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-form-after' },
              after
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          sections = _props2.sections,
          onSetSections = _props2.onSetSections;

      onSetSections(sections);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          data = _props3.data,
          sections = _props3.sections,
          status = _props3.status;

      if (!_lodash2.default.isEqual(prevProps.sections, sections)) this._handleUpdateField(prevProps.sections);
      if (prevProps.status !== status) {
        if (status === 'sections_loaded') this._handleLoadData();
        if (status === 'validated') this._handleSubmit();
        if (status === 'success') this._handleSuccess();
        if (status === 'failure') this._handleFailure();
      }
      if (prevProps.data != data) this._handleChange(prevProps.data, data);
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props4 = this.props,
          saveText = _props4.saveText,
          title = _props4.title;

      return {
        title: title,
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }],
        rightItems: [{ label: saveText, handler: this._debouncedSubmit, className: this._getButtonClasses() }]
      };
    }
  }, {
    key: '_getFormClasses',
    value: function _getFormClasses() {
      var _props5 = this.props,
          isReady = _props5.isReady,
          status = _props5.status;

      var configuring = _lodash2.default.includes(['pending', 'loading_sections', 'sections_loaded', 'loading_data'], status);
      var submitting = status === 'submitting';
      var classes = ['ui', 'form', status];
      if (configuring || !isReady || submitting) classes.push('loading');
      return classes.join(' ');
    }
  }, {
    key: '_getButtonClasses',
    value: function _getButtonClasses() {
      var isBusy = this.props.isBusy;

      var saveClasses = ['reframe-modal-panel-header-navigation'];
      if (isBusy) saveClasses.push('disabled');
      return saveClasses.join(' ');
    }
  }, {
    key: '_getSection',
    value: function _getSection(config, section, index) {
      var _props6 = this.props,
          data = _props6.data,
          errors = _props6.errors;

      var tabIndexStart = config.reduce(function (start, section, i) {
        if (i >= index) return start;
        return start + section.fields.length;
      }, 1);
      return _extends({}, section, {
        data: data,
        errors: errors,
        tabIndexStart: tabIndexStart,
        onBusy: this._handleToggleBusy.bind(this),
        onReady: this._handleSetReady.bind(this),
        onSubmit: this._handleSubmit.bind(this),
        onUpdateData: this._handleUpdateData.bind(this)
      });
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handleLoadData',
    value: function _handleLoadData() {
      var _props7 = this.props,
          data = _props7.data,
          defaults = _props7.defaults,
          endpoint = _props7.endpoint,
          onFetchData = _props7.onFetchData,
          onSetData = _props7.onSetData;

      if (Object.keys(data).length > 1) return onSetData(data);
      if (endpoint) return onFetchData(endpoint);
      onSetData(defaults);
    }
  }, {
    key: '_handleSetReady',
    value: function _handleSetReady(key) {
      this.props.onSetReady(key);
    }
  }, {
    key: '_handleUpdateField',
    value: function _handleUpdateField(prevSections) {
      var _props8 = this.props,
          sections = _props8.sections,
          onUpdateField = _props8.onUpdateField;

      sections.map(function (section, index) {
        if (_lodash2.default.isEqual(prevSections[index], sections[index])) return;
        sections[index].fields.map(function (field, fieldIndex) {
          if (_lodash2.default.isEqual(prevSections[index].fields[fieldIndex], sections[index].fields[fieldIndex])) return;
          onUpdateField(index, fieldIndex, field);
        });
      });
    }
  }, {
    key: '_handleToggleBusy',
    value: function _handleToggleBusy(key) {
      this.props.onToggleBusy(key);
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(key, value) {
      this.props.onUpdateData(key, value);
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(previous, current) {
      var _props9 = this.props,
          onChangeField = _props9.onChangeField,
          onChange = _props9.onChange;

      if (onChangeField) {
        _lodash2.default.forOwn(current, function (value, code) {
          if (previous[code] != current[code]) onChangeField(code, value);
        });
      }
      if (onChange) onChange(current);
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit() {
      var _props10 = this.props,
          action = _props10.action,
          filtered = _props10.filtered,
          isBusy = _props10.isBusy,
          method = _props10.method,
          onSubmit = _props10.onSubmit,
          onSubmitForm = _props10.onSubmitForm;

      if (isBusy) return;
      if (action) return onSubmitForm(method, action, filtered);
      if (onSubmit) {
        if (onSubmit(filtered)) return this._handleSuccess();
        return this._handleFailure();
      }
      this._handleSuccess();
    }
  }, {
    key: '_handleSuccess',
    value: function _handleSuccess() {
      this.props.onSuccess(this.props.entity);
    }
  }, {
    key: '_handleFailure',
    value: function _handleFailure() {
      this.props.onFailure();
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.contextTypes = {
  modal: _propTypes2.default.object
};
Form.propTypes = {
  action: _propTypes2.default.string,
  after: _propTypes2.default.string,
  before: _propTypes2.default.string,
  busy: _propTypes2.default.array,
  defaults: _propTypes2.default.object,
  config: _propTypes2.default.array,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  entity: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  filtered: _propTypes2.default.object,
  instructions: _propTypes2.default.string,
  isReady: _propTypes2.default.bool,
  isBusy: _propTypes2.default.bool,
  method: _propTypes2.default.string,
  ready: _propTypes2.default.array,
  saveText: _propTypes2.default.string,
  sections: _propTypes2.default.array,
  status: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onCancel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChangeField: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onSubmitForm: _propTypes2.default.func,
  onFailure: _propTypes2.default.func,
  onFetchData: _propTypes2.default.func,
  onFetchSections: _propTypes2.default.func,
  onResetForm: _propTypes2.default.func,
  onSetData: _propTypes2.default.func,
  onSetReady: _propTypes2.default.func,
  onSetSections: _propTypes2.default.func,
  onSuccess: _propTypes2.default.func,
  onToggleBusy: _propTypes2.default.func,
  onValidateForm: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func,
  onUpdateField: _propTypes2.default.func
};
Form.defaultProps = {
  method: 'GET',
  saveText: 'Save',
  onCancel: function onCancel() {},
  onChange: function onChange() {},
  onChangeField: function onChangeField() {},
  onSubmit: function onSubmit() {},
  onFailure: function onFailure(error) {},
  onSuccess: function onSuccess(entity) {}
};
exports.default = Form;