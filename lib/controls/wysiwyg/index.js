'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draftJs = require('draft-js');

var _draftConvert = require('draft-convert');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wysiwyg = function (_React$Component) {
  _inherits(Wysiwyg, _React$Component);

  function Wysiwyg(props) {
    _classCallCheck(this, Wysiwyg);

    var _this = _possibleConstructorReturn(this, (Wysiwyg.__proto__ || Object.getPrototypeOf(Wysiwyg)).call(this, props));

    var decorator = new _draftJs.CompositeDecorator([{ strategy: findLinkEntities, component: Link }]);
    _this.state = {
      editorState: _draftJs.EditorState.createEmpty(decorator),
      showURLInput: false,
      urlValue: ''
    };
    return _this;
  }

  _createClass(Wysiwyg, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'maha-wysiwyg' },
        _react2.default.createElement(
          'div',
          { className: 'maha-wysiwyg-header' },
          _react2.default.createElement(
            'div',
            { className: 'maha-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'header-one') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-header' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'BOLD') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-bold' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'ITALIC') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-italic' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleInlineStyle.bind(this, 'UNDERLINE') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-underline' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'maha-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleLink.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-link' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleUnlink.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-unlink' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'maha-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'ordered-list-item') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-list-ol' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon', onClick: this._handleBlockType.bind(this, 'unordered-list-item') },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-list-ul' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'maha-wysiwyg-header-section' },
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-align-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-align-center' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'maha-wysiwyg-header-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-align-right' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'maha-wysiwyg-body' },
          _react2.default.createElement(
            'div',
            { className: 'maha-wysiwyg-page' },
            _react2.default.createElement(_draftJs.Editor, { editorState: this.state.editorState, onChange: this._handleChange.bind(this) })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      if (defaultValue) {
        var editorState = _draftJs.EditorState.createWithContent((0, _draftConvert.convertFromHTML)(defaultValue));
        this._handleChange(editorState);
      }
      this.props.onReady();
    }
  }, {
    key: '_getBody',
    value: function _getBody() {
      var _this2 = this;

      return {
        ref: function ref(node) {
          return _this2.el = node;
        },
        contentEditable: true,
        onInput: this._handleChange.bind(this),
        dangerouslySetInnerHTML: { __html: 'foo' }
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
    key: '_handleLink',
    value: function _handleLink() {
      // const { editorState, urlValue } = this.state;
      var editorState = this.state.editorState;

      var urlValue = 'http://google.com';
      var contentState = editorState.getCurrentContent();
      var contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: urlValue });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      var newEditorState = _draftJs.EditorState.set(editorState, { currentContent: contentStateWithEntity });
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey),
        showURLInput: false,
        urlValue: ''
      });
    }
  }, {
    key: '_handleUnlink',
    value: function _handleUnlink(e) {
      e.preventDefault();
      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      // if (!selection.isCollapsed()) return
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(editorState, selection, null)
      });
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(editorState) {
      this.setState({ editorState: editorState });
      var value = (0, _draftConvert.convertToHTML)(editorState.getCurrentContent());
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


function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

var Link = function Link(props) {
  var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
      url = _props$contentState$g.url;

  return _react2.default.createElement(
    'a',
    { href: url },
    props.children
  );
};

exports.default = Wysiwyg;