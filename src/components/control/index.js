import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import * as Controls from '../../controls'

const standardControls = {
  'checkbox': Controls.Checkbox,
  'colorfield': Controls.ColorField,
  'datefield': Controls.DateField,
  'filefield': Controls.FileField,
  'lookup': Controls.Lookup,
  'moneyfield': Controls.MoneyField,
  'textfield': Controls.TextField,
  'password': Controls.Password,
  'text': Controls.Text,
  'textarea': Controls.TextArea,
  'timefield': Controls.TimeField,
  'togglelist': Controls.ToggleList
}

class Control extends React.Component {

  static propTypes = {
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]).isRequired,
    endpoint: PropTypes.string,
    defaultValue: PropTypes.any,
    options: PropTypes.array,
    text: PropTypes.string,
    value: PropTypes.string,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    type: 'textfield',
    options: []
  }

  render() {
    return (
      <div className="control">
        { React.createElement(this._getElement(), this.props) }
      </div>
    )
  }

  _getElement() {
    const { type } = this.props
    return _.isString(type) ? _.get(standardControls, type) : type
  }

}

export default Control
