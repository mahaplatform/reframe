import React from 'react'

class Toolbar extends React.Component {

  static propTypes = {
    columns: React.PropTypes.array,
    records: React.PropTypes.array,
    card: React.PropTypes.object,
    layout: React.PropTypes.string,
    filters: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    onToggleFilters: React.PropTypes.func,
    onChangeLayout: React.PropTypes.func,
    onExportRecords: React.PropTypes.func,
    onReloadRecords: React.PropTypes.func
  }

  render() {
    const { batchActions, columns, card, layout, filters } = this.props
    return (
      <div className="collection-toolbar">
        { (batchActions) ?  <BatchActions batchActions={batchActions} /> : null }
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

  _handleToggleFilters() {
    this.props.onToggleFilters()
  }

  _handleChangeLayout(layout) {
    this.props.onChangeLayout(layout)
  }

  _handleSelectAll() {
    this.props.onSelectAll()
  }

  _handleReloadRecords() {
    this.props.onReloadRecords()
  }

  _handleExportRecords() {
    this.props.onExportRecords()
  }

}

export default Toolbar
