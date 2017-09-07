import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'
import _ from 'lodash'

class Form extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    action: PropTypes.string,
    after: PropTypes.string,
    before: PropTypes.string,
    busy: PropTypes.array,
    defaults: PropTypes.object,
    config: PropTypes.array,
    data: PropTypes.object,
    errors: PropTypes.object,
    endpoint: PropTypes.string,
    entity: PropTypes.object,
    fields: PropTypes.array,
    filtered: PropTypes.object,
    instructions: PropTypes.string,
    isReady: PropTypes.bool,
    method: PropTypes.string,
    ready: PropTypes.array,
    sections: PropTypes.array,
    status: PropTypes.string,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onChangeField: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitForm: PropTypes.func,
    onFailure: PropTypes.func,
    onFetchData: PropTypes.func,
    onFetchSections: PropTypes.func,
    onResetForm: PropTypes.func,
    onSetData: PropTypes.func,
    onSetReady: PropTypes.func,
    onSetSections: PropTypes.func,
    onSuccess: PropTypes.func,
    onToggleBusy: PropTypes.func,
    onValidateForm: PropTypes.func,
    onUpdateData: PropTypes.func
  }

  static defaultProps = {
    method: 'GET',
    onCancel: () => {},
    onChange: () => {},
    onChangeField: () => {},
    onSubmit: () => {},
    onFailure: (error) => {},
    onSuccess: (entity) => {}
  }


  render() {
    const { after, before, busy, config, instructions, isReady, status, title } = this.props
    const configuring = _.includes(['pending', 'loading_sections','sections_loaded', 'loading_data'], status)
    const submitting = status === 'submitting'
    let classes = ['ui', 'form', status]
    if(configuring || !isReady || submitting) classes.push('loading')
    return (
      <div className="reframe-modal-panel">
        <div className="reframe-modal-panel-header">
          <div className="reframe-modal-panel-header-cancel" onClick={ this._handleCancel.bind(this) }>
            Cancel
          </div>
          <div className="reframe-modal-panel-header-title">
            { title }
          </div>
          { busy.length === 0 ?
            <div className="reframe-modal-panel-header-proceed" onClick={ this._handleSubmit.bind(this) }>
              Save
            </div> :
            <div className="reframe-modal-panel-header-proceed disabled">
              Save
            </div>
          }
        </div>
        <div className="reframe-modal-panel-body">
          <div className="reframe-form">
            { (before || instructions) &&
              <div className="reframe-form-header">
                { before && <div className="reframe-form-before">{ before }</div> }
                { instructions && <div className="instructions">{ instructions }</div> }
              </div>
            }
            <div className={ classes.join(' ') }>
              { !configuring &&
                config.map((section, index) => (
                  <Section key={`section_${index}`} { ...this._getSection(section) } />
                ))
              }
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
    const { data, sections, status, onSetSections } = this.props
    if(!_.isEqual(prevProps.sections, sections)) onSetSections(sections)
    if(prevProps.status !== status) {
      if(status === 'sections_loaded') this._handleLoadData()
      if(status === 'validated') this._handleSubmit()
      if(status === 'success') this._handleSuccess()
      if(status === 'failure') this._handleFailure()
    }
    if(prevProps.data != data) this._handleChange(prevProps.data, data)
  }

  _getSection(section) {
    const { data, errors } = this.props
    return {
      ...section,
      data,
      errors,
      onBusy: this._handleToggleBusy.bind(this),
      onReady: this._handleSetReady.bind(this),
      onSubmit: this._handleSubmit.bind(this),
      onUpdateData: this._handleUpdateData.bind(this)
    }
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handleLoadData() {
    const { defaults, endpoint, onFetchData, onSetData } = this.props
    if(endpoint) return onFetchData(endpoint)
    onSetData(defaults)
  }

  _handleSetReady(key) {
    this.props.onSetReady(key)
  }

  _handleToggleBusy(key) {
    this.props.onToggleBusy(key)
  }

  _handleUpdateData(key, value) {
    this.props.onUpdateData(key, value)
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
    this.props.onSuccess(this.props.entity)
  }

  _handleFailure() {
    this.props.onFailure()
  }

}

export default Form
