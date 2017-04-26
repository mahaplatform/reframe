import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {

  static PropTypes = {
    action: React.PropTypes.string,

    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    method: React.PropTypes.string,
    fields: React.PropTypes.array,
    status: React.PropTypes.string,
    title: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onChangeField: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onFailure: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onValidateForm: React.PropTypes.func,
    onResetForm: React.PropTypes.func,
    onUpdateData: React.PropTypes.func
  }

  render() {
    return (
      <input {...this._getConfig()} />
    )
  }

  _getConfig() {
    return {
    }
  }

}

export default Form
