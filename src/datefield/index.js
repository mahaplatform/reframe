import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class DateField extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    maxLength: PropTypes.number,
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
      value: (props.defaultValue) ? moment(props.defaultValue).format('YYYY-MM-DD') : null
    }
  }

  render() {
    return (
      <div className="datefield">
        <div className="ui right labeled input">
          <input ref="control"
                 type="text"
                 value={this.state.value}
                 autoComplete={this.props.autoComplete}
                 placeholder={this.props.placeholder}
                 onChange={this._handleChange.bind(this)}
                 onBlur={this._handleBlur.bind(this)}
                 onFocus={this._handleFocus.bind(this)}
                 onKeyPress={this._handleKeyPress.bind(this)}
                 onKeyUp={this._handleKeyUp.bind(this)}
                 onKeyDown={this._handleKeyDown.bind(this)} />
          <div className="ui label"><i className="calendar icon" /></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.onChange(this.state.value)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
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

export default DateField
