import Searchbox from '../../components/searchbox'
import Infinite from '../../components/infinite'
import Filters from '../../components/filters'
import Token from '../../components/token'
import PropTypes from 'prop-types'
import Result from './results'
import React from 'react'
import _ from 'lodash'

class ToggleList extends React.Component{

  static propTypes = {
    chosen: PropTypes.any,
    defaultFilters: PropTypes.object,
    defaultValue: PropTypes.array,
    endpoint: PropTypes.string,
    exclude_ids: PropTypes.array,
    filtering: PropTypes.bool,
    filters: PropTypes.array,
    full: PropTypes.bool,
    format: PropTypes.any,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    query: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onLoad: PropTypes.func,
    onReady: PropTypes.func,
    onChange: PropTypes.func,
    onSetChosen: PropTypes.func,
    onSetFilter: PropTypes.func,
    onSetQuery: PropTypes.func,
    onToggleFilter: PropTypes.func,
    onToggleRecord: PropTypes.func
  }

  static defaultProps = {
    defaultFilters: [],
    exclude_ids: [],
    format: Token,
    full: false,
    multiple: false,
    value: 'value',
    text: 'text',
    onReady: () => {},
    onChange: (value) => {}
  }

  render() {
    const { chosen, endpoint, filters, multiple, options, text } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-toggle-list-overlay" onClick={ this._handleToggleFilter.bind(this) } />
        { filters &&
          <div className="reframe-toggle-list-filter">
            <Filters { ...this._getFilters() } />
          </div>
        }
        <div className="reframe-toggle-list-body">
          <div className="reframe-toggle-list-header">
            <Searchbox { ...this._getSearchbox() } />
          </div>
          { multiple && chosen &&
            <div className="reframe-toggle-list-summary">
              { chosen.map((record, index) => (
                <div key={`summary_token_${index}`} className="reframe-toggle-list-summary-token">
                  <div className="reframe-toggle-list-summary-token-label">
                    { _.get(record, text) }
                  </div>
                  <div className="reframe-toggle-list-summary-token-remove" onClick={ this._handleToggleRecord.bind(this, record) }>
                    <i className="fa fa-fw fa-times" />
                  </div>
                </div>
              )) }
            </div>
          }
          { endpoint && <Infinite { ...this._getInfinite() } /> }
          { options && <Result records={ options } { ...this._getResults() } /> }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue && defaultValue.length > 0) this._handleLoad()
    if(onReady) onReady()
  }

  componentDidUpdate(prevProps) {
    const { chosen, full, value, onChange } = this.props
    if(onChange && chosen && !_.isEqual(prevProps.chosen, chosen)) {
      const items = chosen.map(record => full ? record : _.get(record, value))
      onChange(items)
    }
  }

  _getClass() {
    const classes = ['reframe-toggle-list']
    if(this.props.filtering) classes.push('filtering')
    return classes.join(' ')
  }

  _getFilters() {
    const { filters, filter, onSetFilter } = this.props
    return {
      filters,
      values: filter,
      onUpdate: onSetFilter
    }
  }

  _getSearchbox() {
    const { filters, filtering, onSetQuery } = this.props
    return {
      icon: filters ? (filtering ? 'times' : 'sliders') : null,
      onIcon: this._handleToggleFilter.bind(this),
      onChange: onSetQuery
    }
  }

  _getInfinite() {
    const { defaultFilters, endpoint, exclude_ids, chosen, query } = this.props
    const filter = {
      ...defaultFilters,
      ...this.props.filter,
      q: query
    }
    return {
      endpoint,
      exclude_ids,
      filter,
      chosen,
      layout: (props) => <Result { ...this._getResults() } { ...props } />
    }
  }

  _getResults() {
    const { format, chosen, multiple, text, value } = this.props
    return {
      format,
      chosen,
      multiple,
      text,
      value,
      onToggleRecord: this._handleToggleRecord.bind(this)
    }
  }

  _handleLoad() {
    const { defaultValue, endpoint, options, value, onLoad, onSetChosen } = this.props
    if(endpoint) return onLoad(endpoint, { $ids: defaultValue })
    if(!options) return
    const chosen = options.filter(option => _.includes(defaultValue, _.get(option, value)))
    onSetChosen(chosen)
  }

  _handleToggleFilter() {
    const { onToggleFilter } = this.props
    if(onToggleFilter) onToggleFilter()
  }

  _handleToggleRecord(record) {
    const { multiple, onToggleRecord } = this.props
    if(onToggleRecord) onToggleRecord(multiple, record)
  }

}

export default ToggleList
