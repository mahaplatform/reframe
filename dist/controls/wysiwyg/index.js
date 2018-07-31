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