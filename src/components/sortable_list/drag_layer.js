import React from 'react'
import { DragLayer } from 'react-dnd'
import Item from './item'

class TableDragLayer extends React.Component {

  render() {
    const { item } = this.props
    return (
      <div className="reframe-sortable-list-drag-layer" style={ this._getItemStyles(this.props) }>
        <Item { ...item } />
      </div>
    )
  }

  _getItemStyles(props) {
    const { initialOffset, currentOffset } = props
    if(!currentOffset) return { display: 'none' }
    const top = currentOffset.y - initialOffset.y
    return {
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 100,
      width: '100%',
      left: 0,
      top: `${top}px`
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
