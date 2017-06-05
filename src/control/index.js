import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// import Dynamic from '../dynamic'
import Checkbox from '../checkbox'
// // import Checkboxes from '../checkboxes'
// // import ColorField from '../colorfield'
import Filefield from '../filefield'
// import Lookup from '../lookup'
// // import MultiSelect from './multiselect'
// // import Radios from './radios'
// import Select from '../select'
// // import TableField from './tablefield'
// import Text from '../text'
import TextArea from '../textarea'
import TextField from '../textfield'
import Password from '../password'
// import DateField from '../datefield'

const standardControls = {
  'checkbox': Checkbox,
  // 'checkboxes': Checkboxes,
  // 'colorfield': ColorField,
  'filefield': Filefield,
  // 'lookup': Lookup,
  // // 'multiselect': MultiSelect,
  // // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': TextField,
  'password': Password,
  'textarea': TextArea,
  // 'datefield': DateField
  // 'tablefield': TableField
}

class Control extends React.Component {

  static propTypes = {
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]).isRequired,
    endpoint: PropTypes.string,
    defaultValue: PropTypes.any,
    options: PropTypes.array
  }

  static defaultProps = {
    type: 'textfield',
    datasource: null,
    options: []
  }

  render() {
    const { type, endpoint } = this.props
    const Element = (_.isString(this.props.type)) ? _.get(standardControls, type) : type
    return (
      <div className="control">
        <Element {...this.props} />
      </div>
    )
  }

  _getDynamic() {
    const { endpoint, value, text } = this.props
    return { endpoint, value, text }
  }

}

export default Control
