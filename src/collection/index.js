import React from 'react'
import { Provider } from 'react-redux'
import Collection from './components/collection'
import CreateStore from '../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
    filters: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
    columns: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]).isRequired,
    records: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]).isRequired,
    sort: React.PropTypes.shape({
      key: React.PropTypes.string,
      order: React.PropTypes.string,
    }),
    card: React.PropTypes.object,
    layout: React.PropTypes.oneOf(['table', 'card']),
    expanded: React.PropTypes.bool,
    empty: React.PropTypes.string,
    entity: React.PropTypes.string,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array
  }

  render() {
    const store = CreateStore(reducer)
    return (
      <Provider store={store}>
        <Collection {...this.props} />
      </Provider>
    )
  }

}

export default Index
