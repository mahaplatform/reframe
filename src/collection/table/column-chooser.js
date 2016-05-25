import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

export default class ColumnChooser extends React.Component {

  static propTypes = {
    availableColumns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    visibleColumns: React.PropTypes.array.isRequired,
    onChooseColumn: React.PropTypes.function,
    onResetColumns: React.PropTypes.function
  }

  static defaultProps = {
    onChooseColumn: _.noop,
    onResetColumns: _.noop
  }

  constructor(props) {
    super(props)

    this.state = {
      searchString: ''
    }
  }

  render() {
    const {availableColumns} = this.props
    return (
      <div className="left menu" >
        <div className="header">
          <i className="columns icon"></i>
          Column Name
        </div>
        <div className="scrolling menu">
          { _.map(availableColumns, (col, i) => {
            if(col.primary)
              return null
            else
              return (
                <div className="item" onClick={e => this.chooseColumn(e, i, !this.isColumnVisible(i))}>
                  {this.isColumnVisible(i) ? <i className="toggle on icon"/> : <i className="toggle off icon"/>}
                  {col.label}
                </div>
              )
          })}
          <div className="item" onClick={e => this.resetColumns(e)}>
            <i className="refresh icon"></i>
            Reset Columns
          </div>
        </div>
      </div>
    )
  }

  isColumnVisible(index) {
    return _.includes(this.props.visibleColumns, index)
  }

  chooseColumn(e, key, visible) {
    e.preventDefault()
    e.stopPropagation()
    console.log(key, visible)
    this.props.onChooseColumn(key, visible)
  }

  resetColumns(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.onResetColumns()
  }

  onChangeSearch(e) {
    this.setState({searchString: e.target.value})
  }

  getAvailableColumns() {}

}
