'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(_options2.default, this.props)
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var label = this.props.label;

      return {
        title: 'Choose ' + label,
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }]
      };
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onEnd();
      this.context.form.pop();
    }
  }]);
  return Search;
}(_react2.default.Component);

// since we sent this component up to the modal, we need this to communicate
// back with the parent


Search.contextTypes = {
  form: _propTypes2.default.object
};
Search.propTypes = {
  label: _propTypes2.default.string,
  selected: _propTypes2.default.number,
  onCancel: _propTypes2.default.func,
  onEnd: _propTypes2.default.func
};
var mapStateToProps = function mapStateToProps(state, props) {
  return {
    q: state.reframe.lookup[props.cid].q
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Search);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VhcmNoIiwiX2dldFBhbmVsIiwicHJvcHMiLCJsYWJlbCIsInRpdGxlIiwibGVmdEl0ZW1zIiwiaGFuZGxlciIsIl9oYW5kbGVDYW5jZWwiLCJiaW5kIiwib25FbmQiLCJjb250ZXh0IiwiZm9ybSIsInBvcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwic2VsZWN0ZWQiLCJudW1iZXIiLCJvbkNhbmNlbCIsImZ1bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInEiLCJyZWZyYW1lIiwibG9va3VwIiwiY2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7OzZCQWFLO0FBQ1AsYUFDRTtBQUFDLDZCQUFEO0FBQWlCLGFBQUtDLFNBQUwsRUFBakI7QUFDRSxzQ0FBQyxpQkFBRCxFQUFjLEtBQUtDLEtBQW5CO0FBREYsT0FERjtBQUtEOzs7Z0NBRVc7QUFBQSxVQUNGQyxLQURFLEdBQ1EsS0FBS0QsS0FEYixDQUNGQyxLQURFOztBQUVWLGFBQU87QUFDTEMsMkJBQWlCRCxLQURaO0FBRUxFLG1CQUFXLENBQ1QsRUFBRUYsT0FBTyxRQUFULEVBQW1CRyxTQUFTLEtBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTVCLEVBRFM7QUFGTixPQUFQO0FBTUQ7OztvQ0FFZTtBQUNkLFdBQUtOLEtBQUwsQ0FBV08sS0FBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkMsR0FBbEI7QUFDRDs7O0VBbENrQkMsZ0JBQU1DLFM7O0FBc0MzQjtBQUNBOzs7QUF2Q01kLE0sQ0FFR2UsWSxHQUFlO0FBQ3BCSixRQUFNSyxvQkFBVUM7QUFESSxDO0FBRmxCakIsTSxDQU1Ha0IsUyxHQUFZO0FBQ2pCZixTQUFPYSxvQkFBVUcsTUFEQTtBQUVqQkMsWUFBVUosb0JBQVVLLE1BRkg7QUFHakJDLFlBQVVOLG9CQUFVTyxJQUhIO0FBSWpCZCxTQUFPTyxvQkFBVU87QUFKQSxDO0FBa0NyQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUXZCLEtBQVI7QUFBQSxTQUFtQjtBQUN6Q3dCLE9BQUdELE1BQU1FLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQjFCLE1BQU0yQixHQUEzQixFQUFnQ0g7QUFETSxHQUFuQjtBQUFBLENBQXhCOztrQkFJZSx5QkFBUUYsZUFBUixFQUF5QnhCLE1BQXpCLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxfcGFuZWwnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBmb3JtOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZDogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsUGFuZWwgeyAuLi50aGlzLl9nZXRQYW5lbCgpIH0+XG4gICAgICAgIDxPcHRpb25zIHsgLi4udGhpcy5wcm9wcyB9IC8+XG4gICAgICA8L01vZGFsUGFuZWw+XG4gICAgKVxuICB9XG5cbiAgX2dldFBhbmVsKCkge1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGBDaG9vc2UgJHtsYWJlbH1gLFxuICAgICAgbGVmdEl0ZW1zOiBbXG4gICAgICAgIHsgbGFiZWw6ICdDYW5jZWwnLCBoYW5kbGVyOiB0aGlzLl9oYW5kbGVDYW5jZWwuYmluZCh0aGlzKSB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNhbmNlbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uRW5kKClcbiAgICB0aGlzLmNvbnRleHQuZm9ybS5wb3AoKVxuICB9XG5cbn1cblxuLy8gc2luY2Ugd2Ugc2VudCB0aGlzIGNvbXBvbmVudCB1cCB0byB0aGUgbW9kYWwsIHdlIG5lZWQgdGhpcyB0byBjb21tdW5pY2F0ZVxuLy8gYmFjayB3aXRoIHRoZSBwYXJlbnRcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7XG4gIHE6IHN0YXRlLnJlZnJhbWUubG9va3VwW3Byb3BzLmNpZF0ucVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaClcbiJdfQ==