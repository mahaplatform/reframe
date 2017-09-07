import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Password extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    maxLength: PropTypes.number,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onReady: PropTypes.func,
    onSet: PropTypes.func
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
    onKeyDown: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    return (
      <div className="password">
        <input { ...this._getInput() } />
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

  _getInput() {
    const { value } = this.state
    const { autoComplete, placeholder, onBlur, onFocus, onKeyPress, onKeyUp, onKeyDown } = this.props
    return {
      type: 'password',
      value,
      autoComplete,
      placeholder,
      onChange: this._handleChange.bind(this),
      onBlur,
      onFocus,
      onKeyPress,
      onKeyUp,
      onKeyDown
    }
  }

  _handleChange(event) {
    this.setValue(event.target.value)
    this.props.onChange(event.target.value)
  }

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default Password
