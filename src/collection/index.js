import React from 'react'
import Header from './header/header.js'
import Table from './table/table.js'
import Card from './card/cards.js'
import _ from 'lodash'
import localForage from 'localforage'

export default class Collection extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
      key: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      primary: React.PropTypes.bool,
      visible: React.PropTypes.bool,
      cell: React.PropTypes.component
    })).isRequired,
    filters: React.PropTypes.arrayOf(React.PropTypes.object),
    empty: React.PropTypes.string.isRequired,
    rowClass: React.PropTypes.func,
    records: React.PropTypes.array,
    views: React.PropTypes.arrayOf(React.PropTypes.string),
    card: React.PropTypes.component,
    recordCount: React.PropTypes.number,
    entity: React.PropTypes.arrayOf(React.PropTypes.string),
    sort: React.PropTypes.shape({
      key: React.PropTypes.string,
      order: React.PropTypes.oneOf(['ascending','descending'])
    }).isRequired,
    saveVisibility: React.PropTypes.bool,
    collectionActions: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        handler: React.PropTypes.element,
        confirm: React.PropTypes.bool
      })
    ])),
    batchActions: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        handler: React.PropTypes.element,
        confirm: React.PropTypes.bool
      })
    ])),
    recordActions: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        handler: React.PropTypes.element,
        confirm: React.PropTypes.bool
      })
    ]))
  }

  static defaultProps = {
    componentId: Symbol(),
    onSetView: _.noop,
    onToggleVisibility: _.noop,
    onCheck: _.noop,
    onCheckAll: _.noop,
    onClickColumnHeader: _.noop,
    onClickColumnChooser: _.noop,
    onFilterChange: _.noop,
    onShowFilters: _.noop,
    onHideFilters: _.noop,
    sort: { key: '', order: 'desc' },
    empty: "No records found.",
    rowClass: null,
    entity: 'record',
    recordCount: null,
    filters: [],
    filterValues: {},
    showFilters: false,
    saveVisibility: false
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: _.map(
        _.filter(
          _.each(props.columns, function(column, index) {
            column.index = index;
            return column;
          }),
          {visible: true}
        ), 'index'
      ),
      view: props.views ? _.first(props.views) : 'table',
      checkAll: false,
      checked: []
    }
    this.listeners = []
  }

  render() {
    let shouldShowHeader = !(_.isEmpty(this.props.batchActions) && _.isEmpty(this.props.collectionActions) && _.isEmpty(this.props.views))
    let ActiveView = (this.state.view === 'table' ? Table : Card)
    return (
      <div className="collection">
        { shouldShowHeader ? <Header {...this.props} {...this.state} /> : '' }
        <ActiveView
          {...this.props}
          {...this.state}
          {...this.context}
          onChooseColumn={this.onChooseColumn.bind(this)}
          onResetColumns={this.onResetColumns.bind(this)}
        />
        {(() => {
          if(this.props.status === 'LOADING') {
            return null // <div className="ui active centered inline loader"></div>
          } else if(this.props.status === 'ERROR') {
            return <div className="ui red segment"><i className="warning circle icon" /> Error loading records</div>
          }
        })()}
      </div>
    )
  }

  componentDidMount() {
    this.loadVisibility(vis => {
      if(vis) {
        this.setState({visible: vis})
      }
    })
  }

  componentWillUnmount() {
    this.saveVisibility()
  }

  onChooseColumn(key, visible) {
    if(visible) {
      this.setState({visible: _.union(this.state.visible, [key])})
      this.saveVisibility(_.union(this.state.visible, [key]))
    }
    else {
      this.setState({visible: _.difference(this.state.visible, [key])})
      this.saveVisibility(_.difference(this.state.visible, [key]))
    }
  }

  onResetColumns() {
    // Reset to default visibility options
    this.setState({
      visible: _.map(
        _.filter(
          _.each(this.props.columns, function(column, index) {
            column.index = index;
            return column;
          }),
          {visible: true}
        ), 'index'
      )
    })
    // Erase stored visibility state
    this.clearVisibility()
  }

  handleSetView(view) {
    this.setState({view: view})
  }

  handleCheck(id, check) {
    let checked = this.state.checked
    if(check) {
      checked.push(id)
    } else {
      checked = _.without(checked, id)
      this.setState({checkAll: false})
    }
    this.setState({checked: checked})
  }

  handleCheckAll(checkAll) {
    let checked = []
    if(checkAll) {
      for(var i in this.props.records) {
        var record = this.props.records[i]
        checked.push(record.id)
      }
    }
    this.setState({checked: checked, checkAll: checkAll})
  }

  handleToggleVisibility(visible) {
    this.setState({ visible: visible })
  }

  saveVisibility(data) {
    if(this.props.saveVisibility) {
      localForage.setItem(`collections.${this.props.id}.visibility`, data || this.state.visible)
    }
  }

  loadVisibility(cb) {
    if(this.props.saveVisibility) {
      localForage.getItem(`collections.${this.props.id}.visibility`, (err, val) => {
        err ? cb(null) : cb(val)
      })
    }
  }

  clearVisibility(cb = _.noop) {
    localForage.removeItem(`collections.${this.props.id}.visibility`, cb)
  }


  //
  // --- STATIC HELPER METHODS ---
  //

  static purgeVisibility() {
    localForage.keys((err, keys) => {
        if(err) { throw err }
        _(keys)
          .filter(RegExp.prototype.test.bind(/^collections.*visibility$/i))
          .forEach(k => localForage.removeItem(k))
        console.log("Purged cahced table visibility settings")
      })
  }

}
