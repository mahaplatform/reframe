import React from 'react'
import _ from 'lodash'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Cell from './cell'

class Row extends React.Component {

  static propTypes = {
    row: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array.isRequired,
    index: React.PropTypes.number,
    onMoveRow: React.PropTypes.func,
    onRemoveRow: React.PropTypes.func,
    connectDragSource: React.PropTypes.func,
    connectDragPreview: React.PropTypes.func,
    onUpdateCell: React.PropTypes.func,
    isDragging: React.PropTypes.bool
  }

  render() {
    const { index, row, columns, connectDragSource, connectDropTarget, connectDragPreview, onUpdateCell } = this.props
    return connectDropTarget(connectDragPreview(
      <tr>
        {connectDragSource(
          <td className="collapsing center aligned">
            <i className="icon sidebar"></i>
          </td>
        )}
        {columns.map((column, columnindex) => {
          let value = _.get(row, column.code) || column.defaultValue
          return <Cell {...column}
                       key={`column_${columnindex}`}
                       code={column.code}
                       index={index}
                       defaultValue={value}
                       onUpdateCell={onUpdateCell} />
        })}
        <td className="collapsing center aligned" onClick={this.handleRemoveRow.bind(this, index)}>
          <i className="icon remove"></i>
        </td>
      </tr>
    ))
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    })
  }

  componentDidUpdate() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    })
  }

  handleRemoveRow(index) {
    this.props.onRemoveRow(index)
  }

}

const itemTypes = {
  ROW: 'row'
}

const rowSource = {
  beginDrag(props) {
    return {
      index: props.index,
      columns: props.columns,
      row: props.row,
      width: null,
      parentTop: null,
      parentBottom: null
    }
  }
}

const rowTarget = {
  hover(props, monitor, component) {
    const item = monitor.getItem()
    const fromIndex = item.index
    const toIndex = props.index
    const element = findDOMNode(component)
    const hoverBoundingRect = element.getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top
    const parentNode = findDOMNode(component).parentNode
    const width = element.offsetWidth
    const height = hoverBoundingRect.bottom - hoverBoundingRect.top
    let top = 0
    let el = parentNode
    while (el) {
      if (el.tagName == 'BODY') {
        var yScroll = el.scrollTop || document.documentElement.scrollTop
        top += (el.offsetTop - yScroll + el.clientTop)
      } else {
        top += (el.offsetTop - el.scrollTop + el.clientTop)
      }
      el = el.offsetParent
    }
    item.width = width + 2
    item.parentTop = top - 1
    item.parentBottom = top + parentNode.offsetHeight - height
    if(fromIndex === toIndex) {
      return
    } else if(fromIndex < toIndex && hoverClientY < hoverMiddleY) {
      return
    } else if(fromIndex > toIndex && hoverClientY > hoverMiddleY) {
      return
    }
    props.onMoveRow(fromIndex, toIndex)
    item.index = toIndex
  }
}

const sourceCollector = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const targetCollector = (connect) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

Row = DragSource(itemTypes.ROW, rowSource, sourceCollector)(Row)
Row = DropTarget(itemTypes.ROW, rowTarget, targetCollector)(Row)

export default Row
