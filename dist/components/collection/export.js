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

var _sortable_list = require('../sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Export = function (_React$Component) {
  (0, _inherits3.default)(Export, _React$Component);

  function Export() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Export);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Export.__proto__ || Object.getPrototypeOf(Export)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Export, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-tasks-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-title' },
            'Export Results'
          ),
          _react2.default.createElement('div', { className: 'reframe-collection-tasks-panel-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-body' },
          _react2.default.createElement(_sortable_list2.default, this._getSortableList())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-footer' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-footer-item' },
            _react2.default.createElement(
              'div',
              { className: 'ui fluid red button', onClick: this._handleDownload.bind(this, 'csv') },
              'Download CSV'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-footer-item' },
            _react2.default.createElement(
              'div',
              { className: 'ui fluid red button', onClick: this._handleDownload.bind(this, 'xlsx') },
              'Download XLSX'
            )
          )
        )
      );
    }
  }, {
    key: '_getSortableList',
    value: function _getSortableList() {
      var _this2 = this;

      var defaultValue = this.props.defaultValue;

      return {
        defaultValue: defaultValue,
        onUpdate: function onUpdate(items) {
          return _this2.setState({ items: items });
        }
      };
    }
  }, {
    key: '_handleDownload',
    value: function _handleDownload(extension) {
      var items = this.state.items;
      var _props = this.props,
          endpoint = _props.endpoint,
          entity = _props.entity,
          filter = _props.filter,
          sort = _props.sort,
          token = _props.token;

      var query = {
        $filter: filter,
        $sort: sort,
        $select: items.filter(function (item) {
          return item.checked;
        }).reduce(function (select, item) {
          return (0, _extends4.default)({}, select, (0, _defineProperty3.default)({}, item.label, item.key));
        }, {})
      };
      var entities = (0, _pluralize2.default)(entity);
      var enclosure = encodeURIComponent('"');
      var url = endpoint + '.' + extension + '?enclosure=' + enclosure + '&filename=' + entities + '&token=' + token + '&download=true&' + _qs2.default.stringify(query);
      window.location.href = url;
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Export;
}(_react2.default.Component);

exports.default = Export;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRXhwb3J0Iiwic3RhdGUiLCJpdGVtcyIsInByb3BzIiwiX2hhbmRsZURvbmUiLCJiaW5kIiwiX2dldFNvcnRhYmxlTGlzdCIsIl9oYW5kbGVEb3dubG9hZCIsImRlZmF1bHRWYWx1ZSIsIm9uVXBkYXRlIiwic2V0U3RhdGUiLCJleHRlbnNpb24iLCJlbmRwb2ludCIsImVudGl0eSIsImZpbHRlciIsInNvcnQiLCJ0b2tlbiIsInF1ZXJ5IiwiJGZpbHRlciIsIiRzb3J0IiwiJHNlbGVjdCIsIml0ZW0iLCJjaGVja2VkIiwicmVkdWNlIiwic2VsZWN0IiwibGFiZWwiLCJrZXkiLCJlbnRpdGllcyIsImVuY2xvc3VyZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVybCIsInFzIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib25Eb25lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7b01BRUpDLEssR0FBUTtBQUNOQyxhQUFPO0FBREQsSzs7Ozs7NkJBSUM7QUFBQSxVQUNDQSxLQURELEdBQ1csS0FBS0MsS0FEaEIsQ0FDQ0QsS0FERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0NBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHVDQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSw0Q0FBZixFQUE0RCxTQUFVLEtBQUtFLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXRFO0FBQ0UsaURBQUcsV0FBVSxvQkFBYjtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZDQUFmO0FBQUE7QUFBQSxXQUpGO0FBT0UsaURBQUssV0FBVSw0Q0FBZjtBQVBGLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFDQUFmO0FBQ0Usd0NBQUMsdUJBQUQsRUFBbUIsS0FBS0MsZ0JBQUwsRUFBbkI7QUFERixTQVZGO0FBYUU7QUFBQTtBQUFBLFlBQUssV0FBVSx1Q0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNENBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxxQkFBZixFQUFxQyxTQUFVLEtBQUtDLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLEVBQWdDLEtBQWhDLENBQS9DO0FBQUE7QUFBQTtBQURGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDRDQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUscUJBQWYsRUFBcUMsU0FBVSxLQUFLRSxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixFQUFnQyxNQUFoQyxDQUEvQztBQUFBO0FBQUE7QUFERjtBQU5GO0FBYkYsT0FERjtBQTRCRDs7O3VDQUVrQjtBQUFBOztBQUFBLFVBQ1RHLFlBRFMsR0FDUSxLQUFLTCxLQURiLENBQ1RLLFlBRFM7O0FBRWpCLGFBQU87QUFDTEEsa0NBREs7QUFFTEMsa0JBQVUsa0JBQUNQLEtBQUQ7QUFBQSxpQkFBVyxPQUFLUSxRQUFMLENBQWMsRUFBRVIsWUFBRixFQUFkLENBQVg7QUFBQTtBQUZMLE9BQVA7QUFJRDs7O29DQUVlUyxTLEVBQVc7QUFBQSxVQUNqQlQsS0FEaUIsR0FDUCxLQUFLRCxLQURFLENBQ2pCQyxLQURpQjtBQUFBLG1CQUV5QixLQUFLQyxLQUY5QjtBQUFBLFVBRWpCUyxRQUZpQixVQUVqQkEsUUFGaUI7QUFBQSxVQUVQQyxNQUZPLFVBRVBBLE1BRk87QUFBQSxVQUVDQyxNQUZELFVBRUNBLE1BRkQ7QUFBQSxVQUVTQyxJQUZULFVBRVNBLElBRlQ7QUFBQSxVQUVlQyxLQUZmLFVBRWVBLEtBRmY7O0FBR3pCLFVBQU1DLFFBQVE7QUFDWkMsaUJBQVNKLE1BREc7QUFFWkssZUFBT0osSUFGSztBQUdaSyxpQkFBU2xCLE1BQU1ZLE1BQU4sQ0FBYTtBQUFBLGlCQUFRTyxLQUFLQyxPQUFiO0FBQUEsU0FBYixFQUFtQ0MsTUFBbkMsQ0FBMEMsVUFBQ0MsTUFBRCxFQUFTSCxJQUFUO0FBQUEsNENBQzlDRyxNQUQ4QyxvQ0FFaERILEtBQUtJLEtBRjJDLEVBRW5DSixLQUFLSyxHQUY4QjtBQUFBLFNBQTFDLEVBR0wsRUFISztBQUhHLE9BQWQ7QUFRQSxVQUFNQyxXQUFXLHlCQUFVZCxNQUFWLENBQWpCO0FBQ0EsVUFBTWUsWUFBWUMsbUJBQW1CLEdBQW5CLENBQWxCO0FBQ0EsVUFBTUMsTUFBU2xCLFFBQVQsU0FBcUJELFNBQXJCLG1CQUE0Q2lCLFNBQTVDLGtCQUFrRUQsUUFBbEUsZUFBb0ZYLEtBQXBGLHVCQUEyR2UsYUFBR0MsU0FBSCxDQUFhZixLQUFiLENBQWpIO0FBQ0FnQixhQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkwsR0FBdkI7QUFDRDs7O2tDQUVhO0FBQ1osV0FBSzNCLEtBQUwsQ0FBV2lDLE1BQVg7QUFDRDs7O0VBakVrQkMsZ0JBQU1DLFM7O2tCQXFFWnRDLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3J0YWJsZUxpc3QgZnJvbSAnLi4vc29ydGFibGVfbGlzdCdcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5jbGFzcyBFeHBvcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaGVhZGVyLWljb25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlRG9uZS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgRXhwb3J0IFJlc3VsdHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1oZWFkZXItaWNvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1ib2R5XCI+XG4gICAgICAgICAgPFNvcnRhYmxlTGlzdCB7IC4uLnRoaXMuX2dldFNvcnRhYmxlTGlzdCgpIH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZsdWlkIHJlZCBidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlRG93bmxvYWQuYmluZCh0aGlzLCAnY3N2JykgfT5cbiAgICAgICAgICAgICAgRG93bmxvYWQgQ1NWXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1mb290ZXItaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCByZWQgYnV0dG9uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZURvd25sb2FkLmJpbmQodGhpcywgJ3hsc3gnKSB9PlxuICAgICAgICAgICAgICBEb3dubG9hZCBYTFNYXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0U29ydGFibGVMaXN0KCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIG9uVXBkYXRlOiAoaXRlbXMpID0+IHRoaXMuc2V0U3RhdGUoeyBpdGVtcyB9KVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEb3dubG9hZChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBlbmRwb2ludCwgZW50aXR5LCBmaWx0ZXIsIHNvcnQsIHRva2VuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAkZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAkc29ydDogc29ydCxcbiAgICAgICRzZWxlY3Q6IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCkucmVkdWNlKChzZWxlY3QsIGl0ZW0pID0+ICh7XG4gICAgICAgIC4uLnNlbGVjdCxcbiAgICAgICAgW2l0ZW0ubGFiZWxdOiBpdGVtLmtleVxuICAgICAgfSksIHt9KVxuICAgIH1cbiAgICBjb25zdCBlbnRpdGllcyA9IHBsdXJhbGl6ZShlbnRpdHkpXG4gICAgY29uc3QgZW5jbG9zdXJlID0gZW5jb2RlVVJJQ29tcG9uZW50KCdcIicpXG4gICAgY29uc3QgdXJsID0gYCR7ZW5kcG9pbnR9LiR7ZXh0ZW5zaW9ufT9lbmNsb3N1cmU9JHtlbmNsb3N1cmV9JmZpbGVuYW1lPSR7ZW50aXRpZXN9JnRva2VuPSR7dG9rZW59JmRvd25sb2FkPXRydWUmJHtxcy5zdHJpbmdpZnkocXVlcnkpfWBcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICB9XG5cbiAgX2hhbmRsZURvbmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRvbmUoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0XG4iXX0=