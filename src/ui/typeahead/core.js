import React from 'react'
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
      errorLoadingResults: false,
      showResults:         false
    }

    this.inputChangeHandler = _.throttle(this.onInputChange.bind(this), this.props.requestThrottle, { leading: false })

    this.api = new API(props.client)
  }

  render() {
    const { results, searchValue, isLoadingResults, showResults } = this.state
    const { placeholder, itemComponent, onChooseResult } = this.props

    let classes = ['typeahead']
    classes.push((true) ? 'top' : 'bottom')
    if (showResults && results.length > 0) {
      classes.push('active')
    }

    return (
      <div className={classes.join(' ')}>
        <TypeaheadInput {...this.attachInputCallbacks()} value={searchValue} placeholder={placeholder}/>
        {(() => {
          if (isLoadingResults && _.isEmpty(results)) {
            return <TypeaheadResultLoader />
          }
          else if (showResults && results.length > 0) {
            return <TypeaheadResultList results={results} onChooseResult={onChooseResult}
                                        itemComponent={itemComponent}/>
          }
          else if (showResults && searchValue.length >= 1) {
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
        this.setState({ focused: true, showResults: true })
      },
      onBlur:   () => {
        this.setState({ focused: false, showResults: false })
      },
      onChange: (event) => {
        this.setState({ searchValue: event.target.value, isLoadingResults: true })
        this.inputChangeHandler()
      }
    }
  }

  onInputChange() {
    const { searchValue, queryCounter } = this.state
    const { endpoint, query, extraQueries, resultField } = this.props

    if (_.isEmpty(searchValue)) {
      this.setState({
        queryCounter:        this.state.queryCounter + 1,
        isLoadingResults:    false,
        errorLoadingResults: false,
        showResults:         false,
        results:             []
      })
      return
    }

    const requestQueryString = objectToQueryString({ ...extraQueries, [query]: searchValue })
    const queryId            = queryCounter + 1

    this.setState({ queryCounter: queryId, errorLoadingResults: false })

    this.api.loadJSON(endpoint + requestQueryString)
      .then(response => {
        // Tracking the queryId ensures only the latest result is processed, in case multiple
        // requests arrive out of order.
        if (this.state.queryCounter == queryId) {
          this.setState({ results: response[resultField] || [], isLoadingResults: false, showResults: true })
        }
      })
      .catch(error => this.setState({ errorLoadingResults: true, showResults: true }))
  }

  clear() {
    this.setState({
      queryCounter:        this.state.queryCounter + 1,
      isLoadingResults:    false,
      errorLoadingResults: false,
      results:             [],
      searchValue:         '',
      showResults:         false
    })
  }

  hideResults() {
    this.setState({
      showResults: false
    })
  }

}

export const TypeaheadInput = props => {
  return (
    <div className="ui input">
      <input type="text"
             value={props.value}
             onChange={props.onChange}
             onFocus={props.onFocus}
             onBlur={props.onBlur}
             placeholder={props.placeholder} />
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

export const TypeaheadDefaultResult = ({ onClick = _.noop, result }) => {
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
    const { results, itemComponent, onChooseResult } = this.props
    return (
      <div className="ui typeahead results">
        {_.map(results,
          result => React.createElement(itemComponent, { result, onClick: _.partial(onChooseResult, result) }))}
      </div>
    )
  }

}
