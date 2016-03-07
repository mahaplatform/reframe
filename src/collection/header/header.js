import React from 'react'
import ReactDOM from 'react-dom'
import BatchActions from './batch_actions.js'
import CollectionActions from './collection_actions.js'
import _ from 'lodash'
import Form from '../../form'

class Header extends React.Component {

  static defaultProps = {
    onSetView: _.noop
  }

  constructor(props) {
    super(props)
    this.state = {
      showFilters: false
    }
  }

  render() {
    return(
      <div className="collection-header">
        <div className="ui stackable mobile vertically padded reversed grid">
          <div className="four wide column">
            {(() => {
              if(this.props.batchActions && !_.isEmpty(this.props.batchActions)) {
                return <BatchActions {...this.props} />
              }
            })()}
          </div>
          <div className="twelve wide column right aligned" ref="collectionActions">
            {(this.props.collectionActions) ? <CollectionActions collectionActions={this.getCollectionActions()} /> : ''}
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
        </div>
        {this.renderFilters()}
      </div>
    )
  }

  getCollectionActions() {
    // Merge in an action to show filters if filters are specified
    if(this.props.filters) {
      return [
        { key: 'filter', icon: 'filter', label: 'Filter', handler: this.showFilters.bind(this) },
        ...this.props.collectionActions
      ]
    }
  }

  showFilters() {
    this.setState({showFilters: true})
  }

  hideFilters() {
    this.setState({showFilters: false})
  }

  clearFilters() {
    this.refs.filter_form.onClear("collection_filter_form")
    this.handleFilter({})
  }

  renderFilters() {
    const shouldShow = this.state.showFilters && this.props.filters && true
    const visibility = shouldShow ? 'visible' : 'collapse'
    const display = shouldShow ? 'block' : 'none'
    return (
      <div style={{visibility, display}}>
        <Form
          ref="filter_form"
          id="collection_filter_form"
          style={{marginBottom: 12}}
          sections={[{fields: this.props.filters}]}
          onSubmit={this.handleFilter.bind(this)}
          onCancel={this.hideFilters.bind(this)}
          buttons={[
            {type: 'submit', label: 'Filter'},
            {type: 'cancel', label: 'Close'},
            {color: 'neutral', label: 'Clear', action: this.clearFilters.bind(this)}
          ]}
        />
      </div>)
  }

  handleFilter(filterData) {
    const compactedFilters = _.omitBy(filterData, _.isNull)
    this.props.onFilterChange(compactedFilters)
  }

  handleView(type) {
    this.props.onSetView(type)
  }

}

export default Header
