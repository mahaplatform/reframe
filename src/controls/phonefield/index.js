import { AsYouType } from 'libphonenumber-js'
import PropTypes from 'prop-types'
import React from 'react'

class PhoneField extends React.Component {

  static propTypes = {
    defaultCountry: PropTypes.string,
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    defaultCountry: 'US'
  }

  phone = null

  state = {
    value: ''
  }

  _handleChange = this._handleChange.bind(this)

  render() {
    return (
      <div className="ui field">
        <input { ...this._getInput() }/>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setState(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.value !== prevState.value) {
      this.props.onChange(this.state)
    }
  }

  _getInput() {
    const { value } = this.state
    return {
      className: 'ui input',
      type: 'tel',
      placeholder: 'Phone',
      value,
      ref: node => this.phone = node,
      onChange: this._handleChange
    }
  }

  _handleChange() {
    const asyoutype = new AsYouType(this.props.defaultCountry)
    const parsed = asyoutype.input(this.phone.value)
    this.setState({
      value: parsed
    })
  }

}

export default PhoneField
