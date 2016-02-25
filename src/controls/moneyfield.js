import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Moneyfield extends React.Component {

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
    onChange: () => {},
    showLabel: true
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    let fieldClass = `ui ${this.props.showLabel ? 'labeled' : ''} input moneyfield`
    return (
      <div className={fieldClass}>
        {this.props.showLabel ? <div className="ui label">$</div> : null}
        <input
          value={this.state.value}
          ref="control"
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          disabled={this.props.disabled}
          type="text"
          name={this.props.code}
          id={this.props.code}
          placeholder={this.props.placeholder} />
      </div>
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onChange(this.props.code, event.target.value)
  }

  handleBlur(event) {
    this.setValue(event.target.value)
    this.props.onChange(this.props.code, event.target.value)
  }

  getValue() {
    return this.refs.control.value || null;
  }

  setValue(value) {
    this.setState({value: this.format(value)})
  }

  clearField() {
    this.setState({value: null})
  }

  getReference() {
    return {[this.props.code]: this}
  }

  format(value) {
    return (_(value).toString().match(/^[\d\.]+$/)) ? parseFloat(value).toFixed(2) : ''
  }

}

export default Moneyfield
