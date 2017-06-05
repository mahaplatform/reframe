import React from 'react'
import PropTypes from 'prop-types'
import Scrollpane from '../scrollpane'
import _ from 'lodash'

export class Tabs extends React.Component {

  static contextTypes = {
    stack: PropTypes.object
  }

  static propTypes = {
    chosen: PropTypes.number,
    tabs: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {
      visted: [],
      transitioning: false
    }
  }

  render() {
    const { children, chosen, tabs } = this.props
    const { visited } = this.state
    return (
      <Scrollpane>
        { children }
        <div className="reframe-scrollpane-header">
          <div className="reframe-tabs">
            <div className="reframe-tabs-items">
              { tabs.map((tab, index) => {
                const klass = ['reframe-tabs-item']
                if(index === chosen) klass.push('active')
                return (
                  <a key={`tab_${index}`} onClick={ this._handleChoose.bind(this, index) } className={klass.join(' ')}>
                    { tab.label }
                  </a>
                )
              }) }
            </div>
          </div>
        </div>
        <div className="reframe-tab">
          { tabs.map((tab, index) => {
            return (
              <div key={`tab_body_${index}`} className={`reframe-tab-wrapper ${this._getStatus(index)}`}>
                <div className="reframe-tab-body">
                  { _.isFunction() ? <tab.component /> : tab.component }
                </div>
              </div>
            )
          }) }
        </div>
      </Scrollpane>
    )
  }

  componentDidMount() {
    this.props.onChoose(0)
  }

  _handleChoose(index) {
    const { onChoose } = this.props
    const visited = _.uniq([...this.state.visted, index ])
    this.setState({ visited, transitioning: true })
    setTimeout(() => onChoose(index), 20)
    setTimeout(() => this.setState({ transitioning: false }), 520)
  }

  _getStatus(index) {
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
