import React from 'react'
import bytes from 'bytes'

const Preview = ({ file, preview }) => (
  <div className="reframe-filefield-preview">
    { preview ?
      <div className="reframe-filefield-preview-image" style={{ backgroundImage: 'url(\''+preview+'\')' }} /> :
      <img src={`/imagecache/fit=cover&w=300&h=300${file.asset.path}`} title={ file.asset.original_file_name } />
    }
    <div className="reframe-filefield-preview-caption">
      <p>
        { file.fileName } ({ bytes(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase() })
      </p>
    </div>
  </div>
)

export default Preview
