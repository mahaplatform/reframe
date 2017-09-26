// @flow

import type { Component, Node } from '../../types'
import type { Props } from './types'
import type { Props as CollectionProps } from '../../components/collection/types'

import Collection from '../../components/collection'
import React from 'react'
import _ from 'lodash'

class ToggleList extends React.Component<Props, void> {

  static defaultProps = {
    filters: []
  }

  render(): Node {
    return (
      <div className="reframe-toggle-list">
        <Collection { ...this._getCollection() } />
      </div>
    )
  }

  componentDidMount(): void {
    const { defaultValue, onSet } = this.props
    if(defaultValue) onSet(defaultValue)
  }

  componentDidUpdate(prevProps: Props): void {
    const { chosen, onChange } = this.props
    if(prevProps.chosen.length !== chosen.length) onChange(chosen)
  }

  _getCollection(): CollectionProps {
    const { filters, sort, endpoint } = this.props
    return {
      endpoint,
      filters,
      layout: this._getLayout(),
      sort
    }
  }

  _getLayout(): Component {
    const { chosen, component } = this.props
    return ({ records }) => (
      <div className="reframe-search-results">
        { records.map((record, index) => (
          <div key={`record_${index}`} className="reframe-search-result" onClick={ this._handleToggle.bind(this, record.id) }>
            { _.isFunction(component) ? React.createElement(component, record) : component }
            <div className="reframe-search-result-toggle">
              { _.includes(chosen, record.id) &&
                <i className="icon green check" />
              }
            </div>
          </div>
        )) }
      </div>
    )
  }

  _handleToggle(id: number): void {
    this.props.onToggle(id)
  }

}

export default ToggleList
