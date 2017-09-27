// @flow

import type { Node } from '../../types'
import type { Props, ComponentState } from './types'

import React from 'react'
import PropTypes from 'prop-types'
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
    const { header, items } = this.props
    return (
      <div className="reframe-tabs">
        <div className="reframe-tabs-header">
          { header &&
            <div className="reframe-tabs-header-content">
              { _.isFunction() ? React.createElement(header) : header }
            </div>
          }
          <div className="reframe-tabs-items">
            { items.map((item, index) => (
              <div key={`tab_${index}`} className={ this._getItemClass(index) } onClick={ this._handleChoose.bind(this, index) }>
                { item.label }
              </div>
            )) }
          </div>
        </div>
        <div className="reframe-tabs-body">
          { items.map((item, index) => (
            <div key={`tab_body_${index}`} className={ this._getTabClass(index) }>
              <div className="reframe-tab-content">
                { _.isFunction() ? React.createElement(item.component) : item.component }
              </div>
            </div>
          )) }
        </div>
      </div>
    )
  }

  componentDidMount(): void {
    this.props.onChoose(0)
  }

  _getItemClass(index: number): string {
    const { chosen } = this.props
    const classes = ['reframe-tabs-item']
    if(index === chosen) classes.push('active')
    return classes.join(' ')
  }

  _getTabClass(index: number): string {
    const { transitioning } = this.state
    const { chosen } = this.props
    const classes = ['reframe-tab']
    if(transitioning) classes.push('transitioning')
    if(index > chosen) classes.push('right')
    if(index < chosen) classes.push('left')
    if(index === chosen) classes.push('active')
    return classes.join(' ')
  }

  _handleChoose(index: number): void {
    const { onChoose } = this.props
    const visited = _.uniq([ ...this.state.visited, index ])
    this.setState({ visited, transitioning: true })
    setTimeout(() => onChoose(index), 20)
    setTimeout(() => this.setState({ transitioning: false }), 520)
  }

}

export default Tabs
