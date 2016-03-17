import ReactDOM from 'react-dom'
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import numeral from 'numeral'
import Format from '../../format'

class Cell extends React.Component {

  render() {
    let classes = (!this.props.column.primary) ? ['secondary'] : []
    if(this.props.column.collapsing) {
      classes.push('collapsing')
    }
    if(this.props.column.aligned && _.includes(['left','center','right'], this.props.column.aligned)) {
      classes.push(`${this.props.column.aligned} aligned`)
    }
    if(this.props.column.cell == 'id') {
      classes.push('collapsing center aligned')
    } else if(this.props.column.cell == 'status') {
      classes.push('collapsing')
    } else if(this.props.column.cell == 'price') {
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'date') {
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'datetime') {
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'check_times') {
      classes.push('collapsing center aligned')
    } else if(this.props.column.cell == 'check') {
      classes.push('collapsing center aligned')
    }
    let value = _.get(this.props, this.props.column.key)
    let format = this.props.column.cell
    return (
      <td className={classes.join(' ')}>
        <Format {...this.props} format={format} value={value} />
      </td>
    )
  }

}

export default Cell
