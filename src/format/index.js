import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import numeral from 'numeral'

class Format extends React.Component {

  render() {
    const { format } = this.props
    if(_.isFunction(format)) {
      return format(this.props)
    } else if(format === 'status') {
      return Status(this.props)
    } else if(format === 'currency') {
      return Currency(this.props)
    } else if(format === 'date') {
      return Date(this.props, 'MM/DD/YY')
    } else if(format === 'datetime') {
      return Date(this.props, 'MM/DD/YY @ hh:mm A')
    } else if(format === 'check_times') {
      return Check(this.props, true)
    } else if(format === 'yes_no') {
      return YesNo(this.props, true)
    } else if(format === 'check') {
      return Check(this.props, false)
    } else if(format === 'capitalize') {
      return Capitalize(this.props)
    } else if(format === 'email') {
      return Email(this.props)
    } else if(format === 'link') {
      return Link(this.props)
    } else if(format === 'raw') {
      return Raw(this.props)
    } else if(format === 'element') {
      return Element(this.props)
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

const Element = (props) => {
  return <props.value />
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
  if(props.value === true) return <i className="icon green check" />
  if(times && props.value === false) return <i className="icon red remove" />
  return <span />
}

const YesNo = (props) => {
  return (props.value === false) ? <span className="no">NO</span> : <span className="yes">YES</span>
}

const Currency = (props) => {
  return <span>{numeral(props.value).format('$0,0.00')}</span>
}

const Date = (props, format) => {
  return <span>{(props.value) ? moment(props.value).format(format) : ''}</span>
}

const Capitalize = (props) => {
  return <span>{props.value.toUpperCase()}</span>
}

const Email = (props) => {
  return <a href={`mailto:${props.value}`}>{props.value}</a>
}

const Link = (props) => {
  return <a href={props.value} target="_blank">{props.value}</a>
}

export default Format
