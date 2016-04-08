import React from 'react'
import ReactDOM from 'react-dom'

class Textarea extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    html: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    trim: React.PropTypes.bool
  }

  static defaultProps = {
    code         : null,
    disabled     : false,
    html         : false,
    defaultValue : '',
    rows         : 4,
    placeholder  : '',
    trim         : true,
    onChange     : () => {}
  }

  constructor(props) {
    super(props)
    if(props.html) {
      this.state = {value: props.defaultValue || null}
    } else {
      let value = _.toString(props.defaultValue)
      this.state = { value: this.formatValue(value) }
    }
  }

  render() {
    if(this.props.html) {
      return (
        <textarea defaultValue={this.props.defaultValue}
                  ref="control"
                  onChange={this.handleChange.bind(this)}
                  name={this.props.code}
                  rows={this.props.rows}
                  placeholder={this.props.placeholder} />
      )
    }
    else {
      return (
        <textarea value={this.state.value}
                  ref="control"
                  onBlur={this.handleBlur.bind(this)}
                  onChange={this.handleChange.bind(this)}
                  name={this.props.code}
                  rows={this.props.rows}
                  placeholder={this.props.placeholder} />
      )
    }
  }

  componentDidMount() {
    if(this.props.html) {
      $(this.refs.control).redactor({
        changeCallback: this.handleChange.bind(this),
        minHeight: 300
      });
    }
  }

  handleChange(event) {
    if(this.props.html) {
      this.props.onChange(this.props.code, event)
    }
    else {
      this.setState({value: event.target.value})
      this.props.onChange(this.props.code, event.target.value)
    }
  }

  handleBlur(event) {
    this.setValue(event.target.value)
    this.props.onChange(this.props.code, event.target.value)
  }

  getValue() {
    if(this.props.html) {
      return $(this.refs.control).redactor('code.get')
    } else {
      return this.refs.control.value || null;
    }
  }

  setValue(value) {
    if(this.props.html && value) {
      $(this.refs.control).redactor('code.set', value)
    } else {
      this.setState({value: this.formatValue(value)})
    }
  }

  clearField() {
    if(this.props.html) {
      $(this.refs.control).redactor('code.set', '')
    } else {
      this.setState({value: ''})
    }
  }

  getReference() {
    return {[this.props.code]: this}
  }

  formatValue(value) {
    if(!_.isEmpty(value)) {
      if(this.props.trim) { value = value.trim() }
    }
    return value
  }

}

export default Textarea
