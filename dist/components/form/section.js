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

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section(props) {
    (0, _classCallCheck3.default)(this, Section);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    var collapsed = props.collapsed !== null ? props.collapsed : props.collapsing;
    _this.state = { collapsed: collapsed };
    return _this;
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fields = _props.fields,
          instructions = _props.instructions,
          label = _props.label;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        label && _react2.default.createElement(
          'h4',
          { className: 'ui header', onClick: this._handleToggle.bind(this) },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'section' },
          instructions && _react2.default.createElement(
            'div',
            { className: 'instructions' },
            instructions
          ),
          fields.map(function (field, index) {
            return _react2.default.createElement(_field2.default, (0, _extends3.default)({ key: 'field_' + index }, _this2._getField(field, index)));
          })
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var collapsing = this.props.collapsing;
      var collapsed = this.state.collapsed;

      var classes = ['ui', 'basic', 'segment'];
      if (collapsing) {
        classes.push('collapsing');
        classes.push(collapsed ? 'collapsed' : 'expanded');
      }
      return classes.join(' ');
    }
  }, {
    key: '_getField',
    value: function _getField(field, index) {
      var _props2 = this.props,
          data = _props2.data,
          errors = _props2.errors,
          tabIndexStart = _props2.tabIndexStart,
          onBusy = _props2.onBusy,
          onReady = _props2.onReady,
          onSubmit = _props2.onSubmit,
          onUpdateData = _props2.onUpdateData;

      return (0, _extends3.default)({}, field, {
        data: data,
        errors: errors,
        tabIndex: tabIndexStart + index,
        onBusy: onBusy,
        onReady: onReady,
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      });
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }]);
  return Section;
}(_react2.default.Component);

Section.propTypes = {
  label: _propTypes2.default.string,
  instructions: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  collapsing: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  fields: _propTypes2.default.array,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  tabIndexStart: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Section.defaultProps = {
  collapsing: false,
  tabIndexStart: 1
};
exports.default = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY29sbGFwc2VkIiwiY29sbGFwc2luZyIsInN0YXRlIiwiZmllbGRzIiwiaW5zdHJ1Y3Rpb25zIiwibGFiZWwiLCJfZ2V0Q2xhc3MiLCJfaGFuZGxlVG9nZ2xlIiwiYmluZCIsIm1hcCIsImZpZWxkIiwiaW5kZXgiLCJfZ2V0RmllbGQiLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iLCJkYXRhIiwiZXJyb3JzIiwidGFiSW5kZXhTdGFydCIsIm9uQnVzeSIsIm9uUmVhZHkiLCJvblN1Ym1pdCIsIm9uVXBkYXRlRGF0YSIsInRhYkluZGV4Iiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJib29sIiwiYXJyYXkiLCJvYmplY3QiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE87OztBQXlCSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixRQUFNQyxZQUFhRCxNQUFNQyxTQUFOLEtBQW9CLElBQXJCLEdBQTZCRCxNQUFNQyxTQUFuQyxHQUErQ0QsTUFBTUUsVUFBdkU7QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBRUYsb0JBQUYsRUFBYjtBQUhpQjtBQUlsQjs7Ozs2QkFFUTtBQUFBOztBQUFBLG1CQUNpQyxLQUFLRCxLQUR0QztBQUFBLFVBQ0NJLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLFlBRFQsVUFDU0EsWUFEVDtBQUFBLFVBQ3VCQyxLQUR2QixVQUN1QkEsS0FEdkI7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZLEtBQUtDLFNBQUwsRUFBakI7QUFDSUQsaUJBQ0E7QUFBQTtBQUFBLFlBQUksV0FBVSxXQUFkLEVBQTBCLFNBQVUsS0FBS0UsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBcEM7QUFDSUg7QUFESixTQUZKO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0lELDBCQUFnQjtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFBZ0NBO0FBQWhDLFdBRHBCO0FBRUlELGlCQUFPTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsbUJBQ1gsOEJBQUMsZUFBRCwyQkFBTyxnQkFBY0EsS0FBckIsSUFBa0MsT0FBS0MsU0FBTCxDQUFlRixLQUFmLEVBQXNCQyxLQUF0QixDQUFsQyxFQURXO0FBQUEsV0FBWDtBQUZKO0FBTkYsT0FERjtBQWVEOzs7Z0NBRVc7QUFBQSxVQUNGVixVQURFLEdBQ2EsS0FBS0YsS0FEbEIsQ0FDRkUsVUFERTtBQUFBLFVBRUZELFNBRkUsR0FFWSxLQUFLRSxLQUZqQixDQUVGRixTQUZFOztBQUdWLFVBQUlhLFVBQVUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixTQUFoQixDQUFkO0FBQ0EsVUFBR1osVUFBSCxFQUFlO0FBQ2JZLGdCQUFRQyxJQUFSLENBQWEsWUFBYjtBQUNBRCxnQkFBUUMsSUFBUixDQUFhZCxZQUFZLFdBQVosR0FBMEIsVUFBdkM7QUFDRDtBQUNELGFBQU9hLFFBQVFFLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFFRDs7OzhCQUVTTCxLLEVBQU9DLEssRUFBTztBQUFBLG9CQUMyRCxLQUFLWixLQURoRTtBQUFBLFVBQ2RpQixJQURjLFdBQ2RBLElBRGM7QUFBQSxVQUNSQyxNQURRLFdBQ1JBLE1BRFE7QUFBQSxVQUNBQyxhQURBLFdBQ0FBLGFBREE7QUFBQSxVQUNlQyxNQURmLFdBQ2VBLE1BRGY7QUFBQSxVQUN1QkMsT0FEdkIsV0FDdUJBLE9BRHZCO0FBQUEsVUFDZ0NDLFFBRGhDLFdBQ2dDQSxRQURoQztBQUFBLFVBQzBDQyxZQUQxQyxXQUMwQ0EsWUFEMUM7O0FBRXRCLHdDQUNLWixLQURMO0FBRUVNLGtCQUZGO0FBR0VDLHNCQUhGO0FBSUVNLGtCQUFVTCxnQkFBZ0JQLEtBSjVCO0FBS0VRLHNCQUxGO0FBTUVDLHdCQU5GO0FBT0VDLDBCQVBGO0FBUUVDO0FBUkY7QUFVRDs7O29DQUVlO0FBQ2QsV0FBS0UsUUFBTCxDQUFjLEVBQUN4QixXQUFXLENBQUMsS0FBS0UsS0FBTCxDQUFXRixTQUF4QixFQUFkO0FBQ0Q7OztFQTlFbUJ5QixnQkFBTUMsUzs7QUFBdEI1QixPLENBRUc2QixTLEdBQVk7QUFDakJ0QixTQUFPdUIsb0JBQVVDLE1BREE7QUFFakJ6QixnQkFBY3dCLG9CQUFVRSxTQUFWLENBQW9CLENBQ2hDRixvQkFBVUMsTUFEc0IsRUFFaENELG9CQUFVRyxPQUZzQixDQUFwQixDQUZHO0FBTWpCOUIsY0FBWTJCLG9CQUFVSSxJQU5MO0FBT2pCaEMsYUFBVzRCLG9CQUFVSSxJQVBKO0FBUWpCN0IsVUFBUXlCLG9CQUFVSyxLQVJEO0FBU2pCakIsUUFBTVksb0JBQVVNLE1BVEM7QUFVakJqQixVQUFRVyxvQkFBVU0sTUFWRDtBQVdqQmhCLGlCQUFlVSxvQkFBVU8sTUFYUjtBQVlqQmhCLFVBQVFTLG9CQUFVUSxJQVpEO0FBYWpCZixZQUFVTyxvQkFBVVEsSUFiSDtBQWNqQmhCLFdBQVNRLG9CQUFVUSxJQWRGO0FBZWpCZCxnQkFBY00sb0JBQVVRO0FBZlAsQztBQUZmdEMsTyxDQW9CR3VDLFksR0FBZTtBQUNwQnBDLGNBQVksS0FEUTtBQUVwQmlCLGlCQUFlO0FBRkssQztrQkE4RFRwQixPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZCdcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnN0cnVjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50XG4gICAgXSksXG4gICAgY29sbGFwc2luZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGVycm9yczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0YWJJbmRleFN0YXJ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQnVzeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBkYXRlRGF0YTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sbGFwc2luZzogZmFsc2UsXG4gICAgdGFiSW5kZXhTdGFydDogMVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCBjb2xsYXBzZWQgPSAocHJvcHMuY29sbGFwc2VkICE9PSBudWxsKSA/IHByb3BzLmNvbGxhcHNlZCA6IHByb3BzLmNvbGxhcHNpbmdcbiAgICB0aGlzLnN0YXRlID0geyBjb2xsYXBzZWQgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmllbGRzLCBpbnN0cnVjdGlvbnMsIGxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5fZ2V0Q2xhc3MoKSB9PlxuICAgICAgICB7IGxhYmVsICYmXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInVpIGhlYWRlclwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVUb2dnbGUuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICB7IGluc3RydWN0aW9ucyAmJiA8ZGl2IGNsYXNzTmFtZT1cImluc3RydWN0aW9uc1wiPnsgaW5zdHJ1Y3Rpb25zIH08L2Rpdj4gfVxuICAgICAgICAgIHsgZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8RmllbGQga2V5PXtgZmllbGRfJHtpbmRleH1gfSB7Li4udGhpcy5fZ2V0RmllbGQoZmllbGQsIGluZGV4KSB9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldENsYXNzKCkge1xuICAgIGNvbnN0IHsgY29sbGFwc2luZyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGNsYXNzZXMgPSBbJ3VpJywgJ2Jhc2ljJywgJ3NlZ21lbnQnXVxuICAgIGlmKGNvbGxhcHNpbmcpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnY29sbGFwc2luZycpXG4gICAgICBjbGFzc2VzLnB1c2goY29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiAnZXhwYW5kZWQnKVxuICAgIH1cbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcblxuICB9XG5cbiAgX2dldEZpZWxkKGZpZWxkLCBpbmRleCkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzLCB0YWJJbmRleFN0YXJ0LCBvbkJ1c3ksIG9uUmVhZHksIG9uU3VibWl0LCBvblVwZGF0ZURhdGEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGQsXG4gICAgICBkYXRhLFxuICAgICAgZXJyb3JzLFxuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4U3RhcnQgKyBpbmRleCxcbiAgICAgIG9uQnVzeSxcbiAgICAgIG9uUmVhZHksXG4gICAgICBvblN1Ym1pdCxcbiAgICAgIG9uVXBkYXRlRGF0YVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWR9KVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxuIl19