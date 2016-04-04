'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectableTypeahead = function (_React$Component) {
  _inherits(SelectableTypeahead, _React$Component);

  function SelectableTypeahead(props) {
    _classCallCheck(this, SelectableTypeahead);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectableTypeahead).call(this, props));

    _this.defaultProps = {
      onChooseResult: _lodash2.default.noop,
      itemComponent: _core.TypeaheadDefaultResult
    };


    _this.state = {
      selectedItem: null
    };
    return _this;
  }

  _createClass(SelectableTypeahead, [{
    key: 'render',
    value: function render() {
      var selectedItem = this.state.selectedItem;

      if (selectedItem !== null) {
        return _react2.default.createElement(
          'div',
          { className: 'ui typeahead selected result' },
          _react2.default.createElement(this.props.itemComponent, { result: selectedItem, onClick: _lodash2.default.noop }),
          _react2.default.createElement(
            'div',
            { className: 'close button', onClick: this.clear.bind(this) },
            _react2.default.createElement('i', { className: 'ui large red remove circle icon' })
          )
        );
      } else {
        return _react2.default.createElement(_core2.default, _extends({ ref: 'typeahead' }, this.props, { onChooseResult: this.handleChooseResult.bind(this) }));
      }
    }
  }, {
    key: 'handleChooseResult',
    value: function handleChooseResult(result) {
      this.setState({ selectedItem: result });
      this.props.onChooseResult(result);
    }
  }, {
    key: 'clear',
    value: function clear() {
      _lodash2.default.invoke(this.refs, 'typeahead.clear');
      this.setState({ selectedItem: null });
    }
  }]);

  return SelectableTypeahead;
}(_react2.default.Component);

SelectableTypeahead.propTypes = _core2.default.propTypes;
exports.default = SelectableTypeahead;