import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import when from 'when'
import whenKeys from 'when/keys'
import API from '../../api'
import ErrorMessage from '../../ui/messages/error'

const UNINITIALIZED = 'uninitialized'
const AWAITING = 'awaiting'
const SYNCING = 'syncing'
const READY = 'ready'
const ERROR = 'error'

export default class FetchContainer extends React.Component {
  static propTypes = {
    endpoints: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    blocking: PropTypes.bool,
    element: PropTypes.string,
    flatten: PropTypes.bool,
    allowFailures: PropTypes.bool,
    errorComponent: PropTypes.node,
    autoSync: PropTypes.bool,
    unwrap: PropTypes.bool
  }

  static defaultProps = {
    single: false,
    blocking: true,
    element: 'div',
    client: undefined, // Causes API to use default client
    flatten: false,
    allowFailures: false,
    errorComponent: null,
    autoSync: true,
    unwrap: true,
    syncLoading: false
  }

  static childContextTypes = {
    container: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      status: AWAITING,
      endpointData: null,
      propsData: null,
      message: null
    }

    this.api = new API(this.props.client)

    this.makeRequest(props.endpoints)
  }

  makeRequest(endpoints) {
    const {allowFailures, unwrap} = this.props
    const propsPromises = _(this.props)
      .omit([ 'className', 'endpoints', 'client', 'element', 'children', 'unwrap' ])
      .mapValues(p => when(p))
      .value()

    const endpointPromises = _.mapValues(endpoints, e => {
      return this.api.loadJSON(_.get(e, 'url', e), _.get(e, 'options', {}))
    })
    let propsPromiseObject
    if(allowFailures) {
      propsPromiseObject = whenKeys.settle(_.merge(propsPromises, endpointPromises))
    }
    else {
      propsPromiseObject = whenKeys.all(_.merge(propsPromises, endpointPromises))
    }

    function sniffWrappedResponse(resp) {
      return _.isPlainObject(resp) && _.every(['total_records', 'records'], _.partial(_.has, resp))
    }

    propsPromiseObject
      .then(data => {
        return _.mapValues(data, (v, k) => {
          if(k in endpoints && sniffWrappedResponse(v)) {
            return v.records
          }
          else {
            return v
          }
        })
      })
      .then(propsData => this.setState({status: READY, propsData}))
      .catch(e => this.setState({ status: ERROR, message: e }))
      .finally(_.noop)
  }

  render() {
    if(this.state.status === ERROR) {
      return this.props.errorComponent || <ErrorMessage message="There was a problem loading the data needed to show this page."/>
    }
    let finalProps = _.assign({}, this.state.propsData)
    let mappedChildren = []

    if ( !this.props.blocking || this.state.status === READY ) {
      mappedChildren = React.Children.map(this.props.children, c => React.cloneElement(c, finalProps))
    }

    const className = this.props.className
    return React.createElement(this.props.element, { className }, ...mappedChildren)
  }

  sync() {
    this.makeRequest(this.props.endpoints)
    if(this.props.syncLoading) {
      this.setState({status: AWAITING})
      this.forceUpdate()
    }
  }

  getChildContext() {
    return {
      container: {
        sync: this.sync.bind(this)
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // Reset state and sync when a new endpoint or options are passed
    const isNotEqual = _.negate(_.isEqual)
    if(isNotEqual(nextProps.endpoints, this.props.endpoints)) {
      if(!this.props.autoSync) return;
      this.setState({
        status: AWAITING,
        endpointData: null,
        propsData: null,
        message: null
      })
      this.makeRequest(nextProps.endpoints)
    }
  }
}

