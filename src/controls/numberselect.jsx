import React from 'react'
import ReactDOM from 'react-dom'
import Select from './select.jsx'

class NumberSelect extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    start: React.PropTypes.number.isRequired,
    end: React.PropTypes.number.isRequired,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  }

  static defaultProps = {
    code: null,
    disabled: false,
    placeholder: '',
    defaultValue: ''
  }

  render() {
    let options = [];
    let start = parseInt(this.props.start)
    let end = parseInt(this.props.end)
    if(start < end) {
      for(var i = start; i <= end; i++) {
        let value = (this.props.zeroPad) ? ('0' + parseInt(i)).slice (-2) : i
        options.push({key: value, value: value})
      }
    } else {
      for(var i = start; i >= end; i--) {
        let value = (this.props.zeroPad) ? ('0' + parseInt(i)).slice (-2) : i
        options.push({key: value, value: value})
      }
    }
    return <Select {...this.props} options={options} ref="control" />
  }

  getValue() {
    return this.refs.control.getValue()
  }

  setValue(value) {
    this.refs.control.setValue(value)
  }

  clearField() {
    this.refs.control.clearField()
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default NumberSelect
