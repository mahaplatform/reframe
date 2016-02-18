import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class Datefield extends React.Component {

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
    defaultValue: '',
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    return <input defaultValue={this.props.defaultValue} ref="control" autoComplete="off" type="text" name={this.props.code} id={this.props.code} placeholder={this.props.placeholder} />
  }

  componentDidMount() {
    $(this.refs.control).datepicker({ dateFormat: 'yy-mm-dd' })
    if(this.props.defaultValue) {
      _.defer(() => $(this.refs.control).datepicker('setDate', this.props.defaultValue))
    }
    $(this.refs.control).change(this.props.onChange)
  }

  getValue() {
    return this.refs.control.value || null;
  }

  setValue(value) {
    _.defer(() => $(this.refs.control).datepicker('setDate', value || this.props.defaultValue))
  }

  clearField() {
    $(this.refs.control).change(_.noop)
    $(this.refs.control).datepicker('setDate', null)
    $(this.refs.control).change(this.props.onChange)
  }

  getReference() {
    return {[this.props.code]: this}
  }

}
