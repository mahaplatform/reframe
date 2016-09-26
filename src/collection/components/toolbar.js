import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../actions'

class Toolbar extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    columns: React.PropTypes.array,
    records: React.PropTypes.array,
    card: React.PropTypes.object,
    layout: React.PropTypes.string,
    filters: React.PropTypes.array,
    selectAll: React.PropTypes.bool,
    batchActions: React.PropTypes.array,
    onToggleFilters: React.PropTypes.func,
    onChangeLayout: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    onExportRecords: React.PropTypes.func,
    onReloadRecords: React.PropTypes.func,
    onExecuteBatchAction: React.PropTypes.func
  }

  render() {
    const { batchActions, records, columns, card, layout, filters, selectAll } = this.props
    return (
      <div className="collection-toolbar">
        {(() => {
          if(batchActions) {
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
        })()}
        <div className="collection-layouts">
          <div className="ui icon compact menu">
            {(() => {
              if(filters) {
                return (
                  <a className="popup icon item" data-content="Filter Records" onClick={this._handleToggleFilters.bind(this)}>
                    <i className="fa fa-filter icon"></i>
                  </a>
                )
              }
            })()}
            <a className="popup icon item" data-content="Export Records" onClick={this._handleExportRecords.bind(this)}>
              <i className="fa fa-download icon"></i>
            </a>
            <a className="popup icon item" data-content="Reload Records" onClick={this._handleReloadRecords.bind(this)}>
              <i className="fa fa-refresh icon"></i>
            </a>
          </div>
          {(() => {
            if(columns && card) {
              return (
                <div className="ui icon compact menu">
                  <a className={`popup icon item ${(layout == 'table') ? 'active' : ''}`} data-content="View as Table" onClick={this._handleChangeLayout.bind(this, 'table')}>
                    <i className="fa fa-list icon"></i>
                  </a>
                  <a className={`popup icon item ${(layout == 'card') ? 'active' : ''}`} data-content="View as Cards" onClick={this._handleChangeLayout.bind(this, 'card')}>
                    <i className="fa fa-th icon"></i>
                  </a>
                </div>
              )
            }
          })()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.batchActions).dropdown({
      onChange: this._handleExecuteBatchAction.bind(this)
    })
  }

  _handleToggleFilters() {
    const { id, onToggleFilters } = this.props
    onToggleFilters(id)
  }

  _handleChangeLayout(layout) {
    const { id, onChangeLayout } = this.props
    onChangeLayout(id, layout)
  }

  _handleSelectAll() {
    const { id, onSelectAll } = this.props
    onSelectAll(id)
  }

  _handleExecuteBatchAction(index) {
    const { id, batchActions, onExecuteBatchAction } = this.props
    const batchAction = batchActions[index]
    onExecuteBatchAction(id, batchAction.component)
  }

  _handleReloadRecords() {
    const { id, onReloadRecords } = this.props
    onReloadRecords(id)
  }

  _handleExportRecords() {
    const { id, onExportRecords } = this.props
    onExportRecords(id)
  }

}

export default Toolbar
