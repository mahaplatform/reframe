import React from 'react'
import { Provider } from 'react-redux'
import Form from './components/form'
import CreateStore from '../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
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
    const store = CreateStore(reducer)
    return (
      <Provider store={store}>
        <Form {...this.props} />
      </Provider>
    )
  }

}

export default Index
