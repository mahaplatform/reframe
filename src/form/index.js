import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {

  static PropTypes = {
    action: PropTypes.string,
    data: PropTypes.object,
    errors: PropTypes.object,
    method: PropTypes.string,
    fields: PropTypes.array,
    status: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func,
    onChangeField: PropTypes.func,
    onSubmit: PropTypes.func,
    onFailure: PropTypes.func,
    onSuccess: PropTypes.func,
    onValidateForm: PropTypes.func,
    onResetForm: PropTypes.func,
    onUpdateData: PropTypes.func
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
