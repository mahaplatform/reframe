import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import when from 'when'
import whenKeys from 'when/keys'
import API from '../../api'

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
    injectAs: PropTypes.string
  }

  static defaultProps = {
    single: false,
    blocking: true,
    element: 'div',
    client: undefined, // Causes API to use default client
    flatten: false,
    injectAs: 'data'
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

    this.makeRequest()
  }

  makeRequest() {
    const {endpoints} = this.props
    const propsPromises = _(this.props)
      .omit([ 'className', 'endpoints', 'client', 'element', 'children' ])
      .mapValues(p => when(p))
      .value()

    const endpointPromises = _.mapValues(endpoints, e => this.api.loadJSON(_.get(e, 'url', e), _.get(e, 'options', {})))
    const propsPromiseObject = whenKeys.all(_.merge(propsPromises, endpointPromises))

    propsPromiseObject.then(propsData => this.setState({status: READY, propsData}))
      .catch(e => this.setState({ status: ERROR, message: e }))
      .finally(_.noop)
  }

  render() {
    let finalProps = _.assign({}, this.state.propsData)
    let mappedChildren = []

    if ( !this.props.blocking || this.state.status === READY ) {
      mappedChildren = React.Children.map(this.props.children, c => React.cloneElement(c, finalProps))
    }

    const className = this.props.className
    return React.createElement(this.props.element, { className }, ...mappedChildren)
  }

  sync() {
    this.makeRequest()
  }

  getChildContext() {
    return {
      container: {
        sync: this.sync.bind(this)
      }
    }
  }
}

//export {PresentState, LoadingState, EmptyState, ErrorState} from 'snax/containers/loading'
