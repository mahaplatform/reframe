import React from 'react'
import ReactDOM from 'react-dom'
import Collection from './index.js'
import InfiniteContainer from '../containers/infinite'
import { uid } from '../utils/random'
import FilterContext from '../utils/filter_context'
import FilterContextHelper from '../utils/filter_context_helper'
import ExportModal from './export-modal'
import Config from '../utils/config'
import _ from 'lodash'

export default class InfiniteCollection extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object,
    history: React.PropTypes.object
  }

  static defaultProps = {
    client: null,
    collectionActions: [],
    autoActions: true,
    sticky: true
  }

  constructor(props) {
    super(props)
    this.state = {
      view: 'table',
      sort: props.sort || { key: 'id', order: 'asc' },
      filters: {},
      showFilters: false,
      showExporter: false,
      sticky: false
    }
    this.id = props.id || uid()
  }

  render() {
    const exportUrlPrefix = Config.get('api.pathPrefix', '')
    const modalOptions = {
      onCancel: this.closeExporter.bind(this),
      fields: this.props.columns,
      query: this.getQueryString(),
      exportUrl: this.props.exportUrl || `${exportUrlPrefix}/${this.props.endpoint}`.replace(/([^:])\/+/gi, '$1/')
    }
    return (
      <div>
        <InfiniteContainer ref="container" {...this.getContainerOptions()}>
          <LoadingCollection {...this.getCollectionProps()} />
        </InfiniteContainer>
        { this.state.showExporter ? <ExportModal {...modalOptions} /> : null }
      </div>
    )
  }

  getContainerOptions() {
    return {
      endpoint: this.props.endpoint,
      endpointOptions: this.getQuery(),
      client: this.props.client,
      injectAs: "records",
      autoSync: false
    }
  }

  getCollectionProps() {
    return {
      ...this.props,
      ...this.getCallbacks(),
      id: this.id,
      sticky: this.state.sticky,
      saveVisibility: !!this.props.id,  // Only save visibility when an ID is set manually
      collectionActions: [
        { key: 'refresh', icon: 'refresh', label: 'Refresh', handler: this.refresh.bind(this) },
        { key: 'export', icon: 'download', label: 'Export', handler: this.openExporter.bind(this) },
        ...this.props.collectionActions
      ],
      recordActions: this.getRecordActions(),
      sort: this.state.sort,
      filterValues: this.state.filters,
      showFilters: this.state.showFilters
    }
  }

  getCallbacks() {
    return {
      onClickColumnHeader: col => {
        if(col === this.state.sort.key) {
          const order = this.state.sort.order === 'asc' ? 'desc' : 'asc'
          const key = this.state.sort.key
          this.setState({sort: {key, order}})
        }
        else {
          const order = 'asc'
          const key = col
          this.setState({sort: {key, order}})
        }
        _.defer(()=>this.refs.container.reset())
      },
      onFilterChange: filters => {
        this.setState({filters})
        _.defer(()=>this.refs.container.reset())
      },
      onShowFilters: () => this.setState({showFilters: true}),
      onHideFilters: () => this.setState({showFilters: false})
    }
  }

  getRecordActions() {
    return _.map(this.props.recordActions, action => {
      if(action.redirect) {
        return {
          ...action,
          handler: (id, data) => this.context.router.push(_.template(action.redirect)(data))
        }
      }
      else {
        return action
      }
    })
  }

  getQuery() {
    const sort = {[this.state.sort.key]: this.state.sort.order}
    const query = this.state.filters
    return FilterContextHelper.toQueryParams(new FilterContext({ sort, query }))
  }

  getQueryString() {
    const sort = {[this.state.sort.key]: this.state.sort.order}
    const query = this.state.filters
    return FilterContextHelper.toQueryString(new FilterContext({ sort, query }))
  }

  refresh() {
    _.defer(()=>this.refs.container.reset())
  }

  openExporter() {
    this.setState({showExporter: true})
  }

  closeExporter() {
    this.setState({showExporter: false})
  }

  componentDidMount() {
    if(this.props.sticky) {
      this.scrollHandler = _.throttle(this.handleScroll.bind(this), 100)
      window.addEventListener('scroll', this.scrollHandler)
    }
  }

  componentWillUmmount() {
    if(this.props.sticky) {
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }

  handleScroll(e) {
    let windowHeight = window.innerHeight
    let scrollTop = window.scrollY
    let tableHeight = $(`table[data-reframe-table-id=${this.id}]`).outerHeight()
    let tableTop = $(`table[data-reframe-table-id=${this.id}]`).offset().top
    let topBuffer = $('.application-menu').first().outerHeight()

    // Check to see if the whole table fits on screen, and exit if it does
    if(tableHeight < windowHeight) {
      this.setState({sticky: false})
    }

    if((tableTop - topBuffer - scrollTop < 0 ) && this.state.sticky == false) {
      this.setState({sticky: true})
    }
    else if((tableTop - topBuffer - scrollTop >= 0 ) && this.state.sticky == true) {
      this.setState({sticky: false})
    }
  }
}

const LoadingCollection = props => {
  const statusMappings = {
    'awaiting': 'SYNCING'
  }
  const tableStatus = _.get(statusMappings, props.status, 'READY')
  return (
    <div>
      <Collection {...props} recordCount={props.totalRecords || 0} status={tableStatus} />
      <div className="ui basic segment">
        { (!props.isAtEnd && !_.isEmpty(props.records))  ? <div className="ui active centered inline loader"></div> : null }
      </div>
    </div>
  )
}
