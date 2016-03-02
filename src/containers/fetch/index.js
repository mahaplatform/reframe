import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import when from 'when'
import whenKeys from 'when/keys'
import API from '../../api'

const UNINITIALIZED = 'uninitialized'
const AWAITING = 'awaiting'
const READY = 'ready'
const ERROR = 'error'

export default class FetchContainer extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string.isRequired,
    endpointOptions: React.PropTypes.object.isRequired,
    blocking: React.PropTypes.bool,
    single: React.PropTypes.bool,
    mapper: React.PropTypes.func,
    transformer: React.PropTypes.func,
    element: React.PropTypes.string,
    flatten: React.PropTypes.bool,
    injectAs: React.PropTypes.string
  }

  static defaultProps = {
    endpointOptions: {},
    single: false,
    blocking: false,
    mapper: _.identity,
    transformer: _.identity,
    element: 'div',
    client: undefined, // Causes API to use default client
    flatten: false,
    injectAs: 'data'
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

    const propsPromises = _(this.props)
      .omit([ 'className', 'endpoint', 'client', 'element', 'endpointOptions', 'children' ])
      .mapValues(p => when(p))
      .value()

    const endpointPromise = this.api.loadJSON(this.props.endpoint, this.props.endpointOptions)
    const propsPromiseObject = whenKeys.all(propsPromises)

    const attributesPromise = when.all([ endpointPromise, propsPromiseObject ])
      .then(([endpointData, propsData]) => this.setState({ status: READY, endpointData, propsData }))
      .catch(e => this.setState({ status: ERROR, message: e }))
      .finally(_.noop)
  }

  render() {
    let finalProps = {}

    if ( this.state.endpointData ) {

      _.assign(finalProps, this.state.propsData)

      if ( this.props.single ) {
        if ( this.props.flatten ) {
          _.assign(
            finalProps,
            _.toPairs(this.state.endpointData)
              .map(([key, val]) => this.props.mapper(val, key))
              .fromPairs()
              .value()
          )
        }
        else {
          _.assign(
            finalProps,
            {
              [this.props.injectAs]: _.toPairs(this.state.endpointData)
                .map(([key, val]) => this.props.mapper(val, key))
                .fromPairs()
                .value()
            }
          )
        }
      }
      else {
        _.assign(finalProps, { [this.props.injectAs]: _.map(this.state.endpointData, this.props.mapper) })
      }

    }

    let mappedChildren = []

    if ( !this.props.blocking || this.state.status === READY ) {
      mappedChildren = React.Children.map(this.props.children, c => React.cloneElement(c, finalProps))
    }

    const className = this.props.className
    return React.createElement(this.props.element, { className }, ...mappedChildren)
  }
}

//export {PresentState, LoadingState, EmptyState, ErrorState} from 'snax/containers/loading'
