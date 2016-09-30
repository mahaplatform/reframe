import React from 'react'
import Thead from './thead'
import Tbody from './tbody'

class Table extends React.Component {

  static propTypes = {
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
    const { records, params, empty, columns, status, selected, recordActions, batchActions, onSelect, onSortRecords } = this.props
    return (
      <div className="table" ref="table">
        <table className="ui single padded unstackable line table">
          <Thead columns={columns}
                 params={params}
                 batchActions={batchActions}
                 onSortRecords={onSortRecords} />
          <Tbody empty={empty}
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
