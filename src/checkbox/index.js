import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {

  static propTypes = {
    disabled: PropTypes.bool,
    defaultValue: PropTypes.bool,
    onChange: PropTypes.func
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
