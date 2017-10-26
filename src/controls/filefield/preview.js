import React from 'react'

const Preview = ({ file, preview }) => (
  <div className="reframe-filefield-preview">
    { file.asset ?
      <img src={`/imagecache/fit=cover&w=300&h=300${file.asset.path}`} title={ file.asset.original_file_name } /> :
      <div className="reframe-filefield-preview-image" style={{ backgroundImage: 'url(\''+preview+'\')' }} />
    }
  </div>
)

export default Preview
