import React from 'react'

class Checkbox extends React.Component {

  static defaultProps = {
    defaultValue: false,
    disabled: false,
    tabIndex: 0,
    onBusy: () => {},
    onChange: (value: boolean): void => {},
    onReady: () => {}
  }

  state = {
    value: false
  }

  render() {
    const { tabIndex } = this.props
    return (
      <div className="reframe-checkbox">
        <div className={ this._getClass() } tabIndex={ tabIndex }>
          <i className={ `fa fa-fw fa-${this._getIcon()}` } onClick={ this._handleChange.bind(this) } />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    const value = defaultValue || false
    this.setValue(value)
    if(onReady) onReady()
  }

  _getClass() {
    const { disabled } = this.props
    return disabled ? 'ui disabled checkbox' : 'ui checkbox'
  }

  _getIcon() {
    return `toggle-${this.state.value ? 'on' : 'off'}`
  }

  _handleChange(value) {
    const { onClick } = this.props
    if(onClick) onClick()
    this.setValue(!this.state.value)
  }

  setValue(value) {
    const { onChange } = this.props
    this.setState({ value })
    if(onChange) onChange(value)
  }

}

export default Checkbox
