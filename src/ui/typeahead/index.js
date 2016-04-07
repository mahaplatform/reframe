import React from 'react'
import Typeahead from './core'
import SelectableTypeahead from './selectable'
import CategoryTypeahead from './category'

export default class PolymorphicTypeahead extends React.Component {
  render() {
    if(this.props.selectable) {
      return <SelectableTypeahead ref="t" {...this.props} />
    }
    else if(this.props.categories) {
      return <CategoryTypeahead ref="t" {...this.props} />
    }
    else {
      return <Typeahead ref="t" {...this.props} />
    }
  }

  clear() {
    this.refs.t.clear()
  }

  hideResults() {
    this.refs.t.hideResults()
  }
}
