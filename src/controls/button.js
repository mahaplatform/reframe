import React from 'react'
import ReactDOM from 'react-dom'

export default class Button extends React.Component {
  static defaultProps = {
    onChange: () => {},
    onPress: () => {},
    toggle: false,
    size: 'medium',
    color: 'neutral',
    icon: null,
    label: null,
    labelIcon: null,
    labelDirection: null,
    float: null,
    cursor: 'pointer',
    basic: false,
    inverted: false,
    circular: false
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    return (
      <div className="field">
        <button onClick={this.handleClick.bind(this)} className={this.getButtonClass()}>
          {this.props.text}
          <i className={`ui ${this.props.icon} icon`} />
        </button>
      </div>
    )
  }

  handleClick(e) {
    e.preventDefault()
    this.props.onPress()
  }

  getButtonClass() {
    let baseClasses = ['ui', 'button']
    if(this.props.icon) {
      baseClasses.push('icon')
    }
    baseClasses.push(this.props.color)
    baseClasses.push(this.props.size)
    if(this.props.basic) {
      baseClasses.push('basic')
    }
    if(this.props.inverted) {
      baseClasses.push('inverted')
    }
    if(this.props.float) {
      baseClasses.push(this.props.float)
      baseClasses.push('floated')
    }
    if(this.props.circular) {
      baseClasses.push('circular')
    }
    return baseClasses.join(' ')
  }

  componentDidMount() {
    $(this.refs.control).checkbox()
    if(this.props.defaultValue === true || this.props.defaultValue === 1) {
      $(this.refs.checkbox_ui).checkbox('set checked')
    }
  }

  getValue() {
    return this.state.pressed ? 1 : 0
  }

  setValue(value) {
    // if(value === 1 || value === true) {
    //   $(this.refs.checkbox_ui).checkbox('set checked')
    // }
    // else {
    //   $(this.refs.checkbox_ui).checkbox('set unchecked')
    // }
  }

  getReference() {
    return {[this.props.code]: this}
  }

}
