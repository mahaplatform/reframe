import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Validator from '../utils/validator'
import when from 'when'
import Logger from '../utils/logger'
import Form from './core.js'

export default class ValidatedForm extends React.Component {
  static defaultProps = {
    onSubmit: _.noop,
    onValidationFail: _.noop,
    onFieldChange: _.noop,
    externalErrors: {},
    scrollToErrors: true,
    formContainer: 'body'
  }

  constructor(props) {
    super(props);

    let validators = {};
    let makeRules = field => {
      let rules = field.validators || {};
      if(field.required) {
        rules.required = true;
      }
      if (!_.isEmpty(rules)) {
        validators[field.code] = Validator.create(rules)
      }
    }
    this.transformFields(props.sections, field => {
      Logger.log(field)
      if(field.fields) {
        _.each(field.fields, makeRules)
      }
      else {
        makeRules(field)
      }
    });

    this.state = {
      errors: {},
      validators
    }
  }

  componentDidMount() {
    // When the compoent mounts, build a flat object containing all
    // validation rules

  }

  render() {
    return (<Form
      {...this.props}
      ref="form"
      sections={this.bindFieldMessages(this.state.errors)}
      onSubmit={this.onSubmit.bind(this)}
      onFieldChange={this.onFieldChange.bind(this)}
      />)
  }

  bindFieldMessages(localMessages, messageType='error') {
    let remoteMessages = this.props.externalErrors
    let messages = _.merge(localMessages, remoteMessages)
    return this.transformFields(this.props.sections, field => {
      // Add the message to the field definition if the field doesn't
      // already have one.
      if(field.composite) {
        // Merge together all errors
        const compositeMapping = _.invert(field.composite)
        let combinedMessage = _(compositeMapping).map((msgs, extCode, internalField) => {
          return messages[extCode]
        }).compact().flatten().value()
        field.error = _.uniq(combinedMessage).join('; ')
        return field;
      }
      else {
        field.error = _.get(messages, field.code)
        return field;
      }
    });
  }

  onSubmit(fieldValues) {
    when(fieldValues).then(data => {
      // Do all the validations. Call the parent onSubmit callback if they pass.
      Logger.log('Validating', data);
      const fieldRefs = this.refs.form.flattenRefs()
      let errors = _(data)
        .mapValues((value, code) => {
          if(_.get(fieldRefs[code], 'validate', null)) {
            // Use the custom validation function on the field
            return fieldRefs[code].validate(value).errors
          }
          let validatorFunction = _.get(this.state.validators, code, () => '');
          return _.first(validatorFunction(value).errors) || '';
        })
        .omitBy(_.isEmpty)
        .value();

      if (_.isEmpty(errors)) {
        // There are no errors, validation passed. Fire relevant success events
        this.props.onSubmit(data);
      }
      else {
        // There are errors, validation failed. fire relevant failure events.
        if(this.props.scrollToErrors) {
          const errorCode = _(errors).keys().first()
          const parentTop = $(`[data-field-code="${errorCode}"]`).parent().position().top
          const errorTop = parentTop + $(`[data-field-code="${errorCode}"]`).position().top
          $(this.props.formContainer).animate({ scrollTop: `${errorTop}px` })
        }
        this.props.onValidationFail(errors)
      }

      this.state.errors = errors;
      this.forceUpdate();
    })
  }

  onResolve(status) {

  }

  onReject(reason) {

  }

  transformFields(sections, transformer) {
    // Transform the array of sections
    return _.map(sections, section => {
      // Extract the fields object from the section
      let {fields: sectionFields, ...otherSectionProps} = section;

      // Map fields to the supplied messages
      let reduceFields = sFields => {
        return _.map(sFields, field => {
          // If the field type is 'fields', apply the transformer to the child Fields
          if(field.type === 'fields') {
            return {
              ...field,
              fields: reduceFields(field.fields)
            }
          }
          else {
            return transformer(field)
          }
        })
      };

      let modifiedFields = reduceFields(sectionFields)

      // Return a new section, with modified fields
      return {fields: modifiedFields, ...otherSectionProps}
    });
  }

  onFieldChange(code, value) {
    this.props.onFieldChange(code, value)
  }

  fill(...args) {
    this.refs.form.fill(...args)
  }

  doSubmit(...args) {
    this.refs.form.doSubmit(...args)
  }

  onClear(...args) {
    this.refs.form.onClear(...args)
  }
}
