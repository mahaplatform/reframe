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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _control = require('../control');

var _control2 = _interopRequireDefault(_control);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function (_React$Component) {
  (0, _inherits3.default)(Field, _React$Component);

  function Field() {
    (0, _classCallCheck3.default)(this, Field);
    return (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  (0, _createClass3.default)(Field, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          include = _props.include,
          instructions = _props.instructions,
          label = _props.label,
          show = _props.show,
          type = _props.type;

      var error = this._getError();
      if (!include || !show) return null;
      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        label && _react2.default.createElement(
          'label',
          null,
          label
        ),
        instructions && _react2.default.createElement(
          'div',
          { className: 'instructions' },
          instructions
        ),
        type === 'fields' ? _react2.default.createElement(_fields2.default, this._getFields()) : _react2.default.createElement(_control2.default, this._getControl()),
        error && _react2.default.createElement(
          'div',
          { className: 'error-message' },
          error
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var required = this.props.required;

      var error = this._getError();
      var classes = ['field'];
      if (required) classes.push('required');
      if (error) classes.push('error');
      return classes.join(' ');
    }
  }, {
    key: '_getError',
    value: function _getError() {
      var _props2 = this.props,
          errors = _props2.errors,
          name = _props2.name;

      return errors && errors[name] ? errors[name][0] : null;
    }
  }, {
    key: '_getFields',
    value: function _getFields() {
      var _props3 = this.props,
          fields = _props3.fields,
          onSubmit = _props3.onSubmit,
          onUpdateData = _props3.onUpdateData;

      return {
        fields: fields,
        onChange: this._handleUpdateData.bind(this),
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      };
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props4 = this.props,
          data = _props4.data,
          name = _props4.name;

      var defaultValue = _lodash2.default.get(data, name);
      return (0, _extends3.default)({}, this.props, {
        defaultValue: defaultValue,
        onBusy: this._handleBusy.bind(this),
        onChange: this._handleUpdateData.bind(this),
        onReady: this._handleReady.bind(this)
      });
    }
  }, {
    key: '_handleBusy',
    value: function _handleBusy() {
      this.props.onBusy(this.props.name);
    }
  }, {
    key: '_handleReady',
    value: function _handleReady() {
      this.props.onReady(this.props.name);
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(value) {
      this.props.onUpdateData(this.props.name, value);
    }
  }]);
  return Field;
}(_react2.default.Component);

Field.propTypes = {
  action: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  errors: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  include: _propTypes2.default.bool,
  instructions: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array,
  required: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  show: _propTypes2.default.bool,
  onBusy: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Field.defaultProps = {
  columns: [],
  data: {},
  errors: {},
  fields: [],
  include: true,
  options: [],
  required: false,
  show: true,
  onBusy: function onBusy() {},
  onReady: function onReady() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Field;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRmllbGQiLCJwcm9wcyIsImluY2x1ZGUiLCJpbnN0cnVjdGlvbnMiLCJsYWJlbCIsInNob3ciLCJ0eXBlIiwiZXJyb3IiLCJfZ2V0RXJyb3IiLCJfZ2V0Q2xhc3MiLCJfZ2V0RmllbGRzIiwiX2dldENvbnRyb2wiLCJyZXF1aXJlZCIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsImVycm9ycyIsIm5hbWUiLCJmaWVsZHMiLCJvblN1Ym1pdCIsIm9uVXBkYXRlRGF0YSIsIm9uQ2hhbmdlIiwiX2hhbmRsZVVwZGF0ZURhdGEiLCJiaW5kIiwiZGF0YSIsImRlZmF1bHRWYWx1ZSIsIl8iLCJnZXQiLCJvbkJ1c3kiLCJfaGFuZGxlQnVzeSIsIm9uUmVhZHkiLCJfaGFuZGxlUmVhZHkiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYWN0aW9uIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sdW1ucyIsImFycmF5Iiwib2JqZWN0IiwiZW5kcG9pbnQiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9wdGlvbnMiLCJ0YWJJbmRleCIsIm51bWJlciIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7NkJBeUNLO0FBQUEsbUJBQzhDLEtBQUtDLEtBRG5EO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsWUFEVixVQUNVQSxZQURWO0FBQUEsVUFDd0JDLEtBRHhCLFVBQ3dCQSxLQUR4QjtBQUFBLFVBQytCQyxJQUQvQixVQUMrQkEsSUFEL0I7QUFBQSxVQUNxQ0MsSUFEckMsVUFDcUNBLElBRHJDOztBQUVQLFVBQU1DLFFBQVEsS0FBS0MsU0FBTCxFQUFkO0FBQ0EsVUFBRyxDQUFDTixPQUFELElBQVksQ0FB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QUFja0Msb0JBQVVDLE1BUlA7QUFTakJsQyxTQUFPaUMsb0JBQVVDLE1BVEE7QUFVakJyQixRQUFNb0Isb0JBQVVDLE1BQVYsQ0FBaUJNLFVBVk47QUFXakJDLFdBQVNSLG9CQUFVRyxLQVhGO0FBWWpCNUIsWUFBVXlCLG9CQUFVTSxJQVpIO0FBYWpCRyxZQUFVVCxvQkFBVVUsTUFiSDtBQWNqQnpDLFFBQU0rQixvQkFBVVcsU0FBVixDQUFvQixDQUN4Qlgsb0JBQVVDLE1BRGMsRUFFeEJELG9CQUFVWSxJQUZjLENBQXBCLEVBR0hMLFVBakJjO0FBa0JqQnZDLFFBQU1nQyxvQkFBVU0sSUFsQkM7QUFtQmpCZixVQUFRUyxvQkFBVVksSUFuQkQ7QUFvQmpCbkIsV0FBU08sb0JBQVVZLElBcEJGO0FBcUJqQjlCLFlBQVVrQixvQkFBVVksSUFyQkg7QUFzQmpCN0IsZ0JBQWNpQixvQkFBVVk7QUF0QlAsQztBQUZmakQsSyxDQTJCR2tELFksR0FBZTtBQUNwQlgsV0FBUyxFQURXO0FBRXBCZixRQUFNLEVBRmM7QUFHcEJSLFVBQVEsRUFIWTtBQUlwQkUsVUFBUSxFQUpZO0FBS3BCaEIsV0FBUyxJQUxXO0FBTXBCMkMsV0FBUyxFQU5XO0FBT3BCakMsWUFBVSxLQVBVO0FBUXBCUCxRQUFNLElBUmM7QUFTcEJ1QixVQUFRLGtCQUFNLENBQUUsQ0FUSTtBQVVwQkUsV0FBUyxtQkFBTSxDQUFFLENBVkc7QUFXcEJWLGdCQUFjLHdCQUFNLENBQUU7QUFYRixDO2tCQWlGVHBCLEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBDb250cm9sIGZyb20gJy4uL2NvbnRyb2wnXG5pbXBvcnQgRmllbGRzIGZyb20gJy4vZmllbGRzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXJyb3JzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGluY2x1ZGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGluc3RydWN0aW9uczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25CdXN5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGVEYXRhOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBkYXRhOiB7fSxcbiAgICBlcnJvcnM6IHt9LFxuICAgIGZpZWxkczogW10sXG4gICAgaW5jbHVkZTogdHJ1ZSxcbiAgICBvcHRpb25zOiBbXSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uUmVhZHk6ICgpID0+IHt9LFxuICAgIG9uVXBkYXRlRGF0YTogKCkgPT4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluY2x1ZGUsIGluc3RydWN0aW9ucywgbGFiZWwsIHNob3csIHR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBlcnJvciA9IHRoaXMuX2dldEVycm9yKClcbiAgICBpZighaW5jbHVkZSB8fCAhc2hvdykgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLl9nZXRDbGFzcygpIH0+XG4gICAgICAgIHsgbGFiZWwgJiYgPGxhYmVsPnsgbGFiZWwgfTwvbGFiZWw+IH1cbiAgICAgICAgeyBpbnN0cnVjdGlvbnMgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdGlvbnNcIj57IGluc3RydWN0aW9ucyB9PC9kaXY+IH1cbiAgICAgICAgeyB0eXBlID09PSAnZmllbGRzJyA/XG4gICAgICAgICAgPEZpZWxkcyB7IC4uLnRoaXMuX2dldEZpZWxkcygpIH0gLz4gOlxuICAgICAgICAgIDxDb250cm9sIHsgLi4udGhpcy5fZ2V0Q29udHJvbCgpIH0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPnsgZXJyb3IgfTwvZGl2PiB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyByZXF1aXJlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZ2V0RXJyb3IoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ2ZpZWxkJ11cbiAgICBpZihyZXF1aXJlZCkgY2xhc3Nlcy5wdXNoKCdyZXF1aXJlZCcpXG4gICAgaWYoZXJyb3IpIGNsYXNzZXMucHVzaCgnZXJyb3InKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldEVycm9yKCkge1xuICAgIGNvbnN0IHsgZXJyb3JzLCBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChlcnJvcnMgJiYgZXJyb3JzW25hbWVdKSA/IGVycm9yc1tuYW1lXVswXSA6IG51bGxcbiAgfVxuXG4gIF9nZXRGaWVsZHMoKSB7XG4gICAgY29uc3QgeyBmaWVsZHMsIG9uU3VibWl0LCBvblVwZGF0ZURhdGEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRzLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZVVwZGF0ZURhdGEuYmluZCh0aGlzKSxcbiAgICAgIG9uU3VibWl0LFxuICAgICAgb25VcGRhdGVEYXRhXG4gICAgfVxuICB9XG5cbiAgX2dldENvbnRyb2woKSB7XG4gICAgY29uc3QgeyBkYXRhLCBuYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gXy5nZXQoZGF0YSwgbmFtZSlcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIG9uQnVzeTogdGhpcy5faGFuZGxlQnVzeS5iaW5kKHRoaXMpLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZVVwZGF0ZURhdGEuYmluZCh0aGlzKSxcbiAgICAgIG9uUmVhZHk6IHRoaXMuX2hhbmRsZVJlYWR5LmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQnVzeSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQnVzeSh0aGlzLnByb3BzLm5hbWUpXG4gIH1cblxuICBfaGFuZGxlUmVhZHkoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlYWR5KHRoaXMucHJvcHMubmFtZSlcbiAgfVxuXG4gIF9oYW5kbGVVcGRhdGVEYXRhKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZURhdGEodGhpcy5wcm9wcy5uYW1lLCB2YWx1ZSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkXG4iXX0=