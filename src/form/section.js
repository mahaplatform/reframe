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
    onReady: PropTypes.func,
    onUpdateData: PropTypes.func
  }

  static defaultProps = {
    collapsing: false
  }

  constructor(props) {
    super(props)
    const collapsed = (props.collapsed !== null) ? props.collapsed : props.collapsing
    this.state = { collapsed }
  }

  render() {
    const { collapsing, data, errors, fields, instructions, label } = this.props
    const { collapsed } = this.state
    let classes = ['ui', 'basic', 'segment']
    if(collapsing) {
      classes.push('collapsing')
      classes.push(collapsed ? 'collapsed' : 'expanded')
    }
    return (
      <div className={classes.join(' ')}>
        { label &&
          <h4 className="ui header" onClick={ this._handleToggle.bind(this)} >
            { label }
            { collapsed ? <i className="plus icon" /> : <i className="minus icon" /> }
          </h4>
        }
        <div className="section">
          { instructions && <div className="instructions">{ instructions }</div> }
          { fields.map((field, index) => (
            <Field key={`field_${index}`} {...this._getField(field) } />
          ))}
        </div>
      </div>
    )
  }

  _getField(field) {
    const { data, errors, onReady, onSubmit, onUpdateData } = this.props
    return {
      ...field,
      data,
      errors,
      onReady,
      onSubmit,
      onUpdateData
    }
  }

  _handleToggle() {
    this.setState({collapsed: !this.state.collapsed})
  }

}

export default Section
