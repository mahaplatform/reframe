import React from 'react'
import ReactDOM from 'react-dom'
import Select from './select.jsx'

class MonthSelect extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
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

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let options = [];
    for(var i in months) {
      let m = ('0' + (parseInt(i)+1)).slice (-2)
      let month = months[i];
      if(this.props.show == 'both') {
        var value = `${month} (${m})`
      } else if(this.props.include == 'number') {
        var value = m
      } else {
        var value = month
      }
      options.push({key: m, value: value});
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

export default MonthSelect
