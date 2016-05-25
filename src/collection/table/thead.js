import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import ColumnChooser from './column-chooser'

class Thead extends React.Component {

  static defaultProps = {
    onSort: _.noop,
    onCheckAll: _.noop,
    onClickColumns: _.noop,
    onChooseColumn: _.noop,
    sticky: false,
    surrogate: false,
    columnWidths: []
  }

  render() {
    let style = this.generateStyle()
    var nthCell = -1
    return(
      <thead style={style.thead}>
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
                if(this.props.sort.order == 'descending' || this.props.sort.order == 'desc') {
                  classes.push('sorted descending')
                } else  {
                  classes.push('sorted ascending')
                }
              }
              nthCell++
              return <th key={`column_${index}`} style={style.th[nthCell] || {}} className={classes.join(' ')} onClick={this.handleSort.bind(this, column.key)}>{column.label}</th>
            }
          })}
          <th className="collapsing primary center aligned" style={_.last(style.th) || {}}>
            <div className="ui top right pointing dropdown" ref="columns_dropdown">
              <i className="ui columns icon" onClick={this.handleColumns.bind(this)} />
              <ColumnChooser availableColumns={this.props.columns} visibleColumns={this.props.visible} onChooseColumn={this.onChooseColumn.bind(this)}/>
            </div>
          </th>
        </tr>
      </thead>
    )
  }

  componentDidMount() {
    $(this.refs.columns_dropdown).dropdown({
      action: 'nothing'
    })
  }

  componentWillUnmount() {
    $(this.refs.columns_dropdown).dropdown('destroy')
  }

  onChooseColumn(key, visible) {
    this.props.onChooseColumn(key, visible)
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

  generateStyle() {
    let {sticky, columnWidths, surrogate} = this.props

    if(sticky && !surrogate) {
      return {
        thead: {
          position: 'fixed',
          top: $('.application-menu').first().outerHeight(),
          zIndex: 5000,
          opacity: surrogate ? 0.0 : 1.0
        },
        th: _.map(columnWidths, w => ({width: w}))
      }
    }
    else {
      return {
        thead: {
          opacity: surrogate ? 0.0 : 1.0
        },
        th: []
      }
    }
  }

}

export default Thead
