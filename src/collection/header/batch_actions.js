import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class BatchActions extends React.Component {

  render() {
    return (
      <div className="ui selection dropdown" ref="batchActions">
        <i className="dropdown icon" />
        <div className="default text">With Selected</div>
        <div className="menu">
          { this.props.batchActions.map((action, index) => {
            return <div className="item" key={`batch_action_${index}`} onClick={acion.handler}>{action.label}</div>
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.batchActions).dropdown({ action: 'nothing' })
  }

  componentDidUpdate() {
    $(this.refs.batchActions).dropdown('refresh')
  }

}

export default BatchActions
