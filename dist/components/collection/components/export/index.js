'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Export = function (_React$Component) {
  _inherits(Export, _React$Component);

  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, (Export.__proto__ || Object.getPrototypeOf(Export)).apply(this, arguments));
  }

  _createClass(Export, [{
    key: 'render',
    value: function render() {
      var availableFields = [{ key: 'one', label: 'One' }, { key: 'two', label: 'Two' }];
      var selectedFields = [{ key: 'three', label: 'Three' }, { key: 'four', label: 'Four' }];
      return _react2.default.createElement(
        'div',
        { className: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'ui dimmer modals page transition visible active' },
          _react2.default.createElement(
            'div',
            { className: 'ui standard modal media transition visible active scrolling' },
            _react2.default.createElement(
              'div',
              { className: 'header' },
              'Export Data'
            ),
            _react2.default.createElement(
              'div',
              { className: 'content', ref: 'exporter' },
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
                      availableFields.map(function (field, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: 'available_' + index, 'data-name': field.key },
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
                      selectedFields.map(function (field, index) {
                        return _react2.default.createElement(
                          'li',
                          { key: 'selected_' + index, 'data-name': field.key },
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
                { className: 'ui positive dropdown button', ref: 'format' },
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
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.format).dropdown({
        action: this._handleExport.bind(this)
      });
    }
  }, {
    key: '_handleExport',
    value: function _handleExport(text, format) {
      if (format == 'excel') {
        this._handleXls();
      } else if (format == 'csv') {
        this._handleCsv();
      } else if (format == 'tsv') {
        this._handleTsv();
      }
    }
  }, {
    key: '_handleXls',
    value: function _handleXls() {
      console.log('xls');
    }
  }, {
    key: '_handleCsv',
    value: function _handleCsv() {
      console.log('csv');
    }
  }, {
    key: '_handleTsv',
    value: function _handleTsv() {
      console.log('tsv');
    }
  }]);

  return Export;
}(_react2.default.Component);

Export.propTypes = {};
Export.defaultProps = {
  onCancel: function onCancel() {}
};
exports.default = Export;