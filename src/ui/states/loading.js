import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const isNotEmpty = _.negate(_.isEmpty)

const LoadingState = React.createClass({
  render() {
    if(isNotEmpty(this.props.children)) {
      return this.props.children
    }
    else {
      return (
        <div className={this.props.class}>{this.props.text}</div>
      )
    }
  }
})

LoadingState.defaultProps = {
  text: "Loading...",
  class: "loader"
}

export default LoadingState
