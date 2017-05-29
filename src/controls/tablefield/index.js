import React from 'react'
import { Provider } from 'react-redux'
import TableField from './components/tablefield'
import CreateStore from '../../store'
import reducer from './reducer'

class Index extends React.Component {

  static propTypes = {
    columns: React.PropTypes.array,
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  render() {
    const store = CreateStore(reducer)
    const { columns, defaultValue, onChange } = this.props
    return (
      <Provider store={store}>
        <TableField columns={columns}
                    defaultValue={defaultValue}
                    onChange={onChange} />
      </Provider>
    )

  }

}

export default Index
