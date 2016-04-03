'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _actions = require('components/modal/actions.js');

var _actions2 = _interopRequireDefault(_actions);

var _config = require('../../../../../../config/config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportModal = function (_Component) {
  _inherits(ExportModal, _Component);

  function ExportModal(props) {
    _classCallCheck(this, ExportModal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExportModal).call(this, props));

    _this.state = {
      availableFields: _(props.fields).filter(function (item, index) {
        return !_.includes(props.visible, index);
      }).value(),
      selectedFields: _(props.fields).filter(function (item, index) {
        return _.includes(props.visible, index);
      }).value()
    };
    return _this;
  }

  _createClass(ExportModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui dimmer modals visible active page transition', onClick: this.cancel.bind(this) },
        _react2.default.createElement(
          'div',
          { ref: 'modal', className: 'ui small modal animating transition active', key: 'export_modal', style: this.getStyle(), onClick: function onClick(e) {
              return e.stopPropagation();
            } },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            'Export Data'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
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
                    'Available Fields:'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { ref: 'available' },
                    this.state.availableFields.map(function (field, index) {
                      return _react2.default.createElement(
                        'li',
                        { key: 'available_field_' + index, 'data-name': field.key },
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
                    'Selected Fields:'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { ref: 'selected' },
                    this.state.selectedFields.map(function (field, index) {
                      return _react2.default.createElement(
                        'li',
                        { key: 'selected_field_' + index, 'data-name': field.key },
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
              { className: 'ui negative button', onClick: this.cancel.bind(this) },
              'Cancel'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui positive dropdown button', ref: 'dropdown' },
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Export'
              ),
              _react2.default.createElement('i', { className: 'dropdown icon' }),
              _react2.default.createElement(
                'div',
                { className: 'menu' },
                _react2.default.createElement(
                  'div',
                  { className: 'item', onClick: this.exportCsv.bind(this) },
                  'To CSV'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item', onClick: this.exportTsv.bind(this) },
                  'To TSV'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item', onClick: this.exportXls.bind(this) },
                  'To XLS'
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
      $(this.refs.modal).find('ul').sortable({ connectWith: '.ui-sortable', items: 'li', containment: $('.grid') }).disableSelection();
      $(this.refs.dropdown).dropdown({
        action: 'combo'
      });
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return {
        marginTop: '-250px',
        height: '500px'
      };
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      _actions2.default.closeModal(this.props.subscriber);
    }
  }, {
    key: 'exportCsv',
    value: function exportCsv() {
      _actions2.default.closeModal(this.props.subscriber);
      window.location = this.buildURL('csv');
    }
  }, {
    key: 'exportTsv',
    value: function exportTsv() {
      _actions2.default.closeModal(this.props.subscriber);
      window.location = this.buildURL('tsv');
    }
  }, {
    key: 'exportXls',
    value: function exportXls() {
      _actions2.default.closeModal(this.props.subscriber);
      window.location = this.buildURL('xls');
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      _actions2.default.closeModal(this.props.subscriber);
    }
  }, {
    key: 'buildURL',
    value: function buildURL(ext) {
      var selectedFields = [];
      $(this.refs.selected).find('li').each(function () {
        selectedFields.push($(this).data('name'));
      });
      return '' + _config2.default.api + this.props.exportUrl + '.' + ext + '?fields=' + selectedFields.join(',');
    }
  }]);

  return ExportModal;
}(_react.Component);

ExportModal.defaultProps = {
  onApprove: function onApprove() {},
  onCancel: function onCancel() {},
  fields: [],
  exportUrl: ''
};
exports.default = ExportModal;