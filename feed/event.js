'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _livetime = require('./livetime.js');

var _livetime2 = _interopRequireDefault(_livetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event() {
    _classCallCheck(this, Event);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Event).apply(this, arguments));
  }

  _createClass(Event, [{
    key: 'render',
    value: function render() {
      var description = '<a href="' + this.props.subject.link + '">' + this.props.subject.text + '</a> ' + this.props.story;
      description = this._replace(description, 'object1', this.props.object1);
      description = this._replace(description, 'object2', this.props.object2);
      return _react2.default.createElement(
        'div',
        { className: 'event' },
        _react2.default.createElement(
          'div',
          { className: 'label' },
          _react2.default.createElement('img', { src: this.props.subject.photo })
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'date' },
            _react2.default.createElement(_livetime2.default, { time: this.props.created_at }),
            ' on ',
            (0, _moment2.default)(this.props.created_at).format('dddd, MMM D, YYYY @ h:mm A')
          ),
          _react2.default.createElement('div', { className: 'summary', dangerouslySetInnerHTML: { __html: description } })
        )
      );
    }
  }, {
    key: '_replace',
    value: function _replace(description, key, object) {
      if (object) {
        var replacement = 'the ' + object.entity + ' ';
        replacement += object.link ? '<a href="' + object.link + '">' + object.text + '</a>' : object.text;
        description = description.replace('{' + key + '}', replacement);
      }
      return description;
    }
  }]);

  return Event;
}(_react2.default.Component);

Event.propTypes = {
  subject: _react2.default.PropTypes.shape({
    photo: _react2.default.PropTypes.string.isRequired,
    text: _react2.default.PropTypes.string.isRequired,
    link: _react2.default.PropTypes.string.isRequired
  }).isRequired,
  created_at: _react2.default.PropTypes.string.isRequired,
  story: _react2.default.PropTypes.string.isRequired,
  object1: _react2.default.PropTypes.shape({
    entity: _react2.default.PropTypes.string.isRequired,
    text: _react2.default.PropTypes.string.isRequired,
    link: _react2.default.PropTypes.string
  }),
  object2: _react2.default.PropTypes.shape({
    entity: _react2.default.PropTypes.string.isRequired,
    text: _react2.default.PropTypes.string.isRequired,
    link: _react2.default.PropTypes.string
  })

};
Event.defaultProps = {};
exports.default = Event;