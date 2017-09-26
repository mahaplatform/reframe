import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Searchbox from '../searchbox'
import Infinite from '../infinite'
import Format from '../../utils/format'

class Options extends React.Component {

  static propTypes = {
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.string
    ]),
    name: PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    results: PropTypes.object
  }

  render() {
    const { name, format, multiple, options, results } = this.props
    return (
      <div className="reframe-filter-body">
        <div className="reframe-filter-results">
          { options.map((option, index) => {
            const classes = ['reframe-filter-item-label']
            if(!format) classes.push('padded')
            return (
              <div key={`filter_${index}`} className="reframe-filter-item" onClick={ this._handleChoose.bind(this, option.value, option.text, option.token) }>
                <div className={ classes.join(' ') }>
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

  static propTypes = {
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.string
    ]),
    name: PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    records: PropTypes.array,
    results: PropTypes.object,
    status: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onUpdate: PropTypes.func
  }

  render() {
    const { records } = this.props
    return (records) ? <Options { ...this._getOptions() } /> : null
  }

  _getOptions() {
    const { format, multiple, name, records, results, status, text, value, onUpdate } = this.props
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

  static propTypes = {
    endpoint: PropTypes.string,
    label: PropTypes.string,
    q: PropTypes.string,
    sort: PropTypes.object,
    onQuery: PropTypes.func
  }

  render() {
    const { endpoint } = this.props
    if(endpoint) {
      return (
        <div className="reframe-filter-search">
          <div className="reframe-filter-search-input">
            <Searchbox { ...this._getSearchbox() } />
          </div>
          <Infinite {...this._getInfinite()} />
        </div>

      )
    } else {
      return <Options {...this.props} />
    }
  }

  _getSearchbox() {
    const { label, onQuery } = this.props
    return {
      prompt: `Find a ${label}`,
      onChange: onQuery
    }
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

}

export default Container
