import { DragSource, DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'
import React from 'react'

class Item extends React.Component {

  render() {
    const { label, connectDropTarget, connectDragPreview, connectDragSource } = this.props
    return connectDropTarget(connectDragPreview(
      <div className={ this._getClass() }>
        <div className="reframe-export-label" onClick={ this._handleToggle.bind(this) }>
          <i className={`fa fa-fw fa-${this._getIcon()}`} />
          { label }
        </div>
        { connectDragSource(
          <div className="reframe-export-icon">
            <i className="fa fa-bars" />
          </div>
        ) }
      </div>
    ))
  }

  _getClass() {
    const { checked, isDragging } = this.props
    const classes = ['reframe-export-item']
    if(!checked) classes.push('disabled')
    if(isDragging) classes.push('hidden')
    return classes.join(' ')
  }

  _getIcon() {
    return this.props.checked ? 'check-square' : 'square-o'
  }

  _handleToggle() {
    this.props.onToggle(this.props.index)
  }

}

const source = {
  beginDrag: (props) => ({
    index: props.index,
    label: props.label,
    checked: props.checked
  })
}

const target = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex) return
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
    props.onMove(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  }
}

const sourceCollector = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

const targetCollector = (connect) => ({
  connectDropTarget: connect.dropTarget()
})

Item = DragSource('ITEM', source, sourceCollector)(Item)
Item = DropTarget('ITEM', target, targetCollector)(Item)

export default Item
