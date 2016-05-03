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

      var _$partition = _lodash2.default.partition(this.props.fields, function (f) {
        return f.visible;
      });

      var _$partition2 = _slicedToArray(_$partition, 2);

      var selectedFields = _$partition2[0];
      var availableFields = _$partition2[1];


      return _react2.default.createElement(
        _window.PlainWindow,
        modalOptions,
        _react2.default.createElement(
          'div',
          { className: 'content', ref: 'exporter' },
          _react2.default.createElement(
            'h2',
            null,
            'Export Data'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui grid' },
            _react2.default.createElement(
              'div',
              { className: 'two column row' },
              _react2.default.createElement(
                'div',
                { className: 'column available' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Available Fields'
                ),
                _react2.default.createElement(
                  'ul',
                  { ref: 'available' },
                  _lodash2.default.map(availableFields, function (field, index) {
                    return _react2.default.createElement(
                      'li',
                      { 'data-name': field.key },
                      field.label
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'column selected' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Selected Fields'
                ),
                _react2.default.createElement(
                  'ul',
                  { ref: 'selected' },
                  _lodash2.default.map(selectedFields, function (field, index) {
                    return _react2.default.createElement(
                      'li',
                      { 'data-name': field.key },
                      field.label
                    );
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'div',
            { className: 'ui negative button', onClick: this.props.onCancel },
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
      return $(this.refs.selected).find('li').map(function (index, element) {
        return $(element).data('name');
      }).toArray().join(',');
    }
  }, {
    key: 'exportXls',
    value: function exportXls() {
      window.location = this.props.exportUrl + '.xlsx?fields=' + this.getFields();
      if (this.props.autoClose) this.props.onCancel();
    }
  }, {
    key: 'exportCsv',
    value: function exportCsv() {
      window.location = this.props.exportUrl + '.csv?fields=' + this.getFields();
      if (this.props.autoClose) this.props.onCancel();
    }
  }, {
    key: 'exportTsv',
    value: function exportTsv() {
      window.location = this.props.exportUrl + '.tsv?fields=' + this.getFields();
      if (this.props.autoClose) this.props.onCancel();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $(this.refs.exporter).find('ul').sortable({ connectWith: '.ui-sortable', items: 'li', containment: $('.grid') }).disableSelection();
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

ExportModal.defaultProps = {
  autoClose: true
};
exports.default = ExportModal;