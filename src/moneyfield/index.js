import React from 'react'
import PropTypes from 'prop-types'
import TextField from '../textfield'

class MoneyField extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    maxLength: PropTypes.number,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func
  }

  static defaultProps = {
    autoComplete: 'off',
    maxLength: null,
    prefix: null,
    suffix: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {}
  }

  render() {
    return <TextField { ...this._getTextField() } />

  }

  _getTextField() {
    return {
      ...this.props,
      sanitize: (value) => value.replace(/[\$,]/g,''),
      validate: (value) => value.match(/^\d*\.?\d{0,2}$/) !== null
    }
  }

}

export default MoneyField
