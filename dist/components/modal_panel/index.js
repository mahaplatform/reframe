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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPanel = function (_React$Component) {
  (0, _inherits3.default)(ModalPanel, _React$Component);

  function ModalPanel() {
    (0, _classCallCheck3.default)(this, ModalPanel);
    return (0, _possibleConstructorReturn3.default)(this, (ModalPanel.__proto__ || Object.getPrototypeOf(ModalPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          leftItems = _props.leftItems,
          position = _props.position,
          rightItems = _props.rightItems,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        position === 'top' && _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          leftItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation' },
            leftItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'left_' + index, className: 'reframe-modal-panel-header-navigation-item', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            title
          ),
          rightItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation' },
            rightItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'right_' + index, className: 'reframe-modal-panel-header-navigation-item', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
          this.props.children
        ),
        position === 'bottom' && _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-footer' },
          leftItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-footer-navigation' },
            leftItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'left_' + index, className: 'ui button', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          ),
          rightItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-footer-navigation' },
            rightItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'right_' + index, className: 'ui red button', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          )
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var className = this.props.className;

      var classes = ['reframe-modal-panel'];
      if (className) classes.push(className);
      return classes.join(' ');
    }
  }, {
    key: '_getElement',
    value: function _getElement(item) {
      if (item.component) return _lodash2.default.isFunction(item.component) ? _react2.default.createElement(item.component) : item.component;
      if (item.icon) return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel-header-navigation-button' },
        _react2.default.createElement('i', { className: 'fa fa-fw fa-' + item.icon })
      );
      if (item.label) return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel-header-navigation-button' },
        _react2.default.createElement(
          'span',
          null,
          item.label
        )
      );
    }
  }, {
    key: '_getLeftClass',
    value: function _getLeftClass() {
      var leftEnabled = this.props.leftEnabled;

      var classes = ['reframe-modal-panel-header-navigation'];
      if (!leftEnabled) classes.push('disabled');
      return classes.join(' ');
    }
  }, {
    key: '_getRightClass',
    value: function _getRightClass() {
      var rightEnabled = this.props.rightEnabled;

      var classes = ['reframe-modal-panel-header-navigation'];
      if (!rightEnabled) classes.push('disabled');
      return classes.join(' ');
    }
  }]);
  return ModalPanel;
}(_react2.default.Component);

ModalPanel.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  leftItems: _propTypes2.default.array,
  rightItems: _propTypes2.default.array,
  position: _propTypes2.default.string,
  title: _propTypes2.default.string
};
ModalPanel.defaultProps = {
  position: 'top'
};
exports.default = ModalPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTW9kYWxQYW5lbCIsInByb3BzIiwibGVmdEl0ZW1zIiwicG9zaXRpb24iLCJyaWdodEl0ZW1zIiwidGl0bGUiLCJfZ2V0Q2xhc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJoYW5kbGVyIiwiX2dldEVsZW1lbnQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsImNvbXBvbmVudCIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaWNvbiIsImxhYmVsIiwibGVmdEVuYWJsZWQiLCJyaWdodEVuYWJsZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciLCJhcnJheSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7NkJBZUs7QUFBQTs7QUFBQSxtQkFDNEMsS0FBS0MsS0FEakQ7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxRQURaLFVBQ1lBLFFBRFo7QUFBQSxVQUNzQkMsVUFEdEIsVUFDc0JBLFVBRHRCO0FBQUEsVUFDa0NDLEtBRGxDLFVBQ2tDQSxLQURsQzs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBS0MsU0FBTCxFQUFqQjtBQUNJSCxxQkFBYSxLQUFiLElBQ0E7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNJRCx1QkFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLHVDQUFmO0FBQ0lBLHNCQUFVSyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEscUJBQ2Q7QUFBQTtBQUFBLGtCQUFLLGVBQWFBLEtBQWxCLEVBQTJCLFdBQVUsNENBQXJDLEVBQWtGLFNBQVVELEtBQUtFLE9BQWpHO0FBQ0ksdUJBQUtDLFdBQUwsQ0FBaUJILElB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QixVLENBRUcyQixTLEdBQVk7QUFDakJmLFlBQVVnQixvQkFBVUMsR0FESDtBQUVqQmhCLGFBQVdlLG9CQUFVRSxNQUZKO0FBR2pCNUIsYUFBVzBCLG9CQUFVRyxLQUhKO0FBSWpCM0IsY0FBWXdCLG9CQUFVRyxLQUpMO0FBS2pCNUIsWUFBVXlCLG9CQUFVRSxNQUxIO0FBTWpCekIsU0FBT3VCLG9CQUFVRTtBQU5BLEM7QUFGZjlCLFUsQ0FXR2dDLFksR0FBZTtBQUNwQjdCLFlBQVU7QUFEVSxDO2tCQTJGVEgsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBNb2RhbFBhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsZWZ0SXRlbXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByaWdodEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICd0b3AnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsZWZ0SXRlbXMsIHBvc2l0aW9uLCByaWdodEl0ZW1zLCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzKCkgfT5cbiAgICAgICAgeyBwb3NpdGlvbiA9PT0gJ3RvcCcgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyXCI+XG4gICAgICAgICAgICB7IGxlZnRJdGVtcyAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICB7IGxlZnRJdGVtcy5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgbGVmdF8ke2luZGV4fWB9IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLW5hdmlnYXRpb24taXRlbVwiIG9uQ2xpY2s9eyBpdGVtLmhhbmRsZXIgfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLl9nZXRFbGVtZW50KGl0ZW0pIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IHJpZ2h0SXRlbXMgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLW1vZGFsLXBhbmVsLWhlYWRlci1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgeyByaWdodEl0ZW1zLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ByaWdodF8ke2luZGV4fWB9IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLW5hdmlnYXRpb24taXRlbVwiIG9uQ2xpY2s9eyBpdGVtLmhhbmRsZXIgfT5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5fZ2V0RWxlbWVudChpdGVtKSB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1tb2RhbC1wYW5lbC1ib2R5XCI+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgcG9zaXRpb24gPT09ICdib3R0b20nICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLW1vZGFsLXBhbmVsLWZvb3RlclwiPlxuICAgICAgICAgICAgeyBsZWZ0SXRlbXMgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLW1vZGFsLXBhbmVsLWZvb3Rlci1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgeyBsZWZ0SXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGxlZnRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiBvbkNsaWNrPXsgaXRlbS5oYW5kbGVyIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5fZ2V0RWxlbWVudChpdGVtKSB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyByaWdodEl0ZW1zICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1tb2RhbC1wYW5lbC1mb290ZXItbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgIHsgcmlnaHRJdGVtcy5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgcmlnaHRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJ1aSByZWQgYnV0dG9uXCIgb25DbGljaz17IGl0ZW0uaGFuZGxlciB9PlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuX2dldEVsZW1lbnQoaXRlbSkgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldENsYXNzKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2xhc3NlcyA9IFsncmVmcmFtZS1tb2RhbC1wYW5lbCddXG4gICAgaWYoY2xhc3NOYW1lKSBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldEVsZW1lbnQoaXRlbSkge1xuICAgIGlmKGl0ZW0uY29tcG9uZW50KSByZXR1cm4gXy5pc0Z1bmN0aW9uKGl0ZW0uY29tcG9uZW50KSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaXRlbS5jb21wb25lbnQpIDogaXRlbS5jb21wb25lbnRcbiAgICBpZihpdGVtLmljb24pIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLW5hdmlnYXRpb24tYnV0dG9uXCI+PGkgY2xhc3NOYW1lPXsgYGZhIGZhLWZ3IGZhLSR7aXRlbS5pY29ufWAgfSAvPjwvZGl2PlxuICAgIGlmKGl0ZW0ubGFiZWwpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtcGFuZWwtaGVhZGVyLW5hdmlnYXRpb24tYnV0dG9uXCI+PHNwYW4+eyBpdGVtLmxhYmVsIH08L3NwYW4+PC9kaXY+XG4gIH1cblxuICBfZ2V0TGVmdENsYXNzKCkge1xuICAgIGNvbnN0IHsgbGVmdEVuYWJsZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLW1vZGFsLXBhbmVsLWhlYWRlci1uYXZpZ2F0aW9uJ11cbiAgICBpZighbGVmdEVuYWJsZWQpIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldFJpZ2h0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyByaWdodEVuYWJsZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLW1vZGFsLXBhbmVsLWhlYWRlci1uYXZpZ2F0aW9uJ11cbiAgICBpZighcmlnaHRFbmFibGVkKSBjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJylcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsUGFuZWxcbiJdfQ==