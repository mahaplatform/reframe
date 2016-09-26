import React from 'react'
import _ from 'lodash'

class TextField extends React.Component {

  static propTypes = {
    autoComplete: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
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
    const input = <input ref="control"
                         type="text"
                         value={this.state.value}
                         autoComplete={this.props.autoComplete}
                         placeholder={this.props.placeholder}
                         onChange={this.handleChange.bind(this)}
                         onBlur={this.handleBlur.bind(this)}
                         onFocus={this.handleFocus.bind(this)}
                         onKeyPress={this.handleKeyPress.bind(this)}
                         onKeyUp={this.handleKeyUp.bind(this)}
                         onKeyDown={this.handleKeyDown.bind(this)} />
    if(this.props.prefix || this.props.suffix) {
      return (
        <div className="textfield">
          <div className="ui left right labeled input">
            {(() => {
              if(this.props.prefix) {
                return <div className="ui label">{this.props.prefix}</div>
              }
            })()}
            {input}
            {(() => {
              if(this.props.suffix) {
                return <div className="ui label">{this.props.suffix}</div>
              }
            })()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="textfield">
          {input}
        </div>

      )
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
  }

  handleChange(event) {
    this.setValue(event.target.value)
    this.props.onChange(event.target.value)
  }

  handleBlur(event) {
    this.props.onBlur(this.state.value);
  }

  handleFocus(event) {
    this.props.onFocus(this.state.value);
  }

  handleKeyPress(event) {
    this.props.onKeyPress(this.state.value);
  }

  handleKeyUp(event) {
    this.props.onKeyUp(this.state.value);
  }

  handleKeyDown(event) {
    this.props.onKeyDown(this.state.value);
  }

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default TextField
