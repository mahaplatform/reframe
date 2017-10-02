import HTML5Backend from 'react-dnd-html5-backend'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import React from 'react'
import Item from './item'
import _ from 'lodash'
import qs from 'qs'

class Export extends React.Component {

  render() {
    const { items } = this.props
    return (
      <div className="reframe-export">
        <div className="reframe-export-header">
          <p>Choose from the columns below to customize your export. Drag
          and drop the columns to adjust their order in the export.</p>
        </div>
        <div className="reframe-export-body">
          <div className="reframe-export-list">
            { items.map((item, index) => (
              <Item key={`item_${item.key}`} { ...this._getItem(item, index) } />
            ))}
          </div>
        </div>
        <div className="reframe-export-footer">
          <div className="ui fluid red button" onClick={ this._handleClick.bind(this) }>
            Export
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSet } = this.props
    if(defaultValue) onSet(defaultValue)
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

  _handleClick() {
    const { endpoint, filter, token, items } = this.props
    const query = {
      ...filter,
      $select: items.filter(item => item.checked).map(item => item.key)
    }
    const url = `${endpoint}.csv?token=${token}&download=true&${qs.stringify(query)}`
    window.location.href = url
  }

}

export default DragDropContext(HTML5Backend)(Export)
