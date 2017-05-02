import React from 'react'
import PropTypes from 'prop-types'
import Control from '../control'
import Fields from './fields'

class Field extends React.Component {

  static propTypes = {
    columns: React.PropTypes.array,
    data: React.PropTypes.object,
    endpoint: React.PropTypes.string,
    errors: React.PropTypes.object,
    fields: React.PropTypes.array,
    include: React.PropTypes.bool,
    instructions: React.PropTypes.string,
    label: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array,
    required: React.PropTypes.bool,
    type: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func
    ]).isRequired,
    show: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onUpdateData: React.PropTypes.func
  }

  static defaultProps = {
    columns: [],
    data: {},
    errors: {},
    fields: [],
    include: true,
    options: [],
    required: false,
    show: true,
    onUpdateData: () => {}
  }

  render() {
    const { data, include, instructions, label, name, show, type } = this.props
    const defaultValue = _.get(data, name)
    const error = this._getError()
    if(!include || !show) return null
    return (
      <div className={ this._getClass() }>
        { label && <label>{ label }</label> }
        { instructions && <div className="instructions">{ instructions }</div> }
        { type === 'fields' ?
          <Fields { ...this._getFields() } /> :
          <Control { ...this._getControl() } />
        }
        { error && <div className="error-message">{ error }</div> }
      </div>
    )
  }

  _getClass() {
    const { required } = this.props
    const error = this._getError()
    return [
      'field',
      ...(error) ? [ error ] : [],
      ...(required) ? [ required ] : [],
    ].join(' ')
  }

  _getError() {
    const { errors, name } = this.props
    return (errors && errors[name]) ? errors[name][0] : null
  }

  _getFields() {
    const { fields, onSubmit, onUpdateData } = this.props
    return {
      fields,
      onChange: this._handleUpdateData.bind(this),
      onSubmit,
      onUpdateData
    }
  }

  _getControl() {
    const { columns, defaultValue, disabled, endpoint, form, format, label } = this.props
    const { options, prompt, prefix, sort, suffix, type, text, value, onSubmit } = this.props
    return {
      columns,
      defaultValue,
      disabled,
      endpoint,
      form,
      format,
      label,
      options,
      prompt,
      prefix,
      sort,
      suffix,
      text,
      type,
      value,
      onChange: this._handleUpdateData.bind(this),
      onSubmit
    }
  }

  _handleUpdateData(value) {
    this.props.onUpdateData(this.props.name, value)
  }

}

export default Field
