import React from 'react'
import Field from './field.js'

class Section extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    style: React.PropTypes.string,
    label: React.PropTypes.string,
    instructions: React.PropTypes.string,
    collapsing: React.PropTypes.bool,
    collapsed: React.PropTypes.bool,
    fields: React.PropTypes.array,
    data: React.PropTypes.object,
    errors: React.PropTypes.object,
    onUpdateData: React.PropTypes.func
  }

  static defaultProps = {
    collapsing: false
  }

  constructor(props) {
    super(props)
    this.state = {
      collapsed: (props.collapsed !== null) ? props.collapsed : props.collapsing
    }
  }

  render() {
    const { id, style, collapsing, label, instructions, fields, data, errors, onUpdateData } = this.props
    let classes = (style == 'basic') ? ['ui', 'basic', 'segment'] : ['ui', 'segment']
    if(collapsing) {
      classes.push('collapsing')
      classes.push((this.state.collapsed) ? 'collapsed' : 'expanded')
    }
    return (
      <div className={classes.join(' ')}>
        {(label) ? <h4 className="ui header" onClick={ this.toggle.bind(this)} >{label}</h4> : null}
        <div className="section">
          {(instructions) ? <div className="instructions">{instructions}</div> : null}
          { fields.map((field, index) => {
            return <Field {...field}
                          id={id}
                          data={data}
                          errors={errors}
                          key={`field_${index}`}
                          onUpdateData={onUpdateData} />
          })}
        </div>
      </div>
    )
  }

  toggle() {
    this.setState({collapsed: !this.state.collapsed})
  }

}

export default Section
