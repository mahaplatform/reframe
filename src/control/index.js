import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

// import Dynamic from 'admin/components/dynamic'
// import Checkbox from 'admin/components/checkbox'
// // import Checkboxes from 'admin/components/checkboxes'
// // import ColorField from 'admin/components/colorfield'
// import FileField from 'admin/components/filefield'
// import Lookup from 'admin/components/lookup'
// // import MultiSelect from './multiselect'
// // import Radios from './radios'
// import Select from 'admin/components/select'
// // import TableField from './tablefield'
// import Text from 'admin/components/text'
// import TextArea from 'admin/components/textarea'
import TextField from '../textfield'
// import Password from 'admin/components/password'
// import DateField from 'admin/components/datefield'

const standardControls = {
  // 'checkbox': Checkbox,
  // 'checkboxes': Checkboxes,
  // 'colorfield': ColorField,
  // 'filefield': FileField,
  // 'lookup': Lookup,
  // // 'multiselect': MultiSelect,
  // // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': TextField,
  // 'password': Password,
  // 'textarea': TextArea,
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
    return {
      endpoint,
      value,
      text
    }
  }

}

export default Control
