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
    errorComponent: PropTypes.node
  }

  static defaultProps = {
    single: false,
    blocking: true,
    element: 'div',
    client: undefined, // Causes API to use default client
    flatten: false,
    allowFailures: false,
    errorComponent: null
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
    const {endpoints, allowFailures} = this.props
    const propsPromises = _(this.props)
      .omit([ 'className', 'endpoints', 'client', 'element', 'children' ])
      .mapValues(p => when(p))
      .value()

    const endpointPromises = _.mapValues(endpoints, e => this.api.loadJSON(_.get(e, 'url', e), _.get(e, 'options', {})))
    let propsPromiseObject
    if(allowFailures) {
      propsPromiseObject = whenKeys.settle(_.merge(propsPromises, endpointPromises))
    }
    else {
      propsPromiseObject = whenKeys.all(_.merge(propsPromises, endpointPromises))
    }

    propsPromiseObject.then(propsData => this.setState({status: READY, propsData}))
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

