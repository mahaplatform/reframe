import React from 'react'
import Typeahead from './core'
import SelectableTypeahead from './selectable'

export default class PolymorphicTypeahead extends React.Component {
  render() {
    if(this.props.selectable) {
      return <SelectableTypeahead ref="t" {...this.props}/>
    }
    else {
      return <Typeahead ref="t" {...this.props}/>
    }
  }

  clear() {
    this.refs.t.clear()
  }
}