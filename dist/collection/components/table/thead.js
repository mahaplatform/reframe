'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thead = function (_React$Component) {
  _inherits(Thead, _React$Component);

  function Thead() {
    _classCallCheck(this, Thead);

    return _possibleConstructorReturn(this, (Thead.__proto__ || Object.getPrototypeOf(Thead)).apply(this, arguments));
  }

  _createClass(Thead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var columns = _props.columns;
      var params = _props.params;
      var batchActions = _props.batchActions;

      var visible = _lodash2.default.filter(columns, function (column) {
        return column.visible;
      });
      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          batchActions ? _react2.default.createElement('th', { className: 'collapsing' }) : null,
          visible.map(function (column, index) {
            var classes = ['sortable'];
            if (column.primary) {
              classes.push('primary');
            }
            if (column.collapsing) {
              classes.push('collapsing');
            }
            var icon = null;
            if (column.key == params.sort.key) {
              classes.push('sorting');
              icon = params.sort.order == 'asc' ? _react2.default.createElement('i', { className: 'chevron up icon' }) : _react2.default.createElement('i', { className: 'chevron down icon' });
            }
            return _react2.default.createElement(
              'th',
              { key: 'column_' + index,
                onClick: _this2._handleSortRecords.bind(_this2, column.key),
                className: classes.join(' ') },
              column.label,
              icon
            );
          }),
          _react2.default.createElement(
            'th',
            { className: 'collapsing primary center aligned' },
            _react2.default.createElement('i', { className: 'columns icon' })
          )
        )
      );
    }
  }, {
    key: '_handleSortRecords',
    value: function _handleSortRecords(column) {
      var _props2 = this.props;
      var id = _props2.id;
      var onSortRecords = _props2.onSortRecords;

      onSortRecords(id, column);
    }
  }]);

  return Thead;
}(_react2.default.Component);

Thead.propTypes = {
  id: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.array,
  params: _react2.default.PropTypes.object,
  batchActions: _react2.default.PropTypes.array,
  onSortRecords: _react2.default.PropTypes.func
};
exports.default = Thead;