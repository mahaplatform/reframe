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
    const { disabled, tabIndex } = this.props
    return (
      <div className={ `reframe-checkbox ${(disabled) ? 'toggle-disabled' : ''}` } tabIndex={ tabIndex }>
        <i className={ `fa fa-fw fa-${this._getIcon()} ${(disabled) ? 'disabled' : ''}` } onClick={ this._handleChange.bind(this) } />
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    const value = defaultValue || false
    this.setValue(value)
    if(onReady) onReady()
  }

  _getIcon() {
    return `toggle-${this.state.value ? 'on' : 'off'}`
  }

  _handleChange(value) {
    const { disabled, onClick } = this.props
    if(!disabled){
      if(onClick) onClick()
      this.setValue(!this.state.value)
    }
  }

  setValue(value) {
    const { onChange } = this.props
    this.setState({ value })
    if(onChange) onChange(value)
  }

}

export default Checkbox
