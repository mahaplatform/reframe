import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

export default class ColumnChooser extends React.Component {

  static propTypes = {
    availableColumns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    visibleColumns: React.PropTypes.array.isRequired,
    onChooseColumn: React.PropTypes.function
  }

  static defaultProps = {
    onChooseColumn: _.noop
  }

  constructor(props) {
    super(props)

    this.state = {
      searchString: ''
    }
  }

  render() {
    let availableColumns = _.reject(this.props.availableColumns, c => c.primary)

    return (
      <div className="left menu" >
        <div className="header">
          <i className="columns icon"></i>
          Column Name
        </div>
        <div className="scrolling menu">
          { _.map(availableColumns, (col, i) => {
            return (
              <div className="item" onClick={e => this.chooseColumn(e, i, !this.isColumnVisible(i))}>
                {this.isColumnVisible(i) ? <i className="toggle on icon"/> : <i className="toggle off icon"/>}
                {col.label}
              </div>
            )
          })}
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

  onChangeSearch(e) {
    this.setState({searchString: e.target.value})
  }

  getAvailableColumns() {

  }

}