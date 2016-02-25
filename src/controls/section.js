import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field.js'

class Section extends React.Component {

  render() {
    let segmentClass = this.props.borderless ? 'ui basic segment' : 'ui segment'
    if (this.props.notes) {
      var Notes = this.props.notes
      return (
        <div className="ui horizontal segments">
          <div className={segmentClass}>
            {(this.props.instructions) ? this.props.instructions : ''}
            {(this.props.label) ? <label>{this.props.label}</label> : ''}
            { this.props.fields.map((field, index) => {
              return (<Field formId={this.props.formId} {...field} onChange={this.props.onFieldChange}
                             ref={`field_${field.code}`}
                             key={`field_${index}`}/>)
            })}
          </div>
          <div className={segmentClass}>
            <Notes />
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={segmentClass}>
          {(this.props.instructions) ? this.props.instructions : ''}
          {(this.props.label) ? <label>{this.props.label}</label> : ''}
          { this.props.fields.map((field, index) => {
            return (<Field formId={this.props.formId} {...field} onChange={this.props.onFieldChange}
                          ref={`field_${index}`} key={`field_${index}`}/>)
          })}
        </div>
      )
    }
  }

  getValue() {
    return _.reduce(this.refs, (values, field) => {
      let fieldValue = field.getValue();
      if (_.isPlainObject(fieldValue)) {
        _.assign(values, fieldValue);
      }
      else {
        values[field.props.code] = fieldValue;
      }
      return values;
    }, {})
  }

  setValue(values) {
    _.each(values, (field, value) => {
      this.refs[`field_${field}`].setValue(value)
    })
  }

  clearField() {
    _.each(values, field => {
      _.result(this.refs[`field_${field}`], 'clear')
    })
  }
}

export default Section
