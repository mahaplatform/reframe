import React from 'react'
import { DragLayer } from 'react-dnd'
import Item from './item'

class TableDragLayer extends React.Component {

  render() {
    const { item, isDragging } = this.props
    if(!isDragging) return null
    return (
      <div style={ this._getItemStyles(this.props) }>
        <Item { ...item } />
      </div>
    )
  }

  _getItemStyles(props) {
    const { initialOffset, currentOffset, item } = props
    return {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 100,
      left: 0,
      top: 0
    }
  }

}

const collect = (monitor) => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
})

export default DragLayer(collect)(TableDragLayer)
