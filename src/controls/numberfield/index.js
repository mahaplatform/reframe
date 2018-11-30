import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

const SPECIAL_KEYS = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Backspace']

const REGEX = /^-?[0-9]*\.?[0-9]*$/

class NumberField extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  number = null

  state = {
    value: ''
  }

  _handleChange = this._handleChange.bind(this)
  _handleKeyDown = this._handleKeyDown.bind(this)

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
      this.props.onChange(this.state.value)
    }
  }

  _getInput() {
    const { value } = this.state
    return {
      className: 'ui input',
      type: 'text',
      placeholder: 'Number',
      value,
      ref: node => this.number = node,
      onChange: this._handleChange,
      onKeyDown: this._handleKeyDown
    }
  }

  _handleChange() {
    this.setState({
      value: this.number.value
    })
  }

  _handleKeyDown(e) {
    if(_.includes(SPECIAL_KEYS, e.key)) return
    if(e.ctrlKey || e.metaKey) return
    const value = this.number.value || ''
    const newvalue = value + e.key
    if(newvalue.match(REGEX)) return
    e.preventDefault()
  }

}

export default NumberField
