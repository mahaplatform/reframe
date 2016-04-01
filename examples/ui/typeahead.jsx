import React from 'react'
import ReactDOM from 'react-dom'
import Typeahead from 'ui/typeahead'
import Logger from 'utils/logger'

// You can specify custom item renderers for the typeahead results.
// They receive a single prop, called "result", which contains all
// the data from that result item.
const TypeaheadItem = ({result}) => {
  return (
    <div class="item">
      <div className="title"><i className="ui user icon"></i><em>{result.first_name} {result.last_name}</em></div>
    </div>
  )
}

export default class TypeaheadExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Typeahead</h1>
        <Typeahead ref="control" endpoint="/examples/data.json" resultField="records"
                   onChooseResult={this.onChoose.bind(this)} itemComponent={TypeaheadItem}/>
      </div>
    )
  }

  onChoose(item) {
    Logger.log(`Chose item ${item.id}`)
    this.refs.control.clear()
  }

}
