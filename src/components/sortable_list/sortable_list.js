import PropTypes from 'prop-types'
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
    if(this.props.defaultValue) this._handleSet()
  }

  componentDidUpdate(prevProps) {
    const { defaultValue, items, onUpdate } = this.props
    if(!_.isEqual(prevProps.items, items)) onUpdate(items)
    if(!_.isEqual(prevProps.defaultValue, defaultValue)) this._handleSet()
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

  _handleSet() {
    const { defaultValue, onSet } = this.props
    onSet(defaultValue.map(item => ({
      ...item,
      checked: item.checked !== false
    })))
  }

}

export default SortableList
