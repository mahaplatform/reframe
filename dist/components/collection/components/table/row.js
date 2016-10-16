'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _record_actions = require('../record_actions');

var _record_actions2 = _interopRequireDefault(_record_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var record = _props.record;
      var columns = _props.columns;
      var selected = _props.selected;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;

      var checked = _lodash2.default.includes(selected, record.id);
      var classes = checked ? ['positive'] : [];
      var visible = _lodash2.default.filter(columns, function (column) {
        return column.visible;
      });
      return _react2.default.createElement(
        'tr',
        { className: classes.join(' ') },
        function () {
          if (batchActions) {
            return _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('input', { type: 'checkbox',
                checked: checked,
                onChange: _this2._handleSelect.bind(_this2, record.id) })
            );
          }
        }(),
        visible.map(function (column, index) {
          return _react2.default.createElement(_cell2.default, { key: 'column_' + index,
            column: column,
            record: record });
        }),
        function () {
          if (recordActions) {
            return _react2.default.createElement(
              'td',
              { className: 'center primary aligned' },
              _react2.default.createElement(_record_actions2.default, { icon: 'ellipsis vertical',
                button: false,
                record: record,
                recordActions: recordActions })
            );
          } else {
            return _react2.default.createElement('td', { className: 'primary' });
          }
        }()
      );
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(recordId) {
      this.props.onSelect(recordId);
    }
  }]);

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  record: _react2.default.PropTypes.object,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  columns: _react2.default.PropTypes.array,
  selected: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func
};
exports.default = Row;