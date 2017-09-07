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
    onSet: PropTypes.func,
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
    onSet: () => {},
    onSubmit: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    const input = <input { ...this._getControl() } />
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

  componentDidMount() {
    this.props.onReady()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
  }

  _getControl() {
    const { autoComplete, disabled, placeholder, onBlur, onFocus, onKeyPress, onKeyDown } = this.props
    const { value } = this.state
    return {
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
    const trimmed = this.props.trim ? event.target.value.trim() : event.target.value
    const sanitized = this.props.sanitize(trimmed)
    if(!this.props.validate(sanitized)) {
      event.preventDefault()
      return false
    }
    this.setValue(sanitized)
    this.props.onChange(sanitized)
  }

  _handleKeyUp(event) {
    this.props.onKeyUp(this.state.value)
    if(event.which == 13) {
      event.preventDefault()
      this.props.onSubmit()
    }
  }

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default TextField
