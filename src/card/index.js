import React from 'react'
import { Provider } from 'react-redux'
import Card from './card'
import CreateStore from '../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    const store = CreateStore(reducer)
    return (
      <Provider store={store}>
        <Card {...this.props} />
      </Provider>
    )
  }

}

export default Index
