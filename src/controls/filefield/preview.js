import ImageFileToken from './image_file_token'
import PlainFileToken from './plain_file_token'
import PropTypes from 'prop-types'
import React from 'react'
import qs from 'qs'

class Preview extends React.Component {

  static propTypes = {
    file: PropTypes.object,
    preview: PropTypes.string,
    onRemove: PropTypes.func
  }

  render() {

    const dpis = [1,2]

    const { file } = this.props

    const content_type = file.contentType || file.asset.content_type

    const isImage = (content_type.split('/')[0] === 'image')

    const type = isImage ? 'image' : 'plain'

    return (
      <div className={`reframe-filefield-token ${type}`}>
        { file.status === 'added' &&
          <div className="reframe-filefield-progress">
            <div className="ui green progress">
              <div className="bar" style={{ width: 0 }} />
            </div>
          </div>
        }
        { file.status === 'uploading' &&
          <div className="reframe-filefield-progress">
            <div className="ui green progress">
              <div className="bar" style={{ width: `${file.progress}%`}}>
                <div className="progress">{ file.progress }%</div>
              </div>
            </div>
          </div>
        }
        <div className="reframe-filefield-remove" onClick={ this._handleRemove.bind(this) }>
          { isImage ? <i className="fa fa-fw fa-times-circle" /> : <i className="fa fa-fw fa-times" /> }
        </div>
        { isImage ? <ImageFileToken { ...this._getImageFile() } /> : <PlainFileToken { ...this._getPlainFile() } /> }
      </div>
    )
  }

  _getImageFile() {
    const { file, preview } = this.props
    return {
      file: file.asset,
      preview
    }
  }

  _getPlainFile() {
    const { file } = this.props
    const file_name = file.fileName || file.asset.file_name
    const file_size = file.fileSize || file.asset.file_size
    return {
      file_name,
      file_size
    }
  }

  _handleRemove() {
    this.props.onRemove()
  }

}

export default Preview
