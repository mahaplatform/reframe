import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import when from 'when'
import whenKeys from 'when/keys'
import API from '../../api'
import history from '../../utils/history'
import Config from '../../utils/config'
import Logger from '../../utils/logger'

const UNINITIALIZED = 'uninitialized'
const AWAITING = 'awaiting'
const READY = 'ready'
const ERROR = 'error'

export default class InfiniteContainer extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string.isRequired,
    endpointOptions: React.PropTypes.object.isRequired,
    blocking: React.PropTypes.bool,
    single: React.PropTypes.bool,
    mapper: React.PropTypes.func,
    transformer: React.PropTypes.func,
    element: React.PropTypes.string,
    flatten: React.PropTypes.bool,
    injectAs: React.PropTypes.string,
    getNextPageUrl: React.PropTypes.function,
    documentSelector: React.PropTypes.string,
    bottomThreshold: React.PropTypes.number,
    autoSync: PropTypes.bool
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
    injectAs: 'data',
    getNextPageUrl: ({links}) => links.next || null,
    documentSelector: 'app-container',
    bottomThreshold: 300,
    onTerminate: _.noop,
    autoSync: true
  }


  constructor(props) {
    super(props)
    this.state = {
      status: AWAITING,
      endpointData: [],
      propsData: null,
      message: null,
      nextPage: null,
      isAtEnd: false,
      totalRecords: 0
    }

    this.api = new API(props.client || undefined)

    this.onTerminate = _.once(() => {
      this.forceUpdate()
      props.onTerminate()
    })
  }

  makeRequest(location) {
    if ( this.state.isAtEnd ) {
      return this.onTerminate()
    }

    this.setState(
      {
        status: AWAITING
      }
    )

    const propsPromises = _({...this.props})
      .omit(
        [
          'className',
          'endpoint',
          'client',
          'element',
          'endpointOptions',
          'children',
          'getNextPageUrl',
          'mapper',
          'transformer',
          'single',
          'flatten',
          'documentSelector',
          'bottomThreshold',
          'blocking',
          'propsData',
          'endpointData',
          'nextPage'
        ]
      )
      .mapValues(p => when(p))
      .value()

    const query = history.createLocation(location).query

    const endpointPromise = this.api.loadJSON(location, { ...query, ...this.props.endpointOptions })
      .tap(e => Logger.log(e))
    const propsPromiseObject = whenKeys.all(propsPromises).tap(e => Logger.log(e))

    when.all([ endpointPromise, propsPromiseObject ])
      .tap(r => Logger.log(r))
      .then(
        ([endpointData, propsData]) => {
          const nextPage = this.props.getNextPageUrl(endpointData)
          if ( nextPage ) {
            this.setState(
              {
                status: READY,
                endpointData: [ ...this.state.endpointData, ...endpointData.records ],
                totalRecords: endpointData.total_records,
                propsData,
                nextPage
              }
            )
          }
          else {
            this.setState(
              {
                status: READY,
                endpointData: [ ...this.state.endpointData, ...endpointData.records ],
                totalRecords: endpointData.total_records,
                propsData,
                nextPage,
                isAtEnd: true
              }
            )
          }
        }
      )
      .catch(e => this.setState({ status: ERROR, message: e }))
      .finally(_.noop)
  }

  componentDidMount() {
    this.scrollListener = _.bind(this.handleScroll, this)
    window.addEventListener('scroll', this.scrollListener)
    this.hitBottomFn = _.debounce(_.bind(this.hitBottom, this), 1000)
    this.makeRequest(this.props.endpoint)

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  shouldComponentUpdate() {
    return true
  }

  handleScroll() {
    let windowHeight = window.innerHeight;
    let documentHeight = parseInt(
      getComputedStyle(document.body)
        .height
        .split('px')[ 0 ]
    )
    let topOfView = window.pageYOffset;
    let bottomOfView = topOfView + windowHeight;
    let distanceFromBottom = documentHeight - bottomOfView;

    //console.log(windowHeight, documentHeight, topOfView, bottomOfView, distanceFromBottom)

    // There's a dirty trick where the browser thinks it's below the bottom while the page is loading.
    // The distanceFromBottom > 0 stops the trigger.
    if ( distanceFromBottom < (this.props.bottomThreshold || 100) && this.state.status !== AWAITING ) {
      _.defer(this.hitBottomFn.bind(this))
    }
  }

  hitBottom() {
    this.makeRequest(this.state.nextPage)
  }

  render() {
    let finalProps = {
      status: this.state.status,
      isAtEnd: this.state.isAtEnd,
      totalRecords: this.state.totalRecords
    }

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

  reset() {
    this.setState({
      status: AWAITING,
      endpointData: [],
      propsData: null,
      message: null,
      nextPage: null,
      isAtEnd: false
    })
    this.makeRequest(this.props.endpoint)
  }

  componentDidUpdate(prevProps) {
    // Reset state and sync when a new endpoint or options are passed
    if(!this.props.autoSync) return;
    if(prevProps.endpoint !== this.props.endpoint || this.props.endpointOptions !== prevProps.endpointOptions) {
      this.reset()
    }
  }

}

//export {PresentState, LoadingState, EmptyState, ErrorState} from 'snax/containers/loading'
