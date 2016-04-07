import React from 'react'
import _ from 'lodash'
import Typeahead, {TypeaheadDefaultResult} from './core'

export default class CategoryTypeahead extends React.Component {

  static defaultProps = {
    onChooseResult: _.noop,
    itemComponent: TypeaheadDefaultResult,
    listComponent: CategoryResultList
  }
  
  constructor(props) {
    super(props)

  }
  
  render() {
    const ListComponent = this.props.listComponent || CategoryResultList
    return (
      <Typeahead
        {...this.props}
        ref="typeahead"
        listComponent={ListComponent}
        resultField={null} />
    )
  }

  clear() {
    this.refs.typeahead.clear()
  }

  hideResults() {
    this.refs.typeahead.hideResults()
  }
}

export class CategoryResultList extends React.Component {

  static propTypes = {
    results:        React.PropTypes.arrayOf(React.PropTypes.object),
    itemComponent:  React.PropTypes.element,
    onChooseResult: React.PropTypes.func
  }

  static defaultProps = {
    results:        [],
    itemComponent:  TypeaheadDefaultResult,
    onChooseResult: _.noop
  }

  render() {
    const { results, itemComponent, onChooseResult } = this.props
    const clickHandler = (r, e) => {
      e.preventDefault()
      e.stopPropagation()
      onChooseResult(r)
    }
    return (
      <div className="ui typeahead results">
        {_.flatMap(results, (group, name) => {
          return [
            <div className="category divider">{name}</div>,
            ..._.map(group, item => {
              return React.createElement(itemComponent, { result: item, onClick: _.partial(clickHandler, item) })
            })
          ]
        })}
      </div>
    )
  }

}
