import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Component from '../component'
import Form from './components/form'

class Index extends React.Component {

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
    onSuccess: React.PropTypes.func
  }

  render() {
    return <Form {...this.props} />
  }

}

const validation = {
  required: ['id']
}

export default Component(validation, 'form', 'id')(Index)
