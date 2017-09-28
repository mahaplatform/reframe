// @flow

import type { SearchProps as Props, DynamicProps, OptionsProps, InfiniteProps } from './types'
import type { Node } from '../../types'

import Searchbox from '../searchbox'
import Infinite from '../infinite'
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
    const { label, onQuery } = this.props
    return {
      prompt: `Find a ${label}`,
      onChange: onQuery
    }
  }

  _getInfinite(): InfiniteProps {
    const { endpoint, sort, q } = this.props
    return {
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
