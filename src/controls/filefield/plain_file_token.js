import PropTypes from 'prop-types'
import React from 'react'
import bytes from 'bytes'

class PlainFileToken extends React.Component {

  static propTypes = {
    file_name: PropTypes.string,
    file_size: PropTypes.number
  }

  render() {
    const { file_name, file_size } = this.props
    return (
      <div className={`reframe-filefield-file-preview ${this._getExt(file_name)}`}>
        <div className="reframe-filefield-file-preview-icon">
          <i className={`fa fa-fw fa-${this._getIcon(file_name)}`} />
        </div>
        <div className="reframe-filefield-file-preview-details">
          <div className="reframe-filefield-file-preview-filename">
            { file_name }
          </div>
          <div className="reframe-filefield-file-preview-filesize">
            { bytes(file_size) }
          </div>
        </div>
      </div>
    )
  }

  _getExt(file_name) {
    return file_name.split('.').pop().substr(0, 3)
  }

  _getIcon(file_name) {
    const ext = this._getExt(file_name)
    if(ext === 'pdf') return 'file-pdf-o'
    if(ext === 'xls') return 'file-excel-o'
    if(ext === 'doc') return 'file-word-o'
    if(ext === 'ppt') return 'file-powerpoint-o'
    return 'file-text-o'
  }

}

export default PlainFileToken
