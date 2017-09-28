'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fields = function (_React$Component) {
  _inherits(Fields, _React$Component);

  function Fields() {
    _classCallCheck(this, Fields);

    return _possibleConstructorReturn(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
  }

  _createClass(Fields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fields = _props.fields,
          results = _props.results;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filter-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filter-header' },
          _react2.default.createElement('div', { className: 'reframe-filter-header-icon' }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filter-header-title' },
            'Filters'
          ),
          _react2.default.createElement('div', { className: 'reframe-filter-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filter-body' },
          fields.map(function (field, index) {
            var values = _this2._values(field, results);
            return _react2.default.createElement(
              'div',
              { key: 'filter_' + index, className: 'reframe-filter-item', onClick: _this2._handleChoose.bind(_this2, index) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-field' },
                field.label
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-values' },
                values && _react2.default.createElement(
                  'div',
                  { className: 'values' },
                  values
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filter-item-icon' },
                _react2.default.createElement('i', { className: 'chevron right icon' })
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filter-footer', onClick: this._handleResetAll.bind(this) },
          'Reset Filter'
        )
      );
    }
  }, {
    key: '_count',
    value: function _count(filter, results) {
      return results[filter.name] ? results[filter.name].length : null;
    }
  }, {
    key: '_values',
    value: function _values(field, results) {
      if (field.multiple && results[field.name]) {
        var values = [];
        results[field.name].map(function (record) {
          values.push(record.value);
        });
        return values.join(', ');
      } else {
        if (results[field.name]) {
          return results[field.name].value;
        }
      }
      return '';
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      this.props.onChoose(index);
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.context.tray.close();
    }
  }, {
    key: '_handleResetAll',
    value: function _handleResetAll() {
      this.props.onResetAll();
    }
  }]);

  return Fields;
}(_react2.default.Component);

Fields.contextTypes = {
  tray: _propTypes2.default.object
};
Fields.propTypes = {
  fields: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onChoose: _propTypes2.default.func,
  onResetAll: _propTypes2.default.func
};
exports.default = Fields;