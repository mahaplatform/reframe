import { CompositeDecorator, Editor, EditorState, RichUtils } from 'draft-js'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import { CSSTransition } from 'react-transition-group'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React from 'react'

import { linkStrategy, Link } from './link'

class Wysiwyg extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    onChange: (value) => {},
    onReady: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      editorState: null,
      linking: false,
      url: null
    }
  }

  render() {
    const { editorState, linking } = this.state
    return (
      <div className="reframe-wysiwyg">
        <div className="reframe-wysiwyg-header">
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'header-one') }>
              <i className="fa fa-fw fa-header" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'BOLD') }>
              <i className="fa fa-fw fa-bold" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'ITALIC') }>
              <i className="fa fa-fw fa-italic" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'UNDERLINE') }>
              <i className="fa fa-fw fa-underline" />
            </div>
          </div>
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleBeginLink.bind(this) }>
              <i className="fa fa-fw fa-link" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleUnlink.bind(this) }>
              <i className="fa fa-fw fa-unlink" />
            </div>
          </div>
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'ordered-list-item') }>
              <i className="fa fa-fw fa-list-ol" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'unordered-list-item') }>
              <i className="fa fa-fw fa-list-ul" />
            </div>
          </div>
        </div>
        <CSSTransition in={ linking } classNames="expanded" timeout={ 150 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-wysiwyg-input">
            <div className="reframe-wysiwyg-input-element">
              <input { ...this._getLinkInput()}/>
            </div>
            <div className="reframe-wysiwyg-input-icon" onClick={ this._handleEndLink.bind(this) }>
              <i className="fa fa-times" />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition in={ linking } classNames="expanded" timeout={ 150 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-wysiwyg-overlay" onClick={ this._handleEndLink.bind(this) } />
        </CSSTransition>
        <div className="reframe-wysiwyg-body">
          <div className="reframe-wysiwyg-page">
            { editorState && <Editor { ...this._getEditor() } /> }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const editorState = this._getInitialState()
    this._handleChange(editorState)
    this.props.onReady()
  }

  _getInitialState() {
    const decorator = this._getDecorator()
    const defaultContent = this._getDefaultContent()
    if(defaultContent) return EditorState.createWithContent(defaultContent, decorator)
    return EditorState.createEmpty(decorator)
  }

  _getDecorator() {
    return new CompositeDecorator([
      {
        strategy: linkStrategy,
        component: Link
      }
    ])
  }

  _getDefaultContent() {
    const { defaultValue } = this.props
    if(!defaultValue) return null
    return convertFromHTML({
      htmlToEntity: (nodeName, node, createEntity) => {
        if (nodeName === 'a') {
          return createEntity(
            'LINK',
            'MUTABLE',
            { url: node.href }
          )
        }
      }
    })(defaultValue)
  }

  _getLinkInput() {
    return {
       type: 'text',
       placeholder: 'Enter a link',
       ref: node => this.link = node,
       defaultValue: this.state.url,
       onKeyDown: this._handleLinkKeyDown.bind(this)
    }
  }

  _getEditor() {
    const { editorState } = this.state
    return {
      ref: node => this.el = node,
      editorState: editorState,
      onChange: this._handleChange.bind(this),
      blockStyleFn: this._getBlockStyle
    }
  }

  _handleInlineStyle(style) {
    this._handleChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      style
    ))
  }

  _handleBlockType(blockType) {
    this._handleChange(RichUtils.toggleBlockType(
      this.state.editorState,
      blockType
    ))
  }

  _handleBeginLink() {
    const { editorState } = this.state
    const selection = editorState.getSelection()
    if (selection.isCollapsed()) return
    const contentState = editorState.getCurrentContent()
    const startKey = editorState.getSelection().getStartKey()
    const startOffset = editorState.getSelection().getStartOffset()
    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
    const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
    let url = ''
    if (linkKey) {
      const linkInstance = contentState.getEntity(linkKey)
      url = linkInstance.getData().url
    }
    this.setState({
      linking: true,
      url
    }, () => {
      setTimeout(() => this.link.focus(), 0);
    })

  }

  _handleEndLink() {
    this.setState({
      linking: false,
      url: null
    })
  }

  _handleLinkKeyDown(e) {
     if(e.which !== 13) return
     this._handleLinkChange(this.link.value)
  }

  _handleLinkChange(url) {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
    const replacementState = RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    )
    this.setState({
      editorState: replacementState,
      linking: false
    }, () => {
      setTimeout(() => this.el.focus(), 0);
    })
  }

  _handleUnlink() {
    const { editorState } = this.state
    const selection = editorState.getSelection()
    if(selection.isCollapsed()) return
    const replacementState = RichUtils.toggleLink(editorState, selection, null)
    this.setState({
      editorState: replacementState
    })
  }

  _handleChange(editorState) {
    this.setState({ editorState })
    const value = convertToHTML({
      entityToHTML: (entity, originalText) => {
        if(entity.type === 'LINK') {
          return <a href={ entity.data.url }>{ originalText }</a>
        }
        return originalText
      }
    })(editorState.getCurrentContent())
    this.props.onChange(value)
  }

}

export default Wysiwyg
