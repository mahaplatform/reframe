import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header/header.js'
import Table from './table/table.js'
import Card from './card/cards.js'
import _ from 'lodash'

export default class Collection extends React.Component {

  static propTypes = {
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
      key: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
      primary: React.PropTypes.bool,
      visible: React.PropTypes.bool,
      cell: React.PropTypes.component
    })).isRequired,
    empty: React.PropTypes.string.isRequired,
    records: React.PropTypes.array,
    views: React.PropTypes.arrayOf(React.PropTypes.string),
    card: React.PropTypes.component,
    sort: React.PropTypes.shape({
      key: React.PropTypes.string,
      order: React.PropTypes.oneOf(['ascending','descending'])
    }).isRequired,
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
    onClickColumnChooser: _.noop
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: _.map(_.filter(_.each(props.columns, function(column, index) { column.index = index; return column; }), {visible: true}), 'index'),
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
        <ActiveView {...this.props} {...this.state} {...this.context} />
        {(() => {
          if(this.props.status === 'LOADING') {
            return <div className="ui active centered inline loader"></div>
          } else if(this.props.status === 'ERROR') {
            return <div className="ui red segment"><i className="warning circle icon" /> Error loading records</div>
          }
        })()}
      </div>
    )
  }

  componentDidMount() {
    let selfTrigger = (fn) => {
      var self = this;
      return _.wrap(fn, (ffn, ...args) => {
        if(_.isArray(args[0])) {
          args[0][0] === self.props.componentId ? ffn.bind(self)(..._.drop(args[0], 1)) : _.noop
        }
        else {
          args[0] === self.props.componentId ? ffn.bind(self)(..._.drop(args, 1)) : _.noop
        }
      })
    }

    //this.listeners.push(actionListener.addActionListener(CollectionActions.SET_VIEW, selfTrigger(this.handleSetView)))
    //this.listeners.push(actionListener.addActionListener(CollectionActions.TOGGLE_VISIBILITY, selfTrigger(this.handleToggleVisibility)))
    //this.listeners.push(actionListener.addActionListener(CollectionActions.CHECK, selfTrigger(this.handleCheck)))
    //this.listeners.push(actionListener.addActionListener(CollectionActions.CHECK_ALL, selfTrigger(this.handleCheckAll)))
  }

  componentWillUnmount() {
    //_.each(this.listeners, actionListener.removeActionListener.bind(actionListener))
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

}
