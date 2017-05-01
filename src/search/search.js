import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export class Search extends React.Component {

  static contextTypes = {
    modal: PropTypes.object,
    history: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.bool.isRequired,
    choice: PropTypes.number,
    focused: PropTypes.bool,
    query: PropTypes.string,
    results: PropTypes.object,
    onResetSearch: PropTypes.func.isRequired,
    onAbortSearch: PropTypes.func.isRequired,
    onCompleteSearch: PropTypes.func.isRequired,
    onLookup: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this._handleLookup = _.throttle(value => {
      this.props.onLookup(value)
    }, 500)
  }

  render() {
    const { focused, results, query } = this.props
    return (
      <div className={ focused ? 'chrome-search-panel focused' : 'chrome-search-panel' }>
        <div className="chrome-search-bar">
          <div className="chrome-search-form">
            <div className="chrome-search-input">
              <i className="search icon" />
              <div className="ui input">
                <input type="text" placeholder="Search" ref="query" onChange={this._handleType.bind(this)} onFocus={this._handleFocus.bind(this)} onBlur={this._handleBlur.bind(this)} value={query} />
              </div>
              { query.length > 0 && <i className="remove circle icon" onClick={this._handleResetSearch.bind(this)} /> }
            </div>
          </div>
          <div className="chrome-search-cancel" onClick={this._handleAbortSearch.bind(this)}>
            Cancel
          </div>
        </div>
        { !results &&
          <div className="chrome-search-landing">
            <div className="chrome-search-landing-message">
              <h2>
                <i className="circular search icon" />
              </h2>
              <h3>Search for anything</h3>
            </div>
          </div>
        }
        { results && _.isEmpty(results) &&
          <div className="chrome-search-landing">
            <div className="chrome-search-landing-message">
              <h2>
                <i className="circular remove icon" />
              </h2>
              <h3>No results matched your query</h3>
            </div>
          </div>
        }
        { results && !_.isEmpty(results) &&
          <div className="chrome-search-results">
            {Object.keys(results).map((model, modelIndex) => {
              if(results[model].length) {
                return (
                  <div key={`model_${modelIndex}`} className="chrome-search-section">
                    <div className="chrome-search-model" >
                      {model}
                    </div>
                    {results[model].map((result, index) => {
                      return (
                        <div key={`result_${modelIndex}_${index}`} className="chrome-search-result" onClick={this._handleCompleteSearch.bind(this, model, index)}>
                          <p>
                            <strong>{result.text}</strong><br />
                            {result.subtext}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )
              }
            })}
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const query = this.refs.query
    window.setTimeout(function() {
      query.focus()
    }, 600)
  }

  componentDidUpdate(prevProps) {
    const { choice } = this.props
    if(prevProps.choice !== choice) {
      this.context.history.push({ pathname: choice.route, state: 'static' })
      this.context.modal.pop()
    }
  }

  _handleFocus() {
    this.props.onFocusSearch()
  }

  _handleBlur() {
    const { onAbortSearch } = this.props
    window.setTimeout(function() {
      onAbortSearch()
    }, 250)
  }

  _handleResetSearch() {
    this.props.onResetSearch()
  }

  _handleAbortSearch() {
    this.context.modal.pop()
  }

  _handleType(event) {
    const q = event.target.value
    this.props.onType(q)
    this._handleLookup(q)
  }

  _handleCompleteSearch(model, index) {
    this.props.onCompleteSearch(model, index)
  }

}

export default Search
