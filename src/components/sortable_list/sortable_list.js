import HTML5Backend from 'react-dnd-html5-backend'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import React from 'react'
import Item from './item'
import _ from 'lodash'

class SortableList extends React.Component {

  render() {
    const { items } = this.props
    return (
      <div className="reframe-sortable-list">
        { items.map((item, index) => (
          <Item key={`item_${index}`} { ...this._getItem(item, index) } />
        ))}
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSet } = this.props
    if(defaultValue) onSet(defaultValue.map(item => ({
      ...item,
      checked: item.checked !== false
    })))
  }

  componentDidUpdate(prevProps) {
    const { items, onUpdate } = this.props
    if(!_.isEqual(prevProps.items, items)) onUpdate(items)
  }

  _getItem(item, index) {
    const { onMove, onToggle } = this.props
    return {
      label: item.label,
      checked: item.checked,
      index,
      onMove: onMove.bind(this),
      onToggle: onToggle.bind(this)
    }
  }

}

export default DragDropContext(HTML5Backend)(SortableList)
