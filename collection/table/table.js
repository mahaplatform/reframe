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

var _thead = require('./thead.js');

var _thead2 = _interopRequireDefault(_thead);

var _tbody = require('./tbody.js');

var _tbody2 = _interopRequireDefault(_tbody);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

    _this.state = {
      columnWidths: null // Start with them as unknown
    };
    _this.listeners = [];
    return _this;
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ui basic section collection-table' },
        _react2.default.createElement(
          'table',
          { className: 'ui unstackable compact striped table sortable', 'data-reframe-table-id': this.props.id },
          _react2.default.createElement(_thead2.default, _extends({}, this.props, this.state, { columnWidths: this.sampleColumnWidths() })),
          this.props.sticky ? _react2.default.createElement(_thead2.default, _extends({ surrogate: true }, this.props, this.state, { columnWidths: this.sampleColumnWidths() })) : null,
          _react2.default.createElement(_tbody2.default, _extends({}, this.props, this.state))
        ),
        function () {
          if (_this2.props.status === 'LOADING') {
            return _react2.default.createElement(
              'div',
              { className: 'ui active inverted dimmer' },
              _react2.default.createElement(
                'div',
                { className: 'ui text loader' },
                'Loading'
              )
            );
          } else {
            return null;
          }
        }()
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.status !== prevProps.status || !_lodash2.default.isEqual(prevProps.visible, this.props.visible)) {
        // Force a re-render to realign table headers after content loads and displays
        this.forceUpdate();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var selfTrigger = function selfTrigger(fn) {
        var self = _this3;
        return _lodash2.default.wrap(fn, function (ffn) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (_lodash2.default.isArray(args[0])) {
            args[0][0] === self.props.componentId ? ffn.bind(self).apply(undefined, _toConsumableArray(_lodash2.default.drop(args[0], 1))) : _lodash2.default.noop;
          } else {
            args[0] === self.props.componentId ? ffn.bind(self).apply(undefined, _toConsumableArray(_lodash2.default.drop(args, 1))) : _lodash2.default.noop;
          }
        });
      };
      // If we're in sticky mode, keep an eye on the window size
      this.resizeHandler = _lodash2.default.throttle(this.handleResize.bind(this), 300);
      window.addEventListener('resize', this.resizeHandler);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }, {
    key: 'handleResize',
    value: function handleResize(e) {
      if (this.props.sticky) {
        this.forceUpdate();
      }
    }
  }, {
    key: 'handleSort',
    value: function handleSort(key) {
      var order = key == this.state.sort.key && this.state.sort.order == 'ascending' ? 'descending' : 'ascending';
      this.setState({ sort: { key: key, order: order } });
      _lodash2.default.defer(_lodash2.default.partial(this.props.actions.sort, { key: key, order: order }));
    }
  }, {
    key: 'sampleColumnWidths',
    value: function sampleColumnWidths() {
      // Aaaaaah this is so bad to just read the DOM like this, dip me in boiling oil and hear me scream
      // but honestly this is easier than dealing with passing around information that is only available
      // post-render. Doesn't fit well in the React hierarchy we've set up.
      return $('table[data-reframe-table-id=' + this.props.id + ']').find('tbody tr').first().find('td').map(function (i, td) {
        return $(td).outerWidth();
      }).toArray();
    }
  }]);

  return Table;
}(_react2.default.Component);

exports.default = Table;