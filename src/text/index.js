import PropTypes from 'prop-types'
import Format from '../format'
import React from 'react'
import _ from 'lodash'

class Text extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    format: PropTypes.any
  }

  render() {
    const { defaultValue, format } = this.props
    const value = _.toString(defaultValue)
    return (
      <div className="reframe-text">
        <Format format={format} value={value} />
      </div>
    )
  }

}

export default Text
