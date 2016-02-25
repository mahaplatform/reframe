import React from 'react'
import ReactDOM from 'react-dom'

class Numberfield extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  }

  static defaultProps = {
    code        : null,
    disabled    : false,
    placeholder : '',
    defaultValue: '',
    onChange    : () => {}
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    return <input value={this.state.value} ref="control" autoComplete="off" onChange={this.handleChange.bind(this)} type="text" name={this.props.code} id={this.props.code} placeholder={this.props.placeholder} />
  }

  handleChange(event) {
    let value = event.target.value.replace(/[^\d+]/g, '')
    this.setValue(value)
    this.props.onChange(this.props.code, value)
  }

  getValue() {
    return this.refs.control.value || null
  }

  setValue(value) {
    this.setState({value})
  }

  clearField() {
    this.setState({value: null})
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default Numberfield
