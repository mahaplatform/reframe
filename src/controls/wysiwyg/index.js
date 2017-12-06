import { CompositeDecorator, Editor, EditorState, RichUtils } from 'draft-js'
import { CSSTransition } from 'react-transition-group'
import { convertFromHTML, convertToHTML } from 'draft-convert'
import PropTypes from 'prop-types'
import React from 'react'

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
    const decorator = new CompositeDecorator([
      { strategy: findLinkEntities, component: Link }
    ])
    this.state = {
      editorState: EditorState.createEmpty(decorator),
      link: false,
      urlValue: ''
    }
  }

  render() {
    const { editorState, link } = this.state
    return (
      <div className="reframe-wysiwyg">
        <CSSTransition key="reframe-wysiwyg-modal-overlay" in={ link } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-wysiwyg-modal-overlay" onClick={ this._handleLinkClose.bind(this )} />
        </CSSTransition>
        <CSSTransition key="reframe-wysiwyg-modal" in={ link } classNames="expanded" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="reframe-wysiwyg-modal">
            <input type="text" placeholder="Type a link..." ref={ node => this.link = node } onKeyDown={ this._handleLinkKeyDown.bind(this) } />
          </div>
        </CSSTransition>
        <div className="reframe-wysiwyg-header">
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'header-one') }>
              <i className="fa fa-fw fa-header" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'BOLD') }>
              <i className="fa fa-fw fa-bold" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'STRIKETHROUGH') }>
              <i className="fa fa-fw fa-strikethrough" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'ITALIC') }>
              <i className="fa fa-fw fa-italic" />
            </div>
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'UNDERLINE') }>
              <i className="fa fa-fw fa-underline" />
            </div>
          </div>
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon" onClick={ this._handleLinkBegin.bind(this) }>
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
          <div className="reframe-wysiwyg-header-section">
            <div className="reframe-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-left" />
            </div>
            <div className="reframe-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-center" />
            </div>
            <div className="reframe-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-right" />
            </div>
          </div>
        </div>
        <div className="reframe-wysiwyg-body">
          <div className="reframe-wysiwyg-page">
            <Editor ref={ node => this.el = node } editorState={ editorState } onChange={ this._handleChange.bind(this) } />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue } = this.props
    if(defaultValue) {
      const editorState = EditorState.createWithContent(convertFromHTML(defaultValue))
      this._handleChange(editorState)
    }
    this.props.onReady()
  }

  _getBody() {
    return {
      ref: node => this.el = node,
      contentEditable: true,
      onInput: this._handleChange.bind(this),
      dangerouslySetInnerHTML: { __html: 'foo' }
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

  _handleLinkBegin() {
    const link = true
    this.setState({ link })
    setTimeout(() => this.link.focus(), 500)
  }

  _handleLinkKeyDown(e) {
    if(e.which === 13) this._handleLinkChange(e)
  }

  _handleLinkClose() {
    this.setState({
      link: false
    }, () => {
      setTimeout(() => this.el.focus(), 0)
    })
  }

  _handleLinkChange(e) {
    e.preventDefault()
    const { editorState } = this.state
    const url = e.target.value
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
    const replacement = RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    )
    this.setState({
      editorState: replacement,
      link: false
    }, () => {
      setTimeout(() => this.el.focus(), 0)
    })
  }

  _handleUnlink(e) {
    e.preventDefault()
    const { editorState } = this.state
    const selection = editorState.getSelection()
    // if (!selection.isCollapsed()) return
    this.setState({
      editorState: RichUtils.toggleLink(editorState, selection, null)
    })
  }

  _handleChange(editorState) {
    this.setState({ editorState })
    const value = convertToHTML(editorState.getCurrentContent())
    this.props.onChange(value)
  }

}

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    )
  }, callback)
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <a href={url}>
      {props.children}
    </a>
  )
}

export default Wysiwyg
