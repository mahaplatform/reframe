import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Tabs extends React.Component {

  static contextTypes = {
    stack: PropTypes.object
  }

  static propTypes = {
    chosen: PropTypes.number,
    header: PropTypes.any,
    items: PropTypes.array,
    onChoose: PropTypes.func
  }

  static defaultProps = {
    chosen: null,
    header: null,
    items: [],
    onChoose: (index) => {}
  }

  _swipe: Object = {}

  state = {
    visited: [],
    transitioning: false
  }

  render() {
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
        <div className="reframe-tabs-body" { ...this._getTabsBody() }>
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

  componentDidMount() {
    this.props.onChoose(0)
  }

  _getItemClass(index) {
    const { chosen } = this.props
    const classes = ['reframe-tabs-item']
    if(index === chosen) classes.push('active')
    return classes.join(' ')
  }

  _getTabClass(index) {
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

  _getTabsBody() {
    return {
      className: 'reframe-tabs-body',
      onTouchStart: this._handleTouchStart.bind(this),
      onTouchMove: this._handleTouchMove.bind(this),
      onTouchEnd: this._handleTouchEnd.bind(this)
    }
  }

  _handleTouchStart(e) {
    this._swipe = { x: e.touches[0].clientX }
  }

  _handleTouchMove(e) {
    if (e.changedTouches && e.changedTouches.length) {
      this._swipe.swiping = true
    }
  }

  _handleTouchEnd(e) {
    const { chosen, items } = this.props
    const touch = e.changedTouches[0]
    const dist = touch.clientX - this._swipe.x
    if (this._swipe.swiping && Math.abs(dist) > 30 ) {
      if(dist < 0 && chosen < items.length - 1) this._handleChoose(chosen + 1)
      if(dist > 0 && chosen > 0) this._handleChoose(chosen - 1)
    }
    this._swipe = {}
  }

}

export default Tabs
