'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _batch_actions = require('./batch_actions.js');

var _batch_actions2 = _interopRequireDefault(_batch_actions);

var _collection_actions = require('./collection_actions.js');

var _collection_actions2 = _interopRequireDefault(_collection_actions);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'collection-header' },
        _react2.default.createElement(
          'div',
          { className: 'ui stackable mobile vertically padded reversed grid' },
          _react2.default.createElement(
            'div',
            { className: 'four wide column' },
            function () {
              if (_this2.props.batchActions && !_lodash2.default.isEmpty(_this2.props.batchActions)) {
                return _react2.default.createElement(_batch_actions2.default, _this2.props);
              }
            }()
          ),
          _react2.default.createElement(
            'div',
            { className: 'twelve wide column right aligned', ref: 'collectionActions' },
            this.props.collectionActions ? _react2.default.createElement(_collection_actions2.default, this.props) : '',
            function () {
              if (_this2.props.views && _this2.props.views.length > 1) {
                var viewOptions = [];
                if (_lodash2.default.includes(_this2.props.views, 'table')) {
                  viewOptions.push(_react2.default.createElement(
                    'a',
                    { 'data-content': 'View as Table', className: _this2.props.view == 'table' ? 'popup icon item active' : 'popup icon item', onClick: _this2.handleView.bind(_this2, 'table') },
                    _react2.default.createElement('i', { className: 'fa fa-list icon' })
                  ));
                }
                if (_lodash2.default.includes(_this2.props.views, 'card')) {
                  viewOptions.push(_react2.default.createElement(
                    'a',
                    { 'data-content': 'View as Cards', className: _this2.props.view == 'card' ? 'popup icon item active' : 'popup icon item', onClick: _this2.handleView.bind(_this2, 'card') },
                    _react2.default.createElement('i', { className: 'fa fa-th icon' })
                  ));
                }
                return _react2.default.createElement(
                  'div',
                  { className: 'ui icon compact menu collection-header-views' },
                  viewOptions.map(function (opt) {
                    return opt;
                  })
                );
              }
            }()
          )
        )
      );
    }
  }, {
    key: 'handleView',
    value: function handleView(type) {
      this.props.onSetView(type);
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.defaultProps = {
  onSetView: _lodash2.default.noop
};
exports.default = Header;