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

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicToken = function BasicToken(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: 'token' },
    value
  );
};

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      if (!this.props.endpoint) return _react2.default.createElement(_options2.default, this._getOptions());
      return _react2.default.createElement(
        'div',
        { className: 'reframe-search' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-header' },
          _react2.default.createElement(_searchbox2.default, this._getSearchbox())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-body' },
          _react2.default.createElement(_infinite2.default, this._getInfinite())
        )
      );
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props = this.props,
          format = _props.format,
          text = _props.text,
          value = _props.value,
          options = _props.options,
          onChoose = _props.onChoose;

      return { format: format, text: text, value: value, options: options, onChoose: onChoose };
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props2 = this.props,
          label = _props2.label,
          prompt = _props2.prompt,
          onQuery = _props2.onQuery;

      return {
        prompt: prompt || 'Find a ' + label,
        onChange: onQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props3 = this.props,
          cacheKey = _props3.cacheKey,
          empty = _props3.empty,
          endpoint = _props3.endpoint,
          exclude_ids = _props3.exclude_ids,
          notFound = _props3.notFound,
          q = _props3.q;

      return {
        cacheKey: cacheKey,
        empty: empty,
        endpoint: endpoint,
        exclude_ids: exclude_ids,
        filter: { q: q },
        layout: function layout(props) {
          return _react2.default.createElement(_dynamic2.default, (0, _extends3.default)({}, _this2._getDynamic(), props));
        },
        notFound: notFound
      };
    }
  }, {
    key: '_getDynamic',
    value: function _getDynamic() {
      var _props4 = this.props,
          format = _props4.format,
          text = _props4.text,
          value = _props4.value,
          onChoose = _props4.onChoose;

      return { format: format, text: text, value: value, onChoose: onChoose };
    }
  }]);
  return Search;
}(_react2.default.Component);

Search.propTypes = {
  cacheKey: _propTypes2.default.string,
  endpoint: _propTypes2.default.string,
  exclude_ids: _propTypes2.default.array,
  empty: _propTypes2.default.func,
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  notFound: _propTypes2.default.func,
  options: _propTypes2.default.array,
  prompt: _propTypes2.default.string,
  q: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onQuery: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};
Search.defaultProps = {
  format: BasicToken,
  cacheKey: null,
  empty: null,
  notFound: null,
  onChoose: function onChoose() {}
};
exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQmFzaWNUb2tlbiIsInZhbHVlIiwiU2VhcmNoIiwicHJvcHMiLCJlbmRwb2ludCIsIl9nZXRPcHRpb25zIiwiX2dldFNlYXJjaGJveCIsIl9nZXRJbmZpbml0ZSIsImZvcm1hdCIsInRleHQiLCJvcHRpb25zIiwib25DaG9vc2UiLCJsYWJlbCIsInByb21wdCIsIm9uUXVlcnkiLCJvbkNoYW5nZSIsImNhY2hlS2V5IiwiZW1wdHkiLCJleGNsdWRlX2lkcyIsIm5vdEZvdW5kIiwicSIsImZpbHRlciIsImxheW91dCIsIl9nZXREeW5hbWljIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiLCJhbnkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNqQjtBQUFBO0FBQUEsTUFBSyxXQUFVLE9BQWY7QUFDS0E7QUFETCxHQURpQjtBQUFBLENBQW5COztJQU1NQyxNOzs7Ozs7Ozs7OzZCQTJCSztBQUNQLFVBQUcsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUIsT0FBTyw4QkFBQyxpQkFBRCxFQUFjLEtBQUtDLFdBQUwsRUFBZCxDQUFQO0FBQ3pCLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsdUJBQWY7QUFDRSx3Q0FBQyxtQkFBRCxFQUFnQixLQUFLQyxhQUFMLEVBQWhCO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUJBQWY7QUFDRSx3Q0FBQyxrQkFBRCxFQUFjLEtBQUtDLFlBQUwsRUFBZDtBQURGO0FBSkYsT0FERjtBQVVEOzs7a0NBRWE7QUFBQSxtQkFDdUMsS0FBS0osS0FENUM7QUFBQSxVQUNKSyxNQURJLFVBQ0pBLE1BREk7QUFBQSxVQUNJQyxJQURKLFVBQ0lBLElBREo7QUFBQSxVQUNVUixLQURWLFVBQ1VBLEtBRFY7QUFBQSxVQUNpQlMsT0FEakIsVUFDaUJBLE9BRGpCO0FBQUEsVUFDMEJDLFFBRDFCLFVBQzBCQSxRQUQxQjs7QUFFWixhQUFPLEVBQUVILGNBQUYsRUFBVUMsVUFBVixFQUFnQlIsWUFBaEIsRUFBdUJTLGdCQUF2QixFQUFnQ0Msa0JBQWhDLEVBQVA7QUFDRDs7O29DQUVlO0FBQUEsb0JBQ3FCLEtBQUtSLEtBRDFCO0FBQUEsVUFDTlMsS0FETSxXQUNOQSxLQURNO0FBQUEsVUFDQ0MsTUFERCxXQUNDQSxNQUREO0FBQUEsVUFDU0MsT0FEVCxXQUNTQSxPQURUOztBQUVkLGFBQU87QUFDTEQsZ0JBQVFBLHNCQUFvQkQsS0FEdkI7QUFFTEcsa0JBQVVEO0FBRkwsT0FBUDtBQUlEOzs7bUNBRWM7QUFBQTs7QUFBQSxvQkFDbUQsS0FBS1gsS0FEeEQ7QUFBQSxVQUNMYSxRQURLLFdBQ0xBLFFBREs7QUFBQSxVQUNLQyxLQURMLFdBQ0tBLEtBREw7QUFBQSxVQUNZYixRQURaLFdBQ1lBLFFBRFo7QUFBQSxVQUNzQmMsV0FEdEIsV0FDc0JBLFdBRHRCO0FBQUEsVUFDbUNDLFFBRG5DLFdBQ21DQSxRQURuQztBQUFBLFVBQzZDQyxDQUQ3QyxXQUM2Q0EsQ0FEN0M7O0FBRWIsYUFBTztBQUNMSiwwQkFESztBQUVMQyxvQkFGSztBQUdMYiwwQkFISztBQUlMYyxnQ0FKSztBQUtMRyxnQkFBUSxFQUFFRCxJQUFGLEVBTEg7QUFNTEUsZ0JBQVEsZ0JBQUNuQixLQUFEO0FBQUEsaUJBQVcsOEJBQUMsaUJBQUQsNkJBQWMsT0FBS29CLFdBQUwsRUFBZCxFQUF3Q3BCLEtBQXhDLEVBQVg7QUFBQSxTQU5IO0FBT0xnQjtBQVBLLE9BQVA7QUFTRDs7O2tDQUVhO0FBQUEsb0JBQzhCLEtBQUtoQixLQURuQztBQUFBLFVBQ0pLLE1BREksV0FDSkEsTUFESTtBQUFBLFVBQ0lDLElBREosV0FDSUEsSUFESjtBQUFBLFVBQ1VSLEtBRFYsV0FDVUEsS0FEVjtBQUFBLFVBQ2lCVSxRQURqQixXQUNpQkEsUUFEakI7O0FBRVosYUFBTyxFQUFFSCxjQUFGLEVBQVVDLFVBQVYsRUFBZ0JSLFlBQWhCLEVBQXVCVSxrQkFBdkIsRUFBUDtBQUNEOzs7RUF0RWtCYSxnQkFBTUMsUzs7QUFBckJ2QixNLENBRUd3QixTLEdBQVk7QUFDakJWLFlBQVVXLG9CQUFVQyxNQURIO0FBRWpCeEIsWUFBVXVCLG9CQUFVQyxNQUZIO0FBR2pCVixlQUFhUyxvQkFBVUUsS0FITjtBQUlqQlosU0FBT1Usb0JBQVVHLElBSkE7QUFLakJ0QixVQUFRbUIsb0JBQVVJLEdBTEQ7QUFNakJuQixTQUFPZSxvQkFBVUMsTUFOQTtBQU9qQlQsWUFBVVEsb0JBQVVHLElBUEg7QUFRakJwQixXQUFTaUIsb0JBQVVFLEtBUkY7QUFTakJoQixVQUFRYyxvQkFBVUMsTUFURDtBQVVqQlIsS0FBR08sb0JBQVVDLE1BVkk7QUFXakJuQixRQUFNa0Isb0JBQVVDLE1BWEM7QUFZakIzQixTQUFPMEIsb0JBQVVDLE1BWkE7QUFhakJkLFdBQVNhLG9CQUFVRyxJQWJGO0FBY2pCbkIsWUFBVWdCLG9CQUFVRztBQWRILEM7QUFGZjVCLE0sQ0FtQkc4QixZLEdBQWU7QUFDcEJ4QixVQUFRUixVQURZO0FBRXBCZ0IsWUFBVSxJQUZVO0FBR3BCQyxTQUFPLElBSGE7QUFJcEJFLFlBQVUsSUFKVTtBQUtwQlIsWUFBVSxvQkFBTSxDQUFFO0FBTEUsQztrQkF1RFRULE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hib3ggZnJvbSAnLi4vc2VhcmNoYm94J1xuaW1wb3J0IEluZmluaXRlIGZyb20gJy4uL2luZmluaXRlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9keW5hbWljJ1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBCYXNpY1Rva2VuID0gKHsgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuXCI+XG4gICAgIHsgdmFsdWUgfVxuICA8L2Rpdj5cbilcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjYWNoZUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGNsdWRlX2lkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGVtcHR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5hbnksXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbm90Rm91bmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBwcm9tcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uUXVlcnk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hvb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb3JtYXQ6IEJhc2ljVG9rZW4sXG4gICAgY2FjaGVLZXk6IG51bGwsXG4gICAgZW1wdHk6IG51bGwsXG4gICAgbm90Rm91bmQ6IG51bGwsXG4gICAgb25DaG9vc2U6ICgpID0+IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYoIXRoaXMucHJvcHMuZW5kcG9pbnQpIHJldHVybiA8T3B0aW9ucyB7IC4uLnRoaXMuX2dldE9wdGlvbnMoKSB9ICAvPlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2gtaGVhZGVyXCI+XG4gICAgICAgICAgPFNlYXJjaGJveCB7IC4uLnRoaXMuX2dldFNlYXJjaGJveCgpIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2gtYm9keVwiPlxuICAgICAgICAgIDxJbmZpbml0ZSB7Li4udGhpcy5fZ2V0SW5maW5pdGUoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IGZvcm1hdCwgdGV4dCwgdmFsdWUsIG9wdGlvbnMsIG9uQ2hvb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHsgZm9ybWF0LCB0ZXh0LCB2YWx1ZSwgb3B0aW9ucywgb25DaG9vc2UgfVxuICB9XG5cbiAgX2dldFNlYXJjaGJveCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBwcm9tcHQsIG9uUXVlcnkgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgcHJvbXB0OiBwcm9tcHQgfHwgYEZpbmQgYSAke2xhYmVsfWAsXG4gICAgICBvbkNoYW5nZTogb25RdWVyeVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJbmZpbml0ZSgpIHtcbiAgICBjb25zdCB7IGNhY2hlS2V5LCBlbXB0eSwgZW5kcG9pbnQsIGV4Y2x1ZGVfaWRzLCBub3RGb3VuZCwgcSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZUtleSxcbiAgICAgIGVtcHR5LFxuICAgICAgZW5kcG9pbnQsXG4gICAgICBleGNsdWRlX2lkcyxcbiAgICAgIGZpbHRlcjogeyBxIH0sXG4gICAgICBsYXlvdXQ6IChwcm9wcykgPT4gPER5bmFtaWMgeyAuLi50aGlzLl9nZXREeW5hbWljKCkgfSB7IC4uLnByb3BzIH0gLz4sXG4gICAgICBub3RGb3VuZFxuICAgIH1cbiAgfVxuXG4gIF9nZXREeW5hbWljKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCB0ZXh0LCB2YWx1ZSwgb25DaG9vc2UgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4geyBmb3JtYXQsIHRleHQsIHZhbHVlLCBvbkNob29zZSB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcbiJdfQ==