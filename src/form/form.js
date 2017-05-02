import React from 'react'
import PropTypes from 'prop-types'
import Section from './section'

class Form extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static PropTypes = {
    action: PropTypes.string,
    after: PropTypes.string,
    before: PropTypes.string,
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
    if(_.includes(['pending', 'submitting'], status)) {
      formClasses.push('loading')
    }
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
              { sections.map((section, index) => {
                return <Section {...section}
                                key={`section_${index}`}
                                data={data}
                                errors={errors}
                                onUpdateData={this._handleUpdateData.bind(this)}
                                onSubmit={this._handleSubmit.bind(this)} />
              })}
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

  _handleCancel() {
    this.context.modal.close()
  }

  _handleUpdateData(key, value) {
  }

  _handleSubmit() {
  }


}

export default Form
