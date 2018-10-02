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

var _draftJs = require('draft-js');

var _draftConvert = require('draft-convert');

var _reactTransitionGroup = require('react-transition-group');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('./link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wysiwyg = function (_React$Component) {
  (0, _inherits3.default)(Wysiwyg, _React$Component);

  function Wysiwyg(props) {
    (0, _classCallCheck3.default)(this, Wysiwyg);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wysiwyg.__proto__ || Object.getPrototypeOf(Wysiwyg)).call(this, props));

    _this.state = {
      editorState: null,
      linking: false,
      url: null
    };
    return _this;
  }

  (0, _createClass3.default)(Wysiwyg, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          editorState = _state.editorState,
          linking = _state.linking;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-wysiwyg' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-wysiwyg-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'header-one') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-header' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'BOLD') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-bold' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'ITALIC') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-italic' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'UNDERLINE') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-underline' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleBeginLink.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-link' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleUnlink.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-unlink' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'ordered-list-item') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-list-ol' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'unordered-list-item') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-list-ul' })
            )
          )
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': linking, classNames: 'expanded', timeout: 150, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement(
            'div',
            { className: 'reframe-wysiwyg-input' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-input-element' },
              _react2.default.createElement('input', this._getLinkInput())
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-wysiwyg-input-icon', onClick: this._handleEndLink.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-times' })
            )
          )
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': linking, classNames: 'expanded', timeout: 150, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement('div', { className: 'reframe-wysiwyg-overlay', onClick: this._handleEndLink.bind(this) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-wysiwyg-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-wysiwyg-page' },
            editorState && _react2.default.createElement(_draftJs.Editor, this._getEditor())
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var editorState = this._getInitialState();
      this._handleChange(editorState);
      this.props.onReady();
    }
  }, {
    key: '_getInitialState',
    value: function _getInitialState() {
      var decorator = this._getDecorator();
      var defaultContent = this._getDefaultContent();
      if (defaultContent) return _draftJs.EditorState.createWithContent(defaultContent, decorator);
      return _draftJs.EditorState.createEmpty(decorator);
    }
  }, {
    key: '_getDecorator',
    value: function _getDecorator() {
      return new _draftJs.CompositeDecorator([{
        strategy: _link.linkStrategy,
        component: _link.Link
      }]);
    }
  }, {
    key: '_getDefaultContent',
    value: function _getDefaultContent() {
      var defaultValue = this.props.defaultValue;

      if (!defaultValue) return null;
      return (0, _draftConvert.convertFromHTML)({
        htmlToEntity: function htmlToEntity(nodeName, node, createEntity) {
          if (nodeName === 'a') {
            return createEntity('LINK', 'MUTABLE', { url: node.href });
          }
        }
      })(defaultValue);
    }
  }, {
    key: '_getLinkInput',
    value: function _getLinkInput() {
      var _this2 = this;

      return {
        type: 'text',
        placeholder: 'Enter a link',
        ref: function ref(node) {
          return _this2.link = node;
        },
        defaultValue: this.state.url,
        onKeyDown: this._handleLinkKeyDown.bind(this)
      };
    }
  }, {
    key: '_getEditor',
    value: function _getEditor() {
      var _this3 = this;

      var editorState = this.state.editorState;

      return {
        ref: function ref(node) {
          return _this3.el = node;
        },
        editorState: editorState,
        onChange: this._handleChange.bind(this),
        blockStyleFn: this._getBlockStyle
      };
    }
  }, {
    key: '_handleInlineStyle',
    value: function _handleInlineStyle(style) {
      this._handleChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, style));
    }
  }, {
    key: '_handleBlockType',
    value: function _handleBlockType(blockType) {
      this._handleChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_handleBeginLink',
    value: function _handleBeginLink() {
      var _this4 = this;

      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      if (selection.isCollapsed()) return;
      var contentState = editorState.getCurrentContent();
      var startKey = editorState.getSelection().getStartKey();
      var startOffset = editorState.getSelection().getStartOffset();
      var blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      var linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      var url = '';
      if (linkKey) {
        var linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      this.setState({
        linking: true,
        url: url
      }, function () {
        setTimeout(function () {
          return _this4.link.focus();
        }, 0);
      });
    }
  }, {
    key: '_handleEndLink',
    value: function _handleEndLink() {
      this.setState({
        linking: false,
        url: null
      });
    }
  }, {
    key: '_handleLinkKeyDown',
    value: function _handleLinkKeyDown(e) {
      if (e.which !== 13) return;
      this._handleLinkChange(this.link.value);
    }
  }, {
    key: '_handleLinkChange',
    value: function _handleLinkChange(url) {
      var _this5 = this;

      var editorState = this.state.editorState;

      var contentState = editorState.getCurrentContent();
      var contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: url });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      var newEditorState = _draftJs.EditorState.set(editorState, { currentContent: contentStateWithEntity });
      var replacementState = _draftJs.RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey);
      this.setState({
        editorState: replacementState,
        linking: false
      }, function () {
        setTimeout(function () {
          return _this5.el.focus();
        }, 0);
      });
    }
  }, {
    key: '_handleUnlink',
    value: function _handleUnlink() {
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      if (selection.isCollapsed()) return;
      var replacementState = _draftJs.RichUtils.toggleLink(editorState, selection, null);
      this.setState({
        editorState: replacementState
      });
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(editorState) {
      this.setState({ editorState: editorState });
      var value = (0, _draftConvert.convertToHTML)({
        entityToHTML: function entityToHTML(entity, originalText) {
          if (entity.type === 'LINK') {
            return _react2.default.createElement(
              'a',
              { href: entity.data.url },
              originalText
            );
          }
          return originalText;
        }
      })(editorState.getCurrentContent());
      this.props.onChange(value);
    }
  }]);
  return Wysiwyg;
}(_react2.default.Component);

Wysiwyg.propTypes = {
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Wysiwyg.defaultProps = {
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Wysiwyg;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiV3lzaXd5ZyIsInByb3BzIiwic3RhdGUiLCJlZGl0b3JTdGF0ZSIsImxpbmtpbmciLCJ1cmwiLCJfaGFuZGxlQmxvY2tUeXBlIiwiYmluZCIsIl9oYW5kbGVJbmxpbmVTdHlsZSIsIl9oYW5kbGVCZWdpbkxpbmsiLCJfaGFuZGxlVW5saW5rIiwiX2dldExpbmtJbnB1dCIsIl9oYW5kbGVFbmRMaW5rIiwiX2dldEVkaXRvciIsIl9nZXRJbml0aWFsU3RhdGUiLCJfaGFuZGxlQ2hhbmdlIiwib25SZWFkeSIsImRlY29yYXRvciIsIl9nZXREZWNvcmF0b3IiLCJkZWZhdWx0Q29udGVudCIsIl9nZXREZWZhdWx0Q29udGVudCIsIkVkaXRvclN0YXRlIiwiY3JlYXRlV2l0aENvbnRlbnQiLCJjcmVhdGVFbXB0eSIsIkNvbXBvc2l0ZURlY29yYXRvciIsInN0cmF0ZWd5IiwibGlua1N0cmF0ZWd5IiwiY29tcG9uZW50IiwiTGluayIsImRlZmF1bHRWYWx1ZSIsImh0bWxUb0VudGl0eSIsIm5vZGVOYW1lIiwibm9kZSIsImNyZWF0ZUVudGl0eSIsImhyZWYiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZWYiLCJsaW5rIiwib25LZXlEb3duIiwiX2hhbmRsZUxpbmtLZXlEb3duIiwiZWwiLCJvbkNoYW5nZSIsImJsb2NrU3R5bGVGbiIsIl9nZXRCbG9ja1N0eWxlIiwic3R5bGUiLCJSaWNoVXRpbHMiLCJ0b2dnbGVJbmxpbmVTdHlsZSIsImJsb2NrVHlwZSIsInRvZ2dsZUJsb2NrVHlwZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImlzQ29sbGFwc2VkIiwiY29udGVudFN0YXRlIiwiZ2V0Q3VycmVudENvbnRlbnQiLCJzdGFydEtleSIsImdldFN0YXJ0S2V5Iiwic3RhcnRPZmZzZXQiLCJnZXRTdGFydE9mZnNldCIsImJsb2NrV2l0aExpbmtBdEJlZ2lubmluZyIsImdldEJsb2NrRm9yS2V5IiwibGlua0tleSIsImdldEVudGl0eUF0IiwibGlua0luc3RhbmNlIiwiZ2V0RW50aXR5IiwiZ2V0RGF0YSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzIiwiZSIsIndoaWNoIiwiX2hhbmRsZUxpbmtDaGFuZ2UiLCJ2YWx1ZSIsImNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkiLCJlbnRpdHlLZXkiLCJnZXRMYXN0Q3JlYXRlZEVudGl0eUtleSIsIm5ld0VkaXRvclN0YXRlIiwic2V0IiwiY3VycmVudENvbnRlbnQiLCJyZXBsYWNlbWVudFN0YXRlIiwidG9nZ2xlTGluayIsImVudGl0eVRvSFRNTCIsImVudGl0eSIsIm9yaWdpbmFsVGV4dCIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztJQUVNQSxPOzs7QUFhSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsSUFERjtBQUVYQyxlQUFTLEtBRkU7QUFHWEMsV0FBSztBQUhNLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBRVE7QUFBQSxtQkFDMEIsS0FBS0gsS0FEL0I7QUFBQSxVQUNDQyxXQURELFVBQ0NBLFdBREQ7QUFBQSxVQUNjQyxPQURkLFVBQ2NBLE9BRGQ7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0NBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSw2QkFBZixFQUE2QyxTQUFVLEtBQUtFLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxZQUFqQyxDQUF2RDtBQUNFLG1EQUFHLFdB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V0FETTs7QUFFZCxVQUFNK0MsWUFBWS9DLFlBQVlnRCxZQUFaLEVBQWxCO0FBQ0EsVUFBR0QsVUFBVUUsV0FBVixFQUFILEVBQTRCO0FBQzVCLFVBQU0yQixtQkFBbUJqQyxtQkFBVWtDLFVBQVYsQ0FBcUI3RSxXQUFyQixFQUFrQytDLFNBQWxDLEVBQTZDLElBQTdDLENBQXpCO0FBQ0EsV0FBS2dCLFFBQUwsQ0FBYztBQUNaL0QscUJBQWE0RTtBQURELE9BQWQ7QUFHRDs7O2tDQUVhNUUsVyxFQUFhO0FBQ3pCLFdBQUsrRCxRQUFMLENBQWMsRUFBRS9ELHdCQUFGLEVBQWQ7QUFDQSxVQUFNcUUsUUFBUSxpQ0FBYztBQUMxQlMsc0JBQWMsc0JBQUNDLE1BQUQsRUFBU0MsWUFBVCxFQUEwQjtBQUN0QyxjQUFHRCxPQUFPL0MsSUFBUCxLQUFnQixNQUFuQixFQUEyQjtBQUN6QixtQkFBTztBQUFBO0FBQUEsZ0JBQUcsTUFBTytDLE9BQU9FLElBQVAsQ0FBWS9FLEdBQXRCO0FBQThCOEU7QUFBOUIsYUFBUDtBQUNEO0FBQ0QsaUJBQU9BLFlBQVA7QUFDRDtBQU55QixPQUFkLEVBT1hoRixZQUFZbUQsaUJBQVosRUFQVyxDQUFkO0FBUUEsV0FBS3JELEtBQUwsQ0FBV3lDLFFBQVgsQ0FBb0I4QixLQUFwQjtBQUNEOzs7RUF2T21CYSxnQkFBTUMsUzs7QUFBdEJ0RixPLENBRUd1RixTLEdBQVk7QUFDakIxRCxnQkFBYzJELG9CQUFVQyxNQURQO0FBRWpCL0MsWUFBVThDLG9CQUFVRSxJQUZIO0FBR2pCMUUsV0FBU3dFLG9CQUFVRTtBQUhGLEM7QUFGZjFGLE8sQ0FRRzJGLFksR0FBZTtBQUNwQmpELFlBQVUsa0JBQUM4QixLQUFELEVBQVcsQ0FBRSxDQURIO0FBRXBCeEQsV0FBUyxtQkFBTSxDQUFFO0FBRkcsQztrQkFtT1RoQixPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGVEZWNvcmF0b3IsIEVkaXRvciwgRWRpdG9yU3RhdGUsIFJpY2hVdGlscyB9IGZyb20gJ2RyYWZ0LWpzJ1xuaW1wb3J0IHsgY29udmVydEZyb21IVE1MLCBjb252ZXJ0VG9IVE1MIH0gZnJvbSAnZHJhZnQtY29udmVydCdcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGxpbmtTdHJhdGVneSwgTGluayB9IGZyb20gJy4vbGluaydcblxuY2xhc3MgV3lzaXd5ZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2hhbmdlOiAodmFsdWUpID0+IHt9LFxuICAgIG9uUmVhZHk6ICgpID0+IHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0b3JTdGF0ZTogbnVsbCxcbiAgICAgIGxpbmtpbmc6IGZhbHNlLFxuICAgICAgdXJsOiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWRpdG9yU3RhdGUsIGxpbmtpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaGVhZGVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS13eXNpd3lnLWhlYWRlci1pY29uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUJsb2NrVHlwZS5iaW5kKHRoaXMsICdoZWFkZXItb25lJykgfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtaGVhZGVyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaGVhZGVyLWljb25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlSW5saW5lU3R5bGUuYmluZCh0aGlzLCAnQk9MRCcpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWJvbGRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtd3lzaXd5Zy1oZWFkZXItaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVJbmxpbmVTdHlsZS5iaW5kKHRoaXMsICdJVEFMSUMnKSB9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1pdGFsaWNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtd3lzaXd5Zy1oZWFkZXItaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVJbmxpbmVTdHlsZS5iaW5kKHRoaXMsICdVTkRFUkxJTkUnKSB9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS11bmRlcmxpbmVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaGVhZGVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS13eXNpd3lnLWhlYWRlci1pY29uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUJlZ2luTGluay5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWxpbmtcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtd3lzaXd5Zy1oZWFkZXItaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVVbmxpbmsuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS11bmxpbmtcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaGVhZGVyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS13eXNpd3lnLWhlYWRlci1pY29uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUJsb2NrVHlwZS5iaW5kKHRoaXMsICdvcmRlcmVkLWxpc3QtaXRlbScpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWxpc3Qtb2xcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtd3lzaXd5Zy1oZWFkZXItaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVCbG9ja1R5cGUuYmluZCh0aGlzLCAndW5vcmRlcmVkLWxpc3QtaXRlbScpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWxpc3QtdWxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17IGxpbmtpbmcgfSBjbGFzc05hbWVzPVwiZXhwYW5kZWRcIiB0aW1lb3V0PXsgMTUwIH0gbW91bnRPbkVudGVyPXsgdHJ1ZSB9IHVubW91bnRPbkV4aXQ9eyB0cnVlIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS13eXNpd3lnLWlucHV0LWVsZW1lbnRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHsgLi4udGhpcy5fZ2V0TGlua0lucHV0KCl9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctaW5wdXQtaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVFbmRMaW5rLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgPENTU1RyYW5zaXRpb24gaW49eyBsaW5raW5nIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDE1MCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS13eXNpd3lnLW92ZXJsYXlcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlRW5kTGluay5iaW5kKHRoaXMpIH0gLz5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtd3lzaXd5Zy1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXd5c2l3eWctcGFnZVwiPlxuICAgICAgICAgICAgeyBlZGl0b3JTdGF0ZSAmJiA8RWRpdG9yIHsgLi4udGhpcy5fZ2V0RWRpdG9yKCkgfSAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZWRpdG9yU3RhdGUgPSB0aGlzLl9nZXRJbml0aWFsU3RhdGUoKVxuICAgIHRoaXMuX2hhbmRsZUNoYW5nZShlZGl0b3JTdGF0ZSlcbiAgICB0aGlzLnByb3BzLm9uUmVhZHkoKVxuICB9XG5cbiAgX2dldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBkZWNvcmF0b3IgPSB0aGlzLl9nZXREZWNvcmF0b3IoKVxuICAgIGNvbnN0IGRlZmF1bHRDb250ZW50ID0gdGhpcy5fZ2V0RGVmYXVsdENvbnRlbnQoKVxuICAgIGlmKGRlZmF1bHRDb250ZW50KSByZXR1cm4gRWRpdG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoZGVmYXVsdENvbnRlbnQsIGRlY29yYXRvcilcbiAgICByZXR1cm4gRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoZGVjb3JhdG9yKVxuICB9XG5cbiAgX2dldERlY29yYXRvcigpIHtcbiAgICByZXR1cm4gbmV3IENvbXBvc2l0ZURlY29yYXRvcihbXG4gICAgICB7XG4gICAgICAgIHN0cmF0ZWd5OiBsaW5rU3RyYXRlZ3ksXG4gICAgICAgIGNvbXBvbmVudDogTGlua1xuICAgICAgfVxuICAgIF0pXG4gIH1cblxuICBfZ2V0RGVmYXVsdENvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZighZGVmYXVsdFZhbHVlKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBjb252ZXJ0RnJvbUhUTUwoe1xuICAgICAgaHRtbFRvRW50aXR5OiAobm9kZU5hbWUsIG5vZGUsIGNyZWF0ZUVudGl0eSkgPT4ge1xuICAgICAgICBpZiAobm9kZU5hbWUgPT09ICdhJykge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFbnRpdHkoXG4gICAgICAgICAgICAnTElOSycsXG4gICAgICAgICAgICAnTVVUQUJMRScsXG4gICAgICAgICAgICB7IHVybDogbm9kZS5ocmVmIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KShkZWZhdWx0VmFsdWUpXG4gIH1cblxuICBfZ2V0TGlua0lucHV0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgYSBsaW5rJyxcbiAgICAgICByZWY6IG5vZGUgPT4gdGhpcy5saW5rID0gbm9kZSxcbiAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuc3RhdGUudXJsLFxuICAgICAgIG9uS2V5RG93bjogdGhpcy5faGFuZGxlTGlua0tleURvd24uYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRFZGl0b3IoKSB7XG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiB7XG4gICAgICByZWY6IG5vZGUgPT4gdGhpcy5lbCA9IG5vZGUsXG4gICAgICBlZGl0b3JTdGF0ZTogZWRpdG9yU3RhdGUsXG4gICAgICBvbkNoYW5nZTogdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICBibG9ja1N0eWxlRm46IHRoaXMuX2dldEJsb2NrU3R5bGVcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlSW5saW5lU3R5bGUoc3R5bGUpIHtcbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKFxuICAgICAgdGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZSxcbiAgICAgIHN0eWxlXG4gICAgKSlcbiAgfVxuXG4gIF9oYW5kbGVCbG9ja1R5cGUoYmxvY2tUeXBlKSB7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlKFJpY2hVdGlscy50b2dnbGVCbG9ja1R5cGUoXG4gICAgICB0aGlzLnN0YXRlLmVkaXRvclN0YXRlLFxuICAgICAgYmxvY2tUeXBlXG4gICAgKSlcbiAgfVxuXG4gIF9oYW5kbGVCZWdpbkxpbmsoKSB7XG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvclN0YXRlLmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHNlbGVjdGlvbi5pc0NvbGxhcHNlZCgpKSByZXR1cm5cbiAgICBjb25zdCBjb250ZW50U3RhdGUgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpXG4gICAgY29uc3Qgc3RhcnRLZXkgPSBlZGl0b3JTdGF0ZS5nZXRTZWxlY3Rpb24oKS5nZXRTdGFydEtleSgpXG4gICAgY29uc3Qgc3RhcnRPZmZzZXQgPSBlZGl0b3JTdGF0ZS5nZXRTZWxlY3Rpb24oKS5nZXRTdGFydE9mZnNldCgpXG4gICAgY29uc3QgYmxvY2tXaXRoTGlua0F0QmVnaW5uaW5nID0gY29udGVudFN0YXRlLmdldEJsb2NrRm9yS2V5KHN0YXJ0S2V5KVxuICAgIGNvbnN0IGxpbmtLZXkgPSBibG9ja1dpdGhMaW5rQXRCZWdpbm5pbmcuZ2V0RW50aXR5QXQoc3RhcnRPZmZzZXQpXG4gICAgbGV0IHVybCA9ICcnXG4gICAgaWYgKGxpbmtLZXkpIHtcbiAgICAgIGNvbnN0IGxpbmtJbnN0YW5jZSA9IGNvbnRlbnRTdGF0ZS5nZXRFbnRpdHkobGlua0tleSlcbiAgICAgIHVybCA9IGxpbmtJbnN0YW5jZS5nZXREYXRhKCkudXJsXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGlua2luZzogdHJ1ZSxcbiAgICAgIHVybFxuICAgIH0sICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saW5rLmZvY3VzKCksIDApO1xuICAgIH0pXG5cbiAgfVxuXG4gIF9oYW5kbGVFbmRMaW5rKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGlua2luZzogZmFsc2UsXG4gICAgICB1cmw6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZUxpbmtLZXlEb3duKGUpIHtcbiAgICAgaWYoZS53aGljaCAhPT0gMTMpIHJldHVyblxuICAgICB0aGlzLl9oYW5kbGVMaW5rQ2hhbmdlKHRoaXMubGluay52YWx1ZSlcbiAgfVxuXG4gIF9oYW5kbGVMaW5rQ2hhbmdlKHVybCkge1xuICAgIGNvbnN0IHsgZWRpdG9yU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjb250ZW50U3RhdGUgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpXG4gICAgY29uc3QgY29udGVudFN0YXRlV2l0aEVudGl0eSA9IGNvbnRlbnRTdGF0ZS5jcmVhdGVFbnRpdHkoXG4gICAgICAnTElOSycsXG4gICAgICAnTVVUQUJMRScsXG4gICAgICB7IHVybCB9XG4gICAgKVxuICAgIGNvbnN0IGVudGl0eUtleSA9IGNvbnRlbnRTdGF0ZVdpdGhFbnRpdHkuZ2V0TGFzdENyZWF0ZWRFbnRpdHlLZXkoKVxuICAgIGNvbnN0IG5ld0VkaXRvclN0YXRlID0gRWRpdG9yU3RhdGUuc2V0KGVkaXRvclN0YXRlLCB7IGN1cnJlbnRDb250ZW50OiBjb250ZW50U3RhdGVXaXRoRW50aXR5IH0pXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZSA9IFJpY2hVdGlscy50b2dnbGVMaW5rKFxuICAgICAgbmV3RWRpdG9yU3RhdGUsXG4gICAgICBuZXdFZGl0b3JTdGF0ZS5nZXRTZWxlY3Rpb24oKSxcbiAgICAgIGVudGl0eUtleVxuICAgIClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRvclN0YXRlOiByZXBsYWNlbWVudFN0YXRlLFxuICAgICAgbGlua2luZzogZmFsc2VcbiAgICB9LCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWwuZm9jdXMoKSwgMCk7XG4gICAgfSlcbiAgfVxuXG4gIF9oYW5kbGVVbmxpbmsoKSB7XG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvclN0YXRlLmdldFNlbGVjdGlvbigpXG4gICAgaWYoc2VsZWN0aW9uLmlzQ29sbGFwc2VkKCkpIHJldHVyblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGUgPSBSaWNoVXRpbHMudG9nZ2xlTGluayhlZGl0b3JTdGF0ZSwgc2VsZWN0aW9uLCBudWxsKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZWRpdG9yU3RhdGU6IHJlcGxhY2VtZW50U3RhdGVcbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZShlZGl0b3JTdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3JTdGF0ZSB9KVxuICAgIGNvbnN0IHZhbHVlID0gY29udmVydFRvSFRNTCh7XG4gICAgICBlbnRpdHlUb0hUTUw6IChlbnRpdHksIG9yaWdpbmFsVGV4dCkgPT4ge1xuICAgICAgICBpZihlbnRpdHkudHlwZSA9PT0gJ0xJTksnKSB7XG4gICAgICAgICAgcmV0dXJuIDxhIGhyZWY9eyBlbnRpdHkuZGF0YS51cmwgfT57IG9yaWdpbmFsVGV4dCB9PC9hPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbFRleHRcbiAgICAgIH1cbiAgICB9KShlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXeXNpd3lnXG4iXX0=