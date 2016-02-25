import React from 'react'
import ReactDOM from 'react-dom'
import Thead from './thead.js'
import Tbody from './tbody.js'
import _ from 'lodash'

class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.listeners = []
  }

  render() {
    return(
      <div className="collection-table">
        <table className="ui unstackable compact striped table sortable">
          <Thead {...this.props} {...this.state} />
          <Tbody {...this.props} {...this.state} />
        </table>
      </div>
    )
  }

  componentDidMount() {
    let selfTrigger = (fn) => {
      var self = this;
      return _.wrap(fn, (ffn, ...args) => {
        if(_.isArray(args[0])) {
          args[0][0] === self.props.componentId ? ffn.bind(self)(..._.drop(args[0], 1)) : _.noop
        }
        else {
          args[0] === self.props.componentId ? ffn.bind(self)(..._.drop(args, 1)) : _.noop
        }
      })
    }
  }

  componentWillUnmount() {
    //_.each(this.listeners, actionListener.removeActionListener.bind(actionListener))
  }

  handleSort(key) {
    let order = (key == this.state.sort.key && this.state.sort.order == 'ascending') ? 'descending' : 'ascending'
    this.setState({ sort: { key: key, order: order } })
    _.defer(_.partial(this.props.actions.sort, {key, order}))
  }

}

export default Table
