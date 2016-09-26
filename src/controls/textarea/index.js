import React from 'react'
import _ from 'lodash'

class TextArea extends React.Component {

  static propTypes = {
    maxLength: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    maxLength: null,
    placeholder: '',
    defaultValue: '',
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    return (
      <div className="textarea">
        <textarea placeholder={this.props.placeholder}
                  disabled={this.props.disabled}
                  defaultValue={this.state.value}
                  onChange={this.handleChange.bind(this)} />
      </div>
    )
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

  setValue(value) {
    if(this.props.maxLength && value.length <= this.props.maxLength) {
      this.setState({value})
    }
  }

}

export default TextArea
