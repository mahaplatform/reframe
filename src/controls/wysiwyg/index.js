import { CompositeDecorator, Editor, EditorState, RichUtils } from 'draft-js'
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
      showURLInput: false,
      urlValue: ''
    }
  }

  render() {
    return (
      <div className="maha-wysiwyg">
        <div className="maha-wysiwyg-header">
          <div className="maha-wysiwyg-header-section">
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'header-one') }>
              <i className="fa fa-fw fa-header" />
            </div>
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'BOLD') }>
              <i className="fa fa-fw fa-bold" />
            </div>
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'ITALIC') }>
              <i className="fa fa-fw fa-italic" />
            </div>
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleInlineStyle.bind(this, 'UNDERLINE') }>
              <i className="fa fa-fw fa-underline" />
            </div>
          </div>
          <div className="maha-wysiwyg-header-section">
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleLink.bind(this) }>
              <i className="fa fa-fw fa-link" />
            </div>
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleUnlink.bind(this) }>
              <i className="fa fa-fw fa-unlink" />
            </div>
          </div>
          <div className="maha-wysiwyg-header-section">
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'ordered-list-item') }>
              <i className="fa fa-fw fa-list-ol" />
            </div>
            <div className="maha-wysiwyg-header-icon" onClick={ this._handleBlockType.bind(this, 'unordered-list-item') }>
              <i className="fa fa-fw fa-list-ul" />
            </div>
          </div>
          <div className="maha-wysiwyg-header-section">
            <div className="maha-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-left" />
            </div>
            <div className="maha-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-center" />
            </div>
            <div className="maha-wysiwyg-header-icon">
              <i className="fa fa-fw fa-align-right" />
            </div>
          </div>
        </div>
        <div className="maha-wysiwyg-body">
          <div className="maha-wysiwyg-page">
            <Editor editorState={ this.state.editorState } onChange={ this._handleChange.bind(this) } />
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

  _handleLink() {
    // const { editorState, urlValue } = this.state;
    const { editorState } = this.state
    const urlValue = 'http://google.com'
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: urlValue }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity })
    this.setState({
      editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      ),
      showURLInput: false,
      urlValue: ''
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
