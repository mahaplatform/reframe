import React from 'react'
import PropTypes from 'prop-types'

class Textarea extends React.Component {

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

export default Textarea
