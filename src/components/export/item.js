import { DragSource, DropTarget } from 'react-dnd'
import React from 'react'

class Item extends React.Component {

  render() {
    const { label, connectDragSource, connectDropTarget, connectDragPreview } = this.props
    return connectDropTarget(connectDragPreview(
      <div className={ this._getClass() } onClick={ this._handleToggle.bind(this) }>
        <div className="reframe-export-label">
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

  // componentDidMount() {
  //   this.props.connectDragPreview(getEmptyImage(), {
  //     captureDraggingState: true
  //   })
  // }
  //
  // componentDidUpdate() {
  //   this.props.connectDragPreview(getEmptyImage(), {
  //     captureDraggingState: true
  //   })
  // }

  _getClass() {
    const { checked, isDragging, isDragLayer } = this.props
    const classes = ['reframe-export-item']
    if(!checked) classes.push('disabled')
    if(isDragging) classes.push('hidden')
    if(isDragLayer === true) classes.push('moving')
    return classes.join(' ')
  }

  _getIcon() {
    return this.props.checked ? 'check-square' : 'square-o'
  }

  _handleToggle() {
    const { index } = this.props
    this.props.onToggle(index)
  }

}

const rowSource = {
  beginDrag: (props) => ({
    index: props.index,
    label: props.label,
    checked: props.checked
  })
}

const rowTarget = {
  drop: (props, monitor, component) => {
    const item = monitor.getItem()
    const fromIndex = item.index
    const toIndex = props.index
    props.onMove(fromIndex, toIndex)
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

Item = DragSource('ITEM', rowSource, sourceCollector)(Item)
Item = DropTarget('ITEM', rowTarget, targetCollector)(Item)

export default Item
