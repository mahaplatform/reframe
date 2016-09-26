import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router'

class Format extends React.Component {

  render() {
    const { format } = this.props
    let Content = Default
    if(_.isFunction(format)) {
      Content = format
    } else if(format == 'status') {
      Content = Status
    } else if(format == 'price') {
      Content = Price
    } else if(format == 'date') {
      Content = Date
    } else if(format == 'datetime') {
      Content = DateTime
    } else if(format == 'check_times') {
      Content = CheckTimes
    } else if(format == 'check') {
      Content = Check
    } else if(format == 'capitalize') {
      Content = Capitalize
    } else if(format == 'email') {
      Content = Email
    } else if(format == 'raw') {
      Content = Raw
    } else if(this.props.value === '') {
      Content = Empty
    }
    return <Content {...this.props} />
  }

}

const Default = (props) => {
  return <span>{props.value}</span>
}

const Raw = (props) => {
  return <span dangerouslySetInnerHTML={{__html: props.value}}></span>
}

const Empty = (props) => {
  return <span dangerouslySetInnerHTML={{__html: '&nbsp;'}}></span>
}

const Status = (props) => {
  return (props.value) ? <span className={props.value.toLowerCase()}>{props.value.toUpperCase()}</span> : <span />
}

const CheckTimes = (props) => {
  return ((props.value !== false && !_.isNull(props.value)) || props.value === true) ? <i className="icon green check" /> : <i className="icon red times" />
}

const Check = (props) => {
  return ((props.value !== false && !_.isNull(props.value)) || props.value === true) ? <i className="icon green check" /> : <span />
}

const Price = (props) => {
  return <span>{numeral(props.value).format('$0,0.00')}</span>
}

const Date = (props) => {
  return <span>{(props.value) ? moment(props.value).format('MM/DD/YY') : ''}</span>
}

const DateTime = (props) => {
  return <span>{(props.value) ? moment(props.value).format('MM/DD/YY @ hh:mm A') : ''}</span>
}

const Capitalize = (props) => {
  return <span>{props.value.toUpperCase()}</span>
}

const Email = (props) => {
  return <Link to={`mailto:${props.value}`}>{props.value}</Link>
}

export default Format
