import React from 'react'
import PropTypes from 'prop-types'

class Control extends React.Component {

  static PropTypes = {
  }

  render() {
    return (
      <input {...this._getConfig()} />
    )
  }

  _getConfig() {
    return {
    }
  }

}

export default Control
