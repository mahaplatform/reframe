import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class TextField extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    maxLength: PropTypes.number,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func
  }

  static defaultProps = {
    autoComplete: 'off',
    maxLength: null,
    prefix: null,
    suffix: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    const input = <input ref="control" { ...this._getControl() } />
    if(!this.props.prefix && !this.props.suffix) {
      return <div className="textfield">{ input }</div>
    }
    const classes = ['ui','input']
    if(this.props.prefix) classes.push('left labeled')
    if(this.props.suffix) classes.push('right labeled')
    return (
      <div className="textfield">
        <div className={classes.join(' ')}>
          { this.props.prefix && <div className="ui label">{this.props.prefix}</div> }
          {input}
          { this.props.suffix && <div className="ui label">{this.props.suffix}</div> }
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
  }

  _getControl() {
    const { autoComplete, disabled, placeholder } = this.props
    const { value } = this.state
    return {
      type: 'text',
      disabled,
      value,
      autoComplete,
      placeholder,
      onChange: this._handleChange.bind(this),
      onBlur: this._handleBlur.bind(this),
      onFocus: this._handleFocus.bind(this),
      onKeyPress: this._handleKeyPress.bind(this),
      onKeyUp: this._handleKeyUp.bind(this),
      onKeyDown: this._handleKeyDown.bind(this)
    }
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

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default TextField
