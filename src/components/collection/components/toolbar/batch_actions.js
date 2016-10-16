import React from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class BatchActions extends React.Component {

  static propTypes = {
    batchActions: React.PropTypes.array,
    selectAll: React.PropTypes.bool,
    onSelectAll: React.PropTypes.func,
    onExecuteBatchAction: React.PropTypes.func
  }

  render() {
    const { batchActions, selectAll } = this.props
    return (
      <div className="collection-batch-actions">
        <input type="checkbox" checked={selectAll} onChange={this._handleSelectAll.bind(this)} />
        <div className="ui dropdown selection" ref="batchActions">
          <i className="dropdown icon"></i>
          <div className="default text">With Selected</div>
          <div className="menu">
            {batchActions.map((action, index) => {
              return (
                <div key={`action_${index}`} className="item" data-value={index}>
                  {action.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.batchActions).dropdown({
      onChange: this._handleExecuteBatchAction.bind(this)
    })
  }

  _handleSelectAll() {
    this.props.onSelectAll()
  }

  _handleExecuteBatchAction(index) {
    const { batchActions, onExecuteBatchAction } = this.props
    const batchAction = batchActions[index]
    onExecuteBatchAction(batchAction.component)
  }

}

const mapStateToProps = (state) => ({
  selectAll: state.selectAll
})

const mapDispatchToProps = {
  onSelectAll: actions.selectAll,
  onExecuteBatchAction: actions.executeBatchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(BatchActions)
