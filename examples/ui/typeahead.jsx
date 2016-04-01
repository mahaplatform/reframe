import React from 'react'
import ReactDOM from 'react-dom'
import Typeahead from 'ui/typeahead'
import Logger from 'utils/logger'

export default class TypeaheadExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Typeahead</h1>
        <Typeahead ref="control" endpoint="/examples/data.json" resultField="records" onChooseResult={this.onChoose.bind(this)}/>
      </div>
    )
  }

  onChoose(item) {
    Logger.log(`Chose item ${item.id}`)
    this.refs.control.clear()
  }

}
