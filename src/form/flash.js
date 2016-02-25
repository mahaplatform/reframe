import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'


class Flash extends React.Component {

  constructor() {
    super(props)
    this.state = {}
  }

  render() {
    if(_.any(this.state.errors)) {
      return (
        <div className="ui error message">
          <div className="header">
            {this.state.errors.message}
          </div>
        </div>
      )
    } else  {
      return <div />
    }

  }
}

export default Flash