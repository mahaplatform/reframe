'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _section = require('../controls/section.js');

var _section2 = _interopRequireDefault(_section);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var whenKeys = require('when/keys');

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

    _this.state = {
      frozen: false,
      errors: {},
      dynamicPrefill: {},
      tick: 1
    };

    _this.data = {};

    _this.listeners = [
      //actionListener.addActionListener(FormActions.FILL, this.onFill.bind(this)),
      //actionListener.addActionListener(FormActions.CLEAR, this.onClear.bind(this)),
      //actionListener.addActionListener(FormActions.CHANGE, this.onFieldChange.bind(this)),
      //actionListener.addActionListener(FormActions.SUBMIT, this.doSubmit.bind(this))
    ];
    return _this;
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var title = this.props.title ? _react2.default.createElement(
        'div',
        { className: 'ui segment inverted' },
        this.props.title
      ) : null;
      var label;
      if (this.props.label) {
        label = _react2.default.createElement(
          'div',
          { className: 'ui segment top attached' },
          _react2.default.createElement(
            'div',
            { className: 'ui top attached label' },
            this.props.label.toUpperCase()
          )
        );
      }
      var classes = ['ui', 'form'].concat(this.props.class.split(' '));
      if (this.props.loading) {
        classes.push('loading');
      }
      var segmentContainerClass = this.props.borderless ? 'ui basic segments' : 'ui segments';
      var segmentClass = this.props.borderless ? 'ui basic segment' : 'ui segment';
      var segmentStyle = this.props.borderless ? { border: 'none !important', borderRadius: 0 } : {};
      return _react2.default.createElement(
        'form',
        { ref: 'formElement', className: classes.join(' '), onSubmit: this.onSubmit.bind(this), style: this.props.style },
        _react2.default.createElement(
          'div',
          { className: segmentContainerClass, style: segmentStyle },
          title,
          label,
          this.props.sections.map(function (section, index) {
            return _react2.default.createElement(_section2.default, _extends({}, section, {
              borderless: _this2.props.borderless,
              onFieldChange: _this2.props.onFieldChange,
              formId: _this2.props.id,
              ref: 'section_' + index,
              key: 'section_' + index }));
          }),
          function () {
            if (_this2.props.message) {
              var messageClass = _this2.props.messageType !== 'normal' ? _this2.props.messageType : '';
              return _react2.default.createElement(
                'div',
                { className: segmentClass },
                _react2.default.createElement(
                  'div',
                  { className: 'ui ' + messageClass + ' message visible' },
                  _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    _this2.props.messageTitle
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _this2.props.message
                  )
                )
              );
            }
          }(),
          this.renderButtons()
        )
      );
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this3 = this;

      if (_lodash2.default.isArray(this.props.buttons)) {
        return _react2.default.createElement(
          'div',
          { className: 'ui segment secondary right aligned' },
          this.props.buttons.map(function (button) {
            var classes = ['ui', 'button'];
            button.position ? classes.push(button.position + ' floated') : _lodash2.default.noop;
            if (button.type == 'submit') {
              classes.push('positive');
              return _react2.default.createElement(
                'button',
                { className: classes.join(' ') },
                button.label
              );
            } else if (button.type == 'cancel') {
              classes.push('negative');
              return _react2.default.createElement(
                'button',
                { onClick: _this3.handleCancel.bind(_this3), className: classes.join(' ') },
                button.label
              );
            } else {
              classes.push(button.color || '');
              classes.push(button.position || '');
              return _react2.default.createElement(
                'button',
                { onClick: _lodash2.default.bind(_this3.handleButtonPress, _this3, _lodash2.default, button.action || _lodash2.default.noop), className: classes.join(' ') },
                button.label
              );
            }
          })
        );
      } else {
        return null;
      }
    }
  }, {
    key: 'handleButtonPress',
    value: function handleButtonPress(event, callback) {
      event.preventDefault();
      callback();
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(e) {
      e.preventDefault();
      this.props.onCancel();
    }
  }, {
    key: 'applyPrefill',
    value: function applyPrefill() {
      var prefills = _lodash2.default.merge(this.props.prefill, this.data, this.state.dynamicPrefill);
      return this.transformFields(this.props.sections, function (field) {
        if (!_lodash2.default.isString(field.type)) {
          // Check to see if this is a composite component
          if (field.type.composite) {
            // If there is a composite configuration specified, use that to map the fields
            var dv = undefined;
            if (field.composite) {
              dv = _lodash2.default.mapValues(field.composite, function (prefillKey) {
                return _lodash2.default.get(prefills, prefillKey);
              });
            } else {
              // If there is no composite config specified, use the default field mappings
              // the component specifies.
              dv = _lodash2.default.pick(prefills, field.type.composite);
            }
            return _extends({ defaultValue: dv }, field);
          }
        }
        return _extends({ defaultValue: _lodash2.default.get(prefills, field.code) }, field);
      });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      if (this.state.frozen) {
        return;
      }
      var formData = this.collectValues();
      if (this.props.asyncPassthrough) {
        this.props.onSubmit(formData);
      } else {
        formData.tap(console.log.bind(console)).then(this.props.onSubmit);
      }
    }
  }, {
    key: 'doSubmit',
    value: function doSubmit(id) {
      if (this.props.id === id) {
        this.onSubmit({ preventDefault: _lodash2.default.noop });
      }
    }
  }, {
    key: 'collectValues',
    value: function collectValues() {
      var values = (0, _lodash2.default)(this.flattenRefs()).map(function (ref, code) {
        if (_lodash2.default.get(ref, 'constructor.composite', null)) {
          return ref.getValue(); // Composite components should always return objects
        } else {
            // Wrap the single return value into an object
            return _defineProperty({}, code, ref.getValue());
          }
      }).reduce(_lodash2.default.merge, {}); // Collapse into single values object

      var valuePromises = _lodash2.default.mapValues(values, function (v) {
        return (0, _when2.default)(v);
      });

      return whenKeys.settle(valuePromises).then(function (result) {
        return _lodash2.default.mapValues(result, function (r) {
          return r.value;
        });
      });
    }
  }, {
    key: 'highlightErrors',
    value: function highlightErrors(errors) {
      this.setState({ errors: errors });
    }
  }, {
    key: 'onFill',
    value: function onFill(_ref2) {
      var _this4 = this;

      var _ref3 = _slicedToArray(_ref2, 2);

      var id = _ref3[0];
      var data = _ref3[1];

      console.log('Filling', id, data);
      if (this.props.id === id) {
        (function () {
          var controlRefs = _this4.flattenRefs();
          var commonKeys = _lodash2.default.intersection(_lodash2.default.keys(controlRefs), _lodash2.default.keys(data));
          _lodash2.default.each(commonKeys, function (code) {
            if (controlRefs[code].constructor.composite) {
              controlRefs[code].setCompositeValue(code, data[code]);
            } else {
              controlRefs[code].setValue(data[code]);
            }
          });
        })();
      }
    }
  }, {
    key: 'onClear',
    value: function onClear(id) {
      if (this.props.id === id) {
        var controlRefs = this.flattenRefs();
        _lodash2.default.each(controlRefs, function (field) {
          _lodash2.default.result(field, 'clearField');
        });
      }
    }
  }, {
    key: 'onFieldChange',
    value: function onFieldChange(_ref4) {
      var _this5 = this;

      var _ref5 = _slicedToArray(_ref4, 3);

      var id = _ref5[0];
      var code = _ref5[1];
      var value = _ref5[2];

      if (this.props.id === id) {
        // If the value is an obect, flatten it and apply the children
        if (_lodash2.default.isPlainObject(value)) {
          (0, _lodash2.default)(value).pairs().each(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2);

            var code = _ref7[0];
            var value = _ref7[1];

            _this5.data = _lodash2.default.assign(_this5.data, _defineProperty({}, code, value));
          });
        }
        this.data = _lodash2.default.assign(this.data, _defineProperty({}, code, value));
      }
      this.props.onFieldChange(code, value);
    }
  }, {
    key: 'transformFields',
    value: function transformFields(sections, transformer) {
      // Transform the array of sections
      return _lodash2.default.map(sections, function (section) {
        // Extract the fields object from the section
        var sectionFields = section.fields;

        var otherSectionProps = _objectWithoutProperties(section, ['fields']);

        // Map fields to the supplied messages


        var modifiedFields = _lodash2.default.map(sectionFields, function (field) {
          // If the field type is 'fields', apply the transformer to the child Fields
          if (field.type === 'fields') {
            return _extends({}, field, {
              fields: _lodash2.default.map(field.fields, transformer)
            });
          } else {
            return transformer(field);
          }
        });

        // Return a new section, with modified fields
        return _extends({ fields: modifiedFields }, otherSectionProps);
      });
    }
  }, {
    key: 'flattenRefs',
    value: function flattenRefs() {
      var reduceRef = function reduceRef(acc, ref, key) {
        if (ref.getReference) {
          return _lodash2.default.assign(acc, ref.getReference());
        } else {
          return _lodash2.default.reduce(ref.refs, reduceRef, acc);
        }
      };

      return _lodash2.default.reduce(this.refs, reduceRef, {});
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //_.each(this.listeners, actionListener.removeActionListener.bind(actionListener))
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.contextTypes = {
  history: _react2.default.PropTypes.object.isRequired
};
Form.propTypes = {
  fields: _react2.default.PropTypes.array,
  title: _react2.default.PropTypes.string,
  sections: _react2.default.PropTypes.array,
  buttons: _react2.default.PropTypes.array,
  onSubmit: _react2.default.PropTypes.func,
  onCancel: _react2.default.PropTypes.func,
  unstyled: _react2.default.PropTypes.bool,
  borderless: _react2.default.PropTypes.bool,
  class: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  message: _react2.default.PropTypes.string,
  messageTitle: _react2.default.PropTypes.string,
  messageType: _react2.default.PropTypes.oneOf('success', 'normal', 'error'),
  asyncPassthrough: _react2.default.PropTypes.bool,
  style: _react2.default.PropTypes.object
};
Form.defaultProps = {
  fields: [],
  buttons: [{ label: 'Save', type: 'submit' }],
  onSubmit: _lodash2.default.noop,
  onCancel: _lodash2.default.noop,
  unstyled: false,
  borderless: false,
  loading: false,
  messageType: 'normal',
  onFieldChange: _lodash2.default.noop,
  asyncPassthrough: false,
  id: Symbol(),
  class: '',
  style: {}
};
exports.default = Form;