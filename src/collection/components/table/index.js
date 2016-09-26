import React from 'react'
import Thead from './thead'
import Tbody from './tbody'

class Table extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    records: React.PropTypes.array,
    selected: React.PropTypes.array,
    params: React.PropTypes.object,
    empty: React.PropTypes.string,
    columns: React.PropTypes.array,
    status: React.PropTypes.string,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    onSortRecords: React.PropTypes.func
  }

  render() {
    const { id, records, params, empty, columns, status, selected, recordActions, batchActions, onSelect, onSortRecords } = this.props
    return (
      <div className="table" ref="table">
        <table className="ui single unstackable line table">
          <Thead id={id}
                 columns={columns}
                 params={params}
                 batchActions={batchActions}
                 onSortRecords={onSortRecords} />
          <Tbody id={id}
                 empty={empty}
                 columns={columns}
                 records={records}
                 selected={selected}
                 status={status}
                 recordActions={recordActions}
                 batchActions={batchActions}
                 onSelect={onSelect} />
        </table>
      </div>
    )
  }

}

export default Table
