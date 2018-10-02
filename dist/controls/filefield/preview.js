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

var _image_file_token = require('./image_file_token');

var _image_file_token2 = _interopRequireDefault(_image_file_token);

var _plain_file_token = require('./plain_file_token');

var _plain_file_token2 = _interopRequireDefault(_plain_file_token);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = function (_React$Component) {
  (0, _inherits3.default)(Preview, _React$Component);

  function Preview() {
    (0, _classCallCheck3.default)(this, Preview);
    return (0, _possibleConstructorReturn3.default)(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
  }

  (0, _createClass3.default)(Preview, [{
    key: 'render',
    value: function render() {

      var dpis = [1, 2];

      var file = this.props.file;


      var content_type = file.contentType || file.asset.content_type;

      var isImage = content_type.split('/')[0] === 'image';

      var type = isImage ? 'image' : 'plain';

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filefield-token ' + type },
        file.status === 'added' && _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-progress' },
          _react2.default.createElement(
            'div',
            { className: 'ui green progress' },
            _react2.default.createElement('div', { className: 'bar', style: { width: 0 } })
          )
        ),
        file.status === 'uploading' && _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-progress' },
          _react2.default.createElement(
            'div',
            { className: 'ui green progress' },
            _react2.default.createElement(
              'div',
              { className: 'bar', style: { width: file.progress + '%' } },
              _react2.default.createElement(
                'div',
                { className: 'progress' },
                file.progress,
                '%'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-remove', onClick: this._handleRemove.bind(this) },
          isImage ? _react2.default.createElement('i', { className: 'fa fa-fw fa-times-circle' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-times' })
        ),
        isImage ? _react2.default.createElement(_image_file_token2.default, this._getImageFile()) : _react2.default.createElement(_plain_file_token2.default, this._getPlainFile())
      );
    }
  }, {
    key: '_getImageFile',
    value: function _getImageFile() {
      var _props = this.props,
          file = _props.file,
          preview = _props.preview;

      return {
        file: file.asset,
        preview: preview
      };
    }
  }, {
    key: '_getPlainFile',
    value: function _getPlainFile() {
      var file = this.props.file;

      var file_name = file.fileName || file.asset.file_name;
      var file_size = file.fileSize || file.asset.file_size;
      return {
        file_name: file_name,
        file_size: file_size
      };
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove() {
      this.props.onRemove();
    }
  }]);
  return Preview;
}(_react2.default.Component);

Preview.propTypes = {
  file: _propTypes2.default.object,
  preview: _propTypes2.default.string,
  onRemove: _propTypes2.default.func
};
exports.default = Preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUHJldmlldyIsImRwaXMiLCJmaWxlIiwicHJvcHMiLCJjb250ZW50X3R5cGUiLCJjb250ZW50VHlwZSIsImFzc2V0IiwiaXNJbWFnZSIsInNwbGl0IiwidHlwZSIsInN0YXR1cyIsIndpZHRoIiwicHJvZ3Jlc3MiLCJfaGFuZGxlUmVtb3ZlIiwiYmluZCIsIl9nZXRJbWFnZUZpbGUiLCJfZ2V0UGxhaW5GaWxlIiwicHJldmlldyIsImZpbGVfbmFtZSIsImZpbGVOYW1lIiwiZmlsZV9zaXplIiwiZmlsZVNpemUiLCJvblJlbW92ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQVFLOztBQUVQLFVBQU1DLE9BQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFiOztBQUZPLFVBSUNDLElBSkQsR0FJVSxLQUFLQyxLQUpmLENBSUNELElBSkQ7OztBQU1QLFVBQU1FLGVBQWVGLEtBQUtHLFdBQUwsSUFBb0JILEtBQUtJLEtBQUwsQ0FBV0YsWUFBcEQ7O0FBRUEsVUFBTUcsVUFBV0gsYUFBYUksS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixPQUFoRDs7QUFFQSxVQUFNQyxPQUFPRixVQUFVLE9BQVYsR0FBb0IsT0FBakM7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyx3Q0FBc0NFLElBQTNDO0FBQ0lQLGFBQUtRLE1BQUwsS0FBZ0IsT0FBaEIsSUFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUNFLG1EQUFLLFdBQVUsS0FBZixFQUFxQixPQUFPLEVBQUVDLE9BQU8sQ0FBVCxFQUE1QjtBQURGO0FBREYsU0FGSjtBQVFJVCxhQUFLUSxNQUFMLEtBQWdCLFdBQWhCLElBQ0E7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmLEVBQXFCLE9BQU8sRUFBRUMsT0FBVVQsS0FBS1UsUUFBZixNQUFGLEVBQTVCO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsVUFBZjtBQUE0QlYscUJBQUtVLFFBQWpDO0FBQUE7QUFBQTtBQURGO0FBREY7QUFERixTQVRKO0FBaUJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMEJBQWYsRUFBMEMsU0FBVSxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFwRDtBQUNJUCxvQkFBVSxxQ0FBRyxXQUFVLDBCQUFiLEdBQVYsR0FBdUQscUNBQUcsV0FBVSxtQkFBYjtBQUQzRCxTQWpCRjtBQW9CSUEsa0JBQVUsOEJBQUMsMEJBQUQsRUFBcUIsS0FBS1EsYUFBTCxFQUFyQixDQUFWLEdBQTJELDhCQUFDLDBCQUFELEVBQXFCLEtBQUtDLGFBQUwsRUFBckI7QUFwQi9ELE9BREY7QUF3QkQ7OztvQ0FFZTtBQUFBLG1CQUNZLEtBQUtiLEtBRGpCO0FBQUEsVUFDTkQsSUFETSxVQUNOQSxJQURNO0FBQUEsVUFDQWUsT0FEQSxVQUNBQSxPQURBOztBQUVkLGFBQU87QUFDTGYsY0FBTUEsS0FBS0ksS0FETjtBQUVMVztBQUZLLE9BQVA7QUFJRDs7O29DQUVlO0FBQUEsVUFDTmYsSUFETSxHQUNHLEtBQUtDLEtBRFIsQ0FDTkQsSUFETTs7QUFFZCxVQUFNZ0IsWUFBWWhCLEtBQUtpQixRQUFMLElBQWlCakIsS0FBS0ksS0FBTCxDQUFXWSxTQUE5QztBQUNBLFVBQU1FLFlBQVlsQixLQUFLbUIsUUFBTCxJQUFpQm5CLEtBQUtJLEtBQUwsQ0FBV2MsU0FBOUM7QUFDQSxhQUFPO0FBQ0xGLDRCQURLO0FBRUxFO0FBRkssT0FBUDtBQUlEOzs7b0NBRWU7QUFDZCxXQUFLakIsS0FBTCxDQUFXbUIsUUFBWDtBQUNEOzs7RUFsRW1CQyxnQkFBTUMsUzs7QUFBdEJ4QixPLENBRUd5QixTLEdBQVk7QUFDakJ2QixRQUFNd0Isb0JBQVVDLE1BREM7QUFFakJWLFdBQVNTLG9CQUFVRSxNQUZGO0FBR2pCTixZQUFVSSxvQkFBVUc7QUFISCxDO2tCQW9FTjdCLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZUZpbGVUb2tlbiBmcm9tICcuL2ltYWdlX2ZpbGVfdG9rZW4nXG5pbXBvcnQgUGxhaW5GaWxlVG9rZW4gZnJvbSAnLi9wbGFpbl9maWxlX3Rva2VuJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5jbGFzcyBQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHJldmlldzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGRwaXMgPSBbMSwyXVxuXG4gICAgY29uc3QgeyBmaWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBjb250ZW50X3R5cGUgPSBmaWxlLmNvbnRlbnRUeXBlIHx8IGZpbGUuYXNzZXQuY29udGVudF90eXBlXG5cbiAgICBjb25zdCBpc0ltYWdlID0gKGNvbnRlbnRfdHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKVxuXG4gICAgY29uc3QgdHlwZSA9IGlzSW1hZ2UgPyAnaW1hZ2UnIDogJ3BsYWluJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVmcmFtZS1maWxlZmllbGQtdG9rZW4gJHt0eXBlfWB9PlxuICAgICAgICB7IGZpbGUuc3RhdHVzID09PSAnYWRkZWQnICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbGVmaWVsZC1wcm9ncmVzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBncmVlbiBwcm9ncmVzc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIHN0eWxlPXt7IHdpZHRoOiAwIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJyAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWxlZmllbGQtcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZ3JlZW4gcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIiBzdHlsZT17eyB3aWR0aDogYCR7ZmlsZS5wcm9ncmVzc30lYH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj57IGZpbGUucHJvZ3Jlc3MgfSU8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsZWZpZWxkLXJlbW92ZVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVSZW1vdmUuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIHsgaXNJbWFnZSA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLXRpbWVzLWNpcmNsZVwiIC8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtdGltZXNcIiAvPiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IGlzSW1hZ2UgPyA8SW1hZ2VGaWxlVG9rZW4geyAuLi50aGlzLl9nZXRJbWFnZUZpbGUoKSB9IC8+IDogPFBsYWluRmlsZVRva2VuIHsgLi4udGhpcy5fZ2V0UGxhaW5GaWxlKCkgfSAvPiB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0SW1hZ2VGaWxlKCkge1xuICAgIGNvbnN0IHsgZmlsZSwgcHJldmlldyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlOiBmaWxlLmFzc2V0LFxuICAgICAgcHJldmlld1xuICAgIH1cbiAgfVxuXG4gIF9nZXRQbGFpbkZpbGUoKSB7XG4gICAgY29uc3QgeyBmaWxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZmlsZV9uYW1lID0gZmlsZS5maWxlTmFtZSB8fCBmaWxlLmFzc2V0LmZpbGVfbmFtZVxuICAgIGNvbnN0IGZpbGVfc2l6ZSA9IGZpbGUuZmlsZVNpemUgfHwgZmlsZS5hc3NldC5maWxlX3NpemVcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZV9uYW1lLFxuICAgICAgZmlsZV9zaXplXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVJlbW92ZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdcbiJdfQ==