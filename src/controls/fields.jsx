import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field.jsx'
import _ from 'lodash'

class Fields extends React.Component {

  render() {
    var numbers = ['zero','one','two','three','four','five']
    var label = (this.props.label) ? <label>{this.props.label}</label> : ''
    var classes = ['fields']
    classes.push(numbers[this.props.fields.length])
    return (
      <div className={classes.join(' ')}>
        { this.props.fields.map((field, index) => {
          return <Field {...field} formId={this.props.formId} onChange={this.props.onChange} ref={`field_${field.code}`} key={`field_${index}`} />
        })}
      </div>
    )
  }

  getValue() {
    return _.reduce(this.refs, (values, field) => {
      let fieldValue = field.getValue();
      if(_.isPlainObject(fieldValue)) {
        _.assign(values, fieldValue);
      }
      else {
        values[field.props.code] = fieldValue;
      }
      return values;
    }, {})
  }

  clearField() {
    _.each(this.refs, field => {
      _.result(field, 'clear')
    })
  }
}

export default Fields
