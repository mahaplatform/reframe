'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this._swipe = {}, _this.state = {
      active: 0,
      transitioning: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Carousel, [{
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
          [].concat(_toConsumableArray(Array(total))).map(function (i, index) {
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
  infinite: _propTypes2.default.string,
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