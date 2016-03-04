import React from 'react'
import ReactDOM from 'react-dom'
import Feed from 'feed'
import Logger from 'utils/logger'

export default class FormExamples extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Feed records={this.state.records} />
      </div>
    )
  }

}
