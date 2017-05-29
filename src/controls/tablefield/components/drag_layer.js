import React from 'react'
import { DragLayer } from 'react-dnd';
import Row from './row'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0
}

function getItemStyles(props) {
  const { initialOffset, currentOffset, item } = props;

  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  const top = Math.min(Math.max(currentOffset.y, item.parentTop), item.parentBottom)

  return {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: `${initialOffset.x - 1}px`,
    top: `${top}px`,
    width: `${item.width}px`
  }

}

class TableDragLayer extends React.Component {

  render() {
    const { item, isDragging } = this.props

    if (!isDragging) {
      return null
    }

    const style = getItemStyles(this.props)

    return (
      <div style={style}>
        <table className="ui celled compact unstackable table">
          <tbody>
            <Row  row={item.row} columns={item.columns} />
          </tbody>
        </table>
      </div>
    )
  }

}

TableDragLayer = DragLayer((monitor) => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))(TableDragLayer)

export default TableDragLayer