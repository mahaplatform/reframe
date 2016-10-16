import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router'

class Format extends React.Component {

  render() {
    const { format } = this.props
    if(_.isFunction(format)) {
      return format(this.props)
    } else if(format === 'status') {
      return Status(this.props)
    } else if(format === 'price') {
      return Price(this.props)
    } else if(format === 'date') {
      return Date(this.props, 'MM/DD/YY')
    } else if(format === 'datetime') {
      return Date(this.props, 'MM/DD/YY @ hh:mm A')
    } else if(format === 'check_times') {
      return Check(this.props, true)
    } else if(format === 'check') {
      return Check(this.props, false)
    } else if(format === 'capitalize') {
      return Capitalize(this.props)
    } else if(format === 'email') {
      return Email(this.props)
    } else if(format === 'raw') {
      return Raw(this.props)
    } else if(this.props.value === '') {
      return Empty(this.props)
    } else {
      return Default(this.props)
    }
  }

}

const Default = (props) => {
  return <span>{props.value}</span>
}

const Raw = (props) => {
  return <span dangerouslySetInnerHTML={{__html: props.value}}></span>
}

const Empty = () => {
  return <span dangerouslySetInnerHTML={{__html: '&nbsp;'}}></span>
}

const Status = (props) => {
  return (props.value) ? <span className={props.value.toLowerCase()}>{props.value.toUpperCase()}</span> : <span />
}

const Check = (props, times) => {
  let alternate = (times) ? <i className="icon red times" /> : <span />
  return ((props.value !== false && !_.isNull(props.value)) || props.value === true) ? <i className="icon green check" /> : alternate
}

const Price = (props) => {
  return <span>{numeral(props.value).format('$0,0.00')}</span>
}

const Date = (props, format) => {
  return <span>{(props.value) ? moment(props.value).format(format) : ''}</span>
}

const Capitalize = (props) => {
  return <span>{props.value.toUpperCase()}</span>
}

const Email = (props) => {
  return <Link to={`mailto:${props.value}`}>{props.value}</Link>
}

export default Format
