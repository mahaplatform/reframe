
import React from 'react'
import _ from 'lodash'
import Infinite from '../infinite'
import Format from '../format'

class Options extends React.Component {

  render() {
    const { name, format, multiple, options, results } = this.props
    return (
      <div className="reframe-filter-body">
        <div className="reframe-filter-results">
          { options.map((option, index) => {
            return (
              <div key={`filter_${index}`} className="reframe-filter-item" onClick={ this._handleChoose.bind(this, option.value, option.text, option.token) }>
                <div className="reframe-filter-item-label">
                  <Format {...option.record} format={format} value={option.text} />
                </div>
                { option.description &&
                  <div className="reframe-filter-item-description">
                    { option.description }
                  </div>
                }
                <div className="reframe-filter-item-icon">
                  { this._checked(name, multiple, results, option) ? <i className="green check icon" /> : null }
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    )
  }

  _checked(name, multiple, results, option) {
    if(multiple) {
      return results[name] && _.find(results[name], { key: option.value })
    } else {
      return results[name] && results[name].key == option.value
    }
  }

  _handleChoose(key, value, token) {
    const { name, multiple, results, onUpdate } = this.props
    let values = null
    if(multiple) {
      values = results[name] || []
      values = _.find(values, { key }) ? _.filter(values, item => (item.key !== key)) : [ ...values, { key, value: token || value } ]
    } else {
      if(!results[name] || results[name].key !== key) {
        values = { key, value: token || value }
      }
    }
    onUpdate(name, values)
  }

}

class Dynamic extends React.Component {

  render() {
    const { records } = this.props
    return (records) ? <Options { ...this._getOptions() } /> : null
  }

  _getOptions() {
    const { format, multiple, name, records, results, text, value, status, onUpdate } = this.props
    const options = records.map(record => ({
      value: _.get(record, value),
      text: _.get(record, text),
      record
    }))
    return {
      name,
      format,
      multiple,
      options,
      results,
      status,
      onUpdate
    }
  }

}

class Container extends React.Component {

  render() {
    const { endpoint, label, query } = this.props
    if(endpoint) {
      return (
        <div className="reframe-filter-search">
          <div className="reframe-filter-search-form ui form">
            <div className="reframe-filter-search-input">
              <i className="search icon" />
              <input type="text" placeholder={`Find a ${label}...`} onChange={ this._handleType.bind(this) } ref="results" value={ query } />
              { query.length > 0 && <i className="remove circle icon" onClick={ this._handleAbort.bind(this) } /> }
            </div>
          </div>
          <Infinite {...this._getInfinite()} />
        </div>

      )
    } else {
      return <Options {...this.props} />
    }
  }

  componentDidMount() {
    this._handleLookup = _.throttle(this.props.onLookup, 500)
  }

  _getInfinite() {
    const { endpoint, sort, q } = this.props
    return {
      endpoint,
      filter: { q },
      layout: (props) => <Dynamic { ...this.props} { ...props } />,
      sort
    }
  }

  _handleType(event) {
    this.props.onType(event.target.value)
    this._handleLookup(event.target.value)
  }

  _handleAbort() {
    this.props.onAbort()
  }

}

export default Container
