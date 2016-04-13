import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import ErrorMessage from '../messages/error'

const isNotEmpty = _.negate(_.isEmpty)

const ErrorState = React.createClass({
  render() {
    if(isNotEmpty(this.props.children)) {
      return this.props.children
    }
    else {
      return <ErrorMessage title={this.props.title} message={this.props.text} />
    }
  }
})

ErrorState.defaultProps = {
  title: "Couldn't load content",
  text: "The server responded with an error, so this content could not be loaded right now.",
  class: "ui negative message"
}

export default ErrorState
