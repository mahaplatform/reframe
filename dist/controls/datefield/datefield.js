'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chooser = require('./chooser');

var _chooser2 = _interopRequireDefault(_chooser);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Datefield = function (_React$Component) {
  (0, _inherits3.default)(Datefield, _React$Component);

  function Datefield() {
    (0, _classCallCheck3.default)(this, Datefield);
    return (0, _possibleConstructorReturn3.default)(this, (Datefield.__proto__ || Object.getPrototypeOf(Datefield)).apply(this, arguments));
  }

  (0, _createClass3.default)(Datefield, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prompt = _props.prompt,
          value = _props.value,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-datefield' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-datefield-input', tabIndex: tabIndex },
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-field', onClick: this._handleBegin.bind(this) },
            value ? value.format('dddd, MMMM DD, YYYY') : _react2.default.createElement(
              'span',
              null,
              prompt
            )
          ),
          value && _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-remove', onClick: this._handleClear.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-times-circle' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady,
          onSetCurrent = _props2.onSetCurrent,
          onSetValue = _props2.onSetValue;

      if (defaultValue) onSetValue((0, _moment2.default)(defaultValue));
      var current = defaultValue ? (0, _moment2.default)(defaultValue) : (0, _moment2.default)();
      onSetCurrent(parseInt(current.format('MM')) - 1, parseInt(current.format('YYYY')));
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          active = _props3.active,
          value = _props3.value,
          onChange = _props3.onChange;
      var form = this.context.form;

      if (prevProps.value !== value) {
        if (value) {
          onChange(value.format('YYYY-MM-DD'));
        } else {
          onChange(value);
        }
      }
      if (active !== prevProps.active) {
        if (active) {
          form.push(_react2.default.createElement(_chooser2.default, this._getChooser()));
        } else {
          form.pop();
        }
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _props4 = this.props,
          prompt = _props4.prompt,
          value = _props4.value;

      return {
        type: 'text',
        value: value,
        autoComplete: false,
        prompt: prompt
      };
    }
  }, {
    key: '_getChooser',
    value: function _getChooser() {
      return this.props;
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleClear',
    value: function _handleClear() {
      this.props.onClear();
    }
  }]);
  return Datefield;
}(_react2.default.Component);

Datefield.contextTypes = {
  form: _propTypes2.default.object
};
Datefield.propTypes = {
  active: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  month: _propTypes2.default.number,
  prompt: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  year: _propTypes2.default.number,
  value: _propTypes2.default.any,
  onBegin: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSetCurrent: _propTypes2.default.func,
  onSetValue: _propTypes2.default.func
};
Datefield.defaultProps = {
  defaultValue: null,
  disabled: false,
  prompt: 'Choose a date',
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSet: function onSet() {}
};
exports.default = Datefield;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRGF0ZWZpZWxkIiwicHJvcHMiLCJwcm9tcHQiLCJ2YWx1ZSIsInRhYkluZGV4IiwiX2hhbmRsZUJlZ2luIiwiYmluZCIsImZvcm1hdCIsIl9oYW5kbGVDbGVhciIsImRlZmF1bHRWYWx1ZSIsIm9uUmVhZHkiLCJvblNldEN1cnJlbnQiLCJvblNldFZhbHVlIiwiY3VycmVudCIsInBhcnNlSW50IiwicHJldlByb3BzIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJmb3JtIiwiY29udGV4dCIsInB1c2giLCJfZ2V0Q2hvb3NlciIsInBvcCIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJvbkJlZ2luIiwib25DbGVhciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImRpc2FibGVkIiwibW9udGgiLCJudW1iZXIiLCJ5ZWFyIiwiYW55IiwiZnVuYyIsIm9uQnVzeSIsIm9uQ2hvb3NlIiwib25OZXh0Iiwib25QcmV2aW91cyIsImRlZmF1bHRQcm9wcyIsIm9uU2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7OzZCQXNDSztBQUFBLG1CQUM2QixLQUFLQyxLQURsQztBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLEtBRFQsVUFDU0EsS0FEVDtBQUFBLFVBQ2dCQyxRQURoQixVQUNnQkEsUUFEaEI7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZixFQUF5QyxVQUFXQSxRQUFwRDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUseUJBQWYsRUFBeUMsU0FBVSxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFuRDtB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QkksY0FBWWQsb0JBQVVVLElBZkw7QUFnQmpCOUIsV0FBU29CLG9CQUFVVSxJQWhCRjtBQWlCakI3QixnQkFBY21CLG9CQUFVVSxJQWpCUDtBQWtCakI1QixjQUFZa0Isb0JBQVVVO0FBbEJMLEM7QUFOZnhDLFMsQ0EyQkc2QyxZLEdBQWU7QUFDcEJwQyxnQkFBYyxJQURNO0FBRXBCMEIsWUFBVSxLQUZVO0FBR3BCakMsVUFBUSxlQUhZO0FBSXBCRSxZQUFVLENBSlU7QUFLcEJxQyxVQUFRLGtCQUFNLENBQUUsQ0FMSTtBQU1wQnhCLFlBQVUsb0JBQU0sQ0FBRSxDQU5FO0FBT3BCUCxXQUFTLG1CQUFNLENBQUUsQ0FQRztBQVFwQm9DLFNBQU8saUJBQU0sQ0FBRTtBQVJLLEM7a0JBZ0ZUOUMsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENob29zZXIgZnJvbSAnLi9jaG9vc2VyJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIERhdGVmaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb250aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwcm9tcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeWVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBvbkJlZ2luOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25OZXh0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblByZXZpb3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldEN1cnJlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0VmFsdWU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgcHJvbXB0OiAnQ2hvb3NlIGEgZGF0ZScsXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgb25CdXN5OiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25SZWFkeTogKCkgPT4ge30sXG4gICAgb25TZXQ6ICgpID0+IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9tcHQsIHZhbHVlLCB0YWJJbmRleCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1kYXRlZmllbGQtaW5wdXRcIiB0YWJJbmRleD17IHRhYkluZGV4IH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWRhdGVmaWVsZC1maWVsZFwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVCZWdpbi5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICB7IHZhbHVlID8gdmFsdWUuZm9ybWF0KCdkZGRkLCBNTU1NIERELCBZWVlZJykgOiA8c3Bhbj57IHByb21wdCB9PC9zcGFuPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyB2YWx1ZSAgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1kYXRlZmllbGQtcmVtb3ZlXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUNsZWFyLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgb25SZWFkeSwgb25TZXRDdXJyZW50LCBvblNldFZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoZGVmYXVsdFZhbHVlKSBvblNldFZhbHVlKG1vbWVudChkZWZhdWx0VmFsdWUpKVxuICAgIGNvbnN0IGN1cnJlbnQgPSBkZWZhdWx0VmFsdWUgPyBtb21lbnQoZGVmYXVsdFZhbHVlKSA6IG1vbWVudCgpXG4gICAgb25TZXRDdXJyZW50KHBhcnNlSW50KGN1cnJlbnQuZm9ybWF0KCdNTScpKSAtIDEsIHBhcnNlSW50KGN1cnJlbnQuZm9ybWF0KCdZWVlZJykpKVxuICAgIG9uUmVhZHkoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aXZlLCB2YWx1ZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuY29udGV4dFxuICAgIGlmKHByZXZQcm9wcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpKVxuICAgICAgfSBlbHNlICB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihhY3RpdmUgIT09IHByZXZQcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmKGFjdGl2ZSkge1xuICAgICAgICBmb3JtLnB1c2goPENob29zZXIgeyAuLi50aGlzLl9nZXRDaG9vc2VyKCkgfSAvPilcbiAgICAgIH0gZWxzZSAge1xuICAgICAgICBmb3JtLnBvcCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldElucHV0KCkge1xuICAgIGNvbnN0IHsgcHJvbXB0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB2YWx1ZSxcbiAgICAgIGF1dG9Db21wbGV0ZTogZmFsc2UsXG4gICAgICBwcm9tcHRcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2hvb3NlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1xuICB9XG5cbiAgX2hhbmRsZUJlZ2luKCkge1xuICAgIHRoaXMucHJvcHMub25CZWdpbigpXG4gIH1cblxuICBfaGFuZGxlQ2xlYXIoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsZWFyKClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVmaWVsZFxuIl19