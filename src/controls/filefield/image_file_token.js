import PropTypes from 'prop-types'
import React from 'react'

class ImageFileToken extends React.Component {

  static propTypes = {
    file: PropTypes.object,
    preview: PropTypes.string
  }

  render() {

    const { file, preview } = this.props

    return (
      <div className="reframe-filefield-preview-image">
        { preview && <div className="reframe-filefield-preview-image-asset" style={{ backgroundImage: 'url(\''+preview+'\')' }} /> }
        { file && <img src={`/imagecache/fit=cover&w=300&h=300${file.path}`} title={ file.file_name } /> }
      </div>
    )
  }

}

export default ImageFileToken
