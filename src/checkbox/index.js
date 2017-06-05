import React from 'react'
import _ from 'lodash'

class Checkbox extends React.Component {

  static propTypes = {
    disabled: React.PropTypes.bool,
    defaultValue: React.PropTypes.bool,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    defaultValue: false,
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue
    }
  }

  render() {
    const { style } = this.props
    let classes = ['ui', 'checkbox']
    if(style) {
      classes.push(style)
    }
    return (
      <div className="control">
        <div className={classes.join(' ')}>
          <i className={`toggle ${this.state.value ? 'on' : 'off'} icon`} onClick={ this._handleChange.bind(this) } />
        </div>
      </div>
    )
  }

  _handleChange(value) {
    this.setValue(!this.state.value)
  }

  setValue(value) {
    this.setState({ value })
    this.props.onChange(value)
  }

}

export default Checkbox
