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

var _token = require('../../components/token');

var _token2 = _interopRequireDefault(_token);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(multiple) {
  var Control = function (_React$Component) {
    (0, _inherits3.default)(Control, _React$Component);

    function Control() {
      (0, _classCallCheck3.default)(this, Control);
      return (0, _possibleConstructorReturn3.default)(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
    }

    (0, _createClass3.default)(Control, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            items = _props.items,
            format = _props.format,
            tabIndex = _props.tabIndex,
            text = _props.text;

        return _react2.default.createElement(
          'div',
          { className: 'reframe-select ui field', tabIndex: tabIndex },
          items.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              (0, _extends3.default)({ key: 'option_' + index }, _this2._getItem(option)),
              _react2.default.createElement(
                'div',
                { className: 'reframe-select-option-icon' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-' + _this2._getItemIcon(option) })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-select-option-label' },
                _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option, { format: format, value: _lodash2.default.get(option, text) }))
              )
            );
          })
        );
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props2 = this.props,
            defaultValue = _props2.defaultValue,
            endpoint = _props2.endpoint,
            options = _props2.options,
            onReady = _props2.onReady,
            onFetchItems = _props2.onFetchItems,
            onSetItems = _props2.onSetItems;

        if (defaultValue) this._handleSetSelected(defaultValue);
        if (endpoint) return onFetchItems(endpoint);
        if (options) {
          onSetItems(options);
          onReady();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _props3 = this.props,
            multiple = _props3.multiple,
            selected = _props3.selected,
            status = _props3.status,
            onChange = _props3.onChange,
            onReady = _props3.onReady;

        if (status !== prevProps.status && status === 'success') {
          onReady();
        }
        if (selected !== prevProps.selected) {
          var value = multiple ? selected : selected[0];
          onChange(value);
        }
      }
    }, {
      key: '_getItem',
      value: function _getItem(option) {
        return {
          className: this._getItemClass(option),
          onClick: this._handleClick.bind(this, option)
        };
      }
    }, {
      key: '_getSelected',
      value: function _getSelected(option) {
        var selected = this.props.selected;

        var value = _lodash2.default.get(option, this.props.value);
        return _lodash2.default.includes(selected, value);
      }
    }, {
      key: '_getItemClass',
      value: function _getItemClass(option) {
        var classes = ['reframe-select-option'];
        if (this._getSelected(option)) classes.push('selected');
        return classes.join(' ');
      }
    }, {
      key: '_getItemIcon',
      value: function _getItemIcon(option) {
        var multiple = this.props.multiple;

        var selected = this._getSelected(option);
        if (multiple && selected) return 'check-square';
        if (multiple && !selected) return 'square-o';
        if (!multiple && selected) return 'check-circle';
        if (!multiple && !selected) return 'circle-o';
      }
    }, {
      key: '_handleSetSelected',
      value: function _handleSetSelected(defaultValue) {
        var onSetSelected = this.props.onSetSelected;

        var selected = !_lodash2.default.isArray(defaultValue) ? [defaultValue] : defaultValue;
        onSetSelected(selected);
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(option) {
        var _props4 = this.props,
            multiple = _props4.multiple,
            onChoose = _props4.onChoose;

        var value = _lodash2.default.get(option, this.props.value);
        onChoose(multiple, value);
      }
    }]);
    return Control;
  }(_react2.default.Component);

  Control.propTypes = {
    defaultValue: _propTypes2.default.any,
    multiple: _propTypes2.default.bool,
    endpoint: _propTypes2.default.string,
    format: _propTypes2.default.any,
    items: _propTypes2.default.array,
    options: _propTypes2.default.array,
    selected: _propTypes2.default.array,
    status: _propTypes2.default.string,
    tabIndex: _propTypes2.default.number,
    text: _propTypes2.default.string,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onChoose: _propTypes2.default.func,
    onReady: _propTypes2.default.func,
    onFetchItems: _propTypes2.default.func,
    onSetSelected: _propTypes2.default.func,
    onSetItems: _propTypes2.default.func
  };
  Control.defaultProps = {
    format: _token2.default,
    multiple: multiple,
    tabIndex: 0,
    value: 'value',
    text: 'text',
    onBusy: function onBusy() {},
    onChange: function onChange() {},
    onReady: function onReady() {},
    onSubmit: function onSubmit(selected) {}
  };


  return Control;
};

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VsZWN0IiwibXVsdGlwbGUiLCJDb250cm9sIiwicHJvcHMiLCJpdGVtcyIsImZvcm1hdCIsInRhYkluZGV4IiwidGV4dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiX2dldEl0ZW0iLCJfZ2V0SXRlbUljb24iLCJfIiwiZ2V0IiwiZGVmYXVsdFZhbHVlIiwiZW5kcG9pbnQiLCJvcHRpb25zIiwib25SZWFkeSIsIm9uRmV0Y2hJdGVtcyIsIm9uU2V0SXRlbXMiLCJfaGFuZGxlU2V0U2VsZWN0ZWQiLCJwcmV2UHJvcHMiLCJzZWxlY3RlZCIsInN0YXR1cyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJfZ2V0SXRlbUNsYXNzIiwib25DbGljayIsIl9oYW5kbGVDbGljayIsImJpbmQiLCJpbmNsdWRlcyIsImNsYXNzZXMiLCJfZ2V0U2VsZWN0ZWQiLCJwdXNoIiwiam9pbiIsIm9uU2V0U2VsZWN0ZWQiLCJpc0FycmF5Iiwib25DaG9vc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImJvb2wiLCJzdHJpbmciLCJhcnJheSIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJUb2tlbiIsIm9uQnVzeSIsIm9uU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQWM7QUFBQSxNQUVyQkMsT0FGcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBb0NoQjtBQUFBOztBQUFBLHFCQUNtQyxLQUFLQyxLQUR4QztBQUFBLFlBQ0NDLEtBREQsVUFDQ0EsS0FERDtBQUFBLFlBQ1FDLE1BRFIsVUFDUUEsTUFEUjtBQUFBLFlBQ2dCQyxRQURoQixVQUNnQkEsUUFEaEI7QUFBQSxZQUMwQkMsSUFEMUIsVUFDMEJBLElBRDFCOztBQUVQLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZixFQUF5QyxVQUFXRCxRQUFwRDtBQUNJRixnQkFBTUksR0FBTixDQUFVLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLG1CQUNWO0FBQUE7QUFBQSx1Q0FBSyxpQkFBZUEsS0FBcEIsSUFBa0MsT0FBS0MsUUFBTCxDQUFjRixNQUFkLENBQWxDO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsNEJBQWY7QUFDRSxxREFBRyw0QkFBMEIsT0FBS0csWUFBTCxDQUFrQkgsTUFBbEIsQ0FBN0I7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsNkJBQWY7QUFDRSw4Q0FBQyxnQkFBRCw2QkFBYUEsTUFBYixJQUFzQixRQUFTSixNQUEvQixFQUF3QyxPQUFRUSxpQkFBRUMsR0FBRixDQUFNTCxNQUFOLEVBQWNGLElBQWQsQ0FBaEQ7QUFERjtBQUpGLGFBRFU7QUFBQSxXQUFWO0FBREosU0FERjtBQWNEO0FBcER3QjtBQUFBO0FBQUEsMENBc0RMO0FBQUEsc0JBQzZELEtBQUtKLEtBRGxFO0FBQUEsWUFDVlksWUFEVSxXQUNWQSxZQURVO0FBQUEsWUFDSUMsUUFESixXQUNJQSxRQURKO0FBQUEsWUFDY0MsT0FEZCxXQUNjQSxPQURkO0FBQUEsWUFDdUJDLE9BRHZCLFdBQ3VCQSxPQUR2QjtBQUFBLFlBQ2dDQyxZQURoQyxXQUNnQ0EsWUFEaEM7QUFBQSxZQUM4Q0MsVUFEOUMsV0FDOENBLFVBRDlDOztBQUVsQixZQUFHTCxZQUFILEVBQWlCLEtBQUtNLGtCQUFMLENBQXdCTixZQUF4QjtBQUNqQixZQUFHQyxRQUFILEVBQWEsT0FBT0csYUFBYUgsUUFBYixDQUFQO0FBQ2IsWUFBR0MsT0FBSCxFQUFZO0FBQ1ZHLHFCQUFXSCxPQUFYO0FBQ0FDO0FBQ0Q7QUFDRjtBQTlEd0I7QUFBQTtBQUFBLHlDQWdFTkksU0FoRU0sRUFnRUs7QUFBQSxzQkFDOEIsS0FBS25CLEtBRG5DO0FBQUEsWUFDcEJGLFFBRG9CLFdBQ3BCQSxRQURvQjtBQUFBLFlBQ1ZzQixRQURVLFdBQ1ZBLFFBRFU7QUFBQSxZQUNBQyxNQURBLFdBQ0FBLE1BREE7QUFBQSxZQUNRQyxRQURSLFdBQ1FBLFFBRFI7QUFBQSxZQUNrQlAsT0FEbEIsV0FDa0JBLE9BRGxCOztBQUU1QixZQUFHTSxXQUFXRixVQUFVRSxNQUFyQixJQUErQkEsV0FBVyxTQUE3QyxFQUF3RDtBQUN0RE47QUFDRDtBQUNELFlBQUdLLGFBQWFELFVBQVVDLFFBQTFCLEVBQW9DO0FBQ2xDLGNBQU1HLFFBQVF6QixXQUFXc0IsUUFBWCxHQUFzQkEsU0FBUyxDQUFULENBQXBDO0FBQ0FFLG1CQUFTQyxLQUFUO0FBQ0Q7QUFDRjtBQXpFd0I7QUFBQTtBQUFBLCtCQTJFaEJqQixNQTNFZ0IsRUEyRVI7QUFDZixlQUFPO0FBQ0xrQixxQkFBVyxLQUFLQyxhQUFMLENBQW1CbkIsTUFBbkIsQ0FETjtBQUVMb0IsbUJBQVMsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJ0QixNQUE3QjtBQUZKLFNBQVA7QUFJRDtBQWhGd0I7QUFBQTtBQUFBLG1DQWtGWkEsTUFsRlksRUFrRko7QUFBQSxZQUNYYyxRQURXLEdBQ0UsS0FBS3BCLEtBRFAsQ0FDWG9CLFFBRFc7O0FBRW5CLFlBQU1HLFFBQVFiLGlCQUFFQyxHQUFGLENBQU1MLE1BQU4sRUFBYyxLQUFLTixLQUFMLENBQVd1QixLQUF6QixDQUFkO0FBQ0EsZUFBT2IsaUJBQUVtQixRQUFGLENBQVdULFFBQVgsRUFBcUJHLEtBQXJCLENBQVA7QUFDRDtBQXRGd0I7QUFBQTtBQUFBLG9DQXdGWGpCLE1BeEZXLEVBd0ZIO0FBQ3BCLFlBQU13QixVQUFVLENBQUMsdUJBQUQsQ0FBaEI7QUFDQSxZQUFHLEtBQUtDLFlBQUwsQ0FBa0J6QixNQUFsQixDQUFILEVBQThCd0IsUUFBUUUsSUFBUixDQUFhLFVBQWI7QUFDOUIsZUFBT0YsUUFBUUcsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNEO0FBNUZ3QjtBQUFBO0FBQUEsbUNBOEZaM0IsTUE5RlksRUE4Rko7QUFBQSxZQUNYUixRQURXLEdBQ0UsS0FBS0UsS0FEUCxDQUNYRixRQURXOztBQUVuQixZQUFNc0IsV0FBVyxLQUFLVyxZQUFMLENBQWtCekIsTUFBbEIsQ0FBakI7QUFDQSxZQUFHUixZQUFZc0IsUUFBZixFQUF5QixPQUFPLGNBQVA7QUFDekIsWUFBR3RCLFlBQVksQ0FBQ3NCLFFBQWhCLEVBQTBCLE9BQU8sVUFBUDtBQUMxQixZQUFHLENBQUN0QixRQUFELElBQWFzQixRQUFoQixFQUEwQixPQUFPLGNBQVA7QUFDMUIsWUFBRyxDQUFDdEIsUUFBRCxJQUFhLENBQUNzQixRQUFqQixFQUEyQixPQUFPLFVBQVA7QUFDNUI7QUFyR3dCO0FBQUE7QUFBQSx5Q0F1R05SLFlBdkdNLEVBdUdRO0FBQUEsWUFDdkJzQixhQUR1QixHQUNMLEtBQUtsQyxLQURBLENBQ3ZCa0MsYUFEdUI7O0FBRS9CLFlBQU1kLFdBQVcsQ0FBQ1YsaUJBQUV5QixPQUFGLENBQVV2QixZQUFWLENBQUQsR0FBMkIsQ0FBQ0EsWUFBRCxDQUEzQixHQUE0Q0EsWUFBN0Q7QUFDQXNCLHNCQUFjZCxRQUFkO0FBQ0Q7QUEzR3dCO0FBQUE7QUFBQSxtQ0E2R1pkLE1BN0dZLEVBNkdKO0FBQUEsc0JBQ1ksS0FBS04sS0FEakI7QUFBQSxZQUNYRixRQURXLFdBQ1hBLFFBRFc7QUFBQSxZQUNEc0MsUUFEQyxXQUNEQSxRQURDOztBQUVuQixZQUFNYixRQUFRYixpQkFBRUMsR0FBRixDQUFNTCxNQUFOLEVBQWMsS0FBS04sS0FBTCxDQUFXdUIsS0FBekIsQ0FBZDtBQUNBYSxpQkFBU3RDLFFBQVQsRUFBbUJ5QixLQUFuQjtBQUNEO0FBakh3QjtBQUFBO0FBQUEsSUFFTGMsZ0JBQU1DLFNBRkQ7O0FBRXJCdkMsU0FGcUIsQ0FJbEJ3QyxTQUprQixHQUlOO0FBQ2pCM0Isa0JBQWM0QixvQkFBVUMsR0FEUDtBQUVqQjNDLGNBQVUwQyxvQkFBVUUsSUFGSDtBQUdqQjdCLGNBQVUyQixvQkFBVUcsTUFISDtBQUlqQnpDLFlBQVFzQyxvQkFBVUMsR0FKRDtBQUtqQnhDLFdBQU91QyxvQkFBVUksS0FMQTtBQU1qQjlCLGFBQVMwQixvQkFBVUksS0FORjtBQU9qQnhCLGNBQVVvQixvQkFBVUksS0FQSDtBQVFqQnZCLFlBQVFtQixvQkFBVUcsTUFSRDtBQVNqQnhDLGNBQVVxQyxvQkFBVUssTUFUSDtBQVVqQnpDLFVBQU1vQyxvQkFBVUcsTUFWQztBQVdqQnBCLFdBQU9pQixvQkFBVUcsTUFYQTtBQVlqQnJCLGNBQVVrQixvQkFBVU0sSUFaSDtBQWFqQlYsY0FBVUksb0JBQVVNLElBYkg7QUFjakIvQixhQUFTeUIsb0JBQVVNLElBZEY7QUFlakI5QixrQkFBY3dCLG9CQUFVTSxJQWZQO0FBZ0JqQlosbUJBQWVNLG9CQUFVTSxJQWhCUjtBQWlCakI3QixnQkFBWXVCLG9CQUFVTTtBQWpCTCxHQUpNO0FBRXJCL0MsU0FGcUIsQ0F3QmxCZ0QsWUF4QmtCLEdBd0JIO0FBQ3BCN0MsWUFBUThDLGVBRFk7QUFFcEJsRCxzQkFGb0I7QUFHcEJLLGNBQVUsQ0FIVTtBQUlwQm9CLFdBQU8sT0FKYTtBQUtwQm5CLFVBQU0sTUFMYztBQU1wQjZDLFlBQVEsa0JBQU0sQ0FBRSxDQU5JO0FBT3BCM0IsY0FBVSxvQkFBTSxDQUFFLENBUEU7QUFRcEJQLGFBQVMsbUJBQU0sQ0FBRSxDQVJHO0FBU3BCbUMsY0FBVSxrQkFBQzlCLFFBQUQsRUFBYyxDQUFFO0FBVE4sR0F4Qkc7OztBQXFIM0IsU0FBT3JCLE9BQVA7QUFFRCxDQXZIRDs7a0JBeUhlRixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9rZW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b2tlbidcbmltcG9ydCBGb3JtYXQgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBTZWxlY3QgPSAobXVsdGlwbGUpID0+IHtcblxuICBjbGFzcyBDb250cm9sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZvcm1hdDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5LFxuICAgICAgc3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uRmV0Y2hJdGVtczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblNldFNlbGVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uU2V0SXRlbXM6IFByb3BUeXBlcy5mdW5jXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGZvcm1hdDogVG9rZW4sXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgICAgb25SZWFkeTogKCkgPT4ge30sXG4gICAgICBvblN1Ym1pdDogKHNlbGVjdGVkKSA9PiB7fVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgaXRlbXMsIGZvcm1hdCwgdGFiSW5kZXgsIHRleHQgfSA9IHRoaXMucHJvcHNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWxlY3QgdWkgZmllbGRcIiB0YWJJbmRleD17IHRhYkluZGV4IH0+XG4gICAgICAgICAgeyBpdGVtcy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtgb3B0aW9uXyR7aW5kZXh9YH0geyAuLi50aGlzLl9nZXRJdGVtKG9wdGlvbikgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlbGVjdC1vcHRpb24taWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhIGZhLWZ3IGZhLSR7dGhpcy5fZ2V0SXRlbUljb24ob3B0aW9uKX1gfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlbGVjdC1vcHRpb24tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0IHsgLi4ub3B0aW9uIH0gZm9ybWF0PXsgZm9ybWF0IH0gdmFsdWU9eyBfLmdldChvcHRpb24sIHRleHQpIH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGVuZHBvaW50LCBvcHRpb25zLCBvblJlYWR5LCBvbkZldGNoSXRlbXMsIG9uU2V0SXRlbXMgfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmKGRlZmF1bHRWYWx1ZSkgdGhpcy5faGFuZGxlU2V0U2VsZWN0ZWQoZGVmYXVsdFZhbHVlKVxuICAgICAgaWYoZW5kcG9pbnQpIHJldHVybiBvbkZldGNoSXRlbXMoZW5kcG9pbnQpXG4gICAgICBpZihvcHRpb25zKSB7XG4gICAgICAgIG9uU2V0SXRlbXMob3B0aW9ucylcbiAgICAgICAgb25SZWFkeSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgY29uc3QgeyBtdWx0aXBsZSwgc2VsZWN0ZWQsIHN0YXR1cywgb25DaGFuZ2UsIG9uUmVhZHkgfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmKHN0YXR1cyAhPT0gcHJldlByb3BzLnN0YXR1cyAmJiBzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICBvblJlYWR5KClcbiAgICAgIH1cbiAgICAgIGlmKHNlbGVjdGVkICE9PSBwcmV2UHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtdWx0aXBsZSA/IHNlbGVjdGVkIDogc2VsZWN0ZWRbMF1cbiAgICAgICAgb25DaGFuZ2UodmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEl0ZW0ob3B0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IHRoaXMuX2dldEl0ZW1DbGFzcyhvcHRpb24pLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMsIG9wdGlvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0U2VsZWN0ZWQob3B0aW9uKSB7XG4gICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCB2YWx1ZSA9IF8uZ2V0KG9wdGlvbiwgdGhpcy5wcm9wcy52YWx1ZSlcbiAgICAgIHJldHVybiBfLmluY2x1ZGVzKHNlbGVjdGVkLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBfZ2V0SXRlbUNsYXNzKG9wdGlvbikge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IFsncmVmcmFtZS1zZWxlY3Qtb3B0aW9uJ11cbiAgICAgIGlmKHRoaXMuX2dldFNlbGVjdGVkKG9wdGlvbikpIGNsYXNzZXMucHVzaCgnc2VsZWN0ZWQnKVxuICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gICAgfVxuXG4gICAgX2dldEl0ZW1JY29uKG9wdGlvbikge1xuICAgICAgY29uc3QgeyBtdWx0aXBsZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLl9nZXRTZWxlY3RlZChvcHRpb24pXG4gICAgICBpZihtdWx0aXBsZSAmJiBzZWxlY3RlZCkgcmV0dXJuICdjaGVjay1zcXVhcmUnXG4gICAgICBpZihtdWx0aXBsZSAmJiAhc2VsZWN0ZWQpIHJldHVybiAnc3F1YXJlLW8nXG4gICAgICBpZighbXVsdGlwbGUgJiYgc2VsZWN0ZWQpIHJldHVybiAnY2hlY2stY2lyY2xlJ1xuICAgICAgaWYoIW11bHRpcGxlICYmICFzZWxlY3RlZCkgcmV0dXJuICdjaXJjbGUtbydcbiAgICB9XG5cbiAgICBfaGFuZGxlU2V0U2VsZWN0ZWQoZGVmYXVsdFZhbHVlKSB7XG4gICAgICBjb25zdCB7IG9uU2V0U2VsZWN0ZWQgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gIV8uaXNBcnJheShkZWZhdWx0VmFsdWUpID8gW2RlZmF1bHRWYWx1ZV0gOiBkZWZhdWx0VmFsdWVcbiAgICAgIG9uU2V0U2VsZWN0ZWQoc2VsZWN0ZWQpXG4gICAgfVxuXG4gICAgX2hhbmRsZUNsaWNrKG9wdGlvbikge1xuICAgICAgY29uc3QgeyBtdWx0aXBsZSwgb25DaG9vc2UgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHZhbHVlID0gXy5nZXQob3B0aW9uLCB0aGlzLnByb3BzLnZhbHVlKVxuICAgICAgb25DaG9vc2UobXVsdGlwbGUsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIENvbnRyb2xcblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiJdfQ==