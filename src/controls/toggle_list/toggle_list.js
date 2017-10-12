// @flow

import type { Component, Node } from '../../types'
import type { Props } from './types'
import type { Props as FiltersProps } from '../../components/filters/types'
import type { Props as SearchboxProps } from '../../components/searchbox/types'
import type { Props as InfiniteProps } from '../../components/infinite/types'

import Searchbox from '../../components/searchbox'
import Infinite from '../../components/infinite'
import Filters from '../../components/filters'
import Format from '../../utils/format'
import React from 'react'
import _ from 'lodash'

class ToggleList extends React.Component<Props, void> {

  static defaultProps = {
    filters: [],
    onReady: () => {},
    onChange: (value) => {}
  }

  render(): Node {
    const { chosen, text } = this.props
    return (
      <div className="reframe-toggle-list">
        <div className="reframe-toggle-list-filter">
          <Filters { ...this._getFilters() } />
        </div>
        <div className="reframe-toggle-list-body">
          <div className="reframe-toggle-list-header">
            <div className="reframe-toggle-list-header-search">
              <Searchbox { ...this._getSearchbox() } />
            </div>
          </div>
          { chosen && chosen.length > 0 &&
            <div className="reframe-toggle-list-summary">
              { chosen.map((record, index) => (
                <div key={`summary_token_${index}`} className="reframe-toggle-list-summary-token" onClick={ this._handleToggleRecord.bind(this, record) }>
                  { _.get(record, text) }
                </div>
              )) }
            </div>
          }
          <Infinite { ...this._getInfinite() } />
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    const { defaultValue, endpoint, onLoad, onReady } = this.props
    if(onLoad && defaultValue && defaultValue.length > 0) onLoad(endpoint, { $ids: defaultValue })
    if(onReady) onReady()
  }

  componentDidUpdate(prevProps: Props): void {
    const { chosen, onChange } = this.props
    if(onChange && chosen && !_.isEqual(prevProps.chosen, chosen)) {
      const ids = chosen.map(record => record.id)
      onChange(ids)
    }
  }

  _getFilters(): FiltersProps {
    const { filters, filter, onSetFilter } = this.props
    return {
      filters,
      values: filter,
      onUpdate: onSetFilter
    }
  }

  _getSearchbox(): SearchboxProps {
    const { onSetQuery } = this.props
    return {
      onChange: onSetQuery
    }
  }

  _getInfinite(): InfiniteProps {
    const { endpoint, query } = this.props
    const filter = {
      ...this.props.filter,
      q: query
    }
    return {
      endpoint,
      filter,
      layout: this._getLayout(),
      footer: this._getFooter()
    }
  }

  _getLayout(): Component {
    const { format } = this.props
    return ({ records }) => (
      <div className="reframe-search-results">
        { records.map((record, index) => (
          <div key={`record_${index}`} className={ this._getRecordClass(record) } onClick={ this._handleToggleRecord.bind(this, record) }>
            <Format format={ format } { ...record } />
            <div className="reframe-search-item-icon">
              { this._getChecked(record) && <i className="icon green check" /> }
            </div>
          </div>
        )) }
      </div>
    )
  }

  _getFooter(): Component {
    return ({ all, total }) => <span>Now showing { total } / { all } results</span>
  }

  _getRecordClass(record: Object): string {
    const classes = ['reframe-search-item']
    if(this._getChecked(record)) classes.push('checked')
    return classes.join(' ')
  }

  _getChecked(record: Object): boolean {
    const { chosen } = this.props
    const value = this.props.value || 'id'
    return _.find(chosen, { [value]: _.get(record, value) })
  }

  _handleToggleRecord(record: any): void {
    const { onToggleRecord } = this.props
    if(onToggleRecord) onToggleRecord(record)
  }

}

export default ToggleList
