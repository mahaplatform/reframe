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

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tasks = function (_React$Component) {
  (0, _inherits3.default)(Tasks, _React$Component);

  function Tasks() {
    (0, _classCallCheck3.default)(this, Tasks);
    return (0, _possibleConstructorReturn3.default)(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tasks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          items = _props.items,
          open = _props.open,
          title = _props.title;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tasks-overlay', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-tasks-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tasks-list', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tasks-list' },
          items && items.map(function (item, index) {
            if (item.show === false) return;
            return _react2.default.createElement(_button2.default, (0, _extends3.default)({ key: 'task_' + index }, _this2._getButton(item)));
          }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-tasks-cancel', onClick: this._handleClose.bind(this) },
            'Cancel'
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          onClear = _props2.onClear;

      if (open !== prevProps.open && !open) {
        setTimeout(onClear, 500);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        tasks: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }, {
    key: '_getButton',
    value: function _getButton(item) {
      return (0, _extends3.default)({}, item, {
        className: 'reframe-task',
        onDone: this._handleClose.bind(this)
      });
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }]);
  return Tasks;
}(_react2.default.Component);

Tasks.childContextTypes = {
  tasks: _propTypes2.default.object
};
Tasks.contextTypes = {
  drawer: _propTypes2.default.object,
  modal: _propTypes2.default.object
};
Tasks.propTypes = {
  children: _propTypes2.default.any,
  items: _propTypes2.default.array,
  title: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  onClear: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func
};
exports.default = Tasks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGFza3MiLCJwcm9wcyIsImNoaWxkcmVuIiwiaXRlbXMiLCJvcGVuIiwidGl0bGUiLCJfaGFuZGxlQ2xvc2UiLCJiaW5kIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2hvdyIsIl9nZXRCdXR0b24iLCJwcmV2UHJvcHMiLCJvbkNsZWFyIiwic2V0VGltZW91dCIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ0YXNrcyIsImNsb3NlIiwiY2xhc3NOYW1lIiwib25Eb25lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImNvbnRleHRUeXBlcyIsImRyYXdlciIsIm1vZGFsIiwicHJvcFR5cGVzIiwiYW55IiwiYXJyYXkiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7OzZCQXFCSztBQUFBOztBQUFBLG1CQUNrQyxLQUFLQyxLQUR2QztBQUFBLFVBQ0NDLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dDLEtBRFgsVUFDV0EsS0FEWDtBQUFBLFVBQ2tCQyxJQURsQixVQUNrQkEsSUFEbEI7QUFBQSxVQUN3QkMsS0FEeEIsVUFDd0JBLEtBRHhCOztBQUVQLGFBQVEsQ0FDTkgsUUFETSxFQUVOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUksdUJBQW5CLEVBQTJDLE1BQUtFLElBQWhELEVBQXVELFlBQVcsVUFBbEUsRUFBNkUsU0FBVSxHQUF2RixFQUE2RixjQUFlLElBQTVHLEVBQW1ILGVBQWdCLElBQW5JO0FBQ0UsK0NBQUssV0FBVSx1QkFBZixFQUF1QyxTQUFVLEtBQUtFLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWpEO0FBREYsT0FGTSxFQUtOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUksb0JBQW5CLEVBQXdDLE1BQUtILElBQTdDLEVBQW9ELFlBQVcsVUFBL0QsRUFBMEUsU0FBVSxHQUFwRixFQUEwRixjQUFlLElBQXpHLEVBQWdILGVBQWdCLElBQWhJO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNJRCxtQkFBU0EsTUFBTUssR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwQyxnQkFBR0QsS0FBS0UsSUFBTCxLQUFjLEtBQWpCLEVBQXdCO0FBQ3hCLG1CQUFPLDhCQUFDLGdCQUFELDJCQUFRLGVBQWFELEtBQXJCLElBQW1DLE9BQUtFLFVBQUwsQ0FBZ0JILElBQWhCLENBQW5DLEVBQVA7QUFDRCxXQUhVLENBRGI7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmLEVBQXNDLFNBQVUsS0FBS0gsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEQ7QUFBQTtBQUFBO0FBTEY7QUFERixPQUxNLENBQVI7QUFpQkQ7Ozt1Q0FFa0JNLFMsRUFBVztBQUFBLG9CQUNGLEtBQUtaLEtBREg7QUFBQSxVQUNwQkcsSUFEb0IsV0FDcEJBLElBRG9CO0FBQUEsVUFDZFUsT0FEYyxXQUNkQSxPQURjOztBQUU1QixVQUFHVixTQUFTUyxVQUFVVCxJQUFuQixJQUEyQixDQUFDQSxJQUEvQixFQUFxQztBQUNuQ1csbUJBQVdELE9BQVgsRUFBb0IsR0FBcEI7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQUEsb0JBQ1ksS0FBS2IsS0FEakI7QUFBQSxVQUNSZSxNQURRLFdBQ1JBLE1BRFE7QUFBQSxVQUNBQyxPQURBLFdBQ0FBLE9BREE7O0FBRWhCLGFBQU87QUFDTEMsZUFBTztBQUNMZCxnQkFBTVksTUFERDtBQUVMRyxpQkFBT0Y7QUFGRjtBQURGLE9BQVA7QUFNRDs7OytCQUVVUixJLEVBQUs7QUFDZCx3Q0FDS0EsSUFETDtBQUVFVyxtQkFBVyxjQUZiO0FBR0VDLGdCQUFRLEtBQUtmLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBSFY7QUFLRDs7O21DQUVjO0FBQ2IsV0FBS04sS0FBTCxDQUFXZ0IsT0FBWDtBQUNEOzs7RUFyRWlCSyxnQkFBTUMsUzs7QUFBcEJ2QixLLENBRUd3QixpQixHQUFvQjtBQUN6Qk4sU0FBT08sb0JBQVVDO0FBRFEsQztBQUZ2QjFCLEssQ0FNRzJCLFksR0FBZTtBQUNwQkMsVUFBUUgsb0JBQVVDLE1BREU7QUFFcEJHLFNBQU9KLG9CQUFVQztBQUZHLEM7QUFObEIxQixLLENBV0c4QixTLEdBQVk7QUFDakI1QixZQUFVdUIsb0JBQVVNLEdBREg7QUFFakI1QixTQUFPc0Isb0JBQVVPLEtBRkE7QUFHakIzQixTQUFPb0Isb0JBQVVRLE1BSEE7QUFJakI3QixRQUFNcUIsb0JBQVVTLElBSkM7QUFLakJwQixXQUFTVyxvQkFBVVUsSUFMRjtBQU1qQmxCLFdBQVNRLG9CQUFVVSxJQU5GO0FBT2pCbkIsVUFBUVMsb0JBQVVVO0FBUEQsQztrQkE4RE5uQyxLIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBUYXNrcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHRhc2tzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGRyYXdlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtb2RhbDogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpdGVtcywgb3BlbiwgdGl0bGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgPENTU1RyYW5zaXRpb24ga2V5PVwicmVmcmFtZS10YXNrcy1vdmVybGF5XCIgaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDI1MCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdGFza3Mtb3ZlcmxheVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpIH0gLz5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj4sXG4gICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9XCJyZWZyYW1lLXRhc2tzLWxpc3RcIiBpbj17IG9wZW4gfSBjbGFzc05hbWVzPVwiZXhwYW5kZWRcIiB0aW1lb3V0PXsgMjUwIH0gbW91bnRPbkVudGVyPXsgdHJ1ZSB9IHVubW91bnRPbkV4aXQ9eyB0cnVlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10YXNrcy1saXN0XCI+XG4gICAgICAgICAgeyBpdGVtcyAmJiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLnNob3cgPT09IGZhbHNlKSByZXR1cm5cbiAgICAgICAgICAgIHJldHVybiA8QnV0dG9uIGtleT17YHRhc2tfJHtpbmRleH1gfSB7IC4uLnRoaXMuX2dldEJ1dHRvbihpdGVtKSB9Lz5cbiAgICAgICAgICB9KSB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRhc2tzLWNhbmNlbFwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IG9wZW4sIG9uQ2xlYXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZihvcGVuICE9PSBwcmV2UHJvcHMub3BlbiAmJiAhb3Blbikge1xuICAgICAgc2V0VGltZW91dChvbkNsZWFyLCA1MDApXG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgb25PcGVuLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhc2tzOiB7XG4gICAgICAgIG9wZW46IG9uT3BlbixcbiAgICAgICAgY2xvc2U6IG9uQ2xvc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0QnV0dG9uKGl0ZW0pe1xuICAgIHJldHVybiB7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY2xhc3NOYW1lOiAncmVmcmFtZS10YXNrJyxcbiAgICAgIG9uRG9uZTogdGhpcy5faGFuZGxlQ2xvc2UuYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza3NcbiJdfQ==