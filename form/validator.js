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

var _validator = require('../utils/validator');

var _validator2 = _interopRequireDefault(_validator);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatedForm = function (_React$Component) {
  _inherits(ValidatedForm, _React$Component);

  function ValidatedForm(props) {
    _classCallCheck(this, ValidatedForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValidatedForm).call(this, props));

    var validators = {};
    var makeRules = function makeRules(field) {
      var rules = field.validators || {};
      if (field.required) {
        rules.required = true;
      }
      if (!_lodash2.default.isEmpty(rules)) {
        validators[field.code] = _validator2.default.create(rules);
      }
    };
    _this.transformFields(props.sections, function (field) {
      _logger2.default.log(field);
      if (field.fields) {
        _lodash2.default.each(field.fields, makeRules);
      } else {
        makeRules(field);
      }
    });

    _this.state = {
      errors: {},
      validators: validators
    };
    return _this;
  }

  _createClass(ValidatedForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // When the compoent mounts, build a flat object containing all
      // validation rules

    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_index2.default, _extends({}, this.props, {
        ref: 'form',
        sections: this.bindFieldMessages(this.state.errors),
        onSubmit: this.onSubmit.bind(this),
        onFieldChange: this.onFieldChange.bind(this)
      }));
    }
  }, {
    key: 'bindFieldMessages',
    value: function bindFieldMessages(localMessages) {
      var messageType = arguments.length <= 1 || arguments[1] === undefined ? 'error' : arguments[1];

      var remoteMessages = this.props.externalErrors;
      var messages = _lodash2.default.merge(localMessages, remoteMessages);
      return this.transformFields(this.props.sections, function (field) {
        // Add the message to the field definition if the field doesn't
        // already have one.
        if (field.composite) {
          // Merge together all errors
          var compositeMapping = _lodash2.default.invert(field.composite);
          var combinedMessage = (0, _lodash2.default)(compositeMapping).map(function (msgs, extCode, internalField) {
            return messages[extCode];
          }).compact().flatten().value();
          field.error = _lodash2.default.uniq(combinedMessage).join('; ');
          return field;
        } else {
          field.error = _lodash2.default.get(messages, field.code);
          return field;
        }
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(fieldValues) {
      var _this2 = this;

      (0, _when2.default)(fieldValues).then(function (data) {
        // Do all the validations. Call the parent onSubmit callback if they pass.
        _logger2.default.log('Validating', data);
        var fieldRefs = _this2.refs.form.flattenRefs();
        var errors = (0, _lodash2.default)(data).mapValues(function (value, code) {
          if (_lodash2.default.get(fieldRefs[code], 'validate', null)) {
            // Use the custom validation function on the field
            return fieldRefs[code].validate(value).errors;
          }
          var validatorFunction = _lodash2.default.get(_this2.state.validators, code, function () {
            return '';
          });
          return _lodash2.default.first(validatorFunction(value).errors) || '';
        }).omit(_lodash2.default.isEmpty).value();

        if (_lodash2.default.isEmpty(errors)) {
          // There are no errors, validation passed. Fire relevant success events
          _this2.props.onSubmit(data);
        } else {
          // There are errors, validation failed. fire relevant failure events.
          _this2.props.onValidationFail(errors);
        }

        _this2.state.errors = errors;
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'onResolve',
    value: function onResolve(status) {}
  }, {
    key: 'onReject',
    value: function onReject(reason) {}
  }, {
    key: 'transformFields',
    value: function transformFields(sections, transformer) {
      // Transform the array of sections
      return _lodash2.default.map(sections, function (section) {
        // Extract the fields object from the section
        var sectionFields = section.fields;

        var otherSectionProps = _objectWithoutProperties(section, ['fields']);

        // Map fields to the supplied messages


        var reduceFields = function reduceFields(sFields) {
          return _lodash2.default.map(sFields, function (field) {
            // If the field type is 'fields', apply the transformer to the child Fields
            if (field.type === 'fields') {
              return _extends({}, field, {
                fields: reduceFields(field.fields)
              });
            } else {
              return transformer(field);
            }
          });
        };

        var modifiedFields = reduceFields(sectionFields);

        // Return a new section, with modified fields
        return _extends({ fields: modifiedFields }, otherSectionProps);
      });
    }
  }, {
    key: 'onFieldChange',
    value: function onFieldChange(code, value) {
      this.props.onFieldChange(code, value);
    }
  }]);

  return ValidatedForm;
}(_react2.default.Component);

ValidatedForm.defaultProps = {
  onSubmit: _lodash2.default.noop,
  onValidationFail: _lodash2.default.noop,
  onFieldChange: _lodash2.default.noop,
  externalErrors: {}
};
exports.default = ValidatedForm;