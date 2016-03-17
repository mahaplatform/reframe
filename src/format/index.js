import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router'

class Format extends React.Component {

  render() {
    let Content = Default
    if(_.isFunction(this.props.format)) {
      Content = this.props.format
    } else if(this.props.format == 'status') {
      Content = Status
    } else if(this.props.format == 'price') {
      Content = Price
    } else if(this.props.format == 'date') {
      Content = Date
    } else if(this.props.format == 'datetime') {
      Content = DateTime
    } else if(this.props.format == 'check_times') {
      Content = CheckTimes
    } else if(this.props.format == 'check') {
      Content = Check
    } else if(this.props.format == 'capitalize') {
      Content = Capitalize
    } else if(this.props.format == 'email') {
      Content = Email
    } else if(this.props.format == 'raw') {
      Content = Raw
    } else if(this.props.value === '') {
      Content = Empty
    }
    return <Content {...this.props} />
  }

}

var Default = (props) => {
  return <span>{props.value}</span>
}

var Raw = (props) => {
  return <span dangerouslySetInnerHTML={{__html: props.value}}></span>
}

var Empty = (props) => {
  return <span dangerouslySetInnerHTML={{__html: '&nbsp;'}}></span>
}

var Status = (props) => {
  return <span className={props.value.toLowerCase()}>{props.value.toUpperCase()}</span>
}

var CheckTimes = (props) => {
  return ((props.value !== false && !_.isNull(props.value)) || props.value === true) ? <i className="icon green check" /> : <i className="icon red times" />
}

var Check = (props) => {
  return ((props.value !== false && !_.isNull(props.value)) || props.value === true) ? <i className="icon green check" /> : <span />
}

var Price = (props) => {
  return <span>{numeral(props.value).format('$0,0.00')}</span>
}

var Date = (props) => {
  return <span>{(props.value) ? moment(props.value).format('MM/DD/YY') : ''}</span>
}

var DateTime = (props) => {
  return <span>{(props.value) ? moment(props.value).format('MM/DD/YY @ hh:mm A') : ''}</span>
}

var Capitalize = (props) => {
  return <span>{props.value.toUpperCase()}</span>
}

var Email = (props) => {
  return <Link to={`mailto:${props.value}`}>{props.value}</Link>
}

export default Format
