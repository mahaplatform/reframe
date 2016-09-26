'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tbody = function (_React$Component) {
  _inherits(Tbody, _React$Component);

  function Tbody() {
    _classCallCheck(this, Tbody);

    return _possibleConstructorReturn(this, (Tbody.__proto__ || Object.getPrototypeOf(Tbody)).apply(this, arguments));
  }

  _createClass(Tbody, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var empty = _props.empty;
      var status = _props.status;
      var columns = _props.columns;
      var records = _props.records;
      var selected = _props.selected;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;
      var onSelect = _props.onSelect;

      var visible = _lodash2.default.filter(columns, function (column) {
        return column.visible;
      });
      var colspan = visible.length + 2;
      if (_lodash2.default.isEmpty(records) && status == 'records_loading') {
        return _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: colspan, className: 'center aligned' },
              _react2.default.createElement(
                'div',
                { className: 'ui active inverted dimmer' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui huge text loader' },
                  'Loading'
                )
              )
            )
          )
        );
      } else if (status == 'records_failed') {
        return _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: colspan, className: 'center aligned' },
              _react2.default.createElement('i', { className: 'warning sign icon' }),
              'Unable to load records'
            )
          )
        );
      } else if (records && records.length > 0) {
        return _react2.default.createElement(
          'tbody',
          null,
          records.map(function (record, index) {
            return _react2.default.createElement(_row2.default, { key: 'record_' + index,
              columns: columns,
              selected: selected,
              recordActions: recordActions,
              batchActions: batchActions,
              record: record,
              onSelect: onSelect });
          })
        );
      } else {
        return _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: colspan, className: 'center aligned' },
              empty
            )
          )
        );
      }
    }
  }]);

  return Tbody;
}(_react2.default.Component);

Tbody.propTypes = {
  id: _react2.default.PropTypes.string,
  empty: _react2.default.PropTypes.string,
  columns: _react2.default.PropTypes.array,
  records: _react2.default.PropTypes.array,
  selected: _react2.default.PropTypes.array,
  status: _react2.default.PropTypes.string,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func
};
exports.default = Tbody;