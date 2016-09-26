import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import mapFields from '../map_fields'
import * as actions from '../actions'
import Section from './section'
import Buttons from './buttons'
import Message from './message'

class Form extends React.Component {

  static contextTypes = {
    location: React.PropTypes.object,
    history: React.PropTypes.object
  }

  static propTypes = {
    id: React.PropTypes.string,
    datasource: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    sections: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    method: React.PropTypes.string,
    action: React.PropTypes.string,
    redirect: React.PropTypes.string,
    title: React.PropTypes.string,
    instructions: React.PropTypes.string,
    status: React.PropTypes.string,
    data: React.PropTypes.object,
    errors: React.PropTypes.array,
    message: React.PropTypes.object,
    buttons: React.PropTypes.array,
    style: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onChangeField: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onFailure: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    state: React.PropTypes.shape({
      status: React.PropTypes.string,
      sections: React.PropTypes.array,
      data: React.PropTypes.object,
      errors: React.PropTypes.object,
      result: React.PropTypes.object,
      message: React.PropTypes.string,
    }),
    onValidateForm: React.PropTypes.func,
    onResetForm: React.PropTypes.func,
    onUpdateData: React.PropTypes.func,
  }

  static defaultProps = {
   style: 'standard',
   method: 'GET',
   action: null,
   title: null,
   instructions: null,
   buttons: [
     { label: 'Save', type: 'submit' }
   ]
 }

  render() {
    const { id, style, title, instructions, buttons } = this.props
    const { onUpdateData, onValidateForm, onResetForm } = this.props
    const { status, sections, message, data, errors } = this.props.state
    if(status) {
      let formClasses = ['ui', 'form', status]
      if (_.includes(['configuring', 'configured', 'loading', 'submitting'], status)) {
        formClasses.push('loading')
      }
      let segmentsStyle = (style == 'basic') ? {
        border: 'none !important',
        borderRadius: 0,
        boxShadow: 'none !important'
      } : {}
      let segmentClass = (style == 'basic') ? 'ui basic segment' : 'ui segment'
      return (
        <div className={formClasses.join(' ')}>
          <div className="ui segments" style={segmentsStyle}>
            {(title) ? <div className="ui inverted segment">{title}</div> : null}
            {(instructions) ? <div className={segmentClass}>
              <div className="instructions">{instructions}</div>
            </div> : null}
            {sections.map((section, index) => {
              return <Section {...section}
                id={id}
                style={style}
                data={data}
                errors={errors}
                key={`section_${index}`}
                onUpdateData={onUpdateData} />
            })}
            {(message) ? <div className={segmentClass}><Message message={message} /></div> : null}
            {(buttons) ? <Buttons buttons={buttons}
                                  id={id}
                                  onValidateForm={onValidateForm}
                                  onResetForm={onResetForm} /> : null}
          </div>
        </div>
      )
    } else {
      return <div className="ui active centered inline loader" />
    }
  }

  componentDidMount() {
    this._handleLoadSections()
  }

  componentDidUpdate(prevProps) {
    const { status, data } = this.props.state
    if(prevProps.state.status != status) {
      if(status == 'configured') {
        this._handleLoadData()
      } else if(status == 'validated') {
        this._handleSubmit()
      } else if(status == 'success') {
        this._handleSuccess()
      } else if(status == 'failure') {
        this._handleFailure()
      }
    } else if(prevProps.state.data != data) {
      this._handleChange(prevProps.data, data)
    }
  }

  _handleLoadSections() {
    const { id, sections, onFetchSections, onSetSections } = this.props
    if(_.isString(sections)) {
      onFetchSections(id, sections)
    } else if(_.isArray(sections)) {
      onSetSections(id, sections)
    }
  }

  _handleLoadData() {
    const { id, data, onFetchData, onSetData, onSetReady } = this.props
    const { query } = this.context.location
    if(_.isString(data)) {
      onFetchData(id, data)
    } else if(_.isObject(data)) {
      onSetData(id, data)
    } else if(query) {
      onSetData(id, query)
    } else {
      onSetReady(id)
    }
  }

  _handleChange(previous, current) {
    const { id, onChangeField, onChange } = this.props
    if(onChangeField) {
      _.forOwn(current, (value, code) => {
        if(previous[code] != current[code]) {
          onChangeField(id, code, value)
        }
      })
    }
    if(onChange) {
      onChange(current)
    }
  }

  _handleSubmit() {
    const { id, method, action, onSubmit, onSubmitForm } = this.props
    let data = this._collectData()
    if(action) {
      onSubmitForm(id, method, action, data)
    } else if(onSubmit) {
      if(onSubmit(data)) {
        this._handleSuccess()
      } else {
        this._handleFailure()
      }
    } else {
      this._handleSuccess()
    }
  }

  _handleSuccess() {
    const { redirect, onSuccess } = this.props
    const { result } = this.props.state
    if(onSuccess) {
      onSuccess(result)
    }
    this._handleResetForm()
    if(redirect) {
      this._handleRedirect()
    }
  }

  _handleFailure() {
    const { onFailure } = this.props
    const { errors } = this.props.state
    if(onFailure) {
      onFailure(errors)
    }
  }

  _handleResetForm() {
    this.props.onResetForm()
  }

  _handleRedirect() {
    _.templateSettings.interpolate = /#{([\s\S]+?)}/g;
    const { redirect } = this.props
    const { result } = this.props.state
    const url = _.template(redirect)(result)
    this.context.history.push(url)
  }

  _collectData() {
    const { sections, data } = this.props.state
    let entity = {}
    mapFields(sections, (field) => {
      if(field.include !== false) {
        entity[field.code] = data[field.code]
      }
    })
    return entity
  }

}

const mapStateToProps = (state, props) => ({
  state: state.reframe[props.id]
})

const mapDispatchToProps = {
  onFetchSections: actions.fetchSections,
  onSetSections: actions.setSections,
  onFetchData: actions.fetchData,
  onSetData: actions.setData,
  onSetReady: actions.setReady,
  onSubmitForm: actions.submitForm,
  onResetForm: actions.resetForm,
  onUpdateData: actions.updateData,
  onValidateForm: actions.validateForm,
  onResetForm: actions.resetForm,
  onUpdateData: actions.updateData
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
