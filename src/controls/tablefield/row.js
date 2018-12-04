import { DragSource, DropTarget } from 'react-dnd'
import PropTypes from 'prop-types'
import React from 'react'

class Row extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
    connectDropTarget: PropTypes.func,
    connectDragPreview: PropTypes.func,
    connectDragSource: PropTypes.func,
    index: PropTypes.number,
    isDragging: PropTypes.bool,
    row: PropTypes.object,
    onRemove: PropTypes.func,
    onReorder: PropTypes.func
  }

  _handleRemove = this._handleRemove.bind(this)

  render() {
    const { connectDropTarget, connectDragPreview, connectDragSource, columns, index, row } = this.props

    return connectDropTarget(connectDragPreview(
      <div className={ this._getClass() }>
        { connectDragSource(
          <div className="reframe-tablefield-handle">
            <i className="fa fa-fw fa-bars" />
          </div>
        ) }
        { columns.map((column, i) => (
          <div className="reframe-tablefield-column" key={`column_${i}`}>
            <input type="text" defaultValue={ row[column.key] } />
          </div>
        ))}
        <div className="reframe-tablefield-actions" onClick={ this._handleRemove.bind(this, index) }>
          <i className="fa fa-fw fa-remove" />
        </div>
      </div>
    ))
  }

  _getClass() {
    const { isDragging } = this.props
    const classes = ['reframe-tablefield-row']
    if(isDragging) classes.push('dragging')
    return classes.join(' ')
  }

  _handleRemove(index) {
    this.props.onRemove(index)
  }

}

const source = {
  beginDrag: (props) => ({
    index: props.index,
    onReorder: props.onReorder
  }),
  endDrag: (props, monitor, component) => {
    const source = monitor.getItem()
    const target = monitor.getDropResult()
    if(!target) return
    source.onReorder(source.index, target.index)
  }
}

const target = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex) return
    props.onReorder(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  },
  drop: (props, monitor, component) => ({
    index: props.index
  })
}

const sourceCollector = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

const targetCollector = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
})

Row = DragSource('ITEM', source, sourceCollector)(Row)
Row = DropTarget('ITEM', target, targetCollector)(Row)

export default Row
