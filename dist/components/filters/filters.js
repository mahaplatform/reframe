'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function (_React$Component) {
  (0, _inherits3.default)(Filters, _React$Component);

  function Filters() {
    (0, _classCallCheck3.default)(this, Filters);
    return (0, _possibleConstructorReturn3.default)(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  (0, _createClass3.default)(Filters, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var panels = this.props.panels;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters' },
        _react2.default.createElement(_overview2.default, this._getOverview()),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          panels.map(function (panel, index) {
            return _react2.default.createElement(
              _reactTransitionGroup.CSSTransition,
              { key: 'filter_panel_' + index, classNames: 'slide', timeout: 500 },
              _react2.default.cloneElement(panel, (0, _extends4.default)({}, _this2._getPanel(), { key: 'filter_panel_' + index }))
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.values) this._handleSet(this.props.values);
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(defaultValue) {
      var _this3 = this;

      var values = Object.keys(defaultValue).reduce(function (values, key) {
        return (0, _extends4.default)({}, values, (0, _defineProperty3.default)({}, key, _this3._getValue(defaultValue[key])));
      }, {});
      this.props.onSet(values);
    }
  }, {
    key: '_getValue',
    value: function _getValue(value) {
      if (value.$in) return value.$in.map(function (key) {
        return { key: parseInt(key), value: '' };
      });
      if (value.$eq) return value.$eq;
      if (value.$dr) return { key: value.$dr, value: '' };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var results = this.props.results;

      if (!_lodash2.default.isEqual(prevProps.results, results)) this._handleChange();
    }
  }, {
    key: '_getOverview',
    value: function _getOverview() {
      return this.props;
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props = this.props,
          results = _props.results,
          onChange = _props.onChange,
          onRemovePanel = _props.onRemovePanel;

      return {
        results: results,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var filtered = this.props.filtered;

      this.props.onUpdate(filtered);
    }
  }]);
  return Filters;
}(_react2.default.Component);

Filters.propTypes = {
  filters: _propTypes2.default.array,
  filtered: _propTypes2.default.object,
  panels: _propTypes2.default.array,
  results: _propTypes2.default.object,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
exports.default = Filters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRmlsdGVycyIsInBhbmVscyIsInByb3BzIiwiX2dldE92ZXJ2aWV3IiwibWFwIiwicGFuZWwiLCJpbmRleCIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiX2dldFBhbmVsIiwia2V5IiwidmFsdWVzIiwiX2hhbmRsZVNldCIsImRlZmF1bHRWYWx1ZSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJfZ2V0VmFsdWUiLCJvblNldCIsInZhbHVlIiwiJGluIiwicGFyc2VJbnQiLCIkZXEiLCIkZHIiLCJwcmV2UHJvcHMiLCJyZXN1bHRzIiwiXyIsImlzRXF1YWwiLCJfaGFuZGxlQ2hhbmdlIiwib25DaGFuZ2UiLCJvblJlbW92ZVBhbmVsIiwiZmlsdGVyZWQiLCJvblVwZGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZpbHRlcnMiLCJQcm9wVHlwZXMiLCJhcnJheSIsIm9iamVjdCIsIm9uQWRkUGFuZWwiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7NkJBZUs7QUFBQTs7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS0MsS0FEakIsQ0FDQ0QsTUFERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDRSxzQ0FBQyxrQkFBRCxFQUFlLEtBQUtFLFlBQUwsRUFBZixDQURGO0FBRUU7QUFBQywrQ0FBRDtBQUFBO0FBQ0lGLGlCQUFPRyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsbUJBQ1g7QUFBQyxpREFBRDtBQUFBLGdCQUFlLHVCQUFzQkEsS0FBckMsRUFBK0MsWUFBVyxPQUExRCxFQUFrRSxTQUFVLEdBQTVFO0FBQ0lDLDhCQUFNQyxZQUFOLENBQW1CSCxLQUFuQiw2QkFBK0IsT0FBS0ksU0FBTCxFQUEvQixJQUFpREMsdUJBQXFCSixLQUF0RTtBQURKLGFBRFc7QUFBQSxXQUFYO0FBREo7QUFGRixPQURGO0FBWUQ7Ozt3Q0FFbUI7QUFDbEIsVUFBRyxLQUFLSixLQUFMLENBQVdTLE1BQWQsRUFBc0IsS0FBS0MsVUFBTCxDQUFnQixLQUFLVixLQUFMLENBQVdTLE1BQTNCO0FBQ3ZCOzs7K0JBRVVFLFksRUFBYztBQUFBOztBQUN2QixVQUFNRixTQUFTRyxPQUFPQyxJQUFQLENBQVlGLFlBQVosRUFBMEJHLE1BQTFCLENBQWlDLFVBQUNMLE1BQUQsRUFBU0QsR0FBVDtBQUFBLDBDQUMzQ0MsTUFEMkMsb0NBRTdDRCxHQUY2QyxFQUV2QyxPQUFLTyxTQUFMLENBQWVKLGFBQWFILEdBQWIsQ0FBZixDQUZ1QztBQUFBLE9BQWpDLEVBR1gsRUFIVyxDQUFmO0FBSUEsV0FBS1IsS0FBTCxDQUFXZ0IsS0FBWCxDQUFpQlAsTUFBakI7QUFDRDs7OzhCQUVTUSxLLEVBQU87QUFDZixVQUFHQSxNQUFNQyxHQUFULEVBQWMsT0FBT0QsTUFBTUMsR0FBTixDQUFVaEIsR0FBVixDQUFjO0FBQUEsZUFBUSxFQUFFTSxLQUFLVyxTQUFTWCxHQUFULENBQVAsRUFBc0JTLE9BQU8sRUFBN0IsRUFBUjtBQUFBLE9BQWQsQ0FBUDtBQUNkLFVBQUdBLE1BQU1HLEdBQVQsRUFBYyxPQUFPSCxNQUFNRyxHQUFiO0FBQ2QsVUFBR0gsTUFBTUksR0FBVCxFQUFjLE9BQVEsRUFBRWIsS0FBS1MsTUFBTUksR0FBYixFQUFrQkosT0FBTyxFQUF6QixFQUFSO0FBQ2Y7Ozt1Q0FFa0JLLFMsRUFBVztBQUFBLFVBQ3BCQyxPQURvQixHQUNSLEtBQUt2QixLQURHLENBQ3BCdUIsT0FEb0I7O0FBRTVCLFVBQUcsQ0FBQ0MsaUJBQUVDLE9BQUYsQ0FBVUgsVUFBVUMsT0FBcEIsRUFBNkJBLE9BQTdCLENBQUosRUFBMkMsS0FBS0csYUFBTDtBQUM1Qzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLMUIsS0FBWjtBQUNEOzs7Z0NBRVc7QUFBQSxtQkFDbUMsS0FBS0EsS0FEeEM7QUFBQSxVQUNGdUIsT0FERSxVQUNGQSxPQURFO0FBQUEsVUFDT0ksUUFEUCxVQUNPQSxRQURQO0FBQUEsVUFDaUJDLGFBRGpCLFVBQ2lCQSxhQURqQjs7QUFFVixhQUFPO0FBQ0xMLHdCQURLO0FBRUxJLDBCQUZLO0FBR0xDO0FBSEssT0FBUDtBQUtEOzs7b0NBRWU7QUFBQSxVQUNOQyxRQURNLEdBQ08sS0FBSzdCLEtBRFosQ0FDTjZCLFFBRE07O0FBRWQsV0FBSzdCLEtBQUwsQ0FBVzhCLFFBQVgsQ0FBb0JELFFBQXBCO0FBQ0Q7OztFQXRFbUJ4QixnQkFBTTBCLFM7O0FBQXRCakMsTyxDQUVHa0MsUyxHQUFZO0FBQ2pCQyxXQUFTQyxvQkFBVUMsS0FERjtBQUVqQk4sWUFBVUssb0JBQVVFLE1BRkg7QUFHakJyQyxVQUFRbUMsb0JBQVVDLEtBSEQ7QUFJakJaLFdBQVNXLG9CQUFVRSxNQUpGO0FBS2pCM0IsVUFBUXlCLG9CQUFVRSxNQUxEO0FBTWpCQyxjQUFZSCxvQkFBVUksSUFOTDtBQU9qQlgsWUFBVU8sb0JBQVVJLElBUEg7QUFRakJSLFlBQVVJLG9CQUFVSSxJQVJIO0FBU2pCVixpQkFBZU0sb0JBQVVJLElBVFI7QUFVakJ0QixTQUFPa0Isb0JBQVVJO0FBVkEsQztrQkF5RU54QyxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4vb3ZlcnZpZXcnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIEZpbHRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGZpbHRlcmVkOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBhbmVsczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlc3VsdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQWRkUGFuZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZW1vdmVQYW5lbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZXQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYW5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnNcIj5cbiAgICAgICAgPE92ZXJ2aWV3IHsgLi4udGhpcy5fZ2V0T3ZlcnZpZXcoKSB9IC8+XG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgeyBwYW5lbHMubWFwKChwYW5lbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17IGBmaWx0ZXJfcGFuZWxfJHtpbmRleH1gIH0gY2xhc3NOYW1lcz1cInNsaWRlXCIgdGltZW91dD17IDUwMCB9PlxuICAgICAgICAgICAgICB7IFJlYWN0LmNsb25lRWxlbWVudChwYW5lbCwgeyAuLi50aGlzLl9nZXRQYW5lbCgpLCBrZXk6IGBmaWx0ZXJfcGFuZWxfJHtpbmRleH1gIH0pIH1cbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZih0aGlzLnByb3BzLnZhbHVlcykgdGhpcy5faGFuZGxlU2V0KHRoaXMucHJvcHMudmFsdWVzKVxuICB9XG5cbiAgX2hhbmRsZVNldChkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0VmFsdWUpLnJlZHVjZSgodmFsdWVzLCBrZXkpID0+ICh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBba2V5XTogdGhpcy5fZ2V0VmFsdWUoZGVmYXVsdFZhbHVlW2tleV0pXG4gICAgfSksIHt9KVxuICAgIHRoaXMucHJvcHMub25TZXQodmFsdWVzKVxuICB9XG5cbiAgX2dldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUuJGluKSByZXR1cm4gdmFsdWUuJGluLm1hcChrZXkgPT4gKHsga2V5OiBwYXJzZUludChrZXkpLCB2YWx1ZTogJycgfSkpXG4gICAgaWYodmFsdWUuJGVxKSByZXR1cm4gdmFsdWUuJGVxXG4gICAgaWYodmFsdWUuJGRyKSByZXR1cm4gKHsga2V5OiB2YWx1ZS4kZHIsIHZhbHVlOiAnJyB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKCFfLmlzRXF1YWwocHJldlByb3BzLnJlc3VsdHMsIHJlc3VsdHMpKSB0aGlzLl9oYW5kbGVDaGFuZ2UoKVxuICB9XG5cbiAgX2dldE92ZXJ2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzXG4gIH1cblxuICBfZ2V0UGFuZWwoKSB7XG4gICAgY29uc3QgeyByZXN1bHRzLCBvbkNoYW5nZSwgb25SZW1vdmVQYW5lbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvblJlbW92ZVBhbmVsXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSgpIHtcbiAgICBjb25zdCB7IGZpbHRlcmVkIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZShmaWx0ZXJlZClcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc1xuIl19