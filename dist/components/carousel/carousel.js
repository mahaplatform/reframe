'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel = function (_React$Component) {
  (0, _inherits3.default)(Carousel, _React$Component);

  function Carousel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this._swipe = {}, _this.state = {
      active: 0,
      transitioning: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          infinite = _props.infinite,
          slides = _props.slides,
          total = _props.total;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-carousel' },
        total > 0 && _react2.default.createElement(
          'div',
          this._getTheatre(),
          total > 1 && (infinite || active > 0) && _react2.default.createElement(
            'div',
            { className: 'reframe-carousel-previous', onClick: this._handlePrevious.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-carousel-slides' },
            slides.map(function (slide, index) {
              return _react2.default.createElement(
                'div',
                { key: 'slide_' + index, className: _this2._getSlideClass(index) },
                slide
              );
            })
          ),
          total > 1 && (infinite || active < total - 1) && _react2.default.createElement(
            'div',
            { className: 'reframe-carousel-next', onClick: this._handleNext.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
          )
        ),
        total > 1 && _react2.default.createElement(
          'div',
          { className: 'reframe-carousel-pagination' },
          [].concat((0, _toConsumableArray3.default)(Array(total))).map(function (i, index) {
            return _react2.default.createElement('div', { key: 'button_' + index, className: _this2._getButtonClass(index), onClick: _this2._handleGoto.bind(_this2, index) });
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          slides = _props2.slides,
          onSetTotal = _props2.onSetTotal;

      onSetTotal(slides.length);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _props3 = this.props,
          active = _props3.active,
          slides = _props3.slides,
          onSetTotal = _props3.onSetTotal;

      if (slides.length !== prevProps.slides.length) {
        onSetTotal(slides.length);
      }
      if (active != prevProps.active) {
        setTimeout(function () {
          return _this3.setState({ transitioning: true });
        }, 100);
        setTimeout(function () {
          return _this3.setState({ active: active, transitioning: false });
        }, 600);
      }
    }
  }, {
    key: '_getSlideClass',
    value: function _getSlideClass(index) {
      var curr = this.state.active;
      var next = this.props.active;
      var direction = this.props.direction;
      var transitioning = this.state.transitioning;

      var classes = ['reframe-carousel-slide'];
      var right = next !== curr && direction === 'right';
      var left = next !== curr && direction === 'left';
      if (index === curr) classes.push('active');
      if (left && index === next) classes.push('next');
      if (right && index === next) classes.push('prev');
      if (transitioning && left && (index === next || index === curr)) classes.push('left');
      if (transitioning && right && (index === next || index === curr)) classes.push('right');
      return classes.join(' ');
    }
  }, {
    key: '_getButtonClass',
    value: function _getButtonClass(index) {
      var active = this.props.active;

      var classes = ['reframe-carousel-pagination-button'];
      if (index === active) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_getTheatre',
    value: function _getTheatre() {
      return {
        className: 'reframe-carousel-theatre',
        onTouchStart: this._handleTouchStart.bind(this),
        onTouchMove: this._handleTouchMove.bind(this),
        onTouchEnd: this._handleTouchEnd.bind(this)
      };
    }
  }, {
    key: '_handlePrevious',
    value: function _handlePrevious() {
      this.props.onPrevious();
    }
  }, {
    key: '_handleNext',
    value: function _handleNext() {
      this.props.onNext();
    }
  }, {
    key: '_handleGoto',
    value: function _handleGoto(index) {
      this.props.onGoto(index);
    }
  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(e) {
      this._swipe = { x: e.touches[0].clientX };
    }
  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(e) {
      if (e.changedTouches && e.changedTouches.length) {
        this._swipe.swiping = true;
      }
    }
  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(e) {
      var touch = e.changedTouches[0];
      var dist = touch.clientX - this._swipe.x;
      if (this._swipe.swiping && Math.abs(dist) > 30) {
        if (dist > 0) this.props.onPrevious();
        if (dist < 0) this.props.onNext();
      }
      this._swipe = {};
    }
  }]);
  return Carousel;
}(_react2.default.Component);

Carousel.propTypes = {
  active: _propTypes2.default.number,
  direction: _propTypes2.default.string,
  infinite: _propTypes2.default.bool,
  slides: _propTypes2.default.array,
  total: _propTypes2.default.number,
  onSetTotal: _propTypes2.default.func,
  onGoto: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func
};
Carousel.defaultProps = {
  infinite: true,
  slides: []
};
exports.default = Carousel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJfc3dpcGUiLCJzdGF0ZSIsImFjdGl2ZSIsInRyYW5zaXRpb25pbmciLCJwcm9wcyIsImluZmluaXRlIiwic2xpZGVzIiwidG90YWwiLCJfZ2V0VGhlYXRyZSIsIl9oYW5kbGVQcmV2aW91cyIsImJpbmQiLCJtYXAiLCJzbGlkZSIsImluZGV4IiwiX2dldFNsaWRlQ2xhc3MiLCJfaGFuZGxlTmV4dCIsIkFycmF5IiwiaSIsIl9nZXRCdXR0b25DbGFzcyIsIl9oYW5kbGVHb3RvIiwib25TZXRUb3RhbCIsImxlbmd0aCIsInByZXZQcm9wcyIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsImN1cnIiLCJuZXh0IiwiZGlyZWN0aW9uIiwiY2xhc3NlcyIsInJpZ2h0IiwibGVmdCIsInB1c2giLCJqb2luIiwiY2xhc3NOYW1lIiwib25Ub3VjaFN0YXJ0IiwiX2hhbmRsZVRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIl9oYW5kbGVUb3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiX2hhbmRsZVRvdWNoRW5kIiwib25QcmV2aW91cyIsIm9uTmV4dCIsIm9uR290byIsImUiLCJ4IiwidG91Y2hlcyIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyIsInN3aXBpbmciLCJ0b3VjaCIsImRpc3QiLCJNYXRoIiwiYWJzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sIiwiYXJyYXkiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozt3TUFtQkpDLE0sR0FBUyxFLFFBRVRDLEssR0FBUTtBQUNOQyxjQUFRLENBREY7QUFFTkMscUJBQWU7QUFGVCxLOzs7Ozs2QkFLQztBQUFBOztBQUFBLG1CQUNxQyxLQUFLQyxLQUQxQztB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U0FBT2lELG9CQUFVQyxNQUxBO0FBTWpCckMsY0FBWW9DLG9CQUFVSyxJQU5MO0FBT2pCbkIsVUFBUWMsb0JBQVVLLElBUEQ7QUFRakJwQixVQUFRZSxvQkFBVUssSUFSRDtBQVNqQnJCLGNBQVlnQixvQkFBVUs7QUFUTCxDO0FBRmY5RCxRLENBY0crRCxZLEdBQWU7QUFDcEJ6RCxZQUFVLElBRFU7QUFFcEJDLFVBQVE7QUFGWSxDO2tCQWtJVFAsUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluZmluaXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNldFRvdGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkdvdG86IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTmV4dDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QcmV2aW91czogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc2xpZGVzOiBbXVxuICB9XG5cbiAgX3N3aXBlID0ge31cblxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IDAsXG4gICAgdHJhbnNpdGlvbmluZzogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgaW5maW5pdGUsIHNsaWRlcywgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNhcm91c2VsXCI+XG4gICAgICAgIHsgdG90YWwgPiAwICYmXG4gICAgICAgICAgPGRpdiB7IC4uLnRoaXMuX2dldFRoZWF0cmUoKSB9PlxuICAgICAgICAgICAgeyB0b3RhbCA+IDEgJiYgKGluZmluaXRlIHx8IGFjdGl2ZSA+IDApICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jYXJvdXNlbC1wcmV2aW91c1wiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVQcmV2aW91cy5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hldnJvbi1sZWZ0XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY2Fyb3VzZWwtc2xpZGVzXCI+XG4gICAgICAgICAgICAgIHsgc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BzbGlkZV8ke2luZGV4fWB9IGNsYXNzTmFtZT17IHRoaXMuX2dldFNsaWRlQ2xhc3MoaW5kZXgpIH0+XG4gICAgICAgICAgICAgICAgICB7IHNsaWRlIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgdG90YWwgPiAxICYmIChpbmZpbml0ZSB8fCBhY3RpdmUgPCB0b3RhbCAtIDEpICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jYXJvdXNlbC1uZXh0XCIgb25DbGljaz17IHRoaXMuX2hhbmRsZU5leHQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tcmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IHRvdGFsID4gMSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jYXJvdXNlbC1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICB7IFsuLi5BcnJheSh0b3RhbCldLm1hcCgoaSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2BidXR0b25fJHtpbmRleH1gfSBjbGFzc05hbWU9eyB0aGlzLl9nZXRCdXR0b25DbGFzcyhpbmRleCkgfSBvbkNsaWNrPXsgdGhpcy5faGFuZGxlR290by5iaW5kKHRoaXMsIGluZGV4KSB9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzbGlkZXMsIG9uU2V0VG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICBvblNldFRvdGFsKHNsaWRlcy5sZW5ndGgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIHNsaWRlcywgb25TZXRUb3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHNsaWRlcy5sZW5ndGggIT09IHByZXZQcm9wcy5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICBvblNldFRvdGFsKHNsaWRlcy5sZW5ndGgpXG4gICAgfVxuICAgIGlmKGFjdGl2ZSAhPSBwcmV2UHJvcHMuYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyB0cmFuc2l0aW9uaW5nOiB0cnVlIH0pLCAxMDApXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmUsIHRyYW5zaXRpb25pbmc6IGZhbHNlIH0pLCA2MDApXG4gICAgfVxuICB9XG5cbiAgX2dldFNsaWRlQ2xhc3MoaW5kZXgpIHtcbiAgICBjb25zdCBjdXJyID0gdGhpcy5zdGF0ZS5hY3RpdmVcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5wcm9wcy5hY3RpdmVcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdHJhbnNpdGlvbmluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtY2Fyb3VzZWwtc2xpZGUnXVxuICAgIGNvbnN0IHJpZ2h0ID0gbmV4dCAhPT0gY3VyciAmJiBkaXJlY3Rpb24gPT09ICdyaWdodCdcbiAgICBjb25zdCBsZWZ0ID0gbmV4dCAhPT0gY3VyciAmJiBkaXJlY3Rpb24gPT09ICdsZWZ0J1xuICAgIGlmKGluZGV4ID09PSBjdXJyKSBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpXG4gICAgaWYobGVmdCAmJiBpbmRleCA9PT0gbmV4dCkgY2xhc3Nlcy5wdXNoKCduZXh0JylcbiAgICBpZihyaWdodCAmJiBpbmRleCA9PT0gbmV4dCkgY2xhc3Nlcy5wdXNoKCdwcmV2JylcbiAgICBpZih0cmFuc2l0aW9uaW5nICYmIGxlZnQgJiYgKGluZGV4ID09PSBuZXh0IHx8IGluZGV4ID09PSBjdXJyKSkgY2xhc3Nlcy5wdXNoKCdsZWZ0JylcbiAgICBpZih0cmFuc2l0aW9uaW5nICYmIHJpZ2h0ICYmIChpbmRleCA9PT0gbmV4dCB8fCBpbmRleCA9PT0gY3VycikpIGNsYXNzZXMucHVzaCgncmlnaHQnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldEJ1dHRvbkNsYXNzKGluZGV4KSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLWNhcm91c2VsLXBhZ2luYXRpb24tYnV0dG9uJ11cbiAgICBpZihpbmRleCA9PT0gYWN0aXZlKSBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0VGhlYXRyZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NOYW1lOiAncmVmcmFtZS1jYXJvdXNlbC10aGVhdHJlJyxcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5faGFuZGxlVG91Y2hTdGFydC5iaW5kKHRoaXMpLFxuICAgICAgb25Ub3VjaE1vdmU6IHRoaXMuX2hhbmRsZVRvdWNoTW92ZS5iaW5kKHRoaXMpLFxuICAgICAgb25Ub3VjaEVuZDogdGhpcy5faGFuZGxlVG91Y2hFbmQuYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQcmV2aW91cygpIHtcbiAgICB0aGlzLnByb3BzLm9uUHJldmlvdXMoKVxuICB9XG5cbiAgX2hhbmRsZU5leHQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk5leHQoKVxuICB9XG5cbiAgX2hhbmRsZUdvdG8oaW5kZXgpIHtcbiAgICB0aGlzLnByb3BzLm9uR290byhpbmRleClcbiAgfVxuXG4gIF9oYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICB0aGlzLl9zd2lwZSA9IHsgeDogZS50b3VjaGVzWzBdLmNsaWVudFggfVxuICB9XG5cbiAgX2hhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N3aXBlLnN3aXBpbmcgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICBjb25zdCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICBjb25zdCBkaXN0ID0gdG91Y2guY2xpZW50WCAtIHRoaXMuX3N3aXBlLnhcbiAgICBpZiAodGhpcy5fc3dpcGUuc3dpcGluZyAmJiBNYXRoLmFicyhkaXN0KSA+IDMwICkge1xuICAgICAgaWYoZGlzdCA+IDApIHRoaXMucHJvcHMub25QcmV2aW91cygpXG4gICAgICBpZihkaXN0IDwgMCkgdGhpcy5wcm9wcy5vbk5leHQoKVxuICAgIH1cbiAgICB0aGlzLl9zd2lwZSA9IHt9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIl19