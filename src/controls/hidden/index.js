import PropTypes from 'prop-types'
import React from 'react'

class Hidden extends React.Component {

  static propTypes = {
    onReady: PropTypes.func
  }

  render() {
    return null
  }

  componentDidMount() {
    this.props.onReady()
  }

}

export default Hidden
