import React from 'react'
import PropTypes from 'prop-types'
import Field from './field'

class Section extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    instructions: PropTypes.string,
    collapsing: PropTypes.bool,
    collapsed: PropTypes.bool,
    fields: PropTypes.array,
    data: PropTypes.object,
    errors: PropTypes.object,
    onSubmit: PropTypes.func,
    onUpdateData: PropTypes.func
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
    const { collapsing, label, instructions, fields, data, errors, onSubmit, onUpdateData } = this.props
    const { collapsed } = this.state
    let classes = ['ui', 'basic', 'segment']
    if(collapsing) {
      classes.push('collapsing')
      classes.push(collapsed ? 'collapsed' : 'expanded')
    }
    return (
      <div className={classes.join(' ')}>
        { label &&
          <h4 className="ui header" onClick={ this.toggle.bind(this)} >
            { label }
            { collapsed ? <i className="plus icon" /> : <i className="minus icon" /> }
          </h4>
        }
        <div className="section">
          { instructions && <div className="instructions">{ instructions }</div> }
          { fields.map((field, index) => {
            return <Field {...field}
                          data={data}
                          errors={errors}
                          key={`field_${index}`}
                          onSubmit={onSubmit}
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
