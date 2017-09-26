// @flow

import type { Node } from '../../types'
import type { Props, ComponentState } from './types'

import React from 'react'
import PropTypes from 'prop-types'
import Scrollpane from '../scrollpane'
import _ from 'lodash'

class Tabs extends React.Component<Props, ComponentState> {

  static contextTypes = {
    stack: PropTypes.object
  }

  static defaultProps = {
    chosen: null,
    header: null,
    items: [],
    onChoose: (index) => {}
  }

  state = {
    visited: [],
    transitioning: false
  }

  render(): Node {
    const { chosen, header, items } = this.props
    return (
      <Scrollpane>
        { header &&
          <div className="reframe-tabs-header">
            { _.isFunction() ? React.createElement(header) : header }
          </div>
        }
        <div className="reframe-scrollpane-header">
          <div className="reframe-tabs">
            <div className="reframe-tabs-items">
              { items.map((item, index) => {
                const klass = ['reframe-tabs-item']
                if(index === chosen) klass.push('active')
                return (
                  <a key={`tab_${index}`} onClick={ this._handleChoose.bind(this, index) } className={klass.join(' ')}>
                    { item.label }
                  </a>
                )
              }) }
            </div>
          </div>
        </div>
        <div className="reframe-tab">
          { items.map((item, index) => {
            return (
              <div key={`tab_body_${index}`} className={`reframe-tab-wrapper ${this._getStatus(index)}`}>
                <div className="reframe-tab-body">
                  { _.isFunction() ? React.createElement(item.component) : item.component }
                </div>
              </div>
            )
          }) }
        </div>
      </Scrollpane>
    )
  }

  componentDidMount(): void {
    this.props.onChoose(0)
  }

  _handleChoose(index: number): void {
    const { onChoose } = this.props
    const visited = _.uniq([ ...this.state.visited, index ])
    const transitioning = true
    this.setState({ visited, transitioning })
    setTimeout(() => onChoose(index), 20)
    setTimeout(() => this.setState({ transitioning: false }), 520)
  }

  _getStatus(index: number): string {
    const { transitioning } = this.state
    const { chosen } = this.props
    const statuses = []
    if(transitioning) statuses.push('transitioning')
    if(index > chosen) statuses.push('right')
    if(index < chosen) statuses.push('left')
    if(index === chosen) statuses.push('active')
    return statuses.join(' ')
  }

}

export default Tabs
