'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _columnChooser = require('./column-chooser');

var _columnChooser2 = _interopRequireDefault(_columnChooser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thead = function (_React$Component) {
  _inherits(Thead, _React$Component);

  function Thead() {
    _classCallCheck(this, Thead);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Thead).apply(this, arguments));
  }

  _createClass(Thead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.generateStyle();
      var nthCell = -1;
      return _react2.default.createElement(
        'thead',
        { style: style.thead },
        _react2.default.createElement(
          'tr',
          null,
          function () {
            if (!_lodash2.default.isEmpty(_this2.props.batchActions)) {
              return _react2.default.createElement(
                'th',
                { className: 'collapsing primary' },
                _react2.default.createElement('input', { ref: 'toggle', type: 'checkbox', checked: _this2.props.checkAll, onChange: _this2.handleCheckAll.bind(_this2) })
              );
            }
          }(),
          this.props.columns.map(function (column, index) {
            if (_lodash2.default.includes(_this2.props.visible, index)) {
              var classes = !column.primary ? ['secondary'] : [];
              if (column.key === _this2.props.sort.key) {
                if (_this2.props.sort.order == 'descending' || _this2.props.sort.order == 'desc') {
                  classes.push('sorted descending');
                } else {
                  classes.push('sorted ascending');
                }
              }
              nthCell++;
              return _react2.default.createElement(
                'th',
                { key: 'column_' + index, style: style.th[nthCell] || {}, className: classes.join(' '), onClick: _this2.handleSort.bind(_this2, column.key) },
                column.label
              );
            }
          }),
          _react2.default.createElement(
            'th',
            { className: 'collapsing primary center aligned', style: _lodash2.default.last(style.th) || {} },
            _react2.default.createElement(
              'div',
              { className: 'ui top right pointing dropdown', ref: 'columns_dropdown' },
              _react2.default.createElement('i', { className: 'ui columns icon', onClick: this.handleColumns.bind(this) }),
              _react2.default.createElement(_columnChooser2.default, { availableColumns: this.props.columns, visibleColumns: this.props.visible, onChooseColumn: this.onChooseColumn.bind(this) })
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.columns_dropdown).dropdown({
        action: 'nothing'
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(this.refs.columns_dropdown).dropdown('destroy');
    }
  }, {
    key: 'onChooseColumn',
    value: function onChooseColumn(key, visible) {
      this.props.onChooseColumn(key, visible);
    }
  }, {
    key: 'handleCheckAll',
    value: function handleCheckAll() {
      var checked = this.refs.toggle.checked;
      this.props.onCheckAll(checked);
    }
  }, {
    key: 'handleColumns',
    value: function handleColumns() {
      this.props.onClickColumnChooser();
    }
  }, {
    key: 'handleSort',
    value: function handleSort(key) {
      this.props.onClickColumnHeader(key);
    }
  }, {
    key: 'generateStyle',
    value: function generateStyle() {
      var _props = this.props;
      var sticky = _props.sticky;
      var columnWidths = _props.columnWidths;
      var surrogate = _props.surrogate;


      if (sticky && !surrogate) {
        return {
          thead: {
            position: 'fixed',
            top: $('.application-menu').first().outerHeight(),
            zIndex: 5000,
            opacity: surrogate ? 0.0 : 1.0
          },
          th: _lodash2.default.map(columnWidths, function (w) {
            return { width: w };
          })
        };
      } else {
        return {
          thead: {
            opacity: surrogate ? 0.0 : 1.0
          },
          th: []
        };
      }
    }
  }]);

  return Thead;
}(_react2.default.Component);

Thead.defaultProps = {
  onSort: _lodash2.default.noop,
  onCheckAll: _lodash2.default.noop,
  onClickColumns: _lodash2.default.noop,
  onChooseColumn: _lodash2.default.noop,
  sticky: false,
  surrogate: false,
  columnWidths: []
};
exports.default = Thead;