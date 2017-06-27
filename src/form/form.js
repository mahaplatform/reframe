import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'
import _ from 'lodash'

class Form extends React.Component {

  static contextTypes = {
    flash: PropTypes.object,
    modal: PropTypes.object
  }

  static PropTypes = {
    action: PropTypes.string,
    after: PropTypes.string,
    before: PropTypes.string,
    defaults: PropTypes.object,
    data: PropTypes.object,
    errors: PropTypes.object,
    fields: PropTypes.array,
    instructions: PropTypes.string,
    method: PropTypes.string,
    sections: PropTypes.array,
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
    const { after, before, data, errors, instructions, sections, title } = this.props
    let formClasses = ['ui', 'form', 'reframe-form', status]
    if(_.includes(['pending', 'submitting'], status)) formClasses.push('loading')
    return (
      <div className="reframe-modal-panel">
        <div className="reframe-modal-panel-header">
          <div className="reframe-modal-panel-header-cancel" onClick={ this._handleCancel.bind(this) }>
            Cancel
          </div>
          <div className="reframe-modal-panel-header-title">
            { title }
          </div>
          <div className="reframe-modal-panel-header-proceed" onClick={ this._handleSubmit.bind(this) }>
            Save
          </div>
        </div>
        <div className="reframe-modal-panel-body">
          <div className="reframe-form">
            { (before || instructions) &&
              <div className="reframe-form-header">
                { before && <div className="reframe-form-before">{ before }</div> }
                { instructions && <div className="instructions">{instructions}</div> }
              </div>
            }
            <div className={formClasses.join(' ')} ref="form">
              { sections.map((section, index) => <Section {...section}
                              key={`section_${index}`}
                              data={data}
                              errors={errors}
                              onUpdateData={this._handleUpdateData.bind(this)}
                              onSubmit={this._handleSubmit.bind(this)} />)}
            </div>
            { after &&
              <div className="reframe-form-footer">
                <div className="reframe-form-after">{ after }</div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { sections, onSetSections } = this.props
    onSetSections(sections)
  }

  componentDidUpdate(prevProps) {
    const { data, status } = this.props
    if(prevProps.status !== status) {
      if(status === 'configured') this._handleLoadData()
      if(status === 'validated') this._handleSubmit()
      if(status === 'success') this._handleSuccess()
      if(status === 'failure') this._handleFailure()
    }
    if(prevProps.data != data) this._handleChange(prevProps.data, data)
  }

  _handleCancel() {
    this.context.modal.close()
  }

  _handleLoadData() {
    const { defaults, endpoint, onFetchData, onSetData } = this.props
    if(endpoint) return onFetchData(endpoint)
    onSetData(defaults)
  }

  _handleUpdateData(key, value) {
    const { onUpdateData } = this.props
    onUpdateData(key, value)
  }

  _handleChange(previous, current) {
    const { onChangeField, onChange } = this.props
    if(onChangeField) {
      _.forOwn(current, (value, code) => {
        if(previous[code] != current[code]) onChangeField(code, value)
      })
    }
    if(onChange) onChange(current)
  }

  _handleSubmit() {
    const { action, filtered, method, onSubmit, onSubmitForm } = this.props
    if(action) return onSubmitForm(method, action, filtered)
    if(onSubmit) {
      if(onSubmit(filtered)) return this._handleSuccess()
      return this._handleFailure()
    }
    this._handleSuccess()
  }

  _handleSuccess() {
    const { flash } = this.context
    const { entity, successMessage, onSuccess } = this.props
    if(successMessage) flash.set('success', successMessage)
    onSuccess(entity)
  }

  _handleFailure() {
    const { flash } = this.context
    const { onFailure } = this.props
    flash.set('error', 'There were problems with your data')
    onFailure()
  }

}

export default Form
