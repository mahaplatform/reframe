// @flow

import type { SearchProps as Props, DynamicProps, OptionsProps, InfiniteProps } from './types'
import type { Node } from '../../types'

import Searchbox from '../searchbox'
import Infinite from '../infinite'
import { digest } from 'json-hash'
import Dynamic from './dynamic'
import Options from './options'
import React from 'react'

class Search extends React.Component<Props, void> {

  render(): Node {
    if(!this.props.endpoint) return <Options { ...this._getOptions() }  />
    return (
      <div className="reframe-search">
        <div className="reframe-search-header">
          <Searchbox { ...this._getSearchbox() } />
        </div>
        <div className="reframe-search-body">
          <Infinite {...this._getInfinite()} />
        </div>
      </div>
    )
  }

  _getOptions(): OptionsProps {
    const { format, name, multiple, options, results, onUpdate } = this.props
    return { format, name, multiple, options, results, onUpdate }
  }

  _getSearchbox() {
    const { label, prompt, onQuery } = this.props
    return {
      prompt: prompt || `Find a ${label}`,
      onChange: onQuery
    }
  }

  _getInfinite(): InfiniteProps {
    const { endpoint, q, results, sort } = this.props
    const cacheKey = digest(results)
    return {
      cacheKey,
      endpoint,
      filter: { q },
      layout: (props: DynamicProps) => <Dynamic { ...this._getDynamic() } { ...props } />,
      sort
    }
  }

  _getDynamic() {
    return this.props
  }

}

export default Search
