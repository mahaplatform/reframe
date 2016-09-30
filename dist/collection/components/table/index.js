'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _thead = require('./thead');

var _thead2 = _interopRequireDefault(_thead);

var _tbody = require('./tbody');

var _tbody2 = _interopRequireDefault(_tbody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var records = _props.records;
      var params = _props.params;
      var empty = _props.empty;
      var columns = _props.columns;
      var status = _props.status;
      var selected = _props.selected;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;
      var onSelect = _props.onSelect;
      var onSortRecords = _props.onSortRecords;

      return _react2.default.createElement(
        'div',
        { className: 'table', ref: 'table' },
        _react2.default.createElement(
          'table',
          { className: 'ui single padded unstackable line table' },
          _react2.default.createElement(_thead2.default, { id: id,
            columns: columns,
            params: params,
            batchActions: batchActions,
            onSortRecords: onSortRecords }),
          _react2.default.createElement(_tbody2.default, { id: id,
            empty: empty,
            columns: columns,
            records: records,
            selected: selected,
            status: status,
            recordActions: recordActions,
            batchActions: batchActions,
            onSelect: onSelect })
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  id: _react2.default.PropTypes.string,
  records: _react2.default.PropTypes.array,
  selected: _react2.default.PropTypes.array,
  params: _react2.default.PropTypes.object,
  empty: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.array,
  status: _react2.default.PropTypes.string,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func,
  onSortRecords: _react2.default.PropTypes.func
};
exports.default = Table;