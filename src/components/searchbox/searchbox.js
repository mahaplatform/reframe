// @flow

import type { Node, Event } from '../../types'
import type { Props } from './types'

import React from 'react'
import _ from 'lodash'

class Searchbox extends React.Component<Props, void> {

  static defaultProps = {
    prompt: 'Search...',
    q: '',
    onAbort: () => {},
    onChange: (q) => {},
    onType: (q) => {}
  }

  _handleChange: any = null

  constructor(props: Props): void {
    super(props)
    this._handleChange = _.throttle(props.onChange, 500)
  }

  render(): Node {
    const { prompt, q } = this.props
    return (
      <div className="reframe-searchbox">
        <div className="reframe-searchbox-icon">
          <i className="search icon" />
        </div>
        <div className="reframe-searchbox-input">
          <div className="ui input">
            <input type="text" placeholder={ prompt } onChange={ this._handleType.bind(this) } value={ q } />
          </div>
        </div>
        { q && q.length > 0 &&
          <div className="reframe-searchbox-icon" onClick={ this._handleAbort.bind(this) }>
            <i className="remove circle icon" />
          </div>
        }
      </div>
    )
  }

  _handleType(e: Event): void {
    const { onType } = this.props
    if(onType) onType(e.target.value)
    this._handleChange(e.target.value)
  }

  _handleAbort(): void {
    const { onAbort, onChange } = this.props
    if(onAbort) onAbort()
    if(onChange) onChange('')
  }

}

export default Searchbox
