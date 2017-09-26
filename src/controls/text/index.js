import PropTypes from 'prop-types'
import Format from '../../utils/format'
import React from 'react'
import _ from 'lodash'

class Text extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    format: PropTypes.any,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    defaultValue: '',
    disabled: false,
    format: null,
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {}
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
