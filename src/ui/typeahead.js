import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import API from '../api'

export default class Typeahead extends React.Component {

  static propTypes = {
    code:            React.PropTypes.string,
    disabled:        React.PropTypes.bool,
    placeholder:     React.PropTypes.string,
    defaultValue:    React.PropTypes.string,
    endpoint:        React.PropTypes.string,
    query:           React.PropTypes.string,
    resultField:     React.PropTypes.string,
    client:          React.PropTypes.function,
    requestThrottle: React.PropTypes.number,
    itemComponent:   React.PropTypes.element
  }

  static defaultProps = {
    onChange:        _.noop,
    onChooseResult:  _.noop,
    query:           'q',
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
    return (
      <div className="typeahead">
        <TypeaheadInput {...this.attachInputCallbacks()} value={this.state.searchValue}/>
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
    const {searchValue} = this.state

    if (_.isEmpty(searchValue)) {
      this.setState({
        queryCounter:        this.state.queryCounter + 1,
        isLoadingResults:    false,
        errorLoadingResults: false,
        results:             []
      })
      return
    }

    const queryId = this.state.queryCounter + 1
    this.setState({ queryCounter: queryId, errorLoadingResults: false })
    this.api.loadJSON(`${this.props.endpoint}?${this.props.query}=${encodeURIComponent(searchValue)}`)
      .then(response => {
        // Tracking the queryId ensures only the latest result is processed, in case multiple
        // requests arrive out of order.
        if (this.state.queryCounter == queryId) {
          this.setState({ results: response[this.props.resultField] || [], isLoadingResults: false })
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
      <div className="ui centered text">No Results</div>
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
