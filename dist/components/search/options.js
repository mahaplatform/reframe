'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Options = function (_React$Component) {
  (0, _inherits3.default)(Options, _React$Component);

  function Options() {
    (0, _classCallCheck3.default)(this, Options);
    return (0, _possibleConstructorReturn3.default)(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  (0, _createClass3.default)(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          options = _props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'filter_' + index, className: 'reframe-search-item', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(
              'div',
              { className: _this2._getClasses() },
              _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option.record, { format: format, value: option.text }))
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _this2._getChecked(option) ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check' }) : null
            )
          );
        })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var classes = ['reframe-search-item-label'];
      if (!this.props.format) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_getChecked',
    value: function _getChecked(option) {
      var _props2 = this.props,
          name = _props2.name,
          multiple = _props2.multiple,
          results = _props2.results;

      if (multiple) return results[name] && _lodash2.default.find(results[name], { key: option.value });
      return results[name] && results[name].key == option.value;
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(option) {
      var value = option.value,
          text = option.text,
          token = option.token;
      var _props3 = this.props,
          name = _props3.name,
          multiple = _props3.multiple,
          results = _props3.results,
          onUpdate = _props3.onUpdate;

      var values = null;
      if (multiple) {
        values = results[name] || [];
        values = _lodash2.default.find(values, { key: value }) ? _lodash2.default.filter(values, function (item) {
          return item.key !== value;
        }) : [].concat((0, _toConsumableArray3.default)(values), [{ key: value, value: token || text }]);
      } else if (!results[name] || results[name].key !== value) {
        values = { key: value, value: token || text };
      }
      onUpdate(name, values);
    }
  }]);
  return Options;
}(_react2.default.Component);

exports.default = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiT3B0aW9ucyIsInByb3BzIiwiZm9ybWF0Iiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiX2hhbmRsZUNob29zZSIsImJpbmQiLCJfZ2V0Q2xhc3NlcyIsInJlY29yZCIsInRleHQiLCJfZ2V0Q2hlY2tlZCIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsIm5hbWUiLCJtdWx0aXBsZSIsInJlc3VsdHMiLCJfIiwiZmluZCIsImtleSIsInZhbHVlIiwidG9rZW4iLCJvblVwZGF0ZSIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs2QkFFSztBQUFBOztBQUFBLG1CQUNxQixLQUFLQyxLQUQxQjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLE9BRFQsVUFDU0EsT0FEVDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDSUEsZ0JBQVFDLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxpQkFDWjtBQUFBO0FBQUEsY0FBSyxpQkFBZUEsS0FBcEIsRUFBNkIsV0FBVSxxQkFBdkMsRUFBNkQsU0FBVSxPQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixNQUF4QixFQUE4QkgsTUFBOUIsQ0FBdkU7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBWSxPQUFLSSxXQUFMLEVBQWpCO0FBQ0UsNENBQUMsZ0JBQUQsNkJBQWFKLE9BQU9LLE1BQXBCLElBQTZCLFFBQVNSLE1BQXRDLEVBQStDLE9BQVFHLE9BQU9NLElBQTlEO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0kscUJBQUtDLFdBQUwsQ0FBaUJQLE1BQWpCLElBQTJCLHFDQUFHLFdBQVUsbUJBQWIsR0FBM0IsR0FBaUU7QUFEckU7QUFKRixXQURZO0FBQUEsU0FBWjtBQURKLE9BREY7QUFjRDs7O2tDQUVhO0FBQ1osVUFBTVEsVUFBVSxDQUFDLDJCQUFELENBQWhCO0FBQ0EsVUFBRyxDQUFDLEtBQUtaLEtBQUwsQ0FBV0MsTUFBZixFQUF1QlcsUUFBUUMsSUFBUixDQUFhLFFBQWI7QUFDdkIsYUFBT0QsUUFBUUUsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNEOzs7Z0NBRVdWLE0sRUFBUTtBQUFBLG9CQUNrQixLQUFLSixLQUR2QjtBQUFBLFVBQ1ZlLElBRFUsV0FDVkEsSUFEVTtBQUFBLFVBQ0pDLFFBREksV0FDSkEsUUFESTtBQUFBLFVBQ01DLE9BRE4sV0FDTUEsT0FETjs7QUFFbEIsVUFBR0QsUUFBSCxFQUFhLE9BQU9DLFFBQVFGLElBQVIsS0FBaUJHLGlCQUFFQyxJQUFGLENBQU9GLFFBQVFGLElBQVIsQ0FBUCxFQUFzQixFQUFFSyxLQUFLaEIsT0FBT2lCLEtBQWQsRUFBdEIsQ0FBeEI7QUFDYixhQUFPSixRQUFRRixJQUFSLEtBQWlCRSxRQUFRRixJQUFSLEVBQWNLLEdBQWQsSUFBcUJoQixPQUFPaUIsS0FBcEQ7QUFDRDs7O2tDQUVhakIsTSxFQUFRO0FBQUEsVUFDWmlCLEtBRFksR0FDV2pCLE1BRFgsQ0FDWmlCLEtBRFk7QUFBQSxVQUNMWCxJQURLLEdBQ1dOLE1BRFgsQ0FDTE0sSUFESztBQUFBLFVBQ0NZLEtBREQsR0FDV2xCLE1BRFgsQ0FDQ2tCLEtBREQ7QUFBQSxvQkFFMEIsS0FBS3RCLEtBRi9CO0FBQUEsVUFFWmUsSUFGWSxXQUVaQSxJQUZZO0FBQUEsVUFFTkMsUUFGTSxXQUVOQSxRQUZNO0FBQUEsVUFFSUMsT0FGSixXQUVJQSxPQUZKO0FBQUEsVUFFYU0sUUFGYixXQUVhQSxRQUZiOztBQUdwQixVQUFJQyxTQUFTLElBQWI7QUFDQSxVQUFHUixRQUFILEVBQWE7QUFDWFEsaUJBQVNQLFFBQVFGLElBQVIsS0FBaUIsRUFBMUI7QUFDQVMsaUJBQVNOLGlCQUFFQyxJQUFGLENBQU9LLE1BQVAsRUFBZSxFQUFFSixLQUFLQyxLQUFQLEVBQWYsSUFBaUNILGlCQUFFTyxNQUFGLENBQVNELE1BQVQsRUFBaUI7QUFBQSxpQkFBU0UsS0FBS04sR0FBTCxLQUFhQyxLQUF0QjtBQUFBLFNBQWpCLENBQWpDLDhDQUF1RkcsTUFBdkYsSUFBK0YsRUFBRUosS0FBS0MsS0FBUCxFQUFjQSxPQUFPQyxTQUFTWixJQUE5QixFQUEvRixFQUFUO0FBQ0QsT0FIRCxNQUdPLElBQUcsQ0FBQ08sUUFBUUYsSUFBUixDQUFELElBQWtCRSxRQUFRRixJQUFSLEVBQWNLLEdBQWQsS0FBc0JDLEtBQTNDLEVBQWtEO0FBQ3ZERyxpQkFBUyxFQUFFSixLQUFLQyxLQUFQLEVBQWNBLE9BQU9DLFNBQVNaLElBQTlCLEVBQVQ7QUFDRDtBQUNEYSxlQUFTUixJQUFULEVBQWVTLE1BQWY7QUFDRDs7O0VBM0NtQkcsZ0JBQU1DLFM7O2tCQStDYjdCLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBGb3JtYXQgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuXG5jbGFzcyBPcHRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1hdCwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoLXJlc3VsdHNcIj5cbiAgICAgICAgeyBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtgZmlsdGVyXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2gtaXRlbVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDaG9vc2UuYmluZCh0aGlzLCBvcHRpb24pIH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzZXMoKSB9PlxuICAgICAgICAgICAgICA8Rm9ybWF0IHsgLi4ub3B0aW9uLnJlY29yZCB9IGZvcm1hdD17IGZvcm1hdCB9IHZhbHVlPXsgb3B0aW9uLnRleHQgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoLWl0ZW0taWNvblwiPlxuICAgICAgICAgICAgICB7IHRoaXMuX2dldENoZWNrZWQob3B0aW9uKSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZWNrXCIgLz4gOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0Q2xhc3NlcygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLXNlYXJjaC1pdGVtLWxhYmVsJ11cbiAgICBpZighdGhpcy5wcm9wcy5mb3JtYXQpIGNsYXNzZXMucHVzaCgncGFkZGVkJylcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG4gIF9nZXRDaGVja2VkKG9wdGlvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgbXVsdGlwbGUsIHJlc3VsdHMgfSA9IHRoaXMucHJvcHNcbiAgICBpZihtdWx0aXBsZSkgcmV0dXJuIHJlc3VsdHNbbmFtZV0gJiYgXy5maW5kKHJlc3VsdHNbbmFtZV0sIHsga2V5OiBvcHRpb24udmFsdWUgfSlcbiAgICByZXR1cm4gcmVzdWx0c1tuYW1lXSAmJiByZXN1bHRzW25hbWVdLmtleSA9PSBvcHRpb24udmFsdWVcbiAgfVxuXG4gIF9oYW5kbGVDaG9vc2Uob3B0aW9uKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgdGV4dCwgdG9rZW4gfSA9IG9wdGlvblxuICAgIGNvbnN0IHsgbmFtZSwgbXVsdGlwbGUsIHJlc3VsdHMsIG9uVXBkYXRlIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHZhbHVlcyA9IG51bGxcbiAgICBpZihtdWx0aXBsZSkge1xuICAgICAgdmFsdWVzID0gcmVzdWx0c1tuYW1lXSB8fCBbXVxuICAgICAgdmFsdWVzID0gXy5maW5kKHZhbHVlcywgeyBrZXk6IHZhbHVlIH0pID8gXy5maWx0ZXIodmFsdWVzLCBpdGVtID0+IChpdGVtLmtleSAhPT0gdmFsdWUpKSA6IFsgLi4udmFsdWVzLCB7IGtleTogdmFsdWUsIHZhbHVlOiB0b2tlbiB8fCB0ZXh0IH0gXVxuICAgIH0gZWxzZSBpZighcmVzdWx0c1tuYW1lXSB8fCByZXN1bHRzW25hbWVdLmtleSAhPT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlcyA9IHsga2V5OiB2YWx1ZSwgdmFsdWU6IHRva2VuIHx8IHRleHQgfVxuICAgIH1cbiAgICBvblVwZGF0ZShuYW1lLCB2YWx1ZXMpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zXG4iXX0=