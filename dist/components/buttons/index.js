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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buttons = function (_React$Component) {
  (0, _inherits3.default)(Buttons, _React$Component);

  function Buttons() {
    (0, _classCallCheck3.default)(this, Buttons);
    return (0, _possibleConstructorReturn3.default)(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  (0, _createClass3.default)(Buttons, [{
    key: 'render',
    value: function render() {
      var buttons = this.props.buttons;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-buttons' },
        buttons && buttons.map(function (button, index) {
          return _react2.default.createElement(
            'div',
            { className: 'reframe-buttons-item', key: 'button_item_' + index },
            _react2.default.createElement(_button2.default, (0, _extends3.default)({}, buttons[index], { key: 'button_' + index }))
          );
        })
      );
    }
  }]);
  return Buttons;
}(_react2.default.Component);

Buttons.propTypes = {
  buttons: _propTypes2.default.array
};
exports.default = Buttons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQnV0dG9ucyIsImJ1dHRvbnMiLCJwcm9wcyIsIm1hcCIsImJ1dHRvbiIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQU1LO0FBQUEsVUFDQ0MsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGlCQUFmO0FBQ0lBLG1CQUFXQSxRQUFRRSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsaUJBQ3ZCO0FBQUE7QUFBQSxjQUFLLFdBQVUsc0JBQWYsRUFBc0Msc0JBQW9CQSxLQUExRDtBQUNFLDBDQUFDLGdCQUFELDZCQUFhSixRQUFRSSxLQUFSLENBQWIsSUFBOEIsaUJBQWVBLEtBQTdDO0FBREYsV0FEdUI7QUFBQSxTQUFaO0FBRGYsT0FERjtBQVNEOzs7RUFqQm1CQyxnQkFBTUMsUzs7QUFBdEJQLE8sQ0FFR1EsUyxHQUFZO0FBQ2pCUCxXQUFTUSxvQkFBVUM7QUFERixDO2tCQW1CTlYsTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5cbmNsYXNzIEJ1dHRvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYnV0dG9uczogUHJvcFR5cGVzLmFycmF5XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBidXR0b25zIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1idXR0b25zXCI+XG4gICAgICAgIHsgYnV0dG9ucyAmJiBidXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1idXR0b25zLWl0ZW1cIiBrZXk9e2BidXR0b25faXRlbV8ke2luZGV4fWB9PlxuICAgICAgICAgICAgPEJ1dHRvbiB7IC4uLmJ1dHRvbnNbaW5kZXhdIH0ga2V5PXtgYnV0dG9uXyR7aW5kZXh9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uc1xuIl19