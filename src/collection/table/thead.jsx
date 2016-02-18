import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Thead extends React.Component {

  static defaultProps = {
    onSort: _.noop,
    onCheckAll: _.noop,
    onClickColumns: _.noop
  }

  render() {
    return(
      <thead>
        <tr>
          {(() => {
            if(!_.isEmpty(this.props.batchActions)) {
              return <th className="collapsing primary"><input ref="toggle" type="checkbox" checked={this.props.checkAll} onChange={this.handleCheckAll.bind(this)} /></th>
            }
          })()}
          { this.props.columns.map((column, index) => {
            if(_.includes(this.props.visible, index)) {
              let classes = (!column.primary) ? ['secondary'] : []
              if(column.key === this.props.sort.key) {
                if(this.props.sort.order == 'descending') {
                  classes.push('sorted descending')
                } else  {
                  classes.push('sorted ascending')
                }
              }
              return <th key={`column_${index}`} className={classes.join(' ')} onClick={this.handleSort.bind(this, column.key)}>{column.label}</th>
            }
          })}
          <th className="collapsing primary center aligned"><i className="ui columns icon" onClick={this.handleColumns.bind(this)} /></th>
        </tr>
      </thead>
    )
  }

  handleCheckAll() {
    let checked = this.refs.toggle.checked
    this.props.onCheckAll(checked)
  }

  handleColumns() {
    this.props.onClickColumnChooser()
  }

  handleSort(key) {
    this.props.onClickColumnHeader(key)
  }

}

export default Thead
