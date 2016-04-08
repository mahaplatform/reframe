import React from 'react'
import ReactDOM from 'react-dom'
import numeral from 'numeral'
import _ from 'lodash'

class Numberfield extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    trim: React.PropTypes.bool
  }

  static defaultProps = {
    code         : null,
    disabled     : false,
    placeholder  : '',
    defaultValue : '',
    format       : null,
    trim         : true,
    onChange     : () => {}
  }

  constructor(props) {
    super(props)
    let value = _.toString(props.defaultValue)
    this.state = { value: this.formatValue(value) }
  }

  render() {
    return <input value={this.state.value}
                  ref="control"
                  autoComplete="off"
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.handleBlur.bind(this)}
                  type="text" name={this.props.code}
                  id={this.props.code}
                  placeholder={this.props.placeholder} />
  }

  handleChange(event) {
    let value = event.target.value.replace(/[^\d\.+]/g, '')
    this.setState({value: value})
    this.props.onChange(this.props.code, value)
  }

  handleBlur(event) {
    let value = event.target.value.replace(/[^\d\.+]/g, '')
    this.setValue(value)
    this.props.onChange(this.props.code, value)
  }

  getValue() {
    return this.refs.control.value || null
  }

  setValue(value) {
    this.setState({value: this.formatValue(value)})
  }

  clearField() {
    this.setState({value: null})
  }

  getReference() {
    return {[this.props.code]: this}
  }

  formatValue(value) {
    if(!_.isEmpty(value)) {
      if(this.props.trim) { value = value.trim() }
      if(this.props.format != null) { value = numeral(value).format(this.props.format) }
    }
    return value
  }

}

export default Numberfield
