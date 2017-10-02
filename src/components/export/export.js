import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import React from 'react'
import Item from './item'
import DragLayer from './drag_layer'
import _ from 'lodash'

class Export extends React.Component {

  render() {
    const { items } = this.props
    return (
      <div className="reframe-export">
        <p>Choose from the columns below to customize your export. Drag
        and drop the columns to adjust their order in the export.</p>
        <div className="reframe-export-list">
          { items.map((item, index) => (
            <Item key={`item_${index}`} { ...this._getItem(item, index) } />
          ))}
        </div>
      </div>
    )
  }

  constructor(props) {
    super(props)
    this._handleMove = _.throttle(props.onMove, 250)
  }

  _getItem(item, index) {
    const { onToggle } = this.props
    return {
      ...item,
      index,
      onMove: this._handleMove.bind(this),
      onToggle: onToggle.bind(this)
    }
  }

}

export default DragDropContext(HTML5Backend)(Export)
