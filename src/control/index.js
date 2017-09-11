import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Checkbox from '../checkbox'
// import Checkboxes from '../checkboxes'
import ColorField from '../colorfield'
import DateField from '../datefield'
import Filefield from '../filefield'
import Lookup from '../lookup'
import MoneyField from '../moneyfield'
// import MultiSelect from './multiselect'
// import Radios from './radios'
// import Select from '../select'
// import TableField from './tablefield'
import Text from '../text'
import TextArea from '../textarea'
import TextField from '../textfield'
import TimeField from '../timefield'
import ToggleList from '../toggle_list'
import Password from '../password'

const standardControls = {
  'checkbox': Checkbox,
  // 'checkboxes': Checkboxes,
  'colorfield': ColorField,
  'datefield': DateField,
  'filefield': Filefield,
  'lookup': Lookup,
  'moneyfield': MoneyField,
  // 'multiselect': MultiSelect,
  // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': TextField,
  'password': Password,
  'text': Text,
  'textarea': TextArea,
  // 'tablefield': TableField
  'timefield': TimeField,
  'togglelist': ToggleList
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
    onReady: PropTypes.func,
    onSet: PropTypes.func
  }

  static defaultProps = {
    type: 'textfield',
    options: []
  }

  render() {
    const { type } = this.props
    const Element = (_.isString(this.props.type)) ? (_.get(standardControls, type) || standardControls.textfield) : type
    return (
      <div className="control">
        <Element {...this.props} />
      </div>
    )
  }

}

export default Control
