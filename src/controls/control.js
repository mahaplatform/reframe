import React from 'react'
import _ from 'lodash'

import Dynamic from './dynamic'
import Checkbox from './checkbox'
import Checkboxes from './checkboxes'
import ColorField from './colorfield'
import Filefield from './filefield'
import MultiSelect from './multiselect'
import Radios from './radios'
import Select from './select'
import TableField from './tablefield'
import TextArea from './textarea'
import TextField from './textfield'

const standardControls = {
  'checkbox': Checkbox,
  'checkboxes': Checkboxes,
  'colorfield': ColorField,
  'filefield': Filefield,
  'multiselect': MultiSelect,
  'radios': Radios,
  'select': Select,
  'textfield': TextField,
  'textarea': TextArea,
  'tablefield': TableField
}

class Control extends React.Component {

  static propTypes = {
    type: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.element
    ]),
    datasource: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        source: React.PropTypes.string,
        key: React.PropTypes.string,
        value: React.PropTypes.string
      })
    ]),
    defaultValue: React.PropTypes.any,
    options: React.PropTypes.array
  }

  static defaultProps = {
    type: 'textfield',
    datasource: null,
    options: []
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { type, datasource } = this.props
    const Element = (_.isString(this.props.type)) ? _.get(standardControls, type) : type
    const controlProps = _.omit(this.props, ['type','datasource'])
    if(datasource) {
      return (
        <div className="control">
          <Dynamic datasource={datasource}>
            <Element {...controlProps} />
          </Dynamic>
        </div>
      )
    } else {
      return (
        <div className="control">
          <Element {...controlProps} />
        </div>
      )
    }
  }

}

export default Control
