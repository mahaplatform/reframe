'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactTransitionGroup = require('react-transition-group');

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

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this._debouncedSubmit = _lodash2.default.debounce(_this._handleSubmit.bind(_this), 2500, { leading: true }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          after = _props.after,
          before = _props.before,
          config = _props.config,
          instructions = _props.instructions,
          panels = _props.panels,
          showModal = _props.showModal,
          status = _props.status;

      var configuring = _lodash2.default.includes(['pending', 'loading_sections', 'sections_loaded', 'loading_data'], status);
      return _react2.default.createElement(
        'div',
        { className: 'reframe-form' },
        _react2.default.createElement(
          _modal_panel2.default,
          this._getPanel(),
          _react2.default.createElement(
            'div',
            { className: this._getFormClasses() },
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
            !configuring && config.map(function (section, index) {
              return _react2.default.createElement(_section2.default, (0, _extends3.default)({ key: 'section_' + index }, _this2._getSection(config, section, index)));
            }),
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-form-panels' },
          _react2.default.createElement(
            _reactTransitionGroup.TransitionGroup,
            null,
            panels.map(function (panel, index) {
              return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                { classNames: 'stack', timeout: 500, key: 'panel_' + index },
                _react2.default.createElement(
                  'div',
                  null,
                  _lodash2.default.isFunction(panel) ? _react2.default.createElement(panel) : panel
                )
              );
            })
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
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        form: {
          push: this._handlePush.bind(this),
          pop: this._handlePop.bind(this)
        }
      };
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props4 = this.props,
          buttonPosition = _props4.buttonPosition,
          cancelText = _props4.cancelText,
          saveText = _props4.saveText,
          title = _props4.title;

      return {
        position: buttonPosition,
        title: title,
        leftItems: cancelText ? [{ label: cancelText, handler: this._handleCancel.bind(this) }] : null,
        rightItems: saveText ? [{ label: saveText, handler: this._debouncedSubmit, className: this._getButtonClasses() }] : null
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
      return (0, _extends3.default)({}, section, {
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
    key: '_handlePop',
    value: function _handlePop() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.props.onPop(num);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(component) {
      this.props.onPush(component);
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
      if (endpoint) return onFetchData(endpoint, defaults);
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

Form.childContextTypes = {
  form: _propTypes2.default.object
};
Form.propTypes = {
  action: _propTypes2.default.string,
  after: _propTypes2.default.string,
  before: _propTypes2.default.any,
  busy: _propTypes2.default.array,
  buttonPosition: _propTypes2.default.string,
  defaults: _propTypes2.default.object,
  cancelText: _propTypes2.default.string,
  config: _propTypes2.default.array,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  entity: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  filtered: _propTypes2.default.object,
  instructions: _propTypes2.default.any,
  isReady: _propTypes2.default.bool,
  isBusy: _propTypes2.default.bool,
  method: _propTypes2.default.string,
  panels: _propTypes2.default.array,
  ready: _propTypes2.default.array,
  saveText: _propTypes2.default.string,
  sections: _propTypes2.default.array,
  showModal: _propTypes2.default.bool,
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
  buttonPosition: 'top',
  cancelText: 'Cancel',
  saveText: 'Save',
  showModal: true,
  onCancel: function onCancel() {},
  onChange: function onChange() {},
  onChangeField: function onChangeField() {},
  onSubmit: function onSubmit() {},
  onFailure: function onFailure(error) {},
  onSuccess: function onSuccess(entity) {}
};
exports.default = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRm9ybSIsIl9kZWJvdW5jZWRTdWJtaXQiLCJfIiwiZGVib3VuY2UiLCJfaGFuZGxlU3VibWl0IiwiYmluZCIsImxlYWRpbmciLCJwcm9wcyIsImFmdGVyIiwiYmVmb3JlIiwiY29uZmlnIiwiaW5zdHJ1Y3Rpb25zIiwicGFuZWxzIiwic2hvd01vZGFsIiwic3RhdHVzIiwiY29uZmlndXJpbmciLCJpbmNsdWRlcyIsIl9nZXRQYW5lbCIsIl9nZXRGb3JtQ2xhc3NlcyIsIm1hcCIsInNlY3Rpb24iLCJpbmRleCIsIl9nZXRTZWN0aW9uIiwicGFuZWwiLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic2VjdGlvbnMiLCJvblNldFNlY3Rpb25zIiwicHJldlByb3BzIiwiZGF0YSIsImlzRXF1YWwiLCJfaGFuZGxlVXBkYXRlRmllbGQiLCJfaGFuZGxlTG9hZERhdGEiLCJfaGFuZGxlU3VjY2VzcyIsIl9oYW5kbGVGYWlsdXJlIiwiX2hhbmRsZUNoYW5nZSIsImZvcm0iLCJwdXNoIiwiX2hhbmRsZVB1c2giLCJwb3AiLCJfaGFuZGxlUG9wIiwiYnV0dG9uUG9zaXRpb24iLCJjYW5jZWxUZXh0Iiwic2F2ZVRleHQiLCJ0aXRsZSIsInBvc2l0aW9uIiwibGVmdEl0ZW1zIiwibGFiZWwiLCJoYW5kbGVyIiwiX2hhbmRsZUNhbmNlbCIsInJpZ2h0SXRlbXMiLCJjbGFzc05hbWUiLCJfZ2V0QnV0dG9uQ2xhc3NlcyIsImlzUmVhZHkiLCJzdWJtaXR0aW5nIiwiY2xhc3NlcyIsImpvaW4iLCJpc0J1c3kiLCJzYXZlQ2xhc3NlcyIsImVycm9ycyIsInRhYkluZGV4U3RhcnQiLCJyZWR1Y2UiLCJzdGFydCIsImkiLCJmaWVsZHMiLCJsZW5ndGgiLCJvbkJ1c3kiLCJfaGFuZGxlVG9nZ2xlQnVzeSIsIm9uUmVhZHkiLCJfaGFuZGxlU2V0UmVhZHkiLCJvblN1Ym1pdCIsIm9uVXBkYXRlRGF0YSIsIl9oYW5kbGVVcGRhdGVEYXRhIiwibnVtIiwib25Qb3AiLCJjb21wb25lbnQiLCJvblB1c2giLCJvbkNhbmNlbCIsImRlZmF1bHRzIiwiZW5kcG9pbnQiLCJvbkZldGNoRGF0YSIsIm9uU2V0RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJvblNldFJlYWR5IiwicHJldlNlY3Rpb25zIiwib25VcGRhdGVGaWVsZCIsImZpZWxkIiwiZmllbGRJbmRleCIsIm9uVG9nZ2xlQnVzeSIsInZhbHVlIiwicHJldmlvdXMiLCJjdXJyZW50Iiwib25DaGFuZ2VGaWVsZCIsIm9uQ2hhbmdlIiwiZm9yT3duIiwiY29kZSIsImFjdGlvbiIsImZpbHRlcmVkIiwibWV0aG9kIiwib25TdWJtaXRGb3JtIiwib25TdWNjZXNzIiwiZW50aXR5Iiwib25GYWlsdXJlIiwiQ29tcG9uZW50IiwiY2hpbGRDb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJhbnkiLCJidXN5IiwiYXJyYXkiLCJib29sIiwicmVhZHkiLCJmdW5jIiwib25GZXRjaFNlY3Rpb25zIiwib25SZXNldEZvcm0iLCJvblZhbGlkYXRlRm9ybSIsImRlZmF1bHRQcm9wcyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7OztnTUFpRUpDLGdCLEdBQW1CQyxpQkFBRUMsUUFBRixDQUFXLE1BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLE9BQVgsRUFBMEMsSUFBMUMsRUFBZ0QsRUFBRUMsU0FBUyxJQUFYLEVBQWhELEM7Ozs7OzZCQUVWO0FBQUE7O0FBQUEsbUJBQ29FLEtBQUtDLEtBRHpFO0FBQUEsVUFDQ0MsS0FERCxVQUNDQSxLQUREO0FBQUEsVUFDUUMsTUFEUixVQUNRQSxNQURSO0FBQUEsVUFDZ0JDLE1BRGhCLFVBQ2dCQSxNQURoQjtBQUFBLFVBQ3dCQyxZQUR4QixV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RSxDQVRFO0FBVXBCa0MsYUFBVyxtQkFBQ2lCLEtBQUQsRUFBVyxDQUFFLENBVko7QUFXcEJuQixhQUFXLG1CQUFDQyxNQUFELEVBQVksQ0FBRTtBQVhMLEM7a0JBMk1UeEcsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBNb2RhbFBhbmVsIGZyb20gJy4uL21vZGFsX3BhbmVsJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgZm9ybTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWZ0ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmVmb3JlOiBQcm9wVHlwZXMuYW55LFxuICAgIGJ1c3k6IFByb3BUeXBlcy5hcnJheSxcbiAgICBidXR0b25Qb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpZzogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZXJyb3JzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVudGl0eTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBmaWx0ZXJlZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnN0cnVjdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gICAgaXNSZWFkeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNCdXN5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtZXRob2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcmVhZHk6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzYXZlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNob3dNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2VGaWVsZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3VibWl0Rm9ybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GYWlsdXJlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZldGNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GZXRjaFNlY3Rpb25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlc2V0Rm9ybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZXREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldFJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldFNlY3Rpb25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVG9nZ2xlQnVzeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25WYWxpZGF0ZUZvcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBkYXRlRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGVGaWVsZDogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBidXR0b25Qb3NpdGlvbjogJ3RvcCcsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgc2F2ZVRleHQ6ICdTYXZlJyxcbiAgICBzaG93TW9kYWw6IHRydWUsXG4gICAgb25DYW5jZWw6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZUZpZWxkOiAoKSA9PiB7fSxcbiAgICBvblN1Ym1pdDogKCkgPT4ge30sXG4gICAgb25GYWlsdXJlOiAoZXJyb3IpID0+IHt9LFxuICAgIG9uU3VjY2VzczogKGVudGl0eSkgPT4ge31cbiAgfVxuXG4gIF9kZWJvdW5jZWRTdWJtaXQgPSBfLmRlYm91bmNlKHRoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLCAyNTAwLCB7IGxlYWRpbmc6IHRydWUgfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhZnRlciwgYmVmb3JlLCBjb25maWcsIGluc3RydWN0aW9ucywgcGFuZWxzLCBzaG93TW9kYWwsIHN0YXR1cyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNvbmZpZ3VyaW5nID0gXy5pbmNsdWRlcyhbJ3BlbmRpbmcnLCAnbG9hZGluZ19zZWN0aW9ucycsJ3NlY3Rpb25zX2xvYWRlZCcsICdsb2FkaW5nX2RhdGEnXSwgc3RhdHVzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZm9ybVwiPlxuICAgICAgICA8TW9kYWxQYW5lbCB7IC4uLnRoaXMuX2dldFBhbmVsKCkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldEZvcm1DbGFzc2VzKCkgfT5cbiAgICAgICAgICAgIHsgKGJlZm9yZSB8fCBpbnN0cnVjdGlvbnMpICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1mb3JtLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHsgYmVmb3JlICYmIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1mb3JtLWJlZm9yZVwiPnsgYmVmb3JlIH08L2Rpdj4gfVxuICAgICAgICAgICAgICAgIHsgaW5zdHJ1Y3Rpb25zICYmIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3Rpb25zXCI+eyBpbnN0cnVjdGlvbnMgfTwvZGl2PiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyAhY29uZmlndXJpbmcgJiZcbiAgICAgICAgICAgICAgY29uZmlnLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U2VjdGlvbiBrZXk9e2BzZWN0aW9uXyR7aW5kZXh9YH0geyAuLi50aGlzLl9nZXRTZWN0aW9uKGNvbmZpZywgc2VjdGlvbiwgaW5kZXgpIH0gLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgYWZ0ZXIgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZvcm0tZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZvcm0tYWZ0ZXJcIj57IGFmdGVyIH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWxQYW5lbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZvcm0tcGFuZWxzXCI+XG4gICAgICAgICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgIHsgcGFuZWxzLm1hcCgocGFuZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGNsYXNzTmFtZXM9XCJzdGFja1wiIHRpbWVvdXQ9eyA1MDAgfSBrZXk9eyBgcGFuZWxfJHtpbmRleH1gIH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKHBhbmVsKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQocGFuZWwpIDogcGFuZWwgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zLCBvblNldFNlY3Rpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgb25TZXRTZWN0aW9ucyhzZWN0aW9ucylcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGEsIHNlY3Rpb25zLCBzdGF0dXMgfSA9IHRoaXMucHJvcHNcbiAgICBpZighXy5pc0VxdWFsKHByZXZQcm9wcy5zZWN0aW9ucywgc2VjdGlvbnMpKSB0aGlzLl9oYW5kbGVVcGRhdGVGaWVsZChwcmV2UHJvcHMuc2VjdGlvbnMpXG4gICAgaWYocHJldlByb3BzLnN0YXR1cyAhPT0gc3RhdHVzKSB7XG4gICAgICBpZihzdGF0dXMgPT09ICdzZWN0aW9uc19sb2FkZWQnKSB0aGlzLl9oYW5kbGVMb2FkRGF0YSgpXG4gICAgICBpZihzdGF0dXMgPT09ICd2YWxpZGF0ZWQnKSB0aGlzLl9oYW5kbGVTdWJtaXQoKVxuICAgICAgaWYoc3RhdHVzID09PSAnc3VjY2VzcycpIHRoaXMuX2hhbmRsZVN1Y2Nlc3MoKVxuICAgICAgaWYoc3RhdHVzID09PSAnZmFpbHVyZScpIHRoaXMuX2hhbmRsZUZhaWx1cmUoKVxuICAgIH1cbiAgICBpZihwcmV2UHJvcHMuZGF0YSAhPSBkYXRhKSB0aGlzLl9oYW5kbGVDaGFuZ2UocHJldlByb3BzLmRhdGEsIGRhdGEpXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm06IHtcbiAgICAgICAgcHVzaDogdGhpcy5faGFuZGxlUHVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBwb3A6IHRoaXMuX2hhbmRsZVBvcC5iaW5kKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldFBhbmVsKCkge1xuICAgIGNvbnN0IHsgYnV0dG9uUG9zaXRpb24sIGNhbmNlbFRleHQsIHNhdmVUZXh0LCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogYnV0dG9uUG9zaXRpb24sXG4gICAgICB0aXRsZSxcbiAgICAgIGxlZnRJdGVtczogKGNhbmNlbFRleHQpID8gW1xuICAgICAgICB7IGxhYmVsOiBjYW5jZWxUZXh0LCBoYW5kbGVyOiB0aGlzLl9oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSB9XG4gICAgICBdIDogbnVsbCxcbiAgICAgIHJpZ2h0SXRlbXM6IChzYXZlVGV4dCkgPyBbXG4gICAgICAgIHsgbGFiZWw6IHNhdmVUZXh0LCBoYW5kbGVyOiB0aGlzLl9kZWJvdW5jZWRTdWJtaXQgLCBjbGFzc05hbWU6IHRoaXMuX2dldEJ1dHRvbkNsYXNzZXMoKSB9XG4gICAgICBdIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9nZXRGb3JtQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGlzUmVhZHksIHN0YXR1cyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNvbmZpZ3VyaW5nID0gXy5pbmNsdWRlcyhbJ3BlbmRpbmcnLCAnbG9hZGluZ19zZWN0aW9ucycsJ3NlY3Rpb25zX2xvYWRlZCcsICdsb2FkaW5nX2RhdGEnXSwgc3RhdHVzKVxuICAgIGNvbnN0IHN1Ym1pdHRpbmcgPSBzdGF0dXMgPT09ICdzdWJtaXR0aW5nJ1xuICAgIGxldCBjbGFzc2VzID0gWyd1aScsICdmb3JtJywgc3RhdHVzXVxuICAgIGlmKGNvbmZpZ3VyaW5nIHx8ICFpc1JlYWR5IHx8IHN1Ym1pdHRpbmcpIGNsYXNzZXMucHVzaCgnbG9hZGluZycpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0QnV0dG9uQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IGlzQnVzeSB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBzYXZlQ2xhc3NlcyA9IFsncmVmcmFtZS1tb2RhbC1wYW5lbC1oZWFkZXItbmF2aWdhdGlvbiddXG4gICAgaWYoaXNCdXN5KSBzYXZlQ2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpXG4gICAgcmV0dXJuIHNhdmVDbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldFNlY3Rpb24oY29uZmlnLCBzZWN0aW9uLCBpbmRleCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGFiSW5kZXhTdGFydCA9IGNvbmZpZy5yZWR1Y2UoKHN0YXJ0LCBzZWN0aW9uLCBpKSA9PiB7XG4gICAgICBpZihpID49IGluZGV4KSByZXR1cm4gc3RhcnRcbiAgICAgIHJldHVybiBzdGFydCArIHNlY3Rpb24uZmllbGRzLmxlbmd0aFxuICAgIH0sIDEpXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNlY3Rpb24sXG4gICAgICBkYXRhLFxuICAgICAgZXJyb3JzLFxuICAgICAgdGFiSW5kZXhTdGFydCxcbiAgICAgIG9uQnVzeTogdGhpcy5faGFuZGxlVG9nZ2xlQnVzeS5iaW5kKHRoaXMpLFxuICAgICAgb25SZWFkeTogdGhpcy5faGFuZGxlU2V0UmVhZHkuYmluZCh0aGlzKSxcbiAgICAgIG9uU3VibWl0OiB0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKSxcbiAgICAgIG9uVXBkYXRlRGF0YTogdGhpcy5faGFuZGxlVXBkYXRlRGF0YS5iaW5kKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcChudW0gPSAxKSB7XG4gICAgdGhpcy5wcm9wcy5vblBvcChudW0pXG4gIH1cblxuICBfaGFuZGxlUHVzaChjb21wb25lbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uUHVzaChjb21wb25lbnQpXG4gIH1cblxuICBfaGFuZGxlQ2FuY2VsKCkge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG5cbiAgX2hhbmRsZUxvYWREYXRhKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZGVmYXVsdHMsIGVuZHBvaW50LCBvbkZldGNoRGF0YSwgb25TZXREYXRhIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMSkgcmV0dXJuIG9uU2V0RGF0YShkYXRhKVxuICAgIGlmKGVuZHBvaW50KSByZXR1cm4gb25GZXRjaERhdGEoZW5kcG9pbnQsIGRlZmF1bHRzKVxuICAgIG9uU2V0RGF0YShkZWZhdWx0cylcbiAgfVxuXG4gIF9oYW5kbGVTZXRSZWFkeShrZXkpIHtcbiAgICB0aGlzLnByb3BzLm9uU2V0UmVhZHkoa2V5KVxuICB9XG5cbiAgX2hhbmRsZVVwZGF0ZUZpZWxkKHByZXZTZWN0aW9ucykge1xuICAgIGNvbnN0IHsgc2VjdGlvbnMsIG9uVXBkYXRlRmllbGQgfSA9IHRoaXMucHJvcHNcbiAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICBpZihfLmlzRXF1YWwocHJldlNlY3Rpb25zW2luZGV4XSwgc2VjdGlvbnNbaW5kZXhdKSkgcmV0dXJuXG4gICAgICBzZWN0aW9uc1tpbmRleF0uZmllbGRzLm1hcCgoZmllbGQsIGZpZWxkSW5kZXgpID0+IHtcbiAgICAgICAgaWYoXy5pc0VxdWFsKHByZXZTZWN0aW9uc1tpbmRleF0uZmllbGRzW2ZpZWxkSW5kZXhdLCBzZWN0aW9uc1tpbmRleF0uZmllbGRzW2ZpZWxkSW5kZXhdKSkgcmV0dXJuXG4gICAgICAgIG9uVXBkYXRlRmllbGQoaW5kZXgsIGZpZWxkSW5kZXgsIGZpZWxkKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZVRvZ2dsZUJ1c3koa2V5KSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZUJ1c3koa2V5KVxuICB9XG5cbiAgX2hhbmRsZVVwZGF0ZURhdGEoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGVEYXRhKGtleSwgdmFsdWUpXG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZUZpZWxkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKG9uQ2hhbmdlRmllbGQpIHtcbiAgICAgIF8uZm9yT3duKGN1cnJlbnQsICh2YWx1ZSwgY29kZSkgPT4ge1xuICAgICAgICBpZihwcmV2aW91c1tjb2RlXSAhPSBjdXJyZW50W2NvZGVdKSBvbkNoYW5nZUZpZWxkKGNvZGUsIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYob25DaGFuZ2UpIG9uQ2hhbmdlKGN1cnJlbnQpXG4gIH1cblxuICBfaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBmaWx0ZXJlZCwgaXNCdXN5LCBtZXRob2QsIG9uU3VibWl0LCBvblN1Ym1pdEZvcm0gfSA9IHRoaXMucHJvcHNcbiAgICBpZihpc0J1c3kpIHJldHVyblxuICAgIGlmKGFjdGlvbikgcmV0dXJuIG9uU3VibWl0Rm9ybShtZXRob2QsIGFjdGlvbiwgZmlsdGVyZWQpXG4gICAgaWYob25TdWJtaXQpIHtcbiAgICAgIGlmKG9uU3VibWl0KGZpbHRlcmVkKSkgcmV0dXJuIHRoaXMuX2hhbmRsZVN1Y2Nlc3MoKVxuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZhaWx1cmUoKVxuICAgIH1cbiAgICB0aGlzLl9oYW5kbGVTdWNjZXNzKClcbiAgfVxuXG4gIF9oYW5kbGVTdWNjZXNzKCkge1xuICAgIHRoaXMucHJvcHMub25TdWNjZXNzKHRoaXMucHJvcHMuZW50aXR5KVxuICB9XG5cbiAgX2hhbmRsZUZhaWx1cmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkZhaWx1cmUoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVxuIl19