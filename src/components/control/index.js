import React from 'react'
import _ from 'lodash'
import * as Controls from '../../controls'

const standard = Object.keys(Controls).reduce((standard, name) => ({
  ...standard,
  [name.toLowerCase()]: Controls[name]
}), {})

class Control extends React.Component {

  static defaultProps = {
    type: 'textfield',
    options: []
  }

  render() {
    return (
      <div className="reframe-control">
        { React.createElement(this._getElement(), this.props) }
      </div>
    )
  }

  _getElement() {
    const { type } = this.props
    return _.isString(type) ? _.get(standard, type) : type
  }

}

export default Control
