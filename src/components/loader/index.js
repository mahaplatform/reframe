import React from 'react'
import PropTypes from 'prop-types'

class Loader extends React.Component {

  static propTypes = {
    label: PropTypes.string
  }

  static defaultProps = {
    label: 'Loading'
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-loader">
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">{ label }</div>
        </div>
      </div>
    )
  }

}

export default Loader
