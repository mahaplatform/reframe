import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../controls/section.js'
import _ from 'lodash'
import when from 'when'
let whenKeys = require('when/keys')

class Form extends React.Component {

  static contextTypes = {
    history: React.PropTypes.object.isRequired
  }

  static propTypes = {
    fields: React.PropTypes.array,
    title: React.PropTypes.string,
    sections: React.PropTypes.array,
    buttons: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    unstyled: React.PropTypes.bool,
    borderless: React.PropTypes.bool,
    class: React.PropTypes.string,
    loading: React.PropTypes.bool,
    message: React.PropTypes.string,
    messageTitle: React.PropTypes.string,
    messageType: React.PropTypes.oneOf('success', 'normal', 'error'),
    asyncPassthrough: React.PropTypes.bool,
    style: React.PropTypes.object
  }

  static defaultProps = {
    fields: [],
    buttons: [{ label: 'Save', type: 'submit' }],
    onSubmit: _.noop,
    onCancel: _.noop,
    unstyled: false,
    borderless: false,
    loading: false,
    messageType: 'normal',
    onFieldChange: _.noop,
    asyncPassthrough: false,
    id: Symbol(),
    class: '',
    style: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      frozen: false,
      errors: {},
      dynamicPrefill: {},
      tick: 1
    }

    this.data = {}

    this.listeners = [
      //actionListener.addActionListener(FormActions.FILL, this.onFill.bind(this)),
      //actionListener.addActionListener(FormActions.CLEAR, this.onClear.bind(this)),
      //actionListener.addActionListener(FormActions.CHANGE, this.onFieldChange.bind(this)),
      //actionListener.addActionListener(FormActions.SUBMIT, this.doSubmit.bind(this))
    ]
  }

  render() {
    var title = (this.props.title) ? <div className="ui segment inverted">{this.props.title}</div> : null
    var label;
    if(this.props.label) {
      label = (
        <div className="ui segment top attached">
          <div className="ui top attached label">{this.props.label.toUpperCase()}</div>
        </div>
      )
    }
    var classes = ['ui','form'].concat(this.props.class.split(' '))
    if(this.props.loading) {
      classes.push('loading');
    }
    let segmentContainerClass = this.props.borderless ? 'ui basic segments' : 'ui segments'
    let segmentClass = this.props.borderless ? 'ui basic segment' : 'ui segment'
    let segmentStyle = this.props.borderless ? {border: 'none !important', borderRadius: 0} : {}
    return (
      <form ref="formElement" className={classes.join(' ')} onSubmit={this.onSubmit.bind(this)} style={this.props.style}>
        <div className={segmentContainerClass} style={segmentStyle}>
          {title}
          {label}
          { this.props.sections.map((section, index) => {
            return (<Section
              {...section}
              borderless={this.props.borderless}
              onFieldChange={this.props.onFieldChange}
              formId={this.props.id}
              ref={`section_${index}`}
              key={`section_${index}`} />
          )
          })}
          {(() => {
            if(this.props.message) {
              let messageClass = this.props.messageType !== 'normal' ? this.props.messageType : '';
              return (
                <div className={segmentClass}>
                  <div className={`ui ${messageClass} message visible`}>
                    <div className="header">{this.props.messageTitle}</div>
                    <p>{this.props.message}</p>
                  </div>
                </div>
              )
            }
          })()}
          {this.renderButtons()}
        </div>
      </form>
    )
  }

  renderButtons() {
    if(_.isArray(this.props.buttons)) {
      return (
        <div className="ui segment secondary right aligned">
          { this.props.buttons.map((button) => {
            var classes = ['ui','button']
            button.position ? classes.push(`${button.position} floated`) : _.noop
            if(button.type == 'submit') {
              classes.push('positive')
              return <button className={classes.join(' ')}>{button.label}</button>
            } else if(button.type == 'cancel') {
              classes.push('negative')
              return <button onClick={this.handleCancel.bind(this)} className={classes.join(' ')}>{button.label}</button>
            } else {
              classes.push(button.color || '')
              classes.push(button.position || '')
              return <button onClick={_.bind(this.handleButtonPress, this, _, button.action || _.noop)} className={classes.join(' ')}>{button.label}</button>
            }
          })}
        </div>
      )
    } else {
      return null
    }
  }

  handleButtonPress(event, callback) {
    event.preventDefault()
    callback()
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.onCancel()
  }

  applyPrefill() {
    const prefills = _.merge(this.props.prefill, this.data, this.state.dynamicPrefill);
    return this.transformFields(this.props.sections, field => {
      if(!_.isString(field.type)) {
        // Check to see if this is a composite component
        if(field.type.composite) {
          // If there is a composite configuration specified, use that to map the fields
          let dv;
          if(field.composite) {
            dv = _.mapValues(field.composite, prefillKey => _.get(prefills, prefillKey))
          }
          else {
            // If there is no composite config specified, use the default field mappings
            // the component specifies.
            dv = _.pick(prefills, field.type.composite);
          }
          return {defaultValue: dv, ...field}
        }
      }
      return {defaultValue: _.get(prefills, field.code), ...field}
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if(this.state.frozen) {
      return;
    }
    let formData = this.collectValues()
    if(this.props.asyncPassthrough) {
      this.props.onSubmit(formData)
    }
    else {
      formData
        .tap(console.log.bind(console))
        .then(this.props.onSubmit)
    }
  }

  doSubmit(id) {
    if(this.props.id === id) {
      this.onSubmit({preventDefault: _.noop})
    }
  }

  collectValues() {
    let values = _(this.flattenRefs()).map((ref, code) => {
      if(_.get(ref, 'constructor.composite', null)) {
        return ref.getValue() // Composite components should always return objects
      }
      else {
        // Wrap the single return value into an object
        return {[code]: ref.getValue()}
      }
    })
    .reduce(_.merge, {}) // Collapse into single values object

    let valuePromises = _.mapValues(values, v => when(v))

    return whenKeys.settle(valuePromises).then(result => _.mapValues(result, r => r.value));
  }

  highlightErrors (errors) {
    this.setState({errors})
  }

  fill(data) {
    this.onFill([this.props.id, data])
  }

  onFill([id, data]) {
    console.log('Filling', id, data)
    if(this.props.id === id) {
      let controlRefs = this.flattenRefs()
      let commonKeys = _.intersection(_.keys(controlRefs), _.keys(data))
      _.each(commonKeys, code => {
        if(controlRefs[code].constructor.composite) {
          controlRefs[code].setCompositeValue(code, data[code])
        }
        else {
          controlRefs[code].setValue(data[code])
        }
      })
    }
  }

  onClear(id) {
    if(this.props.id === id) {
      let controlRefs = this.flattenRefs()
      _.each(controlRefs, field => {
        _.result(field, 'clearField')
      })
    }
  }

  onFieldChange([id, code, value]) {
    if(this.props.id === id) {
      // If the value is an obect, flatten it and apply the children
      if(_.isPlainObject(value)) {
        _(value).pairs().each(([code, value]) => {
          this.data = _.assign(this.data, {[code]: value})
        })
      }
      this.data = _.assign(this.data, {[code]: value})
    }
    this.props.onFieldChange(code, value)
  }

  transformFields(sections, transformer) {
    // Transform the array of sections
    return _.map(sections, section => {
      // Extract the fields object from the section
      let {fields: sectionFields, ...otherSectionProps} = section;

      // Map fields to the supplied messages
      let modifiedFields = _.map(sectionFields, field => {
        // If the field type is 'fields', apply the transformer to the child Fields
        if(field.type === 'fields') {
          return {
            ...field,
            fields: _.map(field.fields, transformer)
          }
        }
        else {
          return transformer(field)
        }
      });

      // Return a new section, with modified fields
      return {fields: modifiedFields, ...otherSectionProps}
    });
  }

  flattenRefs() {
    let reduceRef = (acc, ref, key) => {
      if(ref.getReference) {
        return _.assign(acc, ref.getReference())
      }
      else {
        return _.reduce(ref.refs, reduceRef, acc)
      }
    }

    return _.reduce(this.refs, reduceRef, {})
  }

  componentWillUnmount() {
    //_.each(this.listeners, actionListener.removeActionListener.bind(actionListener))
  }

}

export default Form
