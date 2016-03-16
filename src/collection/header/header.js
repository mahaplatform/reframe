import React from 'react'
import ReactDOM from 'react-dom'
import BatchActions from './batch_actions.js'
import CollectionActions from './collection_actions.js'
import _ from 'lodash'
import Filters from '../filters'


class Header extends React.Component {

  static defaultProps = {
    onSetView: _.noop
  }

  constructor(props) {
    super(props)
    this.state = {
      showFilters: props.showFilters
    }
  }

  render() {
    return(
      <div className="collection-header">
        <div className="ui menu">
          {this.renderRecordCount()}
          {(() => {
            if(this.props.batchActions && !_.isEmpty(this.props.batchActions)) {
              return <BatchActions {...this.props} />
            }
          })()}
          <div className="right menu">
            {_.map(this.getCollectionActions(), (action, index) => {
              let classes=['icon']
              classes.push(action.icon)
              return <a key={`collection_action_${index}`} data-content={action.tip} className="item" onClick={action.handler}><i className={classes.join(' ')} /></a>
            })}
          </div>
          {(() => {
            if(this.props.views && this.props.views.length > 1) {
              let viewOptions = []
              if(_.includes(this.props.views, 'table')) {
                viewOptions.push(<a data-content="View as Table" className={this.props.view == 'table' ? 'popup icon item active' : 'popup icon item'}  onClick={this.handleView.bind(this, 'table')}><i className="fa fa-list icon" /></a>)
              }
              if(_.includes(this.props.views, 'card')) {
                viewOptions.push(<a data-content="View as Cards" className={this.props.view == 'card' ? 'popup icon item active' : 'popup icon item'} onClick={this.handleView.bind(this, 'card')}><i className="fa fa-th icon" /></a>)
              }
              return (
                <div className="ui icon compact menu collection-header-views">
                  {viewOptions.map(opt => opt)}
                </div>
              )
            }
          })()}
        </div>
        {this.renderFilters()}
      </div>
    )
  }

  getCollectionActions() {
    // Merge in an action to show filters if filters are specified
    if(this.props.filters) {
      return [
        { key: 'filter', icon: 'filter', label: 'Filter', handler: this.toggleFilters.bind(this) },
        ...this.props.collectionActions
      ]
    }
  }

  renderRecordCount() {
    if(this.props.status === 'LOADING') {
      return (
        <div className="borderless item">
          <div className="ui active small inline loader"></div>
        </div>
      )
    }
    if (this.props.recordCount !== null) {
      const inflection = (this.props.recordCount !== 1 ? this.props.entity[1] : this.props.entity[0])
      return (
        <div className="borderless item">
          <h4 className="ui grey header">{this.props.recordCount} {inflection}</h4>
        </div>
      )
    }
  }

  toggleFilters() {
    if(this.state.showFilters) {
      this.hideFilters()
    }
    else {
      this.showFilters()
    }
  }

  showFilters() {
    this.setState({showFilters: true})
    this.props.onShowFilters()
  }

  hideFilters() {
    this.setState({showFilters: false})
    this.props.onHideFilters()
  }

  clearFilters() {
    //this.refs.filter_form.onClear("collection_filter_form")
    this.handleFilter({})
  }

  renderFilters() {
    const shouldShow = this.state.showFilters && this.props.filters && true
    const visibility = shouldShow ? 'visible' : 'collapse'
    const display = shouldShow ? 'block' : 'none'
    return (<Filters
      ref="filter_form"
      visibility={visibility}
      display={display}
      fields={this.getFilterFields()}
      onClear={this.clearFilters.bind(this)}
      onFilter={this.handleFilter.bind(this)} />
    )
  }

  getFilterFields() {
    const filterFields = _(this.props.filters)
      .chunk(2)
      .map(fields => {
        if(fields.length > 1) {
          return { type: 'fields', fields}
        }
        else {
          return _.head(fields)
        }
      })
      .value()

    return [
      {
        code: '_close',
        type: 'button',
        float: 'right',
        basic: true,
        circular: true,
        icon: 'x',
        onPress: this.hideFilters.bind(this)
      },
      ...filterFields
    ]
  }

  handleFilter(filterData) {
    const compactedFilters = _.omitBy(filterData, _.isNull)
    this.props.onFilterChange(compactedFilters)
  }

  handleView(type) {
    this.props.onSetView(type)
  }

  componentDidMount() {
    this.refs.filter_form.fill(this.props.filterValues)
  }

}

export default Header
