'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollpane = require('../scrollpane');

var _scrollpane2 = _interopRequireDefault(_scrollpane);

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
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          records = _props.records,
          params = _props.params,
          sort = _props.sort,
          onSort = _props.onSort;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-table' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-table-head' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-table-head-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-table-head-row', ref: 'head' },
              columns.map(function (column, columnIndex) {
                var klass = ['reframe-table-head-cell'];
                if (column.primary === true) klass.push('mobile');
                if (column.collapsing === true) klass.push('collapsing');
                return _react2.default.createElement(
                  'div',
                  { key: 'header-' + columnIndex, className: klass.join(' '), onClick: _this2._handleSort.bind(_this2, column.key) },
                  column.label,
                  sort && column.key === sort.key && (sort.order === 'asc' ? _react2.default.createElement('i', { className: 'chevron up icon' }) : _react2.default.createElement('i', { className: 'chevron down icon' }))
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-table-body' },
          _react2.default.createElement(
            _scrollpane2.default,
            this._getScrollpane(),
            _react2.default.createElement(
              'div',
              { className: 'reframe-table-body-wrapper', ref: 'body' },
              records.map(function (record, rowIndex) {
                return _react2.default.createElement(
                  'div',
                  { key: 'row-' + rowIndex, className: 'reframe-table-body-row' },
                  columns.map(function (column, columnIndex) {
                    var klass = ['reframe-table-body-cell'];
                    if (column.primary === true) klass.push('mobile');
                    if (column.collapsing === true) klass.push('collapsing');
                    if (column.centered === true) klass.push('centered');
                    return _react2.default.createElement(
                      'div',
                      { key: 'cell-' + rowIndex + '-' + columnIndex, className: klass.join(' ') },
                      record[column.key]
                    );
                  })
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resizeColumns();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._resizeColumns();
    }
  }, {
    key: '_getScrollpane',
    value: function _getScrollpane() {
      return {
        onReachBottom: this._handleLoadMore.bind(this)
      };
    }
  }, {
    key: '_resizeColumns',
    value: function _resizeColumns() {
      var _this3 = this;

      if (this.refs.body.childNodes.length === 0) return;
      Array.from(this.refs.body.childNodes[0].childNodes).map(function (cell, index) {
        _this3.refs.head.childNodes[index].style.width = cell.offsetWidth + 'px';
      });
    }
  }, {
    key: '_handleSort',
    value: function _handleSort(key) {
      this.props.onSort(key);
    }
  }, {
    key: '_handleLoadMore',
    value: function _handleLoadMore() {
      this.props.onLoadMore();
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.PropTypes = {
  columns: _propTypes2.default.array,
  records: _propTypes2.default.array,
  sort: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    order: _propTypes2.default.string
  }),
  total: _propTypes2.default.number,
  onLoadMore: _propTypes2.default.func,
  onSort: _propTypes2.default.func
};
exports.default = Table;