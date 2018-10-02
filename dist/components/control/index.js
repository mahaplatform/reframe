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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _controls = require('../../controls');

var Controls = _interopRequireWildcard(_controls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standard = Object.keys(Controls).reduce(function (standard, name) {
  return (0, _extends4.default)({}, standard, (0, _defineProperty3.default)({}, name.toLowerCase(), Controls[name]));
}, {});

var Control = function (_React$Component) {
  (0, _inherits3.default)(Control, _React$Component);

  function Control() {
    (0, _classCallCheck3.default)(this, Control);
    return (0, _possibleConstructorReturn3.default)(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
  }

  (0, _createClass3.default)(Control, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-control' },
        _react2.default.createElement(this._getElement(), this.props)
      );
    }
  }, {
    key: '_getElement',
    value: function _getElement() {
      var type = this.props.type;

      return _lodash2.default.isString(type) ? _lodash2.default.get(standard, type) : type;
    }
  }]);
  return Control;
}(_react2.default.Component);

Control.defaultProps = {
  type: 'textfield',
  options: []
};
exports.default = Control;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ29udHJvbHMiLCJzdGFuZGFyZCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJDb250cm9sIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2dldEVsZW1lbnQiLCJwcm9wcyIsInR5cGUiLCJfIiwiaXNTdHJpbmciLCJnZXQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFE7Ozs7OztBQUVaLElBQU1DLFdBQVdDLE9BQU9DLElBQVAsQ0FBWUgsUUFBWixFQUFzQkksTUFBdEIsQ0FBNkIsVUFBQ0gsUUFBRCxFQUFXSSxJQUFYO0FBQUEsb0NBQ3pDSixRQUR5QyxvQ0FFM0NJLEtBQUtDLFdBQUwsRUFGMkMsRUFFdEJOLFNBQVNLLElBQVQsQ0FGc0I7QUFBQSxDQUE3QixFQUdiLEVBSGEsQ0FBakI7O0lBS01FLE87Ozs7Ozs7Ozs7NkJBT0s7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsaUJBQWY7QUFDSUMsd0JBQU1DLGFBQU4sQ0FBb0IsS0FBS0MsV0FBTCxFQUFwQixFQUF3QyxLQUFLQyxLQUE3QztBQURKLE9BREY7QUFLRDs7O2tDQUVhO0FBQUEsVUFDSkMsSUFESSxHQUNLLEtBQUtELEtBRFYsQ0FDSkMsSUFESTs7QUFFWixhQUFPQyxpQkFBRUMsUUFBRixDQUFXRixJQUFYLElBQW1CQyxpQkFBRUUsR0FBRixDQUFNZCxRQUFOLEVBQWdCVyxJQUFoQixDQUFuQixHQUEyQ0EsSUFBbEQ7QUFDRDs7O0VBbEJtQkosZ0JBQU1RLFM7O0FBQXRCVCxPLENBRUdVLFksR0FBZTtBQUNwQkwsUUFBTSxXQURjO0FBRXBCTSxXQUFTO0FBRlcsQztrQkFvQlRYLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIENvbnRyb2xzIGZyb20gJy4uLy4uL2NvbnRyb2xzJ1xuXG5jb25zdCBzdGFuZGFyZCA9IE9iamVjdC5rZXlzKENvbnRyb2xzKS5yZWR1Y2UoKHN0YW5kYXJkLCBuYW1lKSA9PiAoe1xuICAuLi5zdGFuZGFyZCxcbiAgW25hbWUudG9Mb3dlckNhc2UoKV06IENvbnRyb2xzW25hbWVdXG59KSwge30pXG5cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHRmaWVsZCcsXG4gICAgb3B0aW9uczogW11cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbnRyb2xcIj5cbiAgICAgICAgeyBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5wcm9wcykgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIF8uaXNTdHJpbmcodHlwZSkgPyBfLmdldChzdGFuZGFyZCwgdHlwZSkgOiB0eXBlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sXG4iXX0=