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

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _toggle_list = require('../toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(_toggle_list2.default, this._getToggleList())
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props = this.props,
          label = _props.label,
          multiple = _props.multiple;

      return {
        title: 'Choose ' + label,
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }],
        rightItems: multiple ? [{ label: 'Done', handler: this._handleDone.bind(this) }] : null
      };
    }
  }, {
    key: '_getToggleList',
    value: function _getToggleList() {
      var _props2 = this.props,
          endpoint = _props2.endpoint,
          format = _props2.format,
          multiple = _props2.multiple,
          options = _props2.options,
          selected = _props2.selected,
          text = _props2.text,
          value = _props2.value;

      var defaultValue = selected.map(function (item) {
        return _lodash2.default.get(item, value);
      });
      return {
        defaultValue: defaultValue,
        endpoint: endpoint,
        options: options,
        format: format,
        full: true,
        multiple: multiple,
        text: text,
        value: value,
        onChange: this._handleSelect.bind(this)
      };
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(items) {
      var _props3 = this.props,
          multiple = _props3.multiple,
          selected = _props3.selected,
          onDone = _props3.onDone,
          onSelect = _props3.onSelect;

      onSelect(items);
      if (!multiple && !_lodash2.default.isEqual(items, selected)) onDone();
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Search;
}(_react2.default.Component);

Search.contextTypes = {};
Search.propTypes = {
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  selected: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onCancel: _propTypes2.default.func,
  onDone: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};
exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VhcmNoIiwiX2dldFBhbmVsIiwiX2dldFRvZ2dsZUxpc3QiLCJwcm9wcyIsImxhYmVsIiwibXVsdGlwbGUiLCJ0aXRsZSIsImxlZnRJdGVtcyIsImhhbmRsZXIiLCJfaGFuZGxlQ2FuY2VsIiwiYmluZCIsInJpZ2h0SXRlbXMiLCJfaGFuZGxlRG9uZSIsImVuZHBvaW50IiwiZm9ybWF0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwidGV4dCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWFwIiwiXyIsImdldCIsIml0ZW0iLCJmdWxsIiwib25DaGFuZ2UiLCJfaGFuZGxlU2VsZWN0IiwiaXRlbXMiLCJvbkRvbmUiLCJvblNlbGVjdCIsImlzRXF1YWwiLCJvbkNhbmNlbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJib29sIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs2QkFzQks7QUFDUCxhQUNFO0FBQUMsNkJBQUQ7QUFBaUIsYUFBS0MsU0FBTCxFQUFqQjtBQUNFLHNDQUFDLHFCQUFELEVBQWlCLEtBQUtDLGNBQUwsRUFBakI7QUFERixPQURGO0FBS0Q7OztnQ0FFVztBQUFBLG1CQUNrQixLQUFLQyxLQUR2QjtBQUFBLFVBQ0ZDLEtBREUsVUFDRkEsS0FERTtBQUFBLFVBQ0tDLFFBREwsVUFDS0EsUUFETDs7QUFFVixhQUFPO0FBQ0xDLDJCQUFpQkYsS0FEWjtBQUVMRyxtQkFBVyxDQUNULEVBQUVILE9BQU8sUUFBVCxFQUFtQkksU0FBUyxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE1QixFQURTLENBRk47QUFLTEMsb0JBQVlOLFdBQVcsQ0FDckIsRUFBRUQsT0FBTyxNQUFULEVBQWlCSSxTQUFTLEtBQUtJLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQTFCLEVBRHFCLENBQVgsR0FFUjtBQVBDLE9BQVA7QUFTRDs7O3FDQUVnQjtBQUFBLG9CQUN3RCxLQUFLUCxLQUQ3RDtBQUFBLFVBQ1BVLFFBRE8sV0FDUEEsUUFETztBQUFBLFVBQ0dDLE1BREgsV0FDR0EsTUFESDtBQUFBLFVBQ1dULFFBRFgsV0FDV0EsUUFEWDtBQUFBLFVBQ3FCVSxPQURyQixXQUNxQkEsT0FEckI7QUFBQSxVQUM4QkMsUUFEOUIsV0FDOEJBLFFBRDlCO0FBQUEsVUFDd0NDLElBRHhDLFdBQ3dDQSxJQUR4QztBQUFBLFVBQzhDQyxLQUQ5QyxXQUM4Q0EsS0FEOUM7O0FBRWYsVUFBTUMsZUFBZUgsU0FBU0ksR0FBVCxDQUFhO0FBQUEsZUFBUUMsaUJBQUVDLEdBQUYsQ0FBTUMsSUFBTixFQUFZTCxLQUFaLENBQVI7QUFBQSxPQUFiLENBQXJCO0FBQ0EsYUFBTztBQUNMQyxrQ0FESztBQUVMTiwwQkFGSztBQUdMRSx3QkFISztBQUlMRCxzQkFKSztBQUtMVSxjQUFNLElBTEQ7QUFNTG5CLDBCQU5LO0FBT0xZLGtCQVBLO0FBUUxDLG9CQVJLO0FBU0xPLGtCQUFVLEtBQUtDLGFBQUwsQ0FBbUJoQixJQUFuQixDQUF3QixJQUF4QjtBQVRMLE9BQVA7QUFXRDs7O2tDQUVhaUIsSyxFQUFPO0FBQUEsb0JBQzhCLEtBQUt4QixLQURuQztBQUFBLFVBQ1hFLFFBRFcsV0FDWEEsUUFEVztBQUFBLFVBQ0RXLFFBREMsV0FDREEsUUFEQztBQUFBLFVBQ1NZLE1BRFQsV0FDU0EsTUFEVDtBQUFBLFVBQ2lCQyxRQURqQixXQUNpQkEsUUFEakI7O0FBRW5CQSxlQUFTRixLQUFUO0FBQ0EsVUFBRyxDQUFDdEIsUUFBRCxJQUFhLENBQUNnQixpQkFBRVMsT0FBRixDQUFVSCxLQUFWLEVBQWlCWCxRQUFqQixDQUFqQixFQUE2Q1k7QUFDOUM7OztvQ0FFZTtBQUNkLFdBQUt6QixLQUFMLENBQVc0QixRQUFYO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUs1QixLQUFMLENBQVd5QixNQUFYO0FBQ0Q7OztFQXZFa0JJLGdCQUFNQyxTOztBQUFyQmpDLE0sQ0FFR2tDLFksR0FBZSxFO0FBRmxCbEMsTSxDQUtHbUMsUyxHQUFZO0FBQ2pCdEIsWUFBVXVCLG9CQUFVQyxNQURIO0FBRWpCdkIsVUFBUXNCLG9CQUFVRSxTQUFWLENBQW9CLENBQzFCRixvQkFBVUcsT0FEZ0IsRUFFMUJILG9CQUFVSSxJQUZnQixDQUFwQixDQUZTO0FBTWpCcEMsU0FBT2dDLG9CQUFVQyxNQU5BO0FBT2pCaEMsWUFBVStCLG9CQUFVSyxJQVBIO0FBUWpCMUIsV0FBU3FCLG9CQUFVTSxLQVJGO0FBU2pCMUIsWUFBVW9CLG9CQUFVTSxLQVRIO0FBVWpCekIsUUFBTW1CLG9CQUFVQyxNQVZDO0FBV2pCbkIsU0FBT2tCLG9CQUFVQyxNQVhBO0FBWWpCTixZQUFVSyxvQkFBVUksSUFaSDtBQWFqQlosVUFBUVEsb0JBQVVJLElBYkQ7QUFjakJYLFlBQVVPLG9CQUFVSTtBQWRILEM7a0JBc0VOeEMsTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsUGFuZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbF9wYW5lbCdcbmltcG9ydCBUb2dnbGVMaXN0IGZyb20gJy4uL3RvZ2dsZV9saXN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRG9uZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFBhbmVsIHsgLi4udGhpcy5fZ2V0UGFuZWwoKSB9PlxuICAgICAgICA8VG9nZ2xlTGlzdCB7IC4uLnRoaXMuX2dldFRvZ2dsZUxpc3QoKSB9IC8+XG4gICAgICA8L01vZGFsUGFuZWw+XG4gICAgKVxuICB9XG5cbiAgX2dldFBhbmVsKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIG11bHRpcGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBgQ2hvb3NlICR7bGFiZWx9YCxcbiAgICAgIGxlZnRJdGVtczogW1xuICAgICAgICB7IGxhYmVsOiAnQ2FuY2VsJywgaGFuZGxlcjogdGhpcy5faGFuZGxlQ2FuY2VsLmJpbmQodGhpcykgfVxuICAgICAgXSxcbiAgICAgIHJpZ2h0SXRlbXM6IG11bHRpcGxlID8gW1xuICAgICAgICB7IGxhYmVsOiAnRG9uZScsIGhhbmRsZXI6IHRoaXMuX2hhbmRsZURvbmUuYmluZCh0aGlzKSB9XG4gICAgICBdIDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9nZXRUb2dnbGVMaXN0KCkge1xuICAgIGNvbnN0IHsgZW5kcG9pbnQsIGZvcm1hdCwgbXVsdGlwbGUsIG9wdGlvbnMsIHNlbGVjdGVkLCB0ZXh0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHNlbGVjdGVkLm1hcChpdGVtID0+IF8uZ2V0KGl0ZW0sIHZhbHVlKSlcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZW5kcG9pbnQsXG4gICAgICBvcHRpb25zLFxuICAgICAgZm9ybWF0LFxuICAgICAgZnVsbDogdHJ1ZSxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgdGV4dCxcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZVNlbGVjdC5iaW5kKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVNlbGVjdChpdGVtcykge1xuICAgIGNvbnN0IHsgbXVsdGlwbGUsIHNlbGVjdGVkLCBvbkRvbmUsIG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgb25TZWxlY3QoaXRlbXMpXG4gICAgaWYoIW11bHRpcGxlICYmICFfLmlzRXF1YWwoaXRlbXMsIHNlbGVjdGVkKSkgb25Eb25lKClcbiAgfVxuXG4gIF9oYW5kbGVDYW5jZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gIH1cblxuICBfaGFuZGxlRG9uZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uRG9uZSgpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcbiJdfQ==