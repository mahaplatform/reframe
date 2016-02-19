import React from 'react'
import ReactDOM from 'react-dom'

import Button from './button.jsx'
import Checkbox from './checkbox.jsx'
import Checkboxes from './checkboxes.jsx'
import CountrySelect from './countryselect.jsx'
import DateField from './datefield.jsx'
import DateSelect from './dateselect.jsx'
import DateRange from './daterange.jsx'
import EmailField from './emailfield.jsx'
import Fields from './fields.jsx'
import FileField from './filefield.jsx'
import MoneyField from './moneyfield.jsx'
import MonthSelect from './monthselect.jsx'
import NumberField from './numberfield.jsx'
import NumberSelect from './numberselect.jsx'
import PasswordField from './passwordfield.jsx'
import PhoneField from './phonefield.jsx'
import Radios from './radios.jsx'
import Select from './select.jsx'
import StateSelect from './stateselect.jsx'
import TextArea from './textarea.jsx'
import TextField from './textfield.jsx'
import TimezoneSelect from './timezoneselect.jsx'
import UrlField from './urlfield.jsx'

import _ from 'lodash';
//import {DefaultsAsyncContainer} from 'components/containers/async.jsx';
//import API from 'api/standard'
//import FormActions from 'actions/form.js'

const standardControls = {
  'button': Button,
  'checkbox': Checkbox,
  'checkboxes': Checkboxes,
  'countryselect': CountrySelect,
  'datefield': DateField,
  'daterange': DateRange,
  'dateselect': DateSelect,
  'emailfield': EmailField,
  'fields': Fields,
  'filefield': FileField,
  'moneyfield': MoneyField,
  'monthselect': MonthSelect,
  'numberfield': NumberField,
  'numberselect': NumberSelect,
  'passwordfield': PasswordField,
  'phonefield': PhoneField,
  'radios': Radios,
  'stateselect': StateSelect,
  'select': Select,
  'textarea': TextArea,
  'textfield': TextField,
  'timezoneselect': TimezoneSelect,
  'urlfield': UrlField
};

let FieldMessage = function({message, type='normal'}) {
  const fieldTypeColors = {
    normal: '',
    error: 'red',
    success: 'green',
    info: 'blue',
    inverted: 'inverse'
  }

  return (
    <div className={`ui basic ${_.get(fieldTypeColors, type, '')} pointing prompt label transition visible`}>{message}</div>
  );
}

export default class Field extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    code: React.PropTypes.string,
    instructions: React.PropTypes.string,
    options: React.PropTypes.array,
    type: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    error: React.PropTypes.string
  }

  render() {
    let className = ['field']
    if(this.props.required) {
      className.push('required')
    }
    if(this.props.inline) {
      className.push('inline')
    }
    if(this.props.error) {
      className.push('error')
    }
    return (
      <div className={className.join(' ')} data-field-code={this.props.code}>
        {(this.props.label && !_.includes(['checkbox'], this.props.type)) ? <label>{this.props.label}</label> : ''}
        <span style={{marginBottom: 6, display: 'block'}}>{(this.props.instructions) ? this.props.instructions : ''}</span>
        {(() => {
          // Lookup a known field type if the type is a string
          if(_.isString(this.props.type)) {
            let Control = _.get(standardControls, this.props.type);
            return (
              <Control ref='control' {...this.props} onChange={this.props.onChange}/>
            )
          }

          // Use a supplied field type if there's an object given
          if(!_.isUndefined(this.props.type)) {
            let Field = this.props.type
            return <Field {...this.props} ref='control' onChange={this.props.onChange}/>
          }
        })()}

        {(() => {
          if(this.props.error) {
            return <FieldMessage type="error" message={this.props.error}/>
          }
        })()}
      </div>
    )
  }

  getValue() {
    return this.refs['control'].getValue()
  }

  setValue(value) {
    this.refs.control.setValue(value)
  }

  clearField() {
    _.result(this.refs.control, 'clear')
  }

  handleChange() {
    if(this.props.type !== 'fields') {
      //FormActions.change(this.props.formId, this.props.code, this.getValue())
    }
    if(this.props.onChange && this.props.type !== 'fields') {
      this.props.onChange(this.props.code, this.getValue());
    }
  }

}
//
//class AsyncAwareField extends React.Component {
//  render() {
//    return <DefaultsAsyncContainer ref="container" component={Field} {...this.getComponentProps()}/>
//  }
//
//  getValue() {
//    return this.refs.container.getInnerComponent().getValue();
//  }
//
//  getComponentProps() {
//    if(this.props.endpoint) {
//      let {endpoint, value, text} = this.props;
//      return _(this.props)
//        .omit(['endpoint', 'field', 'value'])
//        .merge({
//          options: API.loadJSON(endpoint)
//            .then(response => {
//              if(_.isArray(response)) {
//                return {records: response}
//              }
//              else {
//                return response
//              }
//            })
//            .then(({records}) => {
//              return _.map(records, record => {
//                return {
//                  key: _.get(record, value),
//                  value: _.get(record, text)
//                }
//              })
//            })
//        }).value();
//    }
//    else {
//      return this.props;
//    }
//  }
//}
//
//export default AsyncAwareField
