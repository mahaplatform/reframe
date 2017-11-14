import React from 'react'
import qs from 'qs'

const dpis = [1,2]

const Preview = ({ file, preview, transforms }) => (
  <div className="reframe-filefield-preview">
    { file.asset ?
      <img src={`/imagecache/fit=cover&w=300&h=300${file.asset.path}`} title={ file.asset.original_file_name } /> :
      <div className="reframe-filefield-preview-image" style={{ backgroundImage: 'url(\''+preview+'\')' }} />
    }
    { file.asset &&
      <div className="reframe-filefield-preview-cache">
        { transforms && transforms.map((transform, index) => dpis.map((dpi, index) => (
          <img src={`/imagecache/${qs.stringify(transform)}&dpi=${dpi}${file.asset.path}`} key={`image_${index}`} />
        ))) }
      </div>
    }
  </div>
)

export default Preview
