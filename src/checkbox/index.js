import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {

  static propTypes = {
    disabled: PropTypes.bool,
    defaultValue: PropTypes.bool,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func,
    onSet: PropTypes.func
  }

  static defaultProps = {
    defaultValue: false,
    disabled: false,
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: false
    }
  }

  render() {
    const { disabled } = this.props
    let classes = ['ui', 'checkbox']
    if(disabled) classes.push('disabled')
    return (
      <div className="control">
        <div className={classes.join(' ')}>
          <i className={`toggle ${this.state.value ? 'on' : 'off'} icon`} onClick={ this._handleChange.bind(this) } />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSet, onReady } = this.props
    const value = defaultValue || false
    this.setState({ value })
    onSet(value)
    onReady()
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
