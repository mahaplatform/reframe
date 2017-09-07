import React from 'react'
import PropTypes from 'prop-types'
import Control from '../control'
import Fields from './fields'
import _ from 'lodash'

class Field extends React.Component {

  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.object,
    endpoint: PropTypes.string,
    errors: PropTypes.object,
    fields: PropTypes.array,
    include: PropTypes.bool,
    instructions: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    required: PropTypes.bool,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]).isRequired,
    show: PropTypes.bool,
    onReady: PropTypes.func,
    onSubmit: PropTypes.func,
    onUpdateData: PropTypes.func
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
    const { include, instructions, label, show, type } = this.props
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
      ...(error) ? [ 'error' ] : [],
      ...(required) ? [ 'required' ] : []
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
    const { columns, component, data, disabled, endpoint, filters, form, format, label, name } = this.props
    const { options, prompt, prefix, sort, suffix, type, text, token, value } = this.props
    const { onSubmit } = this.props
    const defaultValue = _.get(data, name)
    return {
      columns,
      component,
      defaultValue,
      disabled,
      endpoint,
      filters,
      form,
      format,
      label,
      options,
      prompt,
      prefix,
      sort,
      suffix,
      text,
      token,
      type,
      value,
      onSet: this._handleUpdateData.bind(this),
      onReady: this._handleReady.bind(this),
      onChange: this._handleUpdateData.bind(this),
      onSubmit
    }
  }

  _handleReady() {
    this.props.onReady(this.props.name)
  }

  _handleUpdateData(value) {
    this.props.onUpdateData(this.props.name, value)
  }

}

export default Field
