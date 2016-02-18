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
    cursor: 'pointer',
    basic: false,
    inverted: false
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
