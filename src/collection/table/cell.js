import ReactDOM from 'react-dom'
import React from 'react'
import _ from 'lodash'

class Cell extends React.Component {

  render() {
    let classes = (!this.props.column.primary) ? ['secondary'] : []
    if(this.props.column.collapsing) {
      classes.push('collapsing')
    }
    if(this.props.column.aligned && _.includes(['left','center','right'], this.props.column.aligned)) {
      classes.push(`${this.props.column.aligned} aligned`)
    }
    var Content = DefaultCell
    if(this.props.column.cell == 'id') {
      classes.push('collapsing center aligned')
    } else if(this.props.column.cell == 'status') {
      Content = StatusCell
      classes.push('collapsing')
    } else if(this.props.column.cell == 'price') {
      Content = PriceCell
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'date') {
      Content = DateCell
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'datetime') {
      Content = DateTimeCell
      classes.push('collapsing right aligned')
    } else if(this.props.column.cell == 'check_times') {
      Content = CheckTimesCell
      classes.push('collapsing center aligned')
    } else if(this.props.column.cell == 'check') {
      Content = CheckCell
      classes.push('collapsing center aligned')
    } else if(this.props.column.cell == 'capitalize') {
      Content = CapitalizeCell
    } else if(this.props.column.cell) {
      Content = this.props.column.cell
    }
    return (
      <td className={classes.join(' ')}>
        <Content {...this.props} />
      </td>
    )
  }

}

var DefaultCell = (props) => {
  return <span>{_.get(props, props.column.key)}</span>
}

var StatusCell = (props) => {
  var status = _.get(props, props.column.key)
  return <span className={status.toLowerCase()}>{status.toUpperCase()}</span>
}

var CheckTimesCell = (props) => {
  return (_.get(props, props.column.key)) ? <i className="icon green check" /> : <i className="icon red times" />
}

var CheckCell = (props) => {
  return (_.get(props, props.column.key)) ? <i className="icon green check" /> : <span />
}

var PriceCell = (props) => {
  return <span>{numeral(_.get(props, props.column.key)).format('$0,0.00')}</span>
}

var DateCell = (props) => {
  var value = _.get(props, props.column.key)
  return <span>{(value) ? moment(new Date(value)).format('MM/DD/YY') : ''}</span>
}

var DateTimeCell = (props) => {
  var value = _.get(props, props.column.key)
  return <span>{(value) ? moment(new Date(value)).format('MM/DD/YY @ hh:mm A') : ''}</span>
}

var CapitalizeCell = (props) => {
  return <span>{_.get(props, props.column.key).toUpperCase()}</span>
}

export default Cell
