import React from 'react'
import PropTypes from 'prop-types'

class Textfield extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func
  }

  render() {
    return <input ref="input" { ...this._getConfig() } />
  }

  _getConfig() {
    return {
      autoComplete: this.props.autoComplete,
      placeholder: this.props.placeholder,
      type: "text",
      value: this.state.value,
      onChange: this._handleChange.bind(this),
      onBlur: this._handleBlur.bind(this),
      onFocus: this._handleFocus.bind(this),
      onKeyPress: this._handleKeyPress.bind(this),
      onKeyUp: this._handleKeyUp.bind(this),
      onKeyDown: this._handleKeyDown.bind(this)
    }
  }

  componentDidMount() {
    this.props.onSet(this.props.defaultValue)
  }

  _handleChange(event) {
    this.setValue(event.target.value)
    this.props.onChange(event.target.value)
  }

  _handleBlur(event) {
    this.props.onBlur(this.state.value)
  }

  _handleFocus(event) {
    this.props.onFocus(this.state.value)
  }

  _handleKeyPress(event) {
    this.props.onKeyPress(this.state.value)
  }

  _handleKeyUp(event) {
    this.props.onKeyUp(this.state.value)
    if(event.which == 13) {
      event.preventDefault()
      this.props.onSubmit()
    }
  }

  _handleKeyDown(event) {
    this.props.onKeyDown(this.state.value)
  }

}

export default Textfield
