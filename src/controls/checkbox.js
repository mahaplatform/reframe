import React from 'react'
import ReactDOM from 'react-dom'

class Checkbox extends React.Component {
  static defaultProps = {
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    return (
      <div className="field">
        <div className="ui checkbox" ref="checkbox_ui">
          <input
            ref="control"
            className="hidden"
            name={this.props.code}
            id={this.props.code}
            type="checkbox"/>
          <label htmlFor={this.props.code}>{this.props.label}</label>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).checkbox()
    if(this.props.defaultValue === true || this.props.defaultValue === 1) {
      $(this.refs.checkbox_ui).checkbox('set checked')
    }
    else {
      $(this.refs.checkbox_ui).checkbox('set unchecked')
    }
    $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.props.onChange);
  }

  getValue() {
    return this.refs.control.checked ? 1 : 0
  }

  setValue(value) {
    $(this.refs.checkbox_ui).checkbox('setting', 'onChange', _.noop);
    if(value === 1 || value === true) {
      $(this.refs.checkbox_ui).checkbox('set checked')
    }
    else {
      $(this.refs.checkbox_ui).checkbox('set unchecked')
    }
    $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.props.onChange);
  }

  clearField() {
    $(this.refs.checkbox_ui).checkbox('setting', 'onChange', _.noop);
    $(this.refs.checkbox_ui).checkbox('set unchecked')
    $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.props.onChange);
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default Checkbox
