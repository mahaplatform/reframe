'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-layout' },
          _react2.default.createElement(_table2.default, this._getTable())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          data = _props.data,
          onSetRecords = _props.onSetRecords;

      if (data) onSetRecords(data);
    }
  }, {
    key: '_getTable',
    value: function _getTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          records = _props2.records,
          sort = _props2.sort;

      return {
        columns: columns,
        records: records,
        sort: sort,
        total: 300,
        onLoadMore: function onLoadMore() {
          return console.log('Load More');
        },
        onSort: function onSort(key) {
          return console.log('Sort ' + key);
        }
      };
    }
  }]);

  return Collection;
}(_react2.default.Component);

Collection.PropTypes = {
  columns: _propTypes2.default.array,
  data: _propTypes2.default.array,
  records: _propTypes2.default.array,
  sort: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    order: _propTypes2.default.string
  })
};
exports.default = Collection;