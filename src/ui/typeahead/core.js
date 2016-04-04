import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import API from '../../api'
import {objectToQueryString} from '../../utils/query'

export default class Typeahead extends React.Component {

  static propTypes = {
    code:            React.PropTypes.string,
    disabled:        React.PropTypes.bool,
    placeholder:     React.PropTypes.string,
    defaultValue:    React.PropTypes.string,
    endpoint:        React.PropTypes.string,
    query:           React.PropTypes.string,
    extraQueries:    React.PropTypes.object,
    resultField:     React.PropTypes.string,
    client:          React.PropTypes.function,
    requestThrottle: React.PropTypes.number,
    itemComponent:   React.PropTypes.element
  }

  static defaultProps = {
    onChange:        _.noop,
    onChooseResult:  _.noop,
    query:           'q',
    extraQueries:    {},
    resultField:     'results',
    requestThrottle: 500
  }

  constructor(props) {
    super(props)
    this.state = {
      results:             [],
      searchValue:         '',
      isLoadingResults:    false,
      focused:             false,
      resultCursor:        -1,
      queryCounter:        0,
      errorLoadingResults: false
    }

    this.inputChangeHandler = _.throttle(this.onInputChange.bind(this), this.props.requestThrottle, { leading: false })

    this.api = new API(props.client)
  }

  render() {
    let klasses = ['typeahead']
    klasses.push((true) ? 'top' : 'bottom')
    if(this.state.results.length > 0) {
      klasses.push('active')
    }
    return (
      <div className={klasses.join(' ')}>
        <TypeaheadInput {...this.attachInputCallbacks()} value={this.state.searchValue} placeholder={this.props.placeholder}/>
        {(() => {
          if (this.state.isLoadingResults && _.isEmpty(this.state.results)) {
            return <TypeaheadResultLoader />
          }
          else if (this.state.results.length > 0) {
            return <TypeaheadResultList results={this.state.results} onChooseResult={this.props.onChooseResult} itemComponent={this.props.itemComponent}/>
          }
          else if (this.state.searchValue.length >= 1) {
            return <TypeaheadEmptyResult />
          }
          else {
            // Show nothing
          }
        })()}
      </div>
    )
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  attachInputCallbacks() {
    return {
      onFocus:  () => {
        this.setState({ focused: true })
      },
      onBlur:   () => {
        this.setState({ focused: false })
      },
      onChange: (event) => {
        this.setState({ searchValue: event.target.value, isLoadingResults: true })
        this.inputChangeHandler()
      }
    }
  }

  onInputChange() {
    const {searchValue, queryCounter} = this.state
    const {endpoint, query, extraQueries, resultField} = this.props

    if (_.isEmpty(searchValue)) {
      this.setState({
        queryCounter:        this.state.queryCounter + 1,
        isLoadingResults:    false,
        errorLoadingResults: false,
        results:             []
      })
      return
    }

    const requestQueryString = objectToQueryString({...extraQueries, [query]: searchValue})
    const queryId = queryCounter + 1

    this.setState({ queryCounter: queryId, errorLoadingResults: false })

    this.api.loadJSON(endpoint + requestQueryString)
      .then(response => {
        // Tracking the queryId ensures only the latest result is processed, in case multiple
        // requests arrive out of order.
        if (this.state.queryCounter == queryId) {
          this.setState({ results: response[resultField] || [], isLoadingResults: false })
        }
      })
      .catch(error => this.setState({ errorLoadingResults: true }))
  }

  clear() {
    this.setState({
      queryCounter:        this.state.queryCounter + 1,
      isLoadingResults:    false,
      errorLoadingResults: false,
      results:             [],
      searchValue:         ''
    })
  }

}

export const TypeaheadInput = props => {
  return (
    <div className="ui input">
      <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    </div>
  )
}

export const TypeaheadResultLoader = props => {
  return (
    <div className="ui typeahead results">
      <div className="ui text loader">Loading</div>
    </div>
  )
}


export const TypeaheadEmptyResult = props => {
  return (
    <div className="ui typeahead results">
      <div className="empty">No Results</div>
    </div>
  )
}

export const TypeaheadDefaultResult = ({onClick = _.noop, result}) => {
  return (
    <div className="item" onClick={onClick}>
      <div className="title">{result.title || result.name || result.first_name
        ? `${result.first_name} ${result.last_name}`
        : null || result.label || result.id}</div>
      <div className="description">{result.description || result.details}</div>
    </div>
  )
}

export class TypeaheadResultList extends React.Component {

  static propTypes = {
    results:        React.PropTypes.arrayOf(React.PropTypes.object),
    itemComponent:  React.PropTypes.element,
    onChooseResult: React.PropTypes.func
  }

  static defaultProps = {
    results:        [],
    itemComponent:  TypeaheadDefaultResult,
    onChooseResult: _.noop
  }

  render() {
    const {results, itemComponent, onChooseResult} = this.props
    return (
      <div className="ui typeahead results">
        {_.map(results, result => React.createElement(itemComponent, { result, onClick: _.partial(onChooseResult, result)}))}
      </div>
    )
  }

}