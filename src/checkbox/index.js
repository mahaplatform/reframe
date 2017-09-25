// @flow

import type { Props, State } from './types'

import PropTypes from 'prop-types'
import React from 'react'

class Checkbox extends React.Component<Props, State> {

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
    onChange: (value: boolean): void => {},
    onReady: () => {},
    onSet: (value: boolean): void => {}
  }

  state: State = {
    value: false
  }

  render() {
    return (
      <div className="reframe-checkbox">
        <div className={ this._getClass() }>
          <i className={ this._getToggleClass() } onClick={ this._handleChange.bind(this) } />
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    const { defaultValue, onSet, onReady } = this.props
    const value = defaultValue || false
    this.setState({ value })
    if(onSet) onSet(value)
    if(onReady) onReady()
  }

  _getClass(): string {
    const { disabled } = this.props
    return disabled ? 'ui disabled checkbox' : 'ui checkbox'
  }

  _getToggleClass(): string {
    return `toggle ${this.state.value ? 'on' : 'off'} icon`
  }

  _handleChange(value: boolean): void {
    this.setValue(!this.state.value)
  }

  setValue(value: boolean): void {
    const { onChange } = this.props
    this.setState({ value })
    if(onChange) onChange(value)
  }

}

export default Checkbox
