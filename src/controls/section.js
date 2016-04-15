import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field.js'
import _ from 'lodash'

class Section extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: this.props.collapsing
    }
  }

  static defaultProps = {
    collapsing: false
  }

  render() {
    let segmentClass = this.props.borderless ? ['ui','basic','segment'] : ['ui','segment']
    if(this.props.collapsing) {
      segmentClass.push('collapsing')
      segmentClass.push((this.state.collapsed) ? 'collapsed' : 'expanded')
    }
    if (this.props.notes) {
      var Notes = this.props.notes
      return (
        <div className="ui horizontal segments">
          <div className={segmentClass.join(' ')}>
            {(() => {
              if(this.props.label) {
                return <h4 className="ui header">{this.props.label}</h4>
              }
            })()}
            {(() => {
              if(this.props.instructions) {
                return this.props.instructions
              }
            })()}
            { this.props.fields.map((field, index) => {
              return <Field formId={this.props.formId} {...field}
                            onChange={this.props.onFieldChange}
                            ref={`field_${field.code}`}
                            key={`field_${index}`}/>
            })}
          </div>
          <div className={segmentClass.join(' ')}>
            <Notes />
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={segmentClass.join(' ')}>
          {(() => {
            if(this.props.label) {
              return <h4 className="ui header" onClick={this.toggle.bind(this)}>{this.props.label}</h4>
            }
          })()}
          {(() => {
            if(true) {
              return (
                <div className="section">
                  {(() => {
                    if(this.props.instructions) {
                      return this.props.instructions
                    }
                  })()}
                  { this.props.fields.map((field, index) => {
                    return <Field formId={this.props.formId} {...field}
                    onChange={this.props.onFieldChange}
                    ref={`field_${index}`}
                    key={`field_${index}`}/>
                  })}
                </div>
              )
            }
          })()}
        </div>
      )
    }
  }

  toggle() {
    this.setState({collapsed: !this.state.collapsed})
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
