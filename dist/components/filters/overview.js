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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lookup = require('./lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

var _daterange = require('./daterange');

var _daterange2 = _interopRequireDefault(_daterange);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overview = function (_React$Component) {
  (0, _inherits3.default)(Overview, _React$Component);

  function Overview() {
    (0, _classCallCheck3.default)(this, Overview);
    return (0, _possibleConstructorReturn3.default)(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overview, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          filters = _props.filters,
          onDone = _props.onDone;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          onDone ? _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ) : _react2.default.createElement('div', { className: 'reframe-filters-header-icon' }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            'Filter Results'
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-overview' },
            filters.map(function (filter, index) {
              if (filter.type === 'toggle') return _react2.default.createElement(_toggle2.default, (0, _extends3.default)({}, _this2._getToggle(filter), { key: 'filter_' + index }));
              if (filter.type === 'lookup') return _react2.default.createElement(_lookup2.default, (0, _extends3.default)({}, _this2._getLookup(filter), { key: 'filter_' + index }));
              if (filter.type === 'select') return _react2.default.createElement(_select2.default, (0, _extends3.default)({}, _this2._getSelect(filter), { key: 'filter_' + index }));
              if (filter.type === 'daterange') return _react2.default.createElement(_daterange2.default, (0, _extends3.default)({}, _this2._getDaterange(filter), { key: 'filter_' + index }));
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer' },
          _react2.default.createElement(
            'button',
            { className: 'ui red fluid button', onClick: this._handleReset.bind(this) },
            'Reset Filters'
          )
        )
      );
    }
  }, {
    key: '_getToggle',
    value: function _getToggle(filter) {
      var _props2 = this.props,
          results = _props2.results,
          onChange = _props2.onChange;
      var format = filter.format,
          label = filter.label,
          name = filter.name;

      return {
        format: format,
        label: label,
        name: name,
        results: results,
        onChange: onChange
      };
    }
  }, {
    key: '_getLookup',
    value: function _getLookup(filter) {
      var _props3 = this.props,
          results = _props3.results,
          onAddPanel = _props3.onAddPanel,
          onChange = _props3.onChange,
          onRemovePanel = _props3.onRemovePanel;
      var format = filter.format,
          label = filter.label,
          multiple = filter.multiple,
          options = filter.options;

      return {
        format: format,
        label: label,
        multiple: multiple,
        name: name,
        options: options,
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      };
    }
  }, {
    key: '_getSelect',
    value: function _getSelect(filter) {
      var _props4 = this.props,
          results = _props4.results,
          onAddPanel = _props4.onAddPanel,
          onChange = _props4.onChange,
          onRemovePanel = _props4.onRemovePanel;

      return (0, _extends3.default)({}, filter, {
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      });
    }
  }, {
    key: '_getDaterange',
    value: function _getDaterange(filter) {
      var _props5 = this.props,
          results = _props5.results,
          onAddPanel = _props5.onAddPanel,
          onChange = _props5.onChange,
          onRemovePanel = _props5.onRemovePanel;

      return (0, _extends3.default)({}, filter, {
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      });
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      this.props.onReset();
    }
  }]);
  return Overview;
}(_react2.default.Component);

Overview.propTypes = {
  filters: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDone: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
exports.default = Overview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiT3ZlcnZpZXciLCJwcm9wcyIsImZpbHRlcnMiLCJvbkRvbmUiLCJfaGFuZGxlRG9uZSIsImJpbmQiLCJtYXAiLCJmaWx0ZXIiLCJpbmRleCIsInR5cGUiLCJfZ2V0VG9nZ2xlIiwiX2dldExvb2t1cCIsIl9nZXRTZWxlY3QiLCJfZ2V0RGF0ZXJhbmdlIiwiX2hhbmRsZVJlc2V0IiwicmVzdWx0cyIsIm9uQ2hhbmdlIiwiZm9ybWF0IiwibGFiZWwiLCJuYW1lIiwib25BZGRQYW5lbCIsIm9uUmVtb3ZlUGFuZWwiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJvblJlc2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsIm9iamVjdCIsImZ1bmMiLCJvblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7OzZCQWFLO0FBQUE7O0FBQUEsbUJBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsTUFEVixVQUNVQSxNQURWOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDSUEsbUJBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZixFQUE2QyxTQUFVLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXZEO0FBQ0UsaURBQUcsV0FBVSxvQkFBYjtBQURGLFdBREEsR0FJQSx1Q0FBSyxXQUFVLDZCQUFmLEdBTEo7QUFPRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDhCQUFmO0FBQUE7QUFBQSxXQVBGO0FBVUUsaURBQUssV0FBVSw2QkFBZjtBQVZGLFNBREY7QUFhRTtBQUFBO0FBQUEsWUFBSyxX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SixRQURULFdBQ1NBLFFBRFQ7QUFBQSxVQUNtQkssYUFEbkIsV0FDbUJBLGFBRG5COztBQUVwQix3Q0FDS2QsTUFETDtBQUVFUSx3QkFGRjtBQUdFSyw4QkFIRjtBQUlFSiwwQkFKRjtBQUtFSztBQUxGO0FBT0Q7OztrQ0FFYTtBQUNaLFdBQUtwQixLQUFMLENBQVdFLE1BQVg7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0YsS0FBTCxDQUFXdUIsT0FBWDtBQUNEOzs7RUF4R29CQyxnQkFBTUMsUzs7QUFBdkIxQixRLENBRUcyQixTLEdBQVk7QUFDakJ6QixXQUFTMEIsb0JBQVVDLEtBREY7QUFFakJkLFdBQVNhLG9CQUFVRSxNQUZGO0FBR2pCVixjQUFZUSxvQkFBVUcsSUFITDtBQUlqQmYsWUFBVVksb0JBQVVHLElBSkg7QUFLakI1QixVQUFReUIsb0JBQVVHLElBTEQ7QUFNakJWLGlCQUFlTyxvQkFBVUcsSUFOUjtBQU9qQlAsV0FBU0ksb0JBQVVHLElBUEY7QUFRakJDLFlBQVVKLG9CQUFVRztBQVJILEM7a0JBMEdOL0IsUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExvb2t1cCBmcm9tICcuL2xvb2t1cCdcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXG5pbXBvcnQgVG9nZ2xlIGZyb20gJy4vdG9nZ2xlJ1xuaW1wb3J0IERhdGVyYW5nZSBmcm9tICcuL2RhdGVyYW5nZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgT3ZlcnZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlc3VsdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25BZGRQYW5lbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRG9uZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZW1vdmVQYW5lbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXNldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmaWx0ZXJzLCBvbkRvbmUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtcGFuZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyXCI+XG4gICAgICAgICAgeyBvbkRvbmUgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlRG9uZS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tbGVmdFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIEZpbHRlciBSZXN1bHRzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLW92ZXJ2aWV3XCI+XG4gICAgICAgICAgICB7IGZpbHRlcnMubWFwKChmaWx0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmKGZpbHRlci50eXBlID09PSAndG9nZ2xlJykgcmV0dXJuIDxUb2dnbGUgey4uLnRoaXMuX2dldFRvZ2dsZShmaWx0ZXIpIH0ga2V5PXtgZmlsdGVyXyR7aW5kZXh9YH0gLz5cbiAgICAgICAgICAgICAgaWYoZmlsdGVyLnR5cGUgPT09ICdsb29rdXAnKSByZXR1cm4gPExvb2t1cCB7Li4udGhpcy5fZ2V0TG9va3VwKGZpbHRlcikgfSBrZXk9e2BmaWx0ZXJfJHtpbmRleH1gfSAvPlxuICAgICAgICAgICAgICBpZihmaWx0ZXIudHlwZSA9PT0gJ3NlbGVjdCcpIHJldHVybiA8U2VsZWN0IHsuLi50aGlzLl9nZXRTZWxlY3QoZmlsdGVyKSB9IGtleT17YGZpbHRlcl8ke2luZGV4fWB9IC8+XG4gICAgICAgICAgICAgIGlmKGZpbHRlci50eXBlID09PSAnZGF0ZXJhbmdlJykgcmV0dXJuIDxEYXRlcmFuZ2Ugey4uLnRoaXMuX2dldERhdGVyYW5nZShmaWx0ZXIpIH0ga2V5PXtgZmlsdGVyXyR7aW5kZXh9YH0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSByZWQgZmx1aWQgYnV0dG9uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVJlc2V0LmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgIFJlc2V0IEZpbHRlcnNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0VG9nZ2xlKGZpbHRlcikge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm1hdCwgbGFiZWwsIG5hbWUgfSA9IGZpbHRlclxuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXQsXG4gICAgICBsYWJlbCxcbiAgICAgIG5hbWUsXG4gICAgICByZXN1bHRzLFxuICAgICAgb25DaGFuZ2VcbiAgICB9XG4gIH1cblxuICBfZ2V0TG9va3VwKGZpbHRlcikge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgb25BZGRQYW5lbCwgb25DaGFuZ2UsIG9uUmVtb3ZlUGFuZWwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZvcm1hdCwgbGFiZWwsIG11bHRpcGxlLCBvcHRpb25zIH0gPSBmaWx0ZXJcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybWF0LFxuICAgICAgbGFiZWwsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICBvcHRpb25zLFxuICAgICAgcmVzdWx0cyxcbiAgICAgIG9uQWRkUGFuZWwsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uUmVtb3ZlUGFuZWxcbiAgICB9XG4gIH1cblxuICBfZ2V0U2VsZWN0KGZpbHRlcikge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgb25BZGRQYW5lbCwgb25DaGFuZ2UsIG9uUmVtb3ZlUGFuZWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmlsdGVyLFxuICAgICAgcmVzdWx0cyxcbiAgICAgIG9uQWRkUGFuZWwsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uUmVtb3ZlUGFuZWxcbiAgICB9XG4gIH1cblxuICBfZ2V0RGF0ZXJhbmdlKGZpbHRlcikge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgb25BZGRQYW5lbCwgb25DaGFuZ2UsIG9uUmVtb3ZlUGFuZWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmlsdGVyLFxuICAgICAgcmVzdWx0cyxcbiAgICAgIG9uQWRkUGFuZWwsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uUmVtb3ZlUGFuZWxcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRG9uZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uRG9uZSgpXG4gIH1cblxuICBfaGFuZGxlUmVzZXQoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlc2V0KClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3XG4iXX0=