import React from 'react'
import { Provider } from 'react-redux'
import Tabs from './components/tabs'
import CreateStore from '../../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string
    }))
  }

  static defaultProps = {
    tabs: []
  }

  render() {
    const store = CreateStore(reducer)
    return (
      <Provider store={store}>
        <Tabs {...this.props} />
      </Provider>
    )
  }

}

export default Index
