'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _window = require('../modal/window');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportModal = function (_React$Component) {
  _inherits(ExportModal, _React$Component);

  function ExportModal() {
    _classCallCheck(this, ExportModal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ExportModal).apply(this, arguments));
  }

  _createClass(ExportModal, [{
    key: 'render',
    value: function render() {
      var modalOptions = {
        title: "Export Data",
        onApprove: this.props.onApprove,
        onCancel: this.props.onCancel,
        onClose: this.props.onCancel,
        buttons: [{ color: 'positive', label: 'Export' }]
      };

      var _$map$partition$map$v = (0, _lodash2.default)(this.props.fields).map(function (f, i) {
        return [f, i];
      }).partition(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var f = _ref2[0];
        var i = _ref2[1];
        return i % 2 == 0;
      }).map(function (col) {
        return _lodash2.default.map(col, function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1);

          var f = _ref4[0];
          return f;
        });
      }).value();

      var _$map$partition$map$v2 = _slicedToArray(_$map$partition$map$v, 2);

      var colA = _$map$partition$map$v2[0];
      var colB = _$map$partition$map$v2[1];

      return _react2.default.createElement(
        _window.PlainWindow,
        modalOptions,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'h2',
            null,
            'Select Fields to Export'
          ),
          _react2.default.createElement(
            'div',
            { ref: 'field_selector', className: 'ui two column grid form' },
            _react2.default.createElement(
              'div',
              { className: 'column' },
              _lodash2.default.map(colA, function (field, index) {
                return _react2.default.createElement(
                  'div',
                  { className: 'inline field' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui checkbox' },
                    _react2.default.createElement('input', { type: 'checkbox', tabIndex: index, className: 'hidden', value: field.key, defaultChecked: true }),
                    _react2.default.createElement(
                      'label',
                      null,
                      field.label
                    )
                  )
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'column' },
              _lodash2.default.map(colB, function (field, index) {
                return _react2.default.createElement(
                  'div',
                  { className: 'inline field' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui checkbox' },
                    _react2.default.createElement('input', { type: 'checkbox', tabIndex: index, className: 'hidden', value: field.key, defaultChecked: true }),
                    _react2.default.createElement(
                      'label',
                      null,
                      field.label
                    )
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'div',
            { className: 'ui negative button' },
            'Cancel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui positive dropdown button', ref: 'export_dropdown' },
            'Export As... ',
            _react2.default.createElement('i', { className: 'dropdown icon' }),
            _react2.default.createElement(
              'div',
              { className: 'menu' },
              _react2.default.createElement(
                'div',
                { className: 'item', 'data-value': 'excel' },
                _react2.default.createElement('i', { className: 'file excel outline icon' }),
                ' Excel Spreadsheet'
              ),
              _react2.default.createElement(
                'div',
                { className: 'item', 'data-value': 'csv' },
                _react2.default.createElement('i', { className: 'table icon' }),
                ' CSV'
              ),
              _react2.default.createElement(
                'div',
                { className: 'item', 'data-value': 'tsv' },
                _react2.default.createElement('i', { className: 'table icon' }),
                ' TSV'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'getFields',
    value: function getFields() {
      return $(this.refs.field_selector).find('input:checked').map(function (index, element) {
        return $(element).val();
      }).toArray().join(',');
    }
  }, {
    key: 'exportXls',
    value: function exportXls() {
      window.location = this.props.exportUrl + '.xls?fields=' + this.getFields();
    }
  }, {
    key: 'exportCsv',
    value: function exportCsv() {
      window.location = this.props.exportUrl + '.xls?fields=' + this.getFields();
    }
  }, {
    key: 'exportTsv',
    value: function exportTsv() {
      window.location = this.props.exportUrl + '.xls?fields=' + this.getFields();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $(this.refs.field_selector).find('.checkbox').checkbox();
      $(this.refs.export_dropdown).dropdown({
        action: function action(text, val) {
          switch (val) {
            case 'excel':
              _this2.exportXls();
              break;
            case 'csv':
              _this2.exportCsv();
              break;
            case 'tsv':
              _this2.exportTsv();
              break;
          }
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(this.refs.field_selector).find('.checkbox').checkbox('destroy');
      $(this.refs.export_dropdown).dropdown('destroy');
    }
  }]);

  return ExportModal;
}(_react2.default.Component);

exports.default = ExportModal;