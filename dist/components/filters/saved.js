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

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Saved = function (_React$Component) {
  (0, _inherits3.default)(Saved, _React$Component);

  function Saved() {
    (0, _classCallCheck3.default)(this, Saved);
    return (0, _possibleConstructorReturn3.default)(this, (Saved.__proto__ || Object.getPrototypeOf(Saved)).apply(this, arguments));
  }

  (0, _createClass3.default)(Saved, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var saved = [{ name: 'Saved Filter 1', results: {} }];
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            'Saved Filters'
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          saved.map(function (filter, index) {
            return _react2.default.createElement(
              'div',
              { key: 'filter_' + index, className: 'reframe-filters-item', onClick: _this2._handleLoadFilter.bind(_this2, filter) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-title' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-filter' }),
                filter.name
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-icon' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
              )
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-item', onClick: this._handleNewFilter.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-title' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-plus' }),
              'New Filter'
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item-icon' },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          )
        )
      );
    }
  }, {
    key: '_getOverview',
    value: function _getOverview() {
      return this.props;
    }
  }, {
    key: '_handleLoadFilter',
    value: function _handleLoadFilter(filter) {
      this.props.onSet(filter.results);
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleNewFilter',
    value: function _handleNewFilter() {
      this.props.onAddPanel(_react2.default.createElement(_overview2.default, this._getOverview()));
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Saved;
}(_react2.default.Component);

Saved.propTypes = {};
exports.default = Saved;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2F2ZWQiLCJzYXZlZCIsIm5hbWUiLCJyZXN1bHRzIiwiX2hhbmRsZURvbmUiLCJiaW5kIiwibWFwIiwiZmlsdGVyIiwiaW5kZXgiLCJfaGFuZGxlTG9hZEZpbHRlciIsIl9oYW5kbGVOZXdGaWx0ZXIiLCJwcm9wcyIsIm9uU2V0Iiwib25BZGRQYW5lbCIsIl9nZXRPdmVydmlldyIsIm9uRG9uZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs7Ozs2QkFLSztBQUFBOztBQUNQLFVBQU1DLFFBQVEsQ0FDWixFQUFFQyxNQUFNLGdCQUFSLEVBQTBCQyxTQUFTLEVBQW5DLEVBRFksQ0FBZDtBQUdBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmLEVBQTZDLFNBQVUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkQ7QUFDRSxpREFBRyxXQUFVLG9CQUFiO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsOEJBQWY7QUFBQTtBQUFBLFdBSkY7QUFPRSxpREFBSyxXQUFVLDZCQUFmO0FBUEYsU0FERjtBQVVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDSUosZ0JBQU1LLEdBQU4sQ0FBVSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxtQkFDVjtBQUFBO0FBQUEsZ0JBQUssaUJBQWVBLEtBQXBCLEVBQTZCLFdBQVUsc0JBQXZDLEVBQThELFNBQVUsT0FBS0MsaUJBQUwsQ0FBdUJKLElBQXZCLENBQTRCLE1BQTVCLEVBQWtDRSxNQUFsQyxDQUF4RTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDRCQUFmO0FBQ0UscURBQUcsV0FBVSxvQkFBYixHQURGO0FBRUlBLHVCQUFPTDtBQUZYLGVBREY7QUFLRTtBQUFBO0FBQUEsa0JBQUssV0FBVSwyQkFBZjtBQUNFLHFEQUFHLFdBQVUscUJBQWI7QUFERjtBQUxGLGFBRFU7QUFBQSxXQUFWLENBREo7QUFZRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmLEVBQXNDLFNBQVUsS0FBS1EsZ0JBQUwsQ0FBc0JMLElBQXRCLENBQTJCLElBQTNCLENBQWhEO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsNEJBQWY7QUFDRSxtREFBRyxXQUFVLGtCQUFiLEdBREY7QUFBQTtBQUFBLGFBREY7QUFLRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwyQkFBZjtBQUNFLG1EQUFHLFdBQVUscUJBQWI7QUFERjtBQUxGO0FBWkY7QUFWRixPQURGO0FBbUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtNLEtBQVo7QUFDRDs7O3NDQUVpQkosTSxFQUFRO0FBQ3hCLFdBQUtJLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkwsT0FBT0osT0FBeEI7QUFDQSxXQUFLUSxLQUFMLENBQVdFLFVBQVgsQ0FBc0IsOEJBQUMsa0JBQUQsRUFBZSxLQUFLQyxZQUFMLEVBQWYsQ0FBdEI7QUFDRDs7O3VDQUVrQjtBQUNqQixXQUFLSCxLQUFMLENBQVdFLFVBQVgsQ0FBc0IsOEJBQUMsa0JBQUQsRUFBZSxLQUFLQyxZQUFMLEVBQWYsQ0FBdEI7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS0gsS0FBTCxDQUFXSSxNQUFYO0FBQ0Q7OztFQTdEaUJDLGdCQUFNQyxTOztBQUFwQmpCLEssQ0FFR2tCLFMsR0FBWSxFO2tCQStETmxCLEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBPdmVydmlldyBmcm9tICcuL292ZXJ2aWV3J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBTYXZlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzYXZlZCA9IFtcbiAgICAgIHsgbmFtZTogJ1NhdmVkIEZpbHRlciAxJywgcmVzdWx0czogeyB9IH1cbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci1pY29uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZURvbmUuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIFNhdmVkIEZpbHRlcnNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXItaWNvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1ib2R5XCI+XG4gICAgICAgICAgeyBzYXZlZC5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtgZmlsdGVyXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW1cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlTG9hZEZpbHRlci5iaW5kKHRoaXMsIGZpbHRlcikgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbHRlclwiIC8+XG4gICAgICAgICAgICAgICAgeyBmaWx0ZXIubmFtZSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1pdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1pdGVtXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZU5ld0ZpbHRlci5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLXBsdXNcIiAvPlxuICAgICAgICAgICAgICBOZXcgRmlsdGVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW0taWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRPdmVydmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1xuICB9XG5cbiAgX2hhbmRsZUxvYWRGaWx0ZXIoZmlsdGVyKSB7XG4gICAgdGhpcy5wcm9wcy5vblNldChmaWx0ZXIucmVzdWx0cylcbiAgICB0aGlzLnByb3BzLm9uQWRkUGFuZWwoPE92ZXJ2aWV3IHsgLi4udGhpcy5fZ2V0T3ZlcnZpZXcoKSB9IC8+KVxuICB9XG5cbiAgX2hhbmRsZU5ld0ZpbHRlcigpIHtcbiAgICB0aGlzLnByb3BzLm9uQWRkUGFuZWwoPE92ZXJ2aWV3IHsgLi4udGhpcy5fZ2V0T3ZlcnZpZXcoKSB9IC8+KVxuICB9XG5cbiAgX2hhbmRsZURvbmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRvbmUoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2F2ZWRcbiJdfQ==