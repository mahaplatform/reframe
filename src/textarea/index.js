import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class TextArea extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    defaultValue: false,
    disabled: false,
    maxLength: null,
    placeholder: '',
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue ? _.toString(props.defaultValue) : null
    }
  }

  render() {
    return (
      <div className="textarea">
        <textarea { ...this._getTextarea() } />
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

  _getTextarea() {
    const { placeholder, disabled } = this.props
    const { value } = this.state
    return {
      placeholder,
      disabled,
      defaultValue: value,
      onChange: this._handleChange.bind(this)
    }
  }

  _handleChange(event) {
    this.setValue(event.target.value)
    this.props.onChange(event.target.value)
  }

  setValue(value) {
    if(this.props.maxLength && value.length <= this.props.maxLength) {
      this.setState({value})
    }
  }

}

export default TextArea
