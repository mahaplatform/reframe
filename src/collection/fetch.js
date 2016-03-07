import React from 'react'
import ReactDOM from 'react-dom'
import Collection from './index.js'
import LoadingContainer, { LoadingState, PresentState, EmptyState } from 'snax/lib/containers/loading'
import CoreAPI from '../api'
import _ from 'lodash'
import when from 'when'
import FilterContext from 'utils/filter_context'
import FilterContextHelper from 'utils/filter_context_helper'
import Logger from 'utils/logger'

export default class FetchCollection extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string,
    options: React.PropTypes.object,
    promise: React.PropTypes.object,
    empty: React.PropTypes.string,
    client: React.PropTypes.object
  }

  static defaultProps = {
    client: new CoreAPI()
  }

  constructor(props) {
    super(props)

    this.state = {
      asyncStatus: 'AWAITING',
      dataPromise: when([]) || props.promise,
      resolvedData: undefined
    }
  }

  buildRequest() {
    if(this.props.promise) {
      return this.props.promise
    }
    else {
      const sort = {[this.props.sort.key]: this.props.sort.order}
      const parameters = FilterContextHelper.toQueryParams(new FilterContext({sort}))
      return this.props.client.loadJSON(this.props.endpoint, {...this.props.options, ...parameters})
        .tap(response => Logger.info(response))
        .then(response => response.records)
    }
  }

  collectionProps() {
    return _.omit(this.props, ['endpoint', 'promise', 'options'])
  }

  render() {
    const isLoading = this.state.asyncStatus === 'LOADING' || this.state.asyncStatus === 'UPDATING'
    const isError = this.state.asyncStatus === 'ERROR'
    return (
      <LoadingContainer content={this.state.resolvedData} isLoading={isLoading} isError={isError}>
        <LoadingState>
          <Collection records={[]} {...this.collectionProps()} status="LOADING" />
        </LoadingState>
        <EmptyState>
          <Collection records={[]} {...this.collectionProps()} />
        </EmptyState>
        <PresentState>
          <Collection records={this.state.resolvedData} {...this.collectionProps()} status={this.state.asyncStatus === 'UPDATING' ? 'LOADING' : null} />
        </PresentState>
      </LoadingContainer>
    )
  }

  componentDidMount() {
    this.buildRequest()
      .then(data => this.setState({resolvedData: data, asyncStatus: 'COMPLETE'}))
      .catch(error => {
        Logger.error(error)
        this.setState({ asyncStatus: 'ERROR', resolvedData: null })
      })
  }

  componentWillReceiveProps(nextProps) {
    const dataPromise = this.buildRequest()
      .then(data => this.setState({resolvedData: data, asyncStatus: 'COMPLETE'}))
      .catch(error => this.setState({asyncStatus: 'ERROR', resolvedData: null}))
    this.setState({asyncStatus: 'UPDATING', dataPromise})
  }
}
