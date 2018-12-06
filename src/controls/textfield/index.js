import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class TextField extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    sanitize: PropTypes.func,
    suffix: PropTypes.string,
    tabIndex: PropTypes.number,
    trim: PropTypes.bool,
    validate: PropTypes.func,
    onBlur: PropTypes.func,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onReady: PropTypes.func,
    onSubmit: PropTypes.func
  }

  static defaultProps = {
    autoComplete: 'off',
    defaultValue: '',
    disabled: false,
    maxLength: null,
    placeholder: '',
    prefix: null,
    sanitize: (value) => value,
    suffix: null,
    tabIndex: 0,
    trim: true,
    validate: (value) => true,
    onBlur: () => {},
    onBusy: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {},
    onReady: () => {},
    onSubmit: () => {}
  }

  state = {
    value: ''
  }

  render() {
    return (
      <div className={ this._getClass() }>
        { this.props.prefix && <div className="ui label">{this.props.prefix}</div> }
        <input { ...this._getControl() } />
        { this.props.suffix && <div className="ui label">{this.props.suffix}</div> }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setState({
      value: _.toString(defaultValue)
    })
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.defaultValue !== prevProps.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
    if(this.state.value !== prevState.value) {
      this.props.onChange(this.state.value )
    }
  }


  _getClass() {
    const { prefix, suffix } = this.props
    const classes = ['reframe-textfield','ui','fluid','input']
    if(prefix) classes.push('left labeled')
    if(suffix) classes.push('right labeled')
    return classes.join(' ')
  }

  _getControl() {
    const { autoComplete, disabled, placeholder, tabIndex, onBlur, onFocus, onKeyPress, onKeyDown } = this.props
    const { value } = this.state
    return {
      tabIndex,
      type: 'text',
      disabled,
      value,
      autoComplete,
      placeholder,
      onChange: this._handleChange.bind(this),
      onBlur,
      onFocus,
      onKeyPress,
      onKeyUp: this._handleKeyUp.bind(this),
      onKeyDown
    }
  }

  _handleChange(event) {
    const sanitized = this.props.sanitize(event.target.value)
    if(!this.props.validate(sanitized)) return event.preventDefault()
    this.setValue(sanitized)
  }

  _handleKeyUp(event) {
    this.props.onKeyUp(this.state.value)
    if(event.which == 13) {
      event.preventDefault()
      this.props.onSubmit()
    }
  }

  setValue(value) {
    if(this.props.maxLength && value.length > this.props.maxLength) return
    this.setState({ value })
  }

}

export default TextField
