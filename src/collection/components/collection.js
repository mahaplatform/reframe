import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Filters from './filters'
import Toolbar from './toolbar'
import Cards from './cards'
import Table from './table'
import Export from './export'
import * as actions from '../actions'

class Collection extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
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
    batchActions: React.PropTypes.array,
    onFetchColumns: React.PropTypes.func,
    onSetColumns: React.PropTypes.func,
    onFetchRecords: React.PropTypes.func,
    onSetRecords: React.PropTypes.func,
    onFilterRecords: React.PropTypes.func,
    onSortRecords: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onToggleFilters: React.PropTypes.func,
    onChangeLayout: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    onExportRecords: React.PropTypes.func,
    onReloadRecords: React.PropTypes.func,
    onExecuteBatchAction: React.PropTypes.func,
    state: React.PropTypes.shape({
      records: React.PropTypes.string,
      params: React.PropTypes.object,
      status: React.PropTypes.string,
      expanded: React.PropTypes.bool,
      layout: React.PropTypes.string,
      exporting: React.PropTypes.bool,
      batchAction: React.PropTypes.string,
      selected: React.PropTypes.array
    }),
  }

  render() {
    const { id, card, empty, filters, recordActions, batchActions } = this.props
    const { onFilterRecords, onSortRecords, onSelect, onToggleFilters, onChangeLayout, onSelectAll, onExportRecords, onReloadRecords, onExecuteBatchAction } = this.props
    const { columns, records, params, status, expanded, layout, exporting, batchAction, selected, selectAll } = this.props.state
    if(status) {
      const classes = (expanded) ? ['collection','expanded'] : ['collection']
      return (
        <div className={classes.join(' ')}>
          {(() => {
            if(filters) {
              return (
                <Filters id={id}
                         filters={filters}
                         onFilterRecords={onFilterRecords} />
              )
            }
          })()}
          <div className="collection-main">
            <Toolbar id={id}
                     columns={columns}
                     layout={layout}
                     filters={filters}
                     selectAll={selectAll}
                     card={card}
                     batchActions={batchActions}
                     onToggleFilters={onToggleFilters}
                     onChangeLayout={onChangeLayout}
                     onSelectAll={onSelectAll}
                     onExportRecords={onExportRecords}
                     onReloadRecords={onReloadRecords}
                     onExecuteBatchAction={onExecuteBatchAction} />
            <div className="collection-data">
              {(() => {
                if(layout == 'card') {
                  return <Cards id={id}
                                card={card}
                                selected={selected}
                                records={records}
                                selected={selected}
                                recordActions={recordActions}
                                batchActions={batchActions}
                                onSelect={onSelect} />
                } else {
                  return <Table id={id}
                                empty={empty}
                                params={params}
                                columns={columns}
                                records={records}
                                selected={selected}
                                status={status}
                                recordActions={recordActions}
                                batchActions={batchActions}
                                onSortRecords={onSortRecords}
                                onSelect={onSelect} />
                }
              })()}
            </div>
            {(batchAction) ? batchAction({ ids: selected }) : null}
            {(exporting) ? <Export /> : null}
          </div>
        </div>
      )
    } else {
      return <div className="ui active centered inline loader" />
    }
  }

  componentDidMount() {
    this._handleLoadColumns()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.state.status != this.props.state.status) {
      if(_.includes(['columns_loaded', 'reload_records'], this.props.state.status)) {
        this._handleLoadRecords()
      }
    }
  }

  _handleLoadColumns() {
    const { id, columns, records, onSetColumns, onFetchColumns } = this.props
    if(_.isArray(columns)) {
      onSetColumns(id, columns)
    } else if(_.isString(columns)) {
      onFetchColumns(id, columns)
    } else if(_.isArray(records)) {
      const keys = _.keys(records[0])
      const inferred = _.map(keys, key => ({ label: key, key: key, primary: true, visible: true }))
      onSetColumns(id, inferred)
    }
  }

  _handleLoadRecords() {
    const { id, records, state, onSetRecords, onFetchRecords } = this.props
    if(_.isArray(records)) {
      const ordered = _.orderBy(records, state.params.sort.key, state.params.sort.order)
      onSetRecords(id, ordered)
    } else if(_.isString(records)) {
      onFetchRecords(id, records, {
        ...state.params.filter,
        sort: (state.params.sort.order == 'desc' ? '-' : '') + state.params.sort.key
      })
    }
  }

}

const mapStateToProps = (state, props) => ({
  state: state[props.id]
})

const mapDispatchToProps = {
  onFetchColumns: actions.fetchColumns,
  onSetColumns: actions.setColumns,
  onFetchRecords: actions.fetchRecords,
  onSetRecords: actions.setRecords,
  onSelect: actions.select,
  onFilterRecords: actions.filterRecords,
  onSortRecords: actions.sortRecords,
  onToggleFilters: actions.toggleFilters,
  onChangeLayout: actions.changeLayout,
  onSelectAll: actions.selectAll,
  onExportRecords: actions.exportRecords,
  onReloadRecords: actions.reloadRecords,
  onExecuteBatchAction: actions.executeBatchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
