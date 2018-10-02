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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          filter = _props.filter,
          search = _props.search,
          tasks = _props.tasks;

      if (!filters && !this.props.export && !search && !tasks) return null;
      // const count = Object.keys(filter).reduce((count, key) => {
      //   if(filter[key].$eq) return count + 1
      //   if(filter[key].$in) return count + filter[key].$in.length
      //   return count
      // }, 0)
      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-header' },
        search && _react2.default.createElement(_searchbox2.default, this._getSearchbox())
      );
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props2 = this.props,
          filters = _props2.filters,
          managing = _props2.managing,
          tasks = _props2.tasks,
          onSetQuery = _props2.onSetQuery;

      return {
        icon: filters || this.props.export || tasks ? managing ? 'times' : 'sliders' : null,
        onIcon: this._handleToggleTasks.bind(this),
        onChange: onSetQuery
      };
    }
  }, {
    key: '_handleToggleTasks',
    value: function _handleToggleTasks() {
      this.props.onToggleTasks();
    }
  }]);
  return Header;
}(_react2.default.Component);

Header.propTypes = {
  export: _propTypes2.default.array,
  filters: _propTypes2.default.array,
  filter: _propTypes2.default.object,
  managing: _propTypes2.default.bool,
  search: _propTypes2.default.bool,
  tasks: _propTypes2.default.array,
  onSetQuery: _propTypes2.default.func,
  onToggleTasks: _propTypes2.default.func
};
exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJmaWx0ZXJzIiwiZmlsdGVyIiwic2VhcmNoIiwidGFza3MiLCJleHBvcnQiLCJfZ2V0U2VhcmNoYm94IiwibWFuYWdpbmciLCJvblNldFF1ZXJ5IiwiaWNvbiIsIm9uSWNvbiIsIl9oYW5kbGVUb2dnbGVUYXNrcyIsImJpbmQiLCJvbkNoYW5nZSIsIm9uVG9nZ2xlVGFza3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5Iiwib2JqZWN0IiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7OzZCQWFLO0FBQUEsbUJBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsTUFEVixVQUNVQSxNQURWO0FBQUEsVUFDa0JDLE1BRGxCLFVBQ2tCQSxNQURsQjtBQUFBLFVBQzBCQyxLQUQxQixVQUMwQkEsS0FEMUI7O0FBRVAsVUFBRyxDQUFDSCxPQUFELElBQVksQ0FBQyxLQUFLRCxLQUFMLENBQVdLLE1BQXhCLElBQWtDLENBQUNGLE1BQW5DLElBQTZDLENBQUNDLEtBQWpELEVBQXdELE9BQU8sSUFBUDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDJCQUFmO0FBQ0lELGtCQUFVLDhCQUFDLG1CQUFELEVBQWdCLEtBQUtHLGFBQUwsRUFBaEI7QUFEZCxPQURGO0FBS0Q7OztvQ0FFZTtBQUFBLG9CQUNtQyxLQUFLTixLQUR4QztBQUFBLFVBQ05DLE9BRE0sV0FDTkEsT0FETTtBQUFBLFVBQ0dNLFFBREgsV0FDR0EsUUFESDtBQUFBLFVBQ2FILEtBRGIsV0FDYUEsS0FEYjtBQUFBLFVBQ29CSSxVQURwQixXQUNvQkEsVUFEcEI7O0FBRWQsYUFBTztBQUNMQyxjQUFPUixXQUFXLEtBQUtELEtBQUwsQ0FBV0ssTUFBdEIsSUFBZ0NELEtBQWpDLEdBQTJDRyxXQUFXLE9BQVgsR0FBcUIsU0FBaEUsR0FBNkUsSUFEOUU7QUFFTEcsZ0JBQVEsS0FBS0Msa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBRkg7QUFHTEMsa0JBQVVMO0FBSEwsT0FBUDtBQUtEOzs7eUNBRW9CO0FBQ25CLFdBQUtSLEtBQUwsQ0FBV2MsYUFBWDtBQUNEOzs7RUF2Q2tCQyxnQkFBTUMsUzs7QUFBckJqQixNLENBRUdrQixTLEdBQVk7QUFDakJaLFVBQVFhLG9CQUFVQyxLQUREO0FBRWpCbEIsV0FBU2lCLG9CQUFVQyxLQUZGO0FBR2pCakIsVUFBUWdCLG9CQUFVRSxNQUhEO0FBSWpCYixZQUFVVyxvQkFBVUcsSUFKSDtBQUtqQmxCLFVBQVFlLG9CQUFVRyxJQUxEO0FBTWpCakIsU0FBT2Msb0JBQVVDLEtBTkE7QUFPakJYLGNBQVlVLG9CQUFVSSxJQVBMO0FBUWpCUixpQkFBZUksb0JBQVVJO0FBUlIsQztrQkF5Q052QixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgU2VhcmNoYm94IGZyb20gJy4uL3NlYXJjaGJveCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGV4cG9ydDogUHJvcFR5cGVzLmFycmF5LFxuICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWFuYWdpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFza3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvblNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblRvZ2dsZVRhc2tzOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsdGVycywgZmlsdGVyLCBzZWFyY2gsIHRhc2tzIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoIWZpbHRlcnMgJiYgIXRoaXMucHJvcHMuZXhwb3J0ICYmICFzZWFyY2ggJiYgIXRhc2tzKSByZXR1cm4gbnVsbFxuICAgIC8vIGNvbnN0IGNvdW50ID0gT2JqZWN0LmtleXMoZmlsdGVyKS5yZWR1Y2UoKGNvdW50LCBrZXkpID0+IHtcbiAgICAvLyAgIGlmKGZpbHRlcltrZXldLiRlcSkgcmV0dXJuIGNvdW50ICsgMVxuICAgIC8vICAgaWYoZmlsdGVyW2tleV0uJGluKSByZXR1cm4gY291bnQgKyBmaWx0ZXJba2V5XS4kaW4ubGVuZ3RoXG4gICAgLy8gICByZXR1cm4gY291bnRcbiAgICAvLyB9LCAwKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgeyBzZWFyY2ggJiYgPFNlYXJjaGJveCB7IC4uLnRoaXMuX2dldFNlYXJjaGJveCgpIH0gLz4gfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldFNlYXJjaGJveCgpIHtcbiAgICBjb25zdCB7IGZpbHRlcnMsIG1hbmFnaW5nLCB0YXNrcywgb25TZXRRdWVyeSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7IFxuICAgICAgaWNvbjogKGZpbHRlcnMgfHwgdGhpcy5wcm9wcy5leHBvcnQgfHwgdGFza3MpID8gKG1hbmFnaW5nID8gJ3RpbWVzJyA6ICdzbGlkZXJzJykgOiBudWxsLFxuICAgICAgb25JY29uOiB0aGlzLl9oYW5kbGVUb2dnbGVUYXNrcy5iaW5kKHRoaXMpLFxuICAgICAgb25DaGFuZ2U6IG9uU2V0UXVlcnlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlVG9nZ2xlVGFza3MoKSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVRhc2tzKClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19