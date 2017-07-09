import React from 'react'
import PropTypes from 'prop-types'
import Panel from './panel'
import _ from 'lodash'

class Filter extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.number,
    fields: PropTypes.array,
    filters: PropTypes.object,
    params: PropTypes.object,
    q: PropTypes.string,
    query: PropTypes.string,
    results: PropTypes.object,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onLoad: PropTypes.func,
    onRemove: PropTypes.func,
    onResetAll: PropTypes.func,
    onSet: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const { fields, query, results } = this.props
    return (
      <div className="reframe-filters">
        <div className="reframe-filters-header">
          <div className="reframe-filters-header-search">
            <div className="reframe-filters-header-search-input">
              <i className="search icon" />
              <div className="ui input">
                <input type="text" placeholder="Search" onChange={ this._handleType.bind(this) } ref="query" value={ query } />
              </div>
              { query.length > 0 && <i className="remove circle icon" onClick={ this._handleAbort.bind(this) } /> }
            </div>
          </div>
          <div className="reframe-filters-header-filter" onClick={ this._handleOpen.bind(this) }>
            <i className="icon options" />
          </div>
        </div>
        { Object.keys(results).length > 0 &&
          <div className="reframe-filter-tokens">
            { fields.map((field, fieldIndex) => {
              if(results[field.name]) {
                if(_.isArray(results[field.name])) {
                  return results[field.name].map((filter, index) => (
                    <span key={`filter_${fieldIndex}_${index}`} className="ui small basic button">
                      <span className="label" onClick={ this._handleOpen.bind(this) }>
                        { filter.value }
                      </span>
                      <i className="remove icon" onClick={ this._handleRemove.bind(this, field.name, index) } />
                    </span>
                  ))
                } else if(_.isObject(results[field.name])) {
                  return (
                    <span key={`filter_remove_${fieldIndex}`} className="ui small basic button">
                      <span className="label" onClick={ this._handleOpen.bind(this) }>
                        { results[field.name].value }
                      </span>
                      <i className="remove icon" onClick={ this._handleRemove.bind(this, field.name) } />
                    </span>
                  )
                }
              }
            }) }
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    this._handleLookup = _.throttle(this.props.onLookup, 500)
    this._loadFilters()
  }

  componentDidUpdate(prevProps) {
    const { q, results } = this.props
    if(!_.isEqual(prevProps.q, q) || !_.isEqual(results, prevProps.results)) {
      this._handleChange()
    }
  }

  componentWillUnmount() {
    this.props.onResetAll()
  }

  _loadFilters() {
    const { fields, filters, onLoad, onSet } = this.props
    if(fields && filters) {
      fields.map(field => {
        if(filters[field.name]) {
          if(field.endpoint) {
            onLoad(field.name, field.endpoint, field.value, field.text, filters[field.name])
          } else {
            onSet(field.name, filters[field.name])
          }
        }
      })
    }
  }

  _handleChange() {
    const { results, onChange, q } = this.props
    const filters = Object.keys(results).reduce((filters, key) => ({
      ...filters,
      [key]: this._getValue(key)
    }), { q })
    onChange(filters)
  }

  _getValue(key) {
    const { results, fields } = this.props
    const field = _.find(fields, { name: key })
    const value = results[key]
    if(field.type === 'daterange') return { $dr: value.key }
    if(_.isArray(value)) return { $in: value.map(item => item.key) }
    return { $eq: value.key }
  }

  _handleChoose(key) {
    this._handleOpen()
    this.props.onChoose(key)
  }

  _handleOpen() {
    this.context.tray.open(<Panel { ...this.props } />)
  }

  _handleRemove(key, index) {
    this.props.onRemove(key, index)
  }

  _handleType(event) {
    this.props.onType(event.target.value)
    this._handleLookup(event.target.value)
  }

  _handleAbort() {
    this.props.onAbort()
  }

}

export default Filter
