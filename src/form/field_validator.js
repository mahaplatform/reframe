import React from 'react'
import ReactDOM from 'react-dom'
import Validator from '../utils/validator'
import _ from 'lodash'
import Field from '../controls/field.js'

const EMPTY = Symbol()
const VALID = Symbol()
const INVALID = Symbol()

export default class FieldValidator extends React.Component {
  static defaultProps = {
    constraints: {
      required: true
    },
    onChange: _.noop
  }

  constructor(props) {
    super(props)
    this.validationFunction = Validator.create(this.props.constraints)
    this.state = {
      status: EMPTY,
      errors: []
    }
  }

  render() {
    return (
      <Field
        {..._.omit(this.props, ['children', 'constraints'])}
        onChange={this.handleChange.bind(this)}
        error={this.getError()}/>
    )
  }

  handleChange(code, value) {
    if(_.isEmpty(value)) {
      this.setState({status: EMPTY})
    }
    else {
      let v = this.validationFunction(value)
      if(v.status === 'passed') {
        this.setState({status: VALID, errors: []})
      }
      else {
        this.setState({status: INVALID, errors: v.errors})
      }
    }
    this.props.handleChange(code, value)
  }

  getError() {
    if(this.state.status === INVALID) {
      return _.first(this.state.errors)
    }
  }
}
