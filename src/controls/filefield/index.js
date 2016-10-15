import React from 'react'
import { Provider } from 'react-redux'
import FileField from './filefield'
import CreateStore from '../../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  render() {
    const store = CreateStore(reducer)
    const { defaultValue, onChange } = this.props
    return (
      <Provider store={store}>
        <FileField defaultValue={defaultValue} onChange={onChange} />
      </Provider>
    )
  }

}

export default Index
