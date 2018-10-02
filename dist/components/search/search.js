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

var _jsonHash = require('json-hash');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
          name = _props.name,
          multiple = _props.multiple,
          options = _props.options,
          results = _props.results,
          onUpdate = _props.onUpdate;

      return { format: format, name: name, multiple: multiple, options: options, results: results, onUpdate: onUpdate };
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
          endpoint = _props3.endpoint,
          filter = _props3.filter,
          q = _props3.q,
          results = _props3.results,
          sort = _props3.sort;

      var cacheKey = (0, _jsonHash.digest)(results);
      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: (0, _extends3.default)({}, filter, {
          q: q
        }),
        layout: function layout(props) {
          return _react2.default.createElement(_dynamic2.default, (0, _extends3.default)({}, _this2._getDynamic(), props));
        },
        sort: sort
      };
    }
  }, {
    key: '_getDynamic',
    value: function _getDynamic() {
      return this.props;
    }
  }]);
  return Search;
}(_react2.default.Component);

Search.propTypes = {
  filter: _propTypes2.default.object
};
Search.defaultProps = {
  filter: {}
};
exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJlbmRwb2ludCIsIl9nZXRPcHRpb25zIiwiX2dldFNlYXJjaGJveCIsIl9nZXRJbmZpbml0ZSIsImZvcm1hdCIsIm5hbWUiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJyZXN1bHRzIiwib25VcGRhdGUiLCJsYWJlbCIsInByb21wdCIsIm9uUXVlcnkiLCJvbkNoYW5nZSIsImZpbHRlciIsInEiLCJzb3J0IiwiY2FjaGVLZXkiLCJsYXlvdXQiLCJfZ2V0RHluYW1pYyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7NkJBVUs7QUFDUCxVQUFHLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxRQUFmLEVBQXlCLE9BQU8sOEJBQUMsaUJBQUQsRUFBYyxLQUFLQyxXQUFMLEVBQWQsQ0FBUDtBQUN6QixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHVCQUFmO0FBQ0Usd0NBQUMsbUJBQUQsRUFBZ0IsS0FBS0MsYUFBTCxFQUFoQjtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBQ0Usd0NBQUMsa0JBQUQsRUFBYyxLQUFLQyxZQUFMLEVBQWQ7QUFERjtBQUpGLE9BREY7QUFVRDs7O2tDQUVhO0FBQUEsbUJBQ21ELEtBQUtKLEtBRHhEO0FBQUEsVUFDSkssTUFESSxVQUNKQSxNQURJO0FBQUEsVUFDSUMsSUFESixVQUNJQSxJQURKO0FBQUEsVUFDVUMsUUFEVixVQUNVQSxRQURWO0FBQUEsVUFDb0JDLE9BRHBCLFVBQ29CQSxPQURwQjtBQUFBLFVBQzZCQyxPQUQ3QixVQUM2QkEsT0FEN0I7QUFBQSxVQUNzQ0MsUUFEdEMsVUFDc0NBLFFBRHRDOztBQUVaLGFBQU8sRUFBRUwsY0FBRixFQUFVQyxVQUFWLEVBQWdCQyxrQkFBaEIsRUFBMEJDLGdCQUExQixFQUFtQ0MsZ0JBQW5DLEVBQTRDQyxrQkFBNUMsRUFBUDtBQUNEOzs7b0NBRWU7QUFBQSxvQkFDcUIsS0FBS1YsS0FEMUI7QUFBQSxVQUNOVyxLQURNLFdBQ05BLEtBRE07QUFBQSxVQUNDQyxNQURELFdBQ0NBLE1BREQ7QUFBQSxVQUNTQyxPQURULFdBQ1NBLE9BRFQ7O0FBRWQsYUFBTztBQUNMRCxnQkFBUUEsc0JBQW9CRCxLQUR2QjtBQUVMRyxrQkFBVUQ7QUFGTCxPQUFQO0FBSUQ7OzttQ0FFYTtBQUFBOztBQUFBLG9CQUNtQyxLQUFLYixLQUR4QztBQUFBLFVBQ0pDLFFBREksV0FDSkEsUUFESTtBQUFBLFVBQ01jLE1BRE4sV0FDTUEsTUFETjtBQUFBLFVBQ2NDLENBRGQsV0FDY0EsQ0FEZDtBQUFBLFVBQ2lCUCxPQURqQixXQUNpQkEsT0FEakI7QUFBQSxVQUMwQlEsSUFEMUIsV0FDMEJBLElBRDFCOztBQUVaLFVBQU1DLFdBQVcsc0JBQU9ULE9BQVAsQ0FBakI7QUFDQSxhQUFPO0FBQ0xTLDBCQURLO0FBRUxqQiwwQkFGSztBQUdMYywyQ0FDS0EsTUFETDtBQUVFQztBQUZGLFVBSEs7QUFPTEcsZ0JBQVEsZ0JBQUNuQixLQUFEO0FBQUEsaUJBQVcsOEJBQUMsaUJBQUQsNkJBQWMsT0FBS29CLFdBQUwsRUFBZCxFQUF3Q3BCLEtBQXhDLEVBQVg7QUFBQSxTQVBIO0FBUUxpQjtBQVJLLE9BQVA7QUFVRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLakIsS0FBWjtBQUNEOzs7RUF0RGtCcUIsZ0JBQU1DLFM7O0FBQXJCdkIsTSxDQUVHd0IsUyxHQUFZO0FBQ2pCUixVQUFRUyxvQkFBVUM7QUFERCxDO0FBRmYxQixNLENBTUcyQixZLEdBQWU7QUFDcEJYLFVBQVE7QUFEWSxDO2tCQW9EVGhCLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hib3ggZnJvbSAnLi4vc2VhcmNoYm94J1xuaW1wb3J0IEluZmluaXRlIGZyb20gJy4uL2luZmluaXRlJ1xuaW1wb3J0IHsgZGlnZXN0IH0gZnJvbSAnanNvbi1oYXNoJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9keW5hbWljJ1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZpbHRlcjoge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZighdGhpcy5wcm9wcy5lbmRwb2ludCkgcmV0dXJuIDxPcHRpb25zIHsgLi4udGhpcy5fZ2V0T3B0aW9ucygpIH0gIC8+XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaC1oZWFkZXJcIj5cbiAgICAgICAgICA8U2VhcmNoYm94IHsgLi4udGhpcy5fZ2V0U2VhcmNoYm94KCkgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaC1ib2R5XCI+XG4gICAgICAgICAgPEluZmluaXRlIHsuLi50aGlzLl9nZXRJbmZpbml0ZSgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCBuYW1lLCBtdWx0aXBsZSwgb3B0aW9ucywgcmVzdWx0cywgb25VcGRhdGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4geyBmb3JtYXQsIG5hbWUsIG11bHRpcGxlLCBvcHRpb25zLCByZXN1bHRzLCBvblVwZGF0ZSB9XG4gIH1cblxuICBfZ2V0U2VhcmNoYm94KCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHByb21wdCwgb25RdWVyeSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBwcm9tcHQ6IHByb21wdCB8fCBgRmluZCBhICR7bGFiZWx9YCxcbiAgICAgIG9uQ2hhbmdlOiBvblF1ZXJ5XG4gICAgfVxuICB9XG5cbiAgX2dldEluZmluaXRlKCl7XG4gICAgY29uc3QgeyBlbmRwb2ludCwgZmlsdGVyLCBxLCByZXN1bHRzLCBzb3J0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2FjaGVLZXkgPSBkaWdlc3QocmVzdWx0cylcbiAgICByZXR1cm4ge1xuICAgICAgY2FjaGVLZXksXG4gICAgICBlbmRwb2ludCxcbiAgICAgIGZpbHRlcjoge1xuICAgICAgICAuLi5maWx0ZXIsXG4gICAgICAgIHFcbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IChwcm9wcykgPT4gPER5bmFtaWMgeyAuLi50aGlzLl9nZXREeW5hbWljKCkgfSB7IC4uLnByb3BzIH0gLz4sXG4gICAgICBzb3J0XG4gICAgfVxuICB9XG5cbiAgX2dldER5bmFtaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxuIl19