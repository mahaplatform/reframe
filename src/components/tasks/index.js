import React from 'react'
import { Provider } from 'react-redux'
import Tasks from './tasks'
import CreateStore from '../../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string
    }))
  }

  static defaultProps = {
    tasks: []
  }

  render() {
    const store = CreateStore(reducer)
    return (
      <Provider store={store}>
        <Tasks {...this.props} />
      </Provider>
    )
  }

}

export default Index
